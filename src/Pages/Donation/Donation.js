import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Checkout from './Checkout';
import SideBar from './SideBar';

const Donation = () => {
    const { title} = useLoaderData();
    const {user} = useContext(AuthContext);

    const campTitle = {title:title};

    return (
        <div className='md:flex mt-10'>
            <div className='w-5/6 md:w-4/5 mx-auto px-20'>
                <Checkout user={user}></Checkout>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className='w-1/5 mx-auto'>
                <SideBar campTitle={campTitle}></SideBar>
            </div>
        </div>
    );
};

export default Donation;