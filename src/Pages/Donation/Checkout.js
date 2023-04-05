import React, { useState } from 'react';
import visa from '../../assets/card/visa.png';
import bkash from '../../assets/card/bkash.png';
import { useForm } from 'react-hook-form';

import Payment from '../Shared/Payment/Payment';

const Checkout = ({ campaign, user }) => {

    const { displayName, email, phoneNumber } = user;
    const { title } = campaign;
    const [d_amount, setD_amount] = useState(0);

    const handleSubmit = (data) => {

    }

    return (
        <div className='min-h-screen'>
            <div className='my-10'>
                <h1 className='text-4xl text-slate-700'>Checkout</h1>
                <div className='my-10'>
                    <p className='text-xl font-medium text-slate-700'>Contact Information:</p>




                    <form className="w-full">

                        <div className='md:flex justify-between'>
                            <div className="form-control md:w-2/5 my-4">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" defaultValue={displayName} readOnly name='title' className="text-lg font-medium  h-14 rounded-none input border-t-0 border-l-0 border-r-0 border-b-4 border-green-500 w-full" />
                            </div>



                            <div className='md:w-2/5'>
                                <div className="form-control  my-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" defaultValue={email} readOnly placeholder="Email" name='email' className="text-lg font-medium  h-14 rounded-none input border-t-0 border-l-0 border-r-0 border-b-4 border-green-500 w-full" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl font-medium text-slate-700 my-5'>Your Donation</h1>
                            <div className="overflow-x-auto ">
                                <table className="table w-full border-2 rounded-md">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th className='text-slate-700 font-bold text-lg w-3/4 '>Campaign name</th>
                                            <th className='text-slate-700 font-bold text-lg'>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>{title}</td>
                                            <td>{d_amount}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>Total</td>
                                            <td>{d_amount}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className='my-10 md:flex '>
                            <div className='w-1/2 mx-auto flex items-center '>
                                <span className="label-text text-lg text-slate-600 font-medium mr-10">Keep me anonymous</span>
                                <input type="checkbox" className="checkbox h-7 w-7" />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="payment" className="btn">Donate Now</label>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

            <Payment d_amount={d_amount} campaign={campaign}></Payment>
        </div>
    );
};

export default Checkout;