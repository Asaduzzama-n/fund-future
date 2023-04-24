import React from 'react';
import './Banner';
import img from '../../../assets/home/home.jpg';
import img2 from '../../../assets/home/v911-a-01-b.jpg'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Banner = () => {
    const { t } = useTranslation();
    return (

        <div className=''>
            <div className='relative'>
                <img className='w-full md:h-[750px]' src={img2} alt="" />
                <motion.div drag
                    dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                    }} className='absolute text-center inset-16  md:inset-x-1/3 md:inset-y-1/3 lg:inset-x-1/3 lg:inset-y-1/3'>
                    {/* <p className='text-3xl md:text-7xl font-bold'><span className='text-green-500'>Your</span> home <br /> for <span className='text-green-500'>help</span> !</p> */}
                    <motion.p initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2}} className='text-2xl md:text-4xl  text-accent font-bold'>
                            {t("banner_greeting")}
                        </motion.p>
                    <Link to={'/create-campaign'}><button className='mt-5 lg:mt-20 px-6 py-2 bg-primary lg:px-10 lg:py-4 rounded-full font-semibold'>{t("banner_button")}</button></Link>
                </motion.div>
            </div>
        </div>



    );
};

export default Banner;