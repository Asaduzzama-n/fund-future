import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedCampaign from '../FeaturedCampaign/FeaturedCampaign';
import SuccessStory from '../SuccessStory/SuccessStory';
import './Home.css'
import { motion, useScroll, useSpring } from "framer-motion";
import Charity from '../Charity/Charity';
import HomeFooter from '../HomeFooter/HomeFooter';


const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <div >
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Banner></Banner>
            <FeaturedCampaign></FeaturedCampaign>
            <Charity></Charity>
            <SuccessStory></SuccessStory>
            <div className='divider my-10'></div>
            <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;   