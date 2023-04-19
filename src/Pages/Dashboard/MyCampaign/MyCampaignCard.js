import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to={`/dashboard/my-campaign/campaign-view/${_id}`}><button className="btn btn-ghost btn-xs">View</button></Link>
            </th>
        </tr>
    );
};

export default MyCampaignCard;