import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CampaignCard from '../SharedComponent/CampaignCard';

const FeaturedCampaign = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch('campaign.json')
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [])

    return (
        <div>
            <div className='text-center my-10'>
                <div className="divider"></div>
                <p className='text-3xl font-bold text-slate-600 py-10'>FEATURED CAMPAIGNS</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-20 w-4/5 mx-auto'>
                {
                    campaigns.map(campaign => <CampaignCard key={campaign.service_id} campaign={campaign}></CampaignCard>)
                }
            </div>
            <div className='text-center mt-10 lg:mt-16'>
                <Link className='text-xl font-semibold bg-slate-600 px-10 py-3 rounded-full text-white' to={'/campaigns'}>More Campaign</Link>
            </div>
        </div>
    );
};

export default FeaturedCampaign;