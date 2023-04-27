import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import OngoingCampaignCard from '../OngoingCampaignCard/OngoingCampaignCard';


const Campaigns = () => {

    const [onCampaign, setOnCampaign] = useState([]);
    const [type,setType] = useState('');
    const [general,setGeneral] = useState(true);
    const [featured,setFeatured] = useState(false);
    const [health,setHealth] = useState(false);
    const [edu,setEdu] = useState(false);


    // console.log((type))
    useEffect(() => {
        fetch('http://localhost:5000/all-campaigns')
            .then(res => res.json())
            .then(data => {
                if(type === '' || type === 'general'){
                    const targetData = data.filter(d =>  d.status === 'active');
                    setOnCampaign(targetData)
                }else{
                    const targetData = data.filter(d => (d.category === type) && (d.status === 'active'));
                    setOnCampaign(targetData)
                }

            })
    }, [type])



    


    const handleBtnClick = (event) =>{
        setType(event)
        
        if(event==='general'){
            setEdu(false);
            setFeatured(false);
            setHealth(false);
            setGeneral(true)
        }
        if(event==='featured'){
            setGeneral(false)
            setEdu(false);
            setFeatured(true);
            setHealth(false);
        }
        if(event==='healthcare'){
            setGeneral(false)
            setEdu(false);
            setFeatured(false);
            setHealth(true);
        }
        if(event==='education'){
            setGeneral(false)
            setEdu(true);
            setFeatured(false);
            setHealth(false);
        }
    }

    return (
        <div className='min-h-screen'>

            <div>
                <div className='text-center py-10'>
                    <p className='text-slate-600 text-3xl font-semibold'>Ongoing Campaigns</p>
                    <div className='pt-10'>
                        <ul className=' flex justify-center '>
                            <li className='mx-2 lg:mx-4 '><button onClick={()=>handleBtnClick('general')} className={`text-lg ${general ? 'border-b-4 border-primary' : 'border-none'} px-2 font-semibold`}>General</button></li>
                            <li className='mx-2 lg:mx-4'><button onClick={()=>handleBtnClick('featured')} className={`text-lg ${featured ? 'border-b-4 border-primary' : 'border-none'} px-2 font-semibold`}>Featured</button></li>
                            <li className='mx-2 lg:mx-4'><button onClick={()=>handleBtnClick('healthcare')} className={`text-lg ${health ? 'border-b-4 border-primary' : 'border-none'} px-2 font-semibold`}>Healthcare</button></li>
                            <li className='mx-2 lg:mx-4'><button onClick={()=>handleBtnClick('education')} className={`text-lg ${edu ? 'border-b-4 border-primary' : 'border-none'} px-2 font-semibold`}>Education</button></li>
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