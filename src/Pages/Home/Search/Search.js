import React from 'react';
import jobseeking from '../../../assets/gifIcon/job-seeking.gif';
const Search = ({filterCampaigns}) => {

    return (
        <div className='mt-5'>
            <div class="flex items-center justify-center">
                <div class="relative w-1/2">
                    <input
                        type="text"
                        placeholder="Search"
                        class="w-full py-2 pl-10 pr-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                        oninput="toggleSearchIcon(this)"
                        onChange={(e)=> filterCampaigns(e.target.value.toLowerCase())}
                    />
                    <div id="search-icon" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <img src={jobseeking} className='w-10 rounded-full' alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;