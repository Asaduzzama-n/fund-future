import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import CheckoutForm from './CheckoutForm';
import { AuthContext } from '../../../Context/AuthProvider';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = ({ d_amount, campaign,anonymity,donationType,setMsg,msg }) => {
    const {user} = useContext(AuthContext);
    const { title } = campaign;
    return (
        <>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="payment" className="modal-toggle" />
            <div className="modal bg-transparent modal-bottom sm:modal-middle">
                <div className="modal-box bg-glass relative">
                    <label htmlFor="payment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='text-lg font-semibold mt-4 text-slate-700'>You are donating <span className='text-xl font-bold text-primary'>{d_amount} </span>to {title}</p>
                    <div className='w-9/12 mx-auto border-2 h-12 p-2 my-2 rounded-md text-slate-700'>
                        {!anonymity && user?.displayName}
                    </div>
                    
                    <div className='w-9/12 mx-auto border-2 h-12 p-2 my-2 rounded-md text-slate-700'>  
                        {user?.email}
                    </div>
                    <div className='w-9/12 mx-auto my-5 '>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                campaign={campaign}
                                d_amount={d_amount}
                                anonymity={anonymity}
                                donationType={donationType}
                                setMsg={setMsg}
                                msg={msg}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;