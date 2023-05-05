import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SuccessStoryCard from './SuccessStoryCard';
import { useQuery } from '@tanstack/react-query';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';
import Loading from '../../Shared/Loading/Loading';

const SuccessStory = () => {


    const { data: stories = [], isLoading } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            
            const res = await fetch('https://fund-future-server.vercel.app/successStories', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            
            const data = await res.json();
            return data;
        }
    })

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };





    const { t } = useTranslation();

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='text-center my-10'>
                <div className="divider"></div>
                <p className='text-3xl font-bold text-slate-600 py-10'>{t("success_heading")}</p>
            </div>
            <div className='w-11/12  mx-auto lg:w-4/5 '>
                <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} swipeable={true} responsive={responsive}>
                    {
                        stories.map(story => <SuccessStoryCard key={story._id} story={story}></SuccessStoryCard>)
                    }
                </Carousel>

            </div>
        </div>
    );
};

export default SuccessStory;