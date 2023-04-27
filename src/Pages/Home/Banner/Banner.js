import React from 'react';
import './Banner';
import img from '../../../assets/home/home.jpg';
import img2 from '../../../assets/home/v911-a-01-b.jpg'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Banner = () => {
    const { t } = useTranslation();



    return (

        <motion.div
            initial={{y: '100vw'}}
            animate={{y: 0}}
            transition={{type:'spring',duration:'2',bounce:0}}
        className=''>
            <div className='relative'>
                <img className='w-full md:h-[700px]' src={img2} alt="" />
                <motion.div
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{type:'spring',duration:'3',bounce:0}}
                className='absolute text-center inset-16  md:inset-x-1/3 md:inset-y-1/3 lg:inset-x-1/3 lg:inset-y-1/3'>
                  
                    <p  className='text-2xl md:text-4xl  text-accent font-bold'>
                            {t("banner_greeting")}
                        </p>
                    <Link to={'/create-campaign'}><button className='mt-5 lg:mt-20 px-6 py-2 bg-primary lg:px-10 lg:py-4 rounded-full font-bold'>{t("banner_button")}</button></Link>
                </motion.div>
            </div>
        </motion.div>



    );
};

export default Banner;