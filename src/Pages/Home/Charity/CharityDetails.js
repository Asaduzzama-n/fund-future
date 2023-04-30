import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CharityBanner from './CharityBanner/CharityBanner';
import CharityDonation from './CharityDonation/CharityDonation';
import mobile from '../../../assets/gifIcon/mobile-app.gif'
import email from '../../../assets/gifIcon/email.gif'

const CharityDetails = () => {

    const charity = useLoaderData();
    const { _id, charity_title, charity_img, charity_contact, charity_email, charity_desc, charity_campaigns } = charity;

    // console.log(charity_campaigns);

    return (
        <div className='bg-neutral py-10'>
            <CharityBanner></CharityBanner>
            <div className='md:flex justify-between px-10 my-10'>
                <div className='w-full md:w-2/3'>
                    <div className='md:flex'>
                        <img className='h-44 mx-auto md:mx-5 md:mt-7' src={charity_img} alt="" />
                        <div>
                            <h1 className=' text-3xl font-bold text-accent mb-5 md:text-4xl '>{charity_title}</h1>
                            <div className="divider"></div>
                            <p className='text-md font-medium text-slate-600 '>{charity_desc}</p>
                            <div className='divider my-10'></div>
                            <h2 className='text-2xl font-semibold text-accent my-5'>Campaigns</h2>
                            <ul className="steps steps-vertical">
                                <li className="step step-white font-medium">{charity_campaigns[0]}</li>
                                <li className="step step-white font-medium">{charity_campaigns[1]}</li>
                                <li className="step step-white font-medium">{charity_campaigns[2]}</li>
                            </ul>
                            <div>
                                <div className='w-full my-5'>
                                    <div tabIndex={0} className="collapse collapse-arrow  bg-neutral rounded-box">
                                        <div className="collapse-title text-lg text-accent  font-medium ">
                                            Organizer Information
                                        </div>
                                        <div className="collapse-content ">
                                            <div className='my-5'>
                                                <div className='flex items-center'>
                                                    <img className='h-9 w-9 rounded-full' src={email} alt="" />
                                                    <p className='ml-5 text-lg font-semibold text-accent my-2'>{charity_email}</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <img className='h-9 w-9 rounded-full' src={mobile} alt="" />
                                                    <p className='ml-5 text-lg font-semibold text-accent my-2'>{charity_contact}</p>
                                                </div>
                                                {/* <label htmlFor="contact-modal" className="btn bg-neutral border-none mt-5 px-10 text-slate-700 font-bold mx-10 hover:bg-primary">Contact</label> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2><CharityDonation charity={charity}></CharityDonation></h2>
                </div>
            </div>
        </div>
    );
};

export default CharityDetails;