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

    // const {data:campaigns = [], refetch, isLoading } = useQuery({
    //     queryKey: ['campaigns'],
    //     queryFn: async ()=>{
    //         const res = await fetch('http://localhost:5000/all-campaigns');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-users');
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
            class: "'h-44 bg-green-300 rounded-md p-5 text-center '"
        },
        {
            id: 2,
            value: donations.length,
            title: 'Total Donation',
            class: "'h-44 bg-green-600 rounded-md p-5 text-center '"

        },
        {
            id: 3,
            value: donations.reduce((sum, donation) => { return sum + donation.amount }, 0),
            title: 'Total Amount',
            class: "'h-44 bg-green-100 rounded-md p-5 text-center '"

        },
        {
            id: 4,
            value: (campaigns.filter(campaign => campaign.status === 'active')).length,
            title: 'Active Campaign',
            class: "'h-44 bg-red-300 rounded-md p-5 text-center '"

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