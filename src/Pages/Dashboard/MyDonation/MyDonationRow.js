import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyDonationRow = ({ donation, i, verifyDonate, auditStatus }) => {


    const { _id, amount, donor_mail, donation_type, campaign_id, time, transactionId } = donation;




    return (
        <>
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
                    {/* <div>{donation_type === 'charity' ? <p className='font-bold '>{donation?.charity_name}</p> : <p className='font-semibold '>{donation?.campaign_name}</p>}</div> */}
                    <div>{donation_type === 'charity' ? <p className='font-bold '>{donation?.charity_name}</p> : <p className='font-semibold '>{donation?.campaign_id}</p>}</div>
                </td>
                <td>
                    {time}
                </td>
                <td>{transactionId}</td>
                <th>
                    <label htmlFor="my-modal-3"  onClick={() => verifyDonate(donation.campaign_id)} auditStatus className="btn btn-ghost  btn-xs">Track</label>
                </th>
            </tr>
            {/* The button to open modal */}
           

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal bg-transparent">
                <div className={auditStatus ? "modal-box bg-[#315EDC] glass relative hover:bg-[#315EDC] " : "modal-box relative bg-[#EC6824] glass  hover:bg-[#EC6824]"}>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {
                        auditStatus ? <p className='text-3xl text-white font-bold'>Your Donation is verified</p> : <p className='text-3xl text-black font-bold'>Sorry We couldn't verify your donation</p>
                    }
                </div>
            </div>

        </>
    );
};

export default MyDonationRow;