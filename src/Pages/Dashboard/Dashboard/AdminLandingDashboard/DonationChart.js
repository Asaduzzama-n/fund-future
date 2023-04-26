import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DonationChart = ({ donations }) => {

    const [chartDonations, setChartDonations] = useState([]);


    useEffect(() => {
        const donationData = donations.map(donation => {
            const datePart = donation.time.split('T');
            const don = {
                date: datePart[0],
                value: ((donations.filter(donation => donation.time.split('T')[0] === datePart[0])).length)
            };
            return don;
        })

        function getUniqueListBy(arr, key) {
            return [...new Map(arr.map(item => [item[key], item])).values()]
        }

        const arr1 = getUniqueListBy(donationData, 'date')
        setChartDonations(arr1);


    }, [])



    return (
        <div className='' style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={chartDonations}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>

                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#19376D" fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
            <h2 className='text-center text-2xl text-accent my-2'>Donation vs Time</h2>
        </div>
    );
};

export default DonationChart;