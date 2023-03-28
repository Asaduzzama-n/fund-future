import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import MyCampaignCard from './MyCampaignCard';

const MyCampaign = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/my-campaigns?email=${user?.email}`;

    const { data: campaigns = [] } = useQuery({
        queryKey: ['my-campaigns', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='md:w-9/12 md:mx-auto lg:mx-8'>
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
        </div>
    );
};



export default MyCampaign;

