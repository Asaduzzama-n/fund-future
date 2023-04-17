import React from 'react';
import { motion, useScroll } from "framer-motion"
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const SuccessStoryCard = ({ story }) => {
    const { _id, title, short_desc, image1, create_date, description, st_mail, st_name } = story;
    const sanitizer = DOMPurify.sanitize;
    return (
        <div className="card rounded-lg w-80 lg:w-96 md:h-[500px]  bg-base-100 shadow-lg relative">
            <div className='relative'>
            <Link to={`/successStory/${_id}`}><figure><img className='h-60 w-full hover:opacity-60 rounded-t-lg' src={image1} alt="Shoes" /></figure></Link>
            </div>
            <div className="card-body px-4 py-2 my-0">
                <h2 className="card-title">{title}</h2>
                <div className='text-sm my-3' dangerouslySetInnerHTML={{ __html: sanitizer(short_desc) }}></div>
                <div className="card-actions justify-between pt-4">
                    <p className='text-slate-500 font-semibold md:absolute bottom-5'>Story By: {st_name}</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoryCard;