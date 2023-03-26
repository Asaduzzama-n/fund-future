import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedCampaign from '../FeaturedCampaign/FeaturedCampaign';

import SuccessStory from '../SuccessStory/SuccessStory';



const Home = () => {
    // const { scrollYProgress } = useScroll()
    // const scaleX = useSpring(scrollYProgress)

    return (
        <div className='min-h-screen progress-bar'>

            <div>
                <Banner></Banner>
                <FeaturedCampaign></FeaturedCampaign>

                <SuccessStory></SuccessStory>

            </div>
        </div>
    );
};

export default Home;   