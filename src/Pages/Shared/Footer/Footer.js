import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/gifIcon/volunteering.gif'

const Footer = () => {
    return (
        <div className='text-white mt-20'>
            <footer className="footer   lg:h-[200px]  text-md font-bold text-accent grid justify-between bg-white px-10">
                <div className='w-80 mx-auto'>
                    <div className='mx-10 '>
                        <Link to={'/'} className=" normal-case text-xl "><img className='w-28 mx-auto' src={logo} alt="" /></Link>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'> <span className='text-accent'>Fund</span>Future</h1>
                        <p className=''>ONE STEP CLOSER TO MAKING <br /> SOMEONE'S DREAM FULFILLED.</p>
                    </div>
                </div>
                <div className='mt-10  '>
                    <span className="footer-title">Fundraise for</span>
                    <Link className="link link-hover" to={'#'}>Medical</Link>
                    <Link className="link link-hover" to={'#'}>Emergency</Link>
                    <Link className="link link-hover" to={'#'}>Education</Link>
                    <Link className="link link-hover" to={'#'}>Non Profit</Link>
                </div>
                <div className='mt-10'>
                    <span className="footer-title">Learn more</span>
                    <Link className="link link-hover" to={'#'}>About us</Link>
                    <Link className="link link-hover" to={'#'}>Contact</Link>
                    <Link className="link link-hover" to={'#'}>Why FundFuture</Link>
                    <Link className="link link-hover" to={'#'}>Success Stories</Link>
                </div>
                <div className='mt-10'>
                    <span className="footer-title">Resources</span>
                    <Link className="link link-hover" to={'#'}>Terms of use</Link>
                    <Link className="link link-hover" to={'#'}>Privacy policy</Link>
                    <Link className="link link-hover" to={'#'}>Cookie policy</Link>
                </div>
                
            </footer>
                <div className='divider'></div>
                <div><p className='text-black text-center mb-10 font-medium'>© 2023 Asaduzzaman All Rights Reserved</p></div>
        </div>
    );
};

export default Footer;