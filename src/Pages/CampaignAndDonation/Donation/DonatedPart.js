import React from 'react';


const DonatedPart = ({ donation }) => {
    const { donor_name, anonymity, amount } = donation;
    return (
        <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <div className='ml-4 my-2 text-lg text-slate-600 font-medium'>
                {
                    anonymity ? <p>Anonymous</p> : <p>{donor_name}</p>
                }
                <p>৳ {amount}</p>
            </div>
        </div>
    );
};

export default DonatedPart;