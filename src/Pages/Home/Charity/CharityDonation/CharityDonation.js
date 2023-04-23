import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import Payment from '../../../Shared/Payment/Payment';
import Charity from '../Charity';


const CharityDonation = ({charity}) => {
    // const { _id, t_amount } = campaign;
    const [d_amount, setD_amount] = useState(1);
    const [anonymity, setAnonymity] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const { getDonationProgress } = useContext(AuthContext);
    // const progress = getDonationProgress(_id, t_amount);
    const location = useLocation();
    const { user } = useContext(AuthContext);

    const handleDonation = (data) => {
        setD_amount(parseInt(data.donation_amount));
        console.log(data.anonymity);
        setAnonymity(data.anonymity);
    }

    return (
        <div className='w-9/12 md:w-full mx-auto border-2 rounded-lg p-10 shadow-md mt-5'>

            <div className='mt-10'>
                <div>
                    <h1 className='text-3xl md:text-4xl text-primary font-bold my-10'>Donate Now</h1>
                </div>
                <form onSubmit={handleSubmit(handleDonation)} className=" w-full">

                    <input type="number"
                        {...register("donation_amount", {
                            required: "Please provide donation amount",
                            pattern: { value: /^[1-9]\d*$/, message: 'Amount > 0' }
                        })}
                        className="input input-bordered rounded-none my-2" />
                    {errors.donation_amount && <p className='text-red-400 font-medium mt-2 ml-2'>{errors.donation_amount?.message}</p>}
                    <br />

                  <div className='flex items-center my-5 '>
                  <input  {...register("anonymity", {
                    })} type="checkbox" className="checkbox h-7 w-7" />
                    <span className="label-text text-lg text-slate-600 font-medium mx-5 ">Keep me anonymous</span>
                  </div>

                    <div className='w-full text-center my-2'>
                        {
                            user?.uid ? <button type='submit'> <label disabled={!d_amount > 1} htmlFor="payment" className="btn">Donate Now</label> </button> :

                                <Link to={'/login'} state={{ from: location }}><button type='submit' > <label htmlFor="payment" className="btn">Donate Now</label> </button></Link>
                        }
                    </div>

                </form>



            </div>

            <div className="divider"></div>

            <div className='my-5'>
                {
                    // progress.selectedDonation.map(donation => <DonatedPart key={donation._id} donation={donation}></DonatedPart>)
                }

            </div>


            <Payment d_amount={d_amount} anonymity={anonymity} campaign={charity} donationType={'charity'}></Payment> 
            {/* sending charity as campaign to reuse the code... it will be changed later  */}

            
        </div>
    );
};

export default CharityDonation;