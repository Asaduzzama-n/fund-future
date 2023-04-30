import React from 'react';
import { Link } from 'react-router-dom';

const CharityCard = ({ charity }) => {

    const { _id, charity_img,  } = charity;

    return (
        <div className='p-5 '>
            <Link to={`/charity/${_id}`}><img className='hover:opacity-80 rounded-md bg-white w-96 h-44 p-5' src={charity_img} alt="#" />
            </Link>
            {/* <p className='absolute inset-x-1/2 inset-y-1/2 text-lg font-bold text-accent'>Donate</p> */}
        </div>
    );
};

export default CharityCard;