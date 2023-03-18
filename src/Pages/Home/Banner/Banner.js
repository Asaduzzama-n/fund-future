import React from 'react';
import './Banner';
import img from '../../../assets/home/home.jpg';
import img2 from '../../../assets/home/v911-a-01-b.jpg'
import { motion } from "framer-motion"


const Banner = () => {
    return (

        <div className=''>
            <div className='relative'>
                <img className='w-full' src={img2} alt="" />
                <motion.div drag
                    dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                    }} className='absolute text-center inset-14  md:inset-40 lg:inset-80'>
                    {/* <p className='text-3xl md:text-7xl font-bold'><span className='text-green-500'>Your</span> home <br /> for <span className='text-green-500'>help</span> !</p> */}
                    <p className='text-3xl md:text-5xl font-bold'><span className='text-green-500'>One step closer <br /></span>to making someone's <br /><span className='text-green-500'>dream fulfilled </span> ! </p>
                    <button className='mt-5 lg:mt-20 bg-green-500 px-10 py-4 rounded-full font-semibold'>START YOUR FUNDFUTURE </button>
                </motion.div>
            </div>
        </div>
        // <div className="hero min-h-screen w-full bg-no-repeat h-full" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/charity-doodle-vector-background-donation-concept_53876-143434.jpg?w=1380&t=st=1679157713~exp=1679158313~hmac=10b47829b091f4c2aa22217836655a28f1a8717012ca76d5b1d084c79c1ddad8")` }}>
        //     <div className=""></div>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl text-black font-bold">Your home <br /> for help</h1>
        //             <button className="btn btn-primary mt-10">Get Started</button>
        //         </div>
        //     </div>
        // </div>


    );
};

export default Banner;