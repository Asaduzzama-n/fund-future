import DOMPurify, { sanitize } from 'dompurify';
import React from 'react';
import { ImFacebook } from 'react-icons/im';
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    WhatsappIcon,
    WhatsappShareButton,

  } from "react-share";
const StoryDescription = ({story}) => {
    const sanitizer = DOMPurify.sanitize;

    const currentUrl = window.location.href;

    return (
        <div className='w-11/12 mx-auto md:w-3/5 md:mx-auto  my-10 text-center '>
            <div dangerouslySetInnerHTML={{__html: sanitizer(story.description)}} /> 
            <div className="divider my-5"></div> 

            <div className='my-5 text-start'>
                <h3 className='text-2xl font-medium text-accent mb-5'>SHARE THIS POST</h3>
                <FacebookShareButton className='mx-2'
                    url={currentUrl}
                >
                    
                    <FacebookIcon size={40} round></FacebookIcon>
                </FacebookShareButton>
                <WhatsappShareButton
                    url={currentUrl}
                >
                    
                    <WhatsappIcon className='mx-2' size={40} round></WhatsappIcon>
                </WhatsappShareButton>
                <TelegramShareButton
                    url={currentUrl}
                >
                    
                    <TelegramIcon className='mx-2' size={40} round></TelegramIcon>
                </TelegramShareButton>
            </div>
        </div>
    );
};

export default StoryDescription;