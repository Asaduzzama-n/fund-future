import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const CheckoutForm = ({ campaign, d_amount, anonymity, donationType, msg }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();

    const stripe = useStripe();
    const elements = useElements();
    const { user, refetch } = useContext(AuthContext);
    const { _id, title } = campaign;
    const [currLocation, setCurrLocation] = useState({});


    useEffect(() => {

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrLocation({ latitude, longitude })
            // console.log(currLocation);

        })

    }, [])


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://fund-future-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ d_amount }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [d_amount]);


    const handleCheckOut = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            // console.log('innnnnnnnnn')
            const auditInfo = {
                userEmail: user?.email,
                userName: user?.displayName,
                accessTime: new Date(),
                location: currLocation,
                amount: d_amount ,
                transactionId: paymentIntent?.id || 'none',
                campaignId: _id,
                // cardInfo: 
                status: 'failed'
    
            }
            console.log(auditInfo)
            fetch('https://fund-future-server.vercel.app/donationAuditTrail', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(auditInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            setCardError(confirmError.message);

            // return;
        }

        // console.log(paymentIntent);

        if (paymentIntent.status === "succeeded") {

            // store payment info in the database
            let donation = {}

            if (donationType === 'charity') {
                donation = {
                    donation_type: donationType,
                    charity_name: title,
                    donor_mail: user?.email,
                    donor_name: user?.displayName,
                    anonymity: anonymity,
                    amount: d_amount,
                    time: new Date(),
                    transactionId: paymentIntent.id,
                    method: 'Card',
                    charity_id: _id,
                }
            } else {
                donation = {
                    donation_type: 'campaign',
                    campaign_name: title,
                    donor_mail: user?.email,
                    donor_name: user?.displayName,
                    anonymity: anonymity,
                    amount: d_amount,
                    time: new Date(),
                    transactionId: paymentIntent.id,
                    method: 'Card',
                    campaign_id: _id,

                }
            }
            fetch('https://fund-future-server.vercel.app/checkout', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(donation)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.insertedId) {
                        toast.success(`Congratulations! you have donated ${d_amount} to ${title}`);
                        setTransactionId(paymentIntent.id);
                        setSuccess(`Congratulations your payment has been successful`);
                        refetch();
                        //Send email---->

                    }
                })

                //audit part

                const auditInfo = {
                    userEmail: user?.email,
                    userName: user?.displayName,
                    accessTime: new Date(),
                    location: currLocation,
                    amount: d_amount,
                    transactionId: paymentIntent.id,
                    campaignId: _id,
                    // cardInfo: 
                    status: 'success'
        
                }
        
                fetch('https://fund-future-server.vercel.app/donationAuditTrail', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(auditInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })



        }
        setProcessing(false);
    }


    const handleMessage = (data) => {
        
        const message = {

            email: user?.email,
            messageBy: user?.displayName,
            amount: d_amount,
            time: new Date(),
            message:data.message,
            campaign_id: _id,

        }

        fetch('https://fund-future-server.vercel.app/message', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(message)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.insertedId) {
                        toast.success(`Thank you!`);
                        const filter = [...msg,data.message];
                    }
                })

    }



return (
    <>
        <form onSubmit={handleCheckOut}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='btn btn-sm mt-4 btn-primary'
                type="submit"
                disabled={!stripe || !clientSecret || processing || success}>
                Pay
            </button>
        </form>
        <p className="text-error">{cardError}</p>
        {
            success && <div className='my-5'>
                <p className='text-primary'>{success}</p>
                <p>TRX: <span className='font-bold'>{transactionId}</span></p>


                <div className='my-5'>
                    <form onSubmit={handleSubmit(handleMessage)} className=" w-full">

                        <textarea type="text"
                            {...register("message", {
                            })}

                            placeholder='Show your support through few words!'
                            className="input bg-neutral w-full h-24 rounded-md my-2" />
                        <br />

                        <button className='btn bg-neutral border-none hover:bg-primary font-semibold text-accent' type='submit'>Submit</button>

                    </form>
                </div>

            </div>

        }

    </>
);
};

export default CheckoutForm;