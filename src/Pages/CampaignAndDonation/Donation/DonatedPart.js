import React from 'react';
import kindness from '../../../assets/gifIcon/kindness.gif'

const DonatedPart = ({ donation }) => {
    const { donor_name, anonymity, amount } = donation;
    return (
        <div className='flex items-center'>
            
            <img className='h-9 w-9 rounded-full' src={kindness} alt="" />

            <div className='ml-4 my-2 text-lg text-slate-600 font-medium '>
                {
                    anonymity ? <p>Anonymous</p> : <p>{donor_name}</p>
                }
                <p>৳ {amount}</p>
            </div>
        </div>
    );
};

export default DonatedPart;