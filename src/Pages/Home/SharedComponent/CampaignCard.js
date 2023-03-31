import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';


const CampaignCard = ({ campaign }) => {

    const {_id, title,image,short_desc, t_amount, description,campigner_email,campaigner_name } = campaign;

    // const [donations,setDonations] = useState([]);
    const {getDonationProgress} = useContext(AuthContext);

    const progress = getDonationProgress(_id,t_amount);

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/donation/${_id}`)
    //     .then(res => res.json())
    //     .then(data => setDonations(data))
    // },[_id])
    

//     let totalDonation = 0;
//     donations?.map(don =>totalDonation = don.amount+totalDonation)

    
//    const progressAmount = totalDonation;
//    let progressPercent = 0;
   
//    if(progressAmount>parseFloat(t_amount)){
//         progressPercent = 100;
//    }else{
//     progressPercent = (progressAmount/parseFloat(t_amount)) * 100;
//    }
    

    return (

        <motion.div  drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }} className="card rounded-lg w-80 lg:w-96 bg-base-100 shadow-lg">
            <Link to={`/campaign/${_id}`}><figure><img className='h-60 w-full hover:opacity-60' src={image} alt="Shoes" /></figure></Link>
            <div className='mb-2 px-4 py-2 '>
                <progress className="progress progress-success w-full " value={progress.donationProgress} max="100"></progress>
                <div className='flex justify-between '>
                    <p className='text-slate-500 font-semibold'>Raised: {progress.totalDonation }</p>
                    <p className='text-slate-500 font-semibold'>Goal: {t_amount}</p>
                </div>
            </div>
            <div className="card-body px-4 py-0 my-0">
                <h2 className="card-title">{title}</h2>
                <p>{short_desc.slice(0, 100)}...</p>
                {/* <div className="divider my-0"></div>  */}
                <div className="card-actions justify-between py-4">
                    <p className='text-slate-500 font-semibold'>Organized By: {campaigner_name}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default CampaignCard;