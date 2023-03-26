import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const OngoingCampaignCard = ({ camp }) => {
    const {_id, title,image,short_desc, description,type,campaigner_name,t_amount } = camp;

    const [donations,setDonations] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/donation/${_id}`)
        .then(res => res.json())
        .then(data => setDonations(data))
    },[_id])


    let totalDonation = 0;
    donations?.map(don =>totalDonation = don.amount+totalDonation)

    
   const progressAmount = totalDonation;
   let progressPercent = 0;
   
   if(progressAmount>parseFloat(t_amount)){
        progressPercent = 100;
   }else{
    progressPercent = (progressAmount/parseFloat(t_amount)) * 100;
   }
    


    return (
        <div>
            <div drag
                className="card rounded-lg w-96 bg-base-100 shadow-lg">
                <Link to={`/campaign/${_id}`}><figure><img className='h-60 w-full hover:opacity-60' src={image} alt="" /></figure></Link>
                <div className='mb-2 px-4 py-2 '>
                    <p className='text-green-500 text-lg font-bold'>{type}</p>

                    <progress className="progress progress-success w-full " value={progressPercent} max="100"></progress>
                    <div className='flex justify-between '>
                        <p className='text-slate-500 font-semibold'>Raised: {totalDonation}</p>
                        <p className='text-slate-500 font-semibold'>Goal: {t_amount}</p>
                    </div>
                </div>
                <div className="card-body px-4 py-0 my-0">
                    <h2 className="card-title">{title}</h2>
                    <p>{short_desc?.slice(0, 100)}</p>
                    {/* <div className="divider my-0"></div>  */}
                    <div className="card-actions justify-between py-4">
                        <p className='text-slate-500 font-semibold'>Organized By: {campaigner_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OngoingCampaignCard;