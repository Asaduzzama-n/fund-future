import React from 'react';
import homeFooterImg from '../../../assets/home/wepik-hand-drawn-yellow-kpop-instagram-post-20230423180012.png'
import { Link } from 'react-router-dom';
const HomeFooter = () => {
    return (
        <div className='my-10'>

            <div>
                <div className="hero  w-3/4  mx-auto  lg:h-[350px] rounded-md bg-neutral p-5">
                    <div className="hero-content flex-col md:flex-row">
                        <img src={homeFooterImg} className=" h-72 w-72 rounded-lg " alt='' />
                        <div className='mx-5'>
                            <h1 className="text-4xl font-semibold ">Ready to get started? Join thousands of others today.</h1>
                            <Link to={'/create-campaign'} ><button className="btn btn-primary font-bold text-white mt-4">Start a FundFuture</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeFooter;