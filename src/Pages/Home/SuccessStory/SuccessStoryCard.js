import React from 'react';
import { motion, useScroll } from "framer-motion"
import { Link } from 'react-router-dom';

const SuccessStoryCard = ({successStory}) => {
    const {_id, title,short_desc,image, t_amount, description,campigner_email,campaigner_name } = successStory;
    return (
        <motion.div  drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }} className="card rounded-lg w-96 bg-base-100 shadow-lg">
            <Link to={`/success-story/${_id}`}><figure><img className='h-60 w-full hover:opacity-60' src={image} alt="Shoes" /></figure></Link>
            <div className='mb-2 px-4 py-2 '>
                <progress className="progress progress-success w-full " value="100" max="100"></progress>
                <div className='flex justify-between '>
                    <p className='text-slate-500 font-semibold'>Raised: {t_amount}</p>
                    <p className='text-slate-500 font-semibold'>Goal: {t_amount}</p>
                </div>
            </div>
            <div className="card-body px-4 py-0 my-0">
                <h2 className="card-title">{title}</h2>
                <p>{short_desc.slice(0, 100)}</p>
                {/* <div className="divider my-0"></div>  */}
                <div className="card-actions justify-between py-4">
                    <p className='text-slate-500 font-semibold'>Organized By: {campaigner_name}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default SuccessStoryCard;