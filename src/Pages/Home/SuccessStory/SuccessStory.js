import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CampaignCard from '../SharedComponent/CampaignCard';

const SuccessStory = () => {
    const [successStories, setSuccessStories] = useState([]);

    useEffect(() => {
        fetch('campaign1.json')
            .then(res => res.json())
            .then(data => {
                const successCampaign = data.filter(camp => camp.category === 'success');
                setSuccessStories(successCampaign);
            })
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
            <div className='text-center mt-10 lg:mt-16'>
                <Link className='text-xl bg-slate-600 px-10 font-semibold py-3 rounded-full text-white' to={'/campaigns'}>More story</Link>
            </div>
        </div>
    );
};

export default SuccessStory;