import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import bookmarkIcon from '../../../assets/gifIcon/bookmark.gif';
import Campaign from '../../CampaignAndDonation/Campaign/Campaign';
import { Link } from 'react-router-dom';
const Bookmarks = () => {

    const { user } = useContext(AuthContext);

    const url = `https://fund-future-server.vercel.app/bookmarks?email=${user?.email}`;
    const { data: bookmarks = [] } = useQuery({
        queryKey: ['bookmarkss', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(bookmarks);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookmarks.map(bookmark =>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mt-1">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{bookmark?.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{bookmark.campaignId}</span>
                                </td>
                                <th>
                                    <Link to={`/campaign/${bookmark.campaignId}`}>view</Link>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookmarks;