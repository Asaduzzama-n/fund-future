import DOMPurify from 'dompurify';
import React from 'react';

const StoryHeader = ({story}) => {
    const sanitizer = DOMPurify.sanitize;

    return (
        <div className='md:h-[600px] bg-neutral md:flex items-center p-20'>
            <div className='w-full md:w-3/4 '>
                <h1 className='text-2xl md:text-5xl font-bold text-accent'>Project Update: {story.title}</h1>
                <div className='text-xl md:text-3xl font-medium text-accent my-10' dangerouslySetInnerHTML={{__html: sanitizer(story.short_desc)}}></div>
                <div className="divider my-5"></div> 
                <p className='text-lg text-accent'>by: {story.st_name}</p>
                <p className='text-md text-accent'>{new Date(story.create_date).toLocaleDateString()}</p>
            </div>
            <div className='w-full md:w-2/4 md:mx-5 my-4 md:my-0'>
                <img className='h-fit w-fit' src={story.image1} alt="" />
            </div>
        </div>
    );
};

export default StoryHeader;