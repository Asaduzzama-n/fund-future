import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StoryHeader from './StoryHeader';
import StoryDescription from './StoryDescription';

const ViewStory = () => {
    const story = useLoaderData();
    console.log(story);
    
    return (
        <div>
            <StoryHeader story={story}></StoryHeader>
            <StoryDescription story={story}></StoryDescription>
        </div>
    );
};

export default ViewStory;