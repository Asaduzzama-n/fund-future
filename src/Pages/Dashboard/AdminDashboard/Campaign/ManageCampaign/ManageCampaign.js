import React, { useContext, useEffect } from 'react';
import useCampaigns from '../../../../../hooks/useCampaigns';
import { AuthContext } from '../../../../../Context/AuthProvider';
import Loading from '../../../../Shared/Loading/Loading';
import DataTable, { createTheme } from 'react-data-table-component';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import UserInfoModal from '../../SharedComponent/UserInfoModal';
import { Link } from 'react-router-dom';


const ManageCampaign = () => {

    const { user } = useContext(AuthContext);
    const [search, setSearch] = useState('');
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
    const [targetUserEmail, setTargetUserEmail] = useState('');


    const { data: campaigns = [], refetch, isLoading } = useQuery({
        queryKey: ['campaigns'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-campaigns');
            const data = await res.json();
            const filteredData = data.filter(campaign => campaign.status !== 'pending');
            setFilteredCampaigns(filteredData);
            return filteredData;
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
            // end_date: new Date()
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
            selector: row => <div><p className='font-medium text-accent'>CS</p></div>,
            sortable: true
        },
        {
            name: 'VIEW',
            selector: row => row.name,
            cell: (row) => <div data-tip={row.status} className='tooltip tooltip-accent'>
                <Link className='bg-accent py-1 px-3 text-white font-semibold rounded-full' to={`/dashboard/manage-campaign/campaign-view/${row._id}`}>View</Link>
            </div>,
            sortable: true
        },
        {
            name: 'ACTION',
            // selector: row => row.name,
            cell: (row) => <div><button disabled={row.status === 'finished' || row.status === 'active'} onClick={() => handleCampaignStatusUpdate(row._id, 'active')} data-tip="Approve" className='tooltip tooltip-primary' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#22C55E" className="w-8 h-8 bg-white   mx-2 rounded-full p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg></button> <button disabled={row.status === 'finished' || row.status === 'rejected'} onClick={() => handleCampaignStatusUpdate(row._id, 'rejected')} data-tip="Reject" className='tooltip tooltip-warning' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ED2B2A" className="w-8 h-8 bg-white  mx-2 rounded-full p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
                </button></div>,
            sortable: true
            
        },

    ]

    const conditionalRowStyles = [
        {
          when: row => row.status === 'finished',
          style: {
            backgroundColor: '#ededed',
          },
        },
        {
          when: row => row.status === 'active',
          style: {backgroundColor: '#C3EFD3',},
        },
        {
            when: row => row.status === 'rejected',
            style: {backgroundColor: '#F1C8CC',},
          },
      ];



    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 mx-auto bg-neutral my-5 p-5 rounded-md'>
            <DataTable
                className='bg-neutral '
                columns={columns}
                data={filteredCampaigns}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='450px'
                selectableRows
                selectableRowsHighlight
                subHeader
                conditionalRowStyles={conditionalRowStyles}
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

export default ManageCampaign;