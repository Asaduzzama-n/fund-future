import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import MyCampaignCard from './MyCampaignCard';
import { motion } from "framer-motion"

const MyCampaign = () => {

    const { user,logOut } = useContext(AuthContext);

    const url = `http://localhost:5000/campaigns?email=${user?.email}`;

    const { data: campaigns = [] } = useQuery({
        queryKey: ['my-campaigns', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if(res.status === 401 || res.status === 403){
                logOut();
            }
            const data = await res.json();
            return data;
        }
    })

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        className='md:w-9/12 md:mx-auto lg:mx-8'>
            <h3 className="text-3xl mb-5">My Campaigns</h3>
            <div className="overflow-x-auto">
                <table className="table lg:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Campaign Id</th>
                            <th>Created</th>
                            <th>Action</th>
                            {/* <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campaigns &&
                            campaigns?.map((campaign, i) => <MyCampaignCard key={campaign._id} campaign={campaign} i={i}></MyCampaignCard> )

                        }
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};



export default MyCampaign;

