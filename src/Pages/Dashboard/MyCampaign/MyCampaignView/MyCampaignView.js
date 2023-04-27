import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EditPart from './EditPart/EditPart';
import ViewPart from './ViewPart/ViewPart';
import { useQuery } from '@tanstack/react-query';

const MyCampaignView = ({params}) => {
    const campaign = useLoaderData();
    const [view,setView] = useState(true);
    const {campaigner_mail,campaigner_name,campaigner_phone,image,start_date,end_date,t_amount,title,address,category,_id} = campaign;


    return (

            <div className=' md:mx-auto lg:mx-8 bg-neutral'>
                <div className=' mx-auto mt-4 rounded-md'>
                    <img className='p-5 rounded-md max-h-[600px] w-full' src={campaign.image} alt="" />
                </div>
                {
                    view ? <ViewPart campaign={campaign} setView={setView}></ViewPart> : <EditPart campaign={campaign} setView={setView}></EditPart>
                }
           
                
            </div>
    );
};

export default MyCampaignView;