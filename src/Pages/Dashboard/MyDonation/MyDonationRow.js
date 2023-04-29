import React from 'react';

const MyDonationRow = ({ donation, i }) => {
    const { _id, amount, donor_mail, donation_type, campaign_id ,time, transactionId } = donation;
    return (
        <tr>
            <th>
                {i + 1}
            </th>
            <td>
                <div>
                    <div className="font-bold bg-accent text-center rounded-full text-primary">{amount}</div>
                </div>
            </td>
            <td>
                <div>{donation_type === 'charity' ? <p className='font-bold '>{donation?.charity_name}</p> : <p className='font-semibold '>{donation?.campaign_name}</p>}</div>
            </td>
            <td>
                {time}
            </td>
            <td>{transactionId}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Track</button>
            </th>
        </tr>
    );
};

export default MyDonationRow;