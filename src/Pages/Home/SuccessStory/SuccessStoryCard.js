import React from 'react';
import { motion, useScroll } from "framer-motion"
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const SuccessStoryCard = ({ story }) => {
    const { _id, title, short_desc, image1, create_date, description, st_mail, st_name } = story;
    const sanitizer = DOMPurify.sanitize;
    return (
        <div drag
            className="card rounded-lg w-80 lg:w-96  bg-base-100 shadow-lg">
            <Link to={''}><figure><img className='h-60 w-full hover:opacity-60' src={image1} alt="Shoes" /></figure></Link>
            <div className="card-body px-4 py-2 my-0">
                <h2 className="card-title">{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: sanitizer(short_desc) }}></div>
                <div className='pt-3'>
                    <Link className='bg-slate-200 rounded-md py-2 px-2 text-slate-700 font-medium' to={`/successStory/${_id}`}>View Story</Link>
                </div>
                <div className="card-actions justify-between pt-4">
                    <p className='text-slate-500 font-semibold'>Story By: {st_name}</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoryCard;