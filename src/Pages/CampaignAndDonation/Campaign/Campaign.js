import React from 'react';
import DOMPurify from 'dompurify';

const Campaign = ({campObjCopy}) => {
    const {title,image,description,campaigner_name,campaigner_email,campaigner_phone} = campObjCopy;
    const sanitizer = DOMPurify.sanitize;

    return (
        <div className='w-9/12 mx-auto  p-5 rounded-md'>
            <div >
                <div >
                    <img className='rounded-lg' src={image} alt="" />
                </div>
            </div>
            <div className='py-10'>
                <h1 className='text-3xl md:text-5xl font-semibold text-slate-700'>{title}</h1>
                <p className='text-green-500 my-5 font-semibold text-lg'>Description</p>
                <div className='border-2 border-slate-500 p-10 rounded-md'>

                 <div dangerouslySetInnerHTML={{__html: sanitizer(description)}} /> 

                </div>
            </div>
            <div>
                <h2 className='md:text-3xl lg:text-4xl font-bold text-green-500'>Organizer</h2>
                <div className='my-5'>
                    <p className='text-xl font-semibold text-slate-700 my-2'>Name: {campaigner_name}</p>
                    <p className='text-xl font-semibold text-slate-700 my-2'>Email: {campaigner_email}</p>
                    <p className='text-xl font-semibold text-slate-700 my-2'>Phone: {campaigner_phone}</p>
                </div>
                <button className='bg-green-500 px-8 py-3 rounded-full font-semibold text-slate-700 hover:bg-green-400 '>Contact</button>
            </div>
        </div>
    );
};

export default Campaign;