import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import bookmark from '../../../assets/gifIcon/bookmark.gif';

const CampaignCard = ({ campaign, handleBookmarkInsert, handleBookmarkDelete, bookmarks }) => {

    const { _id, title, image, short_desc, t_amount, campaigner_name } = campaign;

    const { getDonationProgress } = useContext(AuthContext);

    const progress = getDonationProgress(_id, t_amount);
    const { user } = useContext(AuthContext);

    const getBookmarkInfo = bookmarks.find(bookmark => bookmark.campaignId === _id && bookmark?.userEmail === user?.email);
    console.log(getBookmarkInfo);


    return (

        <motion.div
            className="card rounded-lg h-[500px] w-80  relative shadow-lg">
            <Link to={`/campaign/${_id}`}><figure><img className='h-60 w-full hover:opacity-60' src={image} alt="Shoes" /></figure></Link>
            <div className='mb-2 px-4 py-2 '>
                <progress className="progress progress-primary w-full " value={progress.donationProgress} max="100"></progress>
                <div className='flex justify-between '>
                    <p className='text-slate-500 font-semibold'>Raised: {progress.totalDonation}</p>
                    <p className='text-slate-500 font-semibold'>Goal: {t_amount}</p>
                </div>
            </div>
            <div className="card-body px-4 py-0 my-0">
                <h2 className="card-title">{title}</h2>
                <p>{short_desc.slice(0, 100)}...</p>
                {/* <div className="divider my-0"></div>  */}
                <div className="card-actions justify-between py-4 absolute bottom-0">

                    <div className='flex justify-between'>
                        <p className='text-slate-500 font-semibold'>Organized By: {campaigner_name}</p>

                        {
                            getBookmarkInfo ?
                                <button className='' onClick={() => handleBookmarkDelete(_id)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#33CCCD" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </button>

                                :
                                <button className='' onClick={() => handleBookmarkInsert(_id,title)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>

                                </button>
                        }
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default CampaignCard;