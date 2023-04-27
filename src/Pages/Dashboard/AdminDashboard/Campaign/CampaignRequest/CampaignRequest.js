import React, { useContext, useEffect } from 'react';
import useCampaigns from '../../../../../hooks/useCampaigns';
import { AuthContext } from '../../../../../Context/AuthProvider';
import Loading from '../../../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import DataTable, { createTheme } from 'react-data-table-component';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import UserInfoModal from '../../SharedComponent/UserInfoModal';
import { Link } from 'react-router-dom';

const CampaignRequest = () => {

    const [search, setSearch] = useState('');
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
    const [targetUserEmail, setTargetUserEmail] = useState('');


    const { data: campaigns = [], refetch, isLoading } = useQuery({
        queryKey: ['campaigns'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-campaigns');
            const data = await res.json();
            const pendingCampaign = data.filter(campaign => campaign.status === 'pending');
            setFilteredCampaigns(pendingCampaign);
            return pendingCampaign;
        }
    })

    useEffect(() => {
        const result = campaigns.filter((campaign) => {
            return campaign.title.toLowerCase().match(search.toLowerCase())
        });
        setFilteredCampaigns(result);
    }, [search])


    const handleCampaignStatusUpdate = (id, status) => {

        const campaignStatus = {
            status: status
        }

        fetch(`http://localhost:5000/campaign/admin/${id}`, {
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
                    toast.success('Campaign Status updated successfully.')
                    refetch();
                } else {
                    toast.error("Failed to update campaign status.")

                }
            })
            .catch(err => {
                toast.error(err.message)
                console.error(err)
            });
    }








    const columns = [
        {
            name: 'TITLE',
            selector: row => <p className='font-medium text-accent'>{row.title}</p>,
            sortable: true
        },
        {
            name: 'CAMPAIGNER INFO',
            cell: (row) => <label htmlFor="userInfo"
                data-tip="Contact" onClick={() => setTargetUserEmail(row.campaigner_mail)}
                className="tooltip tooltip-accent bg-accent rounded-full font-semibold text-white  py-1 px-2 text-center w-9/12 ">
                {row.campaigner_name}
            </label>,
            sortable: true
        },
        {
            name: 'DOCUMENTS',
            selector: row => <div><p className=' '>CS</p></div>,
            sortable: true
        },
        {
            name: 'VIEW',
            selector: row => <div><Link className='bg-primary px-3 text-white font-semibold rounded-full' to={`/dashboard/manage-campaign/campaign-view/${row._id}`}>View</Link></div>,
            sortable: true
        },
        {
            name: 'ACTION',
            selector: row => row.name,
            cell: (row) => <div><button data-tip="Approve" className='tooltip tooltip-primary' onClick={() => handleCampaignStatusUpdate(row._id, 'active')} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#22C55E" className="w-8 h-8 bg-white   mx-2 rounded-full p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg></button> <button data-tip="Reject" className='tooltip tooltip-warning' onClick={() => handleCampaignStatusUpdate(row._id, 'rejected')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ED2B2A" className="w-8 h-8 bg-white  mx-2 rounded-full p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
                </button></div>
        },

    ]

    const customStyles = {
        rows: {
            style: {
                minHeight: '50px', // override the row height
                background: '#ffff',
                border: '1px solid #EDEDED!important',

            },
        },
        headCells: {
            style: {

            },
        },
        cells: {
            style: {
                // border:'1px solid #EDEDED!important' 
                // background: '#C3EFD3'
            },
        },
    };





    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className='w-11/12 mx-auto bg-neutral my-5 p-5 rounded-md'>
            <DataTable
                columns={columns}
                data={filteredCampaigns}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='450px'
                selectableRows
                customStyles={customStyles}
                selectableRowsHighlight
                subHeader
                subHeaderComponent={
                    <input className='px-4 py-2 my-10 border-2 w-1/2 border-neutral  rounded-full' type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search here'></input>
                }
                subHeaderAlign='right'
            >

            </DataTable>

            <UserInfoModal targetUserEmail={targetUserEmail}></UserInfoModal>

        </div>
    );
};

export default CampaignRequest;