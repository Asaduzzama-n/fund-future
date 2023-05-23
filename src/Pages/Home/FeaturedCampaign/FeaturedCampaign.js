import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../../Context/ApiProvider';
import Loading from '../../Shared/Loading/Loading';
import CampaignCard from '../SharedComponent/CampaignCard';
import { useTranslation } from 'react-i18next';
import Search from '../Search/Search';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const FeaturedCampaign = () => {

    const [filteredCampaigns, setFilteredCampaigns] = useState([]);

    const { user } = useContext(AuthContext);


    const { data: campaigns = [], isLoading } = useQuery({
        queryKey: ['campaigns'],
        queryFn: async () => {
            const res = await fetch('https://fund-future-server.vercel.app/campaigns-featured');
            const data = await res.json();
            setFilteredCampaigns(data);
            return data;
        }
    })

    const { data: bookmarks = [],refetch } = useQuery({
        queryKey: ['bookmarks'],
        queryFn: async () => {
            const res = await fetch('https://fund-future-server.vercel.app/bookmarks');
            const data = await res.json();
            return data;
        }
    })

    const { t } = useTranslation();


    const filterCampaigns = (e) => {
        const filterData = campaigns.filter(campaign => campaign.title.toLowerCase().includes(e));
        setFilteredCampaigns(filterData);
    }

    const handleBookmarkInsert = (id,title) => {

        const bookMarkedData = {
            campaignId: id,
            userEmail: user.email,
            title:title
        }
        fetch('https://fund-future-server.vercel.app/bookmarks',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookMarkedData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                toast.success("Bookmarked successfully");
                refetch();
            } else {
                toast.error("Something went wrong")
            }
        })
        .catch(err => console.error(err));
    }

    //------------------------------------

    const handleBookmarkDelete = (id) => {

        const bookMarkedData = {
            campaignId: id,
            userEmail: user.email
        }

        fetch(`https://fund-future-server.vercel.app/bookmarks`,{
            method: 'DELETE',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookMarkedData)

        })
        .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("UNMARKED SUCCESSFUL!!");
                    refetch();
                } else {
                    toast.error("FAIL TO UNMARKED!")
                }
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>

            <Search filterCampaigns={filterCampaigns}></Search>

            <div className='text-center my-10'>
                <div className="divider"></div>
                <p className='text-3xl font-bold text-slate-600 py-10'>{t("featured_heading")}</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-20 w-4/5 mx-auto'>
                {
                    filteredCampaigns?.map(campaign => <CampaignCard key={campaign._id} bookmarks={bookmarks} campaign={campaign} handleBookmarkInsert={handleBookmarkInsert} handleBookmarkDelete={handleBookmarkDelete}></CampaignCard>)
                }
            </div>
            <div className='text-center mt-10 lg:mt-16'>
                <Link className='text-xl font-semibold bg-slate-600 px-10 py-3 rounded-full text-white' to={'/campaigns'}>{t("featured_more")}</Link>
            </div>
        </div>
    );
};

export default FeaturedCampaign;