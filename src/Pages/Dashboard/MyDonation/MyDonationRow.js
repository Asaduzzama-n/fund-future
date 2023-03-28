import React from 'react';

const MyDonationRow = ({donation,i}) => {
    const {_id,amount,donor_mail,donor_name,campaign_id,time,trx_id} = donation;
    return (
        <tr>
        <th>
            {i + 1}
        </th>
        <td>
            <div>
                <div className="font-bold">{amount}</div>
            </div>
        </td>
        <td>
        <div className="badge badge-ghost badge-md">{_id}</div>
        </td>
        <td>
            {time}
        </td>
        <td>{donor_mail}</td>
        <td>{trx_id}</td>
        <th>
            <button className="btn btn-ghost btn-xs">Track</button>
        </th>
    </tr>
    );
};

export default MyDonationRow;