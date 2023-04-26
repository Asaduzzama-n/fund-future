import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CampaignChart = () => {

    const [campaigns, setCampaigns] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/all-campaigns')
            .then(data => {
                const loadedData = data.data;
                const campaignData = loadedData.map(campaign => {
                    const datePart = campaign.start_date.split('T');
                    const camp = {
                        date: datePart[0],
                        value: ((loadedData.filter(campaign => campaign.start_date.split('T')[0] === datePart[0])).length)
                    };
                    return camp;
                })

                function getUniqueListBy(arr, key) {
                    return [...new Map(arr.map(item => [item[key], item])).values()]
                }

                const arr1 = getUniqueListBy(campaignData, 'date')
                setCampaigns(arr1);
            })
    }, [])



    return (

        <div className='my-20 md:my-0' style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={campaigns}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>

                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#22C55E" fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
            <h2 className='text-center text-2xl text-accent my-2'>Campaign vs Time</h2>

        </div>

    );
};

export default CampaignChart;