import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewStory = () => {
    const story = useLoaderData();
    console.log(story);
    //https://updates.kickstarter.com/kickstarter-project-update-4/?ref=section-homepage-newsitem-project-update-4-new-tools-for-building-your-audience-and-fulfilling-rewards
    return (
        <div>
            <h1>View Story</h1>
        </div>
    );
};

export default ViewStory;