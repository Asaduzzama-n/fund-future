import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/charity/loan-unscreen.gif'
const FundraiseForSection = () => {
    return (
        <div>
            <div className="divider mt-10 py-5"></div> 
            <div className='md:flex justify-center md:justify-start items-center'>
                <div className='text-center md:text-left'>
                    <p className='text-slate-400 font-semibold text-lg'>Make your impact</p>
                    <p className='text-black font-bold text-3xl'>Campaign <br /> for...</p>
                </div>
                <div className='mx-10 my-10 glass rounded-lg hover:opacity-80'>
                    <Link to={'#'}><img className='h-60' src={img} alt="" /></Link>
                </div>
                <div className='mx-10 glass rounded-lg hover:opacity-80'>
                    <Link to={'#'}><img className='h-60' src={img} alt="" /></Link>
                </div>
                <div className='mx-10 glass rounded-lg hover:opacity-80'>
                    <Link to={'#'}><img className='h-60' src={img} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default FundraiseForSection;