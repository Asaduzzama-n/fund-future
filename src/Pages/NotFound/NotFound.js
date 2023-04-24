import React from 'react';
import img from '../../assets/404/undraw_page_not_found_re_e9o6.svg';
const NotFound = () => {
    return (
        <div className='w-9/12 mx-auto  my-10'>
            <img className='w-9/12 mx-auto' src={img} alt="" />
            <h1 className='font-bold text-center text-primary text-6xl'>NOT FOUND</h1>
        </div>
    );
};

export default NotFound;