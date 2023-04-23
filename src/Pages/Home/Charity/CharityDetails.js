import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CharityBanner from './CharityBanner/CharityBanner';
import CharityDonation from './CharityDonation/CharityDonation';


const CharityDetails = () => {

    const charity = useLoaderData();
    const { _id, charity_title, charity_img, charity_contact, charity_email, charity_desc,charity_campaigns } = charity;

    console.log(charity_campaigns);

    return (
        <div>
            <CharityBanner></CharityBanner>
            <div className='md:flex justify-between px-10 my-10'>
                <div className='w-full md:w-2/3'>
                    <div className='md:flex'>
                        <img className='h-44 mx-5' src={charity_img} alt="" />
                        <div>
                            <h1 className=' text-3xl font-bold text-accent mb-5 md:text-4xl '>{charity_title}</h1>
                            <div className="divider"></div>
                            <p className='text-md font-medium text-slate-600 '>{charity_desc}</p>
                            <div className='divider my-10'></div>
                            <h2 className='text-2xl font-semibold text-accent my-5'>Campaigns</h2>
                            <ul className="steps steps-vertical">
                                <li className="step step-neutral font-medium">{charity_campaigns[0]}</li>
                                <li className="step step-neutral font-medium">{charity_campaigns[1]}</li>
                                <li className="step step-neutral font-medium">{charity_campaigns[2]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h2><CharityDonation charity={charity}></CharityDonation></h2>
                </div>
            </div>
        </div>
    );
};

export default CharityDetails;