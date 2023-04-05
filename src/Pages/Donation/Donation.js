import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Checkout from './Checkout';
import { useForm } from 'react-hook-form';


const Donation = () => {
    const campaign = useLoaderData();
    const {user} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();




    return (
        <div className='md:flex mt-10'>
            <div className='w-full mx-auto px-20'>
                <Checkout campaign={campaign} user={user}></Checkout>
            </div>
            <div className="divider divider-horizontal"></div>
        </div>
    );
};

export default Donation;