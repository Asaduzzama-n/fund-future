import React from 'react';
import charityImg from '../../../../assets/charity/as_sunnah/7103265.jpg'

const CharityBanner = () => {
    return (
        <div className='w-full px-10 rounded-md'>
            <img className='rounded-md w-full h-[300px]' src={charityImg} alt="" />
        </div>
    );
};

export default CharityBanner;