import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import DonatedPart from './DonatedPart';
import { useForm } from 'react-hook-form';
import Payment from '../../Shared/Payment/Payment';

const Donation = ({ campaign,setMsg,msg }) => {
    const { _id, t_amount } = campaign;
    const [d_amount, setD_amount] = useState(1);
    const [anonymity, setAnonymity] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { getDonationProgress } = useContext(AuthContext);
    const progress = getDonationProgress(_id, t_amount);
    const location = useLocation();
    const { user } = useContext(AuthContext);


    const handleDonation = (data) => {
        setD_amount(parseInt(data.donation_amount));
        setAnonymity(data.anonymity);
    }

    return (
        <div className='w-9/12 md:w-full mx-auto border-2 bg-white rounded-lg p-5 mt-5 sticky md:top-40 '>
            <div className='flex items-center justify-star my-5'>
                <p className='text-slate-700 text-xl  font-lg font-semibold'>Fund Raised: </p>
                <p className='text-2xl text-primary font-bold md:text-3xl'> ৳{progress.totalDonation}</p>
            </div>
            <div className='my-5 '>

                <div className='text-center'>
                <div className="radial-progress text-primary font-medium mt-4 " style={{ "--value": progress.donationProgress }}>{Math.round(progress.donationProgress)}%</div>
                </div>
                <div className='flex items-center justify-start my-5'>
                    <p className='text-slate-700 text-xl  font-lg font-semibold'>Goal: </p>
                    <h1 className='text-2xl text-primary font-bold md:text-3xl'>৳ {t_amount}</h1>
                </div>

                <div className='flex items-center'>
                    <p className='mt-5 text-2xl font-semibold text-slate-700'>Contributors: </p>
                    <p className='mt-5 text-2xl font-bold text-primary ml-3'>{progress.donationCount}</p>

                </div>
            </div>
            <div className='mt-10'>

                <form onSubmit={handleSubmit(handleDonation)} className=" w-full">

                    <input type="number"
                        {...register("donation_amount", {
                            required: "Please provide donation amount",
                            pattern: { value: /^[1-9]\d*$/, message: 'Amount > 0' }
                        })}
                        className="input bg-neutral w-full rounded-md my-2" />
                    {errors.donation_amount && <p className='text-error font-medium mt-2 ml-2'>{errors.donation_amount?.message}</p>}
                    <br />

                    <div className='flex items-center my-5 '>
                        <input  {...register("anonymity", {
                        })} type="checkbox" className="checkbox bg-neutral h-7 w-7" />
                        <span className="label-text text-lg text-slate-600 font-medium mx-5 ">Keep me anonymous</span>
                    </div>

                    <div className='w-full text-center my-2'>
                        {
                            user?.uid ? <button type='submit'> <label disabled={!d_amount} htmlFor="payment" className="btn bg-neutral border-none px-10 text-slate-700 font-bold mx-10 hover:text-white hover:bg-primary">Donate Now</label> </button> :

                                <Link to={'/login'} state={{ from: location }}><button type='submit'> <label htmlFor="payment" className="btn">Donate Now</label> </button></Link>
                        }
                    </div>

                </form>



            </div>

            <div className="divider"></div>


            <div className='my-5'>

                <div tabIndex={0} className="collapse collapse-arrow  bg-neutral shadow-sm rounded-box">
                    <div className="collapse-title text-md font-medium ">
                        Show Donations
                    </div>
                    <div className="collapse-content ">
                        {
                            progress.selectedDonation.map(donation => <DonatedPart key={donation._id} donation={donation}></DonatedPart>)
                        }
                    </div>
                </div>



            </div>

            <Payment d_amount={d_amount} anonymity={anonymity} campaign={campaign} donationType={'campaign'} setMsg={setMsg} msg={msg}></Payment>


        </div>
    );
};

export default Donation;