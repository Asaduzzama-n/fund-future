import React from 'react';
import { Link } from 'react-router-dom';

const ReportTable = ({ reportDonation, i }) => {
    const { campaign_name, _id, time, transactionId, amount } = reportDonation;

    return (
        <tr>
            <th>
                {i + 1}
            </th>
            <td>
                <div>
                    <div className="font-bold">{campaign_name}</div>
                </div>
            </td>
            <td>
                <div className="badge badge-ghost bg-blue-200 font-medium  badge-md">{new Date(time).toLocaleString()} </div>
            </td>
            <td>
                <div className="badge badge-ghost badge-md">{transactionId}</div>
            </td>
            <td className='font-bold text-lg text-accent-focus'>{amount}</td>
        </tr>
    );
};

export default ReportTable;