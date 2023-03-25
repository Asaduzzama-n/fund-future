import React from 'react';

const SideBar = ({campTitle}) => {
    const { title } = campTitle;
    console.log(title);
    return (
        <div className='p-10 shadow-md rounded-md text-center'>
            <div>
                <h1 className='text-2xl font-medium text-green-500'>Your Donation</h1>
                <p className='my-10 text-lg font-medium text-slate-600'>{title}</p>
                <p className='my-10 text-lg font-medium text-slate-600'>Amount: 000</p>
                <p className='my-10 text-lg font-medium text-slate-600'>Method: Card</p>
                <div className='mt-10'>
               <button className='w-40 h-12 md:w-44 md:h-14 bg-green-500 font-bold text-slate-700 rounded-md hover:bg-green-400'>DONATE</button>
            </div>

            </div>
        </div>
    );
};

export default SideBar;