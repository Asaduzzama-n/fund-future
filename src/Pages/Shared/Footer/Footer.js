import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/cover.png'

const Footer = () => {
    return (
        <div className='text-white'>
            <footer className="footer h-auto lg:h-96  text-md font-bold text-black grid justify-between p-10">
                <div className='w-80'>
                    <img src={logo} alt="" />
                    <div className='mx-10'>
                    <p>ONE STEP CLOSER TO MAKING <br /> SOMEONE'S DREAM FULFILLED.</p>
                    </div>
                </div>
                <div className='mt-10'>
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
            
        </div>
    );
};

export default Footer;