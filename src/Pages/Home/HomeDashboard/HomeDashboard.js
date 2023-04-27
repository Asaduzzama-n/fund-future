import React from 'react';
import './HomeDashboard.css';
import { motion, useScroll } from "framer-motion";
const HomeDashboard = () => {

    const { scrollYProgress } = useScroll();
    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    };

    return (

        <div className='w-9/12 mx-auto mt-10'>
            <motion.div 
             initial={{x: '100vw'}}
             animate={{x: 0}}
             transition={{type:'spring',duration:'2',bounce:0}}
            className="stats stats-vertical w-full lg:stats-horizontal shadow bg-neutral">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current item">
                            <motion.path
                                variants={icon}
                                initial="hidden"
                                animate="visible"

                                transition={{
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></motion.path></motion.svg>
                    </div>
                    <div className="stat-title">projects funded</div>
                    <div className="stat-value text-primary">2003</div>
                    {/* <div className="stat-desc">From January 1st to February 1st</div> */}
                </div>

                <div className="stat">
                    <div className="stat-title">Total Donations</div>
                    <div className="stat-value text-black">$4,200</div>
                </div>

                <div className="stat">
                    <div className="stat-figure  text-secondary">
                        <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current">
                            <motion.path
                                variants={icon}
                                initial="hidden"
                                animate="visible"

                                transition={{
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }}
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></motion.path></motion.svg>
                    </div>
                    <div className="stat-title">Active Campaign</div>
                    <div className="stat-value text-accent">1,200</div>
                </div>

            </motion.div>
        </div>


    );
};

export default HomeDashboard;