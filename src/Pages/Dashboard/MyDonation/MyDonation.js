import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyDonationRow from './MyDonationRow';

const MyDonation = () => {


    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/donations?email=${user?.email}`;

    const { data: donations = [] } = useQuery({
        queryKey: ['donations', user?.email],
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
        <div className=' md:w-9/12 md:mx-auto lg:mx-10 mt-5'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Amount</th>
                            <th>Campaign ID</th>
                            <th>Time</th>
                            <th>Campaigner Email</th>
                            <th>TRX_ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            donations &&
                            donations?.map((donation, i) => <MyDonationRow key={donation._id} donation={donation} i={i}></MyDonationRow> )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonation;