import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import alms from '../../../assets/gifIcon/alms.gif'
import campaign from '../../../assets/gifIcon/campaign.gif'
import donation from '../../../assets/gifIcon/donation.gif'

const UserLandingDashboard = () => {

    const { donations, user } = useContext(AuthContext);

    const myDonations = donations.filter(donation => donation.donor_mail === user?.email)

    let myTotalDonations = 0;
    myDonations.forEach(element => {

        myTotalDonations = myTotalDonations + element.amount;
    });


    const url = `http://localhost:5000/campaigns?email=${user?.email}`;

    const { data: campaigns = [] } = useQuery({
        queryKey: ['my-campaigns', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })







    return (
        <div className=' min-h-screen'>
            <div>
                <h1 className='text-primary text-3xl font-bold mx-20 my-5'>Welcome {user?.displayName}</h1>
            </div>
            <div className='w-9/12 mx-auto my-20'>

                <div className="stats stats-vertical md:stats-horizontal shadow-xl md:h-44">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img className='h-10 w-10' src={alms} alt="" />
                        </div>

                        <div className="stat-title">Total Donation</div>
                        <div className="stat-value">{myDonations.length}</div>
                        {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img className='h-10 w-10' src={donation} alt="" />

                        </div>
                        <div className="stat-title">Total Donated</div>
                        <div className="stat-value">৳ {myTotalDonations}</div>
                        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img className='h-10 w-10' src={campaign} alt="" />

                        </div>
                        <div className="stat-title">Total Campaign</div>
                        <div className="stat-value">{campaigns.length}</div>
                        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserLandingDashboard;