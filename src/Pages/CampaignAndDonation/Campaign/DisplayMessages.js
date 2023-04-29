import React from 'react';
import heart from '../../../assets/gifIcon/heart.gif'
const DisplayMessages = ({msg}) => {
    const {messageBy,amount,time,message} = msg;


    return (
        <div className='md:w-1/2 p-2'>
            <div className='flex'>
                <div>
                    <img className='h-8 w-8rounded-full' src={heart} alt="" />
                </div>
                <div className='mx-2'>
                    <p className='text-lg font-semibold text-accent'>{messageBy}</p>
                    <p className='my-3 text-accent'>{message}</p>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default DisplayMessages;