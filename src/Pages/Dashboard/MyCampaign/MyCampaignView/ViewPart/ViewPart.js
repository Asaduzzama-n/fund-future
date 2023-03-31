import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../../Context/AuthProvider';
import DonatedPart from '../../../../CampaignAndDonation/Donation/DonatedPart';
import ReportModal from './ReportModal';

const ViewPart = ({ campaign, setView }) => {

    const { description, campaigner_mail, campaigner_name, campaigner_phone, image, start_date, end_date, t_amount, title, address, category, _id } = campaign;
    const { getDonationProgress } = useContext(AuthContext);


    const progress = getDonationProgress(_id, t_amount);
    const sanitizer = DOMPurify.sanitize;



    return (
        <div className='min-h-screen mb-36 '>
            <div className='w-9/12 mx-auto'>
                <progress className="progress progress-success w-full mt-4" value={progress.donationProgress} max="100"></progress>
                <div className='md:flex justify-around items-centers my-4'>
                    <div>
                        <p className='text-slate-700 text-xl mt-2 font-lg font-semibold'>Fund Raised</p>
                        <p className=' text-3xl text-green-500 font-semibold md:text-4xl'>৳ {progress.totalDonation}</p>
                    </div>
                    <div className='flex my-5 lg:my-0 items-center'>
                        <p className=' text-2xl font-semibold text-slate-700'>Contributors : </p>
                        <p className='text-2xl font-bold text-green-500 ml-3'>{progress.donationCount}</p>
                    </div>
                    <div>
                        <p className='text-slate-700 text-xl mt-2 font-lg font-semibold'>Goal</p>
                        <p className=' text-3xl text-green-500 font-semibold md:text-4xl'>৳ {t_amount}</p>
                    </div>
                </div>

                <div className="divider md:hidden py-6"></div>

                <div className='py-10'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-slate-700'>{title}</h1>
                    <p className='text-green-500 my-5 font-semibold text-lg'>Description</p>
                    <div className='md:flex justify-around w-full'>
                        <div className='border-2 border-slate-500 p-5 w-full md:w-8/12 rounded-md my-5'>

                            <div dangerouslySetInnerHTML={{ __html: sanitizer(description) }} />

                        </div>

                        <div className='border-2 w-full p-5 rounded-md md:w-4/12 md:mx-10 md:p-5  my-5 '>

                            {
                                progress.selectedDonation?.map(donation => <DonatedPart key={donation._id} donation={donation}></DonatedPart>)
                            }


                        </div>
                    </div>
                </div>


                <div className='w-ful '>
                    <button className='bg-green-500 btn px-10 text-slate-700 font-medium border-none rounded-full hover:bg-green-300 ' onClick={() => setView(false)}>Edit</button>
                    <label htmlFor="report-modal" className="btn bg-green-500 border-none text-slate-700 font-medium mx-10 hover:bg-green-300">Generate Report</label>
                </div>


                <div className='mx-auto'>
                    <ReportModal campaign={campaign}></ReportModal>
                </div>
            </div>

        </div>
    );
};

export default ViewPart;