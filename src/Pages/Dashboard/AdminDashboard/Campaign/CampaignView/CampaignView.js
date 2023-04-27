import DOMPurify from 'dompurify';
import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import target from '../../../../../assets/gifIcon/target.gif'
import purse from '../../../../../assets/gifIcon/purse.gif'
import alms from '../../../../../assets/gifIcon/alms.gif'

const CampaignView = () => {
    const campaign = useLoaderData();
    const { description, campaigner_mail, campaigner_name, campaigner_phone, short_desc, image, start_date, end_date, t_amount, title, address, category, _id } = campaign;
    const sanitizer = DOMPurify.sanitize;


    const { getDonationProgress } = useContext(AuthContext);


    const progress = getDonationProgress(_id, t_amount);


    return (
        <div className='m-5'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mx-5'>
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <h1 className="text-2xl font-bold my-5">Target : {t_amount}</h1>
                        <div className='my-5'>
                            <h2 className='my-2 text-lg font-semibold'>Short Description: </h2>
                            <div dangerouslySetInnerHTML={{ __html: sanitizer(short_desc) }} />
                        </div>

                        <div tabIndex={0} className="collapse collapse-arrow border bg-transparent  rounded-box">
                            <div className="collapse-title text-md font-medium">
                                See Full Description
                            </div>
                            <div className="collapse-content">
                                <div className='my-2'>
                                    <div dangerouslySetInnerHTML={{ __html: sanitizer(description) }} />
                                </div>
                            </div>
                        </div>


                        <div className='mt-5 md:w-1/2'>
                            <div tabIndex={0} className="collapse collapse-arrow border bg-white  rounded-box">
                                <div className="collapse-title text-md font-medium">
                                    See Campaigner Details
                                </div>
                                <div className="collapse-content">
                                    <div className='flex items-center my-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#191825" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <p className='text-md font-semibold text-accent mx-2'> {campaigner_name}</p>
                                    </div>


                                    <div className='flex items-center my-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        <p className='text-md font-semibold text-accent mx-2'> {campaigner_mail}</p>
                                    </div>
                                    <div className='flex items-center my-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>

                                        <p className='text-md font-semibold text-accent mx-2'> {campaigner_phone}</p>
                                    </div>
                                </div>
                            </div>


                            <div className='my-5 '>
                                <div tabIndex={0} className="collapse collapse-arrow border bg-white  rounded-box">
                                    <div className="collapse-title text-md  font-medium">
                                        See Donation Details
                                    </div>
                                    <div className="collapse-content rounded-md  ">
                                        <div className='flex items-center my-3'>
                                            <img className='h-7 rounded-full bg-transparent' alt='' src={target}></img>
                                            <p className=' text-lg text-accent font-semibold mx-4'> {t_amount}</p>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <img className='h-7 rounded-full bg-transparent' alt='' src={purse}></img>
                                            <p className=' text-lg text-accent font-bold mx-4'> {progress?.totalDonation}</p>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <img className='h-7 rounded-full bg-transparent' alt='' src={alms}></img>
                                            <p className=' text-lg text-accent font-bold mx-4'> {progress?.donationCount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <button className="btn btn-primary my-10">Generate Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignView;