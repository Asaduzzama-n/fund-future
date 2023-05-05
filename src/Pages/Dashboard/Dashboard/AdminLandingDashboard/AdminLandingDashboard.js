import React, { useContext } from 'react';
import UpperSection from './UpperSection';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useCampaigns from '../../../../hooks/useCampaigns';
import Loading from '../../../Shared/Loading/Loading';
import CampaignChart from './CampaignChart';
import DonationChart from './DonationChart';

const AdminLandingDashboard = () => {

    const { donations, user } = useContext(AuthContext);


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://fund-future-server.vercel.app/all-users');
            const data = await res.json();
            return data;
        }
    })

    const [campaigns, isCampaignsLoading] = useCampaigns(user?.email);


    if (isCampaignsLoading) {
        return <Loading></Loading>
    }





    const details = [
        {
            id: 1,
            value: users.length,
            title: 'Active User',
            className: "h-40  rounded-md p-5 hover:bg-blue-500 text-center bg-blue-700 glass"
        },
        {
            id: 2,
            value: donations.length,
            title: 'Total Donation',
            className: "h-40 bg-green-600 hover:bg-green-400  rounded-md p-5 glass text-center"

        },
        {
            id: 3,
            value: donations.reduce((sum, donation) => { return sum + donation.amount }, 0),
            title: 'Total Amount',
            className: "h-40 bg-orange-600 hover:bg-orange-600  rounded-md glass p-5 text-center"

        },
        {
            id: 4,
            value: (campaigns.filter(campaign => campaign.status === 'active')).length,
            title: 'Active Campaign',
            className: "h-40 bg-sky-700 hover:bg-sky-500 rounded-md p-5 glass text-center"

        },

    ]




    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='grid md:grid-cols-2 gap-10 lg:grid-cols-4'>
                {
                    details.map(detail => <UpperSection key={detail.id} detail={detail}></UpperSection>)
                }

            </div>
            <div className='md:flex justify-between my-20 items-center'>
                <CampaignChart></CampaignChart>
                <DonationChart donations={donations}></DonationChart>
            </div>
        </div>
    );
};

export default AdminLandingDashboard;