import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import OngoingCampaignCard from '../OngoingCampaignCard/OngoingCampaignCard';


const Campaigns = () => {

    const [onCampaign, setOnCampaign] = useState([]);
    const [type,setType] = useState('');
    // console.log((type === ''))
    useEffect(() => {
        fetch('campaign.json')
            .then(res => res.json())
            .then(data => {
                if(type === ''){
                    setOnCampaign(data);
                }else{
                    const targetData = data.filter(d => d.type === type);
                    setOnCampaign(targetData)
                }

            })
    }, [type])

    const handleBtnClick = (event) =>{
        setType(event)
    }

    return (
        <div className='min-h-screen'>

            <div>
                <div className='text-center py-10'>
                    <p className='text-slate-600 text-3xl font-semibold'>Ongoing Campaigns</p>
                    <div className='pt-10'>
                        <ul className=' flex justify-center '>
                            <li className='mx-2 lg:mx-4 '><button onClick={()=>handleBtnClick('general')} className='text-lg border-b-4 border-green-500 px-2 font-semibold '>General</button></li>
                            <li className='mx-2 lg:mx-4'><button onClick={()=>handleBtnClick('featured')} className='text-lg border-b-4 border-green-500 px-2 font-semibold'>Featured</button></li>
                            <li className='mx-2 lg:mx-4'><button onClick={()=>handleBtnClick('health')} className='text-lg border-b-4 border-green-500 px-2 font-semibold'>Healthcare</button></li>
                            <li className='mx-2 lg:mx-4'><button onClick={()=>handleBtnClick('education')} className='text-lg border-b-4 border-green-500 px-2 font-semibold'>Education</button></li>
                        </ul>
                    </div>
                    <div className="divider my-5"></div>

                </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-20 w-4/5 mx-auto'>
                {
                    onCampaign.map(camp => <OngoingCampaignCard key={camp._id} camp={camp}></OngoingCampaignCard>)
                }
            </div>

        </div>
    );
};

export default Campaigns;