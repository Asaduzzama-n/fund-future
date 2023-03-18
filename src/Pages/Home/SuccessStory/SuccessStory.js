import React, { useEffect, useState } from 'react';
import CampaignCard from '../SharedComponent/CampaignCard';

const SuccessStory = () => {
    const [successStories, setSuccessStories] = useState([]);

    useEffect(() => {
        fetch('success.json')
            .then(res => res.json())
            .then(data => setSuccessStories(data))
    }, [])
    return (
        <div>
            <div className='text-center my-10'>
                <div className="divider"></div>
                <p className='text-3xl font-bold text-slate-600 py-10'>SUCCESS STORY</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-20 w-4/5 mx-auto'>
                {
                    successStories.map(campaign => <CampaignCard key={campaign.service_id} campaign={campaign}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default SuccessStory;