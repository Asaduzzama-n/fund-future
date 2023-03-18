import React, { useEffect, useState } from 'react';
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
        </div>
    );
};

export default FeaturedCampaign;