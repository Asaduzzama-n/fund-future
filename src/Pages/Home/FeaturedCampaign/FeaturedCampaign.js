import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../../Context/ApiProvider';
import Loading from '../../Shared/Loading/Loading';
import CampaignCard from '../SharedComponent/CampaignCard';
import { useTranslation } from 'react-i18next';

const FeaturedCampaign = () => {
    // const [campaigns, setCampaigns] = useState([]);


    const {data: campaigns = [],isLoading } = useQuery({
        queryKey: ['campaigns'],
        queryFn: async () =>{
            const res = await fetch('https://fund-future-server.vercel.app/campaigns-featured');
            const data = await res.json();
            return data;
        }
    })

    const { t } = useTranslation();


    if(isLoading){
        return <Loading></Loading>
    }



    return (
        <div>
            <div className='text-center my-10'>
                <div className="divider"></div>
                <p className='text-3xl font-bold text-slate-600 py-10'>{t("featured_heading")}</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-20 w-4/5 mx-auto'>
                {
                    campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                }
            </div>
            <div className='text-center mt-10 lg:mt-16'>
                <Link className='text-xl font-semibold bg-slate-600 px-10 py-3 rounded-full text-white' to={'/campaigns'}>{t("featured_more")}</Link>
            </div>
        </div>
    );
};

export default FeaturedCampaign;