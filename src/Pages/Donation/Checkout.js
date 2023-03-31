import React from 'react';
import visa from '../../assets/card/visa.png';
import bkash from '../../assets/card/bkash.png';
const Checkout = ({ campaign_title, user }) => {

    const { displayName, email, phoneNumber } = user;

    return (
        <div className='min-h-screen'>
            <div className='my-10'>
                <h1 className='text-4xl text-slate-700'>Checkout</h1>
                <div className='my-10'>
                    <p className='text-xl font-medium text-slate-700'>Contact Information:</p>


                    <form className="w-full">

                        <div className='md:flex justify-around'>
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

                        <div className='mt-10 md:flex justify-between mx-auto'>
                            <div className='w-full md:w-1/2'>
                                <p className='text-xl font-medium text-slate-700'>Payment Method</p>
                                <div className='md:flex justify-between items-center my-10'>
                                    <div className='flex items-center  md:my-5 '>
                                        <input type="radio" name="radio-5" value='card' className="radio" checked />
                                        <img className='w-44 mx-10' src={visa} alt="" />
                                    </div>
                                    <div className='flex items-center my-10 md:my-5 '>
                                        <input type="radio" name="radio-5" className="radio" />
                                        <img className='w-44 mx-10' src={bkash} value='bkash' alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full md:w-2/5 mx-auto flex items-center '>
                                <span className="label-text text-lg text-slate-600 font-medium mr-10">Keep me anonymous</span>
                                <input  type="checkbox"  className="checkbox h-7 w-7" />
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Checkout;