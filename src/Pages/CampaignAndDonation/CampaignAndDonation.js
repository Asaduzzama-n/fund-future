import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Campaign from './Campaign/Campaign';
import Donation from './Donation/Donation';

const CampaignAndDonation = () => {

    const campaign = useLoaderData();

    // const campObjCopy = {
    //     _id:_id,
    //     title: title,
    //     campaigner_name: campaigner_name,
    //     campaigner_email: campaigner_email,
    //     campaigner_phone: campaigner_phone,
    //     image: image,
    //     description: description,
    //     t_amount: t_amount
    // }

    return (
        <div className='bg-neutral'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-5xl py-10 font-bold text-slate-700'>Project By: {campaign.campaigner_name}</h1>
            </div>
            <div className='md:flex '>
                <div className='md:1/2 lg:w-9/12'>
                    <Campaign campaign={campaign}></Campaign>
                </div>
                <div className="divider  md:hidden "></div> 
                <div className='mb-20'>
                    <Donation campaign={campaign}></Donation>
                </div>
            </div>
        </div>
    );
};

export default CampaignAndDonation;