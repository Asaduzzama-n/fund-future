import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Campaign from './Campaign/Campaign';
import Donation from './Donation/Donation';
import { useQuery } from '@tanstack/react-query';

const CampaignAndDonation = () => {

    const campaign = useLoaderData();
    const [msg,setMsg] = useState([]);
    const { data: messages = [], refetch } = useQuery({
        queryKey: ['messages'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/messages/${campaign._id}`)
            const data = await res.json();
            setMsg(data);
            return data;
        }
    })

    return (
        <div className='bg-white'>
            <div className='text-center'>
                <h1 className='text-3xl md:text-4xl py-16 font-bold text-slate-700'>Campaign By: {campaign.campaigner_name}</h1>
            </div>
            <div className='md:flex justify-around'>
                <div className='md:1/2 lg:w-9/12'>
                    <Campaign messages={messages}  campaign={campaign}></Campaign>
                </div>
                <div className="divider  md:hidden "></div> 
                <div className='mb-20'>
                    <Donation setMsg={setMsg} msg={msg} campaign={campaign}></Donation>
                </div>
            </div>
        </div>
    );
};

export default CampaignAndDonation;