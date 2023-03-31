import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import DonatedPart from './DonatedPart';

const Donation = ({campObjCopy}) => {
    const {_id,t_amount} = campObjCopy;
   

    const {donations,getDonationProgress} = useContext(AuthContext);
    const progress = getDonationProgress(_id,t_amount);


    return (
        <div className='w-9/12 md:w-full mx-auto border-2 rounded-lg p-10 shadow-md mt-5'>
            <div>
            <progress className="progress w-56" value={progress.donationProgress} max="100"></progress>
                <p className='text-slate-700 text-xl mt-2 font-lg font-semibold'>Fund Raised</p>
                <p className='my-5 text-3xl text-green-500 font-semibold md:text-4xl'>৳ {progress.totalDonation}</p>
            </div>
            <div className='my-5'>
                <h1 className='text-3xl md:text-4xl lg:text-4xl text-slate-700 font-bold'>৳ {t_amount}</h1>
                <p className='mt-5 text-2xl font-semibold text-slate-700'>Goal</p>
                <div className='flex items-center'>
                <p className='mt-5 text-2xl font-semibold text-slate-700'>Contributors </p>
                <p className='mt-5 text-2xl font-bold text-green-500 ml-3'>{progress.donationCount}</p>
                </div>
            </div>
            <div className='mt-10'>
                <Link to={`/donation/${_id}`}><button className='w-40 h-12 md:w-44 md:h-14 bg-green-500 font-bold text-slate-700 rounded-md hover:bg-green-400'>DONATE NOW</button></Link>
            </div>
            
            <div className="divider"></div> 

            <div className='my-5'>
                {
                    progress.selectedDonation.map(donation => <DonatedPart key={donation._id} donation={donation}></DonatedPart> )
                }
                
            </div>

        </div>
    );
};

export default Donation;