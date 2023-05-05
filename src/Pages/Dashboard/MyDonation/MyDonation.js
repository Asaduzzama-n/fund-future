import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyDonationRow from './MyDonationRow';
import { motion } from "framer-motion"
import { useEffect } from 'react';
import { useState } from 'react';

const MyDonation = () => {


    const { user, logOut } = useContext(AuthContext);
    const [auditStatus, setAuditStatus] = useState(false);
    const url = `https://fund-future-server.vercel.app/donations?email=${user?.email}`;

    const { data: donations = [] } = useQuery({
        queryKey: ['donations', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (res.status === 401 || res.status === 403) {
                logOut();
            }
            const data = await res.json();
            return data;
        }
    })




    const { data: auditDonations = [] } = useQuery({
        queryKey: ['auditDonations'],
        queryFn: async () => {
            const res = await fetch(`https://fund-future-server.vercel.app/donationAuditTrail`, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            // console.log(auditDonations)
            return data;
        }
    })

    console.log(auditDonations)

    const verifyDonate = (id,targetAmount) => {

        const filteredAuditById = auditDonations.filter(auditDonation => auditDonation.campaignId === id);

        const filteredByStatus = filteredAuditById.find(don => don.status === 'success' && don.amount === targetAmount );


        if (filteredByStatus) {
            setAuditStatus(true);
        } else {
            setAuditStatus(false);
        }
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }} className='w-11/12 mx-auto'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Amount</th>
                            <th>Campaign NAME</th>
                            <th>Time</th>
                            <th>TRX_ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donations &&
                            donations?.map((donation, i) => <MyDonationRow verifyDonate={verifyDonate} auditStatus={auditStatus} key={donation._id} donation={donation} i={i}></MyDonationRow>)

                        }
                    </tbody>
                </table>
            </div>


        </motion.div>



    );
};

export default MyDonation;