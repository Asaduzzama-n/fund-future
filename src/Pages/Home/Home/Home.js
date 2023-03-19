import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedCampaign from '../FeaturedCampaign/FeaturedCampaign';
import { motion } from "framer-motion"
import SuccessStory from '../SuccessStory/SuccessStory';
import FundraiseForSection from '../FundraiseForSection/FundraiseForSection';


const Home = () => {
    return (
        <div className='min-h-screen'>

            <div>
                <Banner></Banner>
                <FeaturedCampaign></FeaturedCampaign>
                <FundraiseForSection></FundraiseForSection>
                <SuccessStory></SuccessStory>

            </div>
        </div>
    );
};

export default Home;   