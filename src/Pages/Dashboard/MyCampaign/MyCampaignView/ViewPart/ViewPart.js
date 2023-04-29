import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../../Context/AuthProvider';
import DonatedPart from '../../../../CampaignAndDonation/Donation/DonatedPart';
import ReportModal from '../../../../Shared/ReportGenerate/ReportModal';

const ViewPart = ({ campaign, setView }) => {

    const { description, status, campaigner_name, campaigner_phone, image, start_date, end_date, t_amount, title, address, category, _id } = campaign;
    const { getDonationProgress } = useContext(AuthContext);


    const progress = getDonationProgress(_id, t_amount);
    const sanitizer = DOMPurify.sanitize;



    return (
        <div className='p-10 min-h-screen mb-36 bg-neutral'>
            <div className='w-9/12 mx-auto '>
                {/* <progress className="progress progress-success w-full mt-4" value={progress.donationProgress} max="100"></progress> */}
                
                <div className='md:flex justify-around items-centers my-4 rounded-md  bg-accent p-5'>
                    <div className="radial-progress bg-primary text-xl text-white font-bold" style={{ "--value": progress.donationProgress }}>{Math.round(progress.donationProgress)}%</div>

                    <div>
                        <p className='text-white text-xl mt-2 font-lg font-semibold'>Fund Raised</p>
                        <p className=' text-3xl text-primary font-semibold md:text-4xl'>৳ {progress.totalDonation}</p>
                    </div>
                    <div className='flex my-5 lg:my-0 items-center'>
                        <p className=' text-2xl font-semibold text-white'>Contributors : </p>
                        <p className='text-2xl font-bold text-primary ml-3'>{progress.donationCount}</p>
                    </div>
                    <div>
                        <p className='text-white text-xl mt-2 font-lg font-semibold'>Goal</p>
                        <p className=' text-3xl text-primary font-semibold md:text-4xl'>৳ {t_amount}</p>
                    </div>

                </div>

                <div className="divider md:hidden py-6"></div>

                <div className='py-10'>
                    <h1 className='text-2xl  md:text-5xl font-semibold text-slate-700'>{title}</h1>
                    <div className='w-full'>
                        <div tabIndex={0} className="collapse my-10 collapse-arrow border border-white bg-white rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                View Description
                            </div>
                            <div className="collapse-content">
                                <div dangerouslySetInnerHTML={{ __html: sanitizer(description) }} />
                            </div>
                        </div>


                        <div tabIndex={0} className="collapse my-5 collapse-arrow border border-white bg-white rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                View Donations
                            </div>
                            <div className="collapse-content">
                                <div className=''>

                                    {
                                        progress.selectedDonation?.map(donation => <DonatedPart key={donation._id} donation={donation}></DonatedPart>)
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full '>
                    <button className='bg-white btn px-10 text-slate-700 font-bold  border-none  hover:bg-primary ' disabled={status==='finished'} onClick={() => setView(false)}>Edit</button>
                    <label htmlFor="report-modal" className="btn bg-white border-none px-10 text-slate-700 font-bold mx-10 hover:bg-primary">Generate Report</label>
                </div>


                <div className='mx-auto'>
                    <ReportModal campaign={campaign}></ReportModal>
                </div>
            </div>

        </div>
    );
};

export default ViewPart;