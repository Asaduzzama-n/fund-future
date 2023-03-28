import React from 'react';

const MyCampaignCard = ({ campaign, i }) => {
    const { _id,title, short_desc, status, start_date } = campaign;

    return (
        <tr>
            <th>
                {i + 1}
            </th>
            <td>
                <div>
                    <div className="font-bold">{title}</div>
                </div>
            </td>
            <td>
            <div className="badge badge-ghost badge-md">{_id}</div>
            </td>
            <td>{start_date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">View</button>
                <button className="btn btn-ghost btn-xs">Update</button>
                <button className="btn btn-ghost btn-xs">END</button>
            </th>
        </tr>
    );
};

export default MyCampaignCard;