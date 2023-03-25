import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Campaign from './Campaign/Campaign';
import Donation from './Donation/Donation';

const CampaignAndDonation = () => {

    const { _id,title, category, t_amount, campaigner_name, campaigner_email, campaigner_phone, image, description } = useLoaderData();

    const campObjCopy = {
        _id:_id,
        title: title,
        campaigner_name: campaigner_name,
        campaigner_email: campaigner_email,
        campaigner_phone: campaigner_phone,
        image: image,
        description: description,
        t_amount: t_amount
    }

    return (
        <div >
            <div className='text-center my-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-slate-700'>Project By: {campaigner_name}</h1>
            </div>
            <div className='md:flex '>
                <div className='md:1/2 lg:w-9/12'>
                    <Campaign campObjCopy={campObjCopy}></Campaign>
                </div>
                <div className="divider  md:hidden "></div> 
                <div className='mb-20'>
                    <Donation campObjCopy={campObjCopy}></Donation>
                </div>
            </div>
        </div>
    );
};

export default CampaignAndDonation;