import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyCampaignCard = ({ campaign, i,refetch }) => {
    const { _id, title, short_desc, status, start_date } = campaign;


    const handleCampaignStatusUpdate = (id, status) => {

        const campaignStatus = {
            status: status
        }

        fetch(`https://fund-future-server.vercel.app/campaign/admin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(campaignStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Campaign Withdraw request successful.')
                    refetch();
                } else {
                    toast.error("Campaign Withdraw request Failed.")

                }
            })
            .catch(err => {
                toast.error(err.message)
                console.error(err)
            });
    }


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
            <td><p className=' bg-neutral font-semibold rounded-full text-center'>{status}</p></td>
            <th>
                <Link  to={`/dashboard/my-campaign/campaign-view/${_id}`}><button  className="btn btn-ghost btn-xs">View</button></Link>
                {
                    status === 'active' && <Link to={`/dashboard/my-campaign/campaign-view/${_id}`}><button onClick={()=>handleCampaignStatusUpdate(_id,'pendingWithdraw')} className="btn btn-ghost btn-xs bg-primary">Withdraw</button></Link>
                }
            </th>
        </tr>
    );
};

export default MyCampaignCard;