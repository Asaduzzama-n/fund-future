import React from 'react';

const ReportTable = ({ reportDonation, i }) => {
    const { donor_name, time, transactionId, amount } = reportDonation;

    return (
        <tr>
            <th>
                {i + 1}
            </th>
            <td>

                <div className="font-bold">{donor_name}</div>

            </td>
            <td>
                {new Date(time).toLocaleString()}
            </td>
            <td className=''>
                <p className='font-medium'>{transactionId}</p>
            </td>
            <td className='font-bold text-lg text-accent-focus'> {amount} </td>
        </tr>
    );
};

export default ReportTable;