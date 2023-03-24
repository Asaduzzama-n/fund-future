import React from 'react';
import { Link } from 'react-router-dom';

const Donation = ({campObjCopy}) => {
    const {_id,t_amount} = campObjCopy;
    return (
        <div className='p-5 w-9/12 mx-auto'>
            <div>
            <progress className="progress w-56" value="40" max="100"></progress>
                <p className='text-slate-700 font-lg font-semibold'>Fund Raised</p>
            </div>
            <div className='my-5'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-slate-700 font-bold'>{t_amount}</h1>
                <p className='mt-5 text-2xl font-semibold text-slate-700'>Goal</p>
            </div>
            <div className='mt-10'>
                <Link to={`/donation/${_id}`}><button className='px-8 py-4 md:px-10 md:py-5 bg-green-500 font-bold text-slate-700 rounded-md hover:bg-green-400'>DONATE NOW</button></Link>
            </div>
        </div>
    );
};

export default Donation;