import React from 'react';
import DOMPurify from 'dompurify';
// import ContactModal from './ContactModal';
import profile from '../../../assets/gifIcon/profile.gif'
import mobile from '../../../assets/gifIcon/mobile-app.gif'
import email from '../../../assets/gifIcon/email.gif'
import { useQuery } from '@tanstack/react-query';
import DisplayMessages from './DisplayMessages';

const Campaign = ({ campaign,messages }) => {
    const { title, image, description, campaigner_name, campaigner_mail, campaigner_phone } = campaign;
    const sanitizer = DOMPurify.sanitize;






    return (
        <div className='w-full mx-auto   p-5 rounded-md'>
            <div >
                <div >
                    <img className='rounded-lg' src={image} alt="" />
                </div>
            </div>
            <div className='py-10'>
                <h1 className='text-3xl md:text-4xl font-semibold text-slate-700'>{title}</h1>
                <p className='text-primary mt-10 font-semibold text-lg'>Description</p>
                <div className="divider"></div>
                <div className=' p-5'>

                    <div dangerouslySetInnerHTML={{ __html: sanitizer(description) }} />

                </div>
                <div className="divider"></div>

            </div>
            <div>

                <div className='md:w-1/2'>
                    <div tabIndex={0} className="collapse collapse-arrow  bg-white shadow-sm rounded-box">
                        <div className="collapse-title text-lg text-accent  font-medium ">
                            Organizer Information
                        </div>
                        <div className="collapse-content ">
                            <div className='my-5'>
                                <div className='flex items-center'>
                                    <img className='h-9 w-9 rounded-full' src={profile} alt="" />
                                    <p className='ml-5 text-lg font-semibold text-accent my-2'>{campaigner_name}</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className='h-9 w-9 rounded-full' src={email} alt="" />
                                    <p className='ml-5 text-lg font-semibold text-accent my-2'>{campaigner_mail}</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className='h-9 w-9 rounded-full' src={mobile} alt="" />
                                    <p className='ml-5 text-lg font-semibold text-accent my-2'>{campaigner_phone}</p>
                                </div>
                                <label htmlFor="contact-modal" className="btn bg-neutral border-none mt-5 px-10 text-slate-700 font-bold mx-10 hover:bg-primary">Contact</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='my-10 ml-5'>
                <h1 className='text-xl text-accent font-bold'>Words of support ({messages.length})</h1>
                <p className='my-1'>Please donates to share words of support.</p>
                <div>
                    {
                        messages.map(msg => <DisplayMessages key={msg._id} msg={msg}></DisplayMessages> )
                    }
                </div>
            </div>

            {/* <ContactModal campaigner_mail={campaigner_mail}></ContactModal> */}

        </div>
    );
};

export default Campaign;