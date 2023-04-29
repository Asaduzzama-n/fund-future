import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import html2pdf from 'html2pdf.js';
import ReportTable from './ReportTable';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import ReportChart from './ReportChart';

const ReportDetails = ({ startDate, endDate, campaign }) => {

    const { donations, user } = useContext(AuthContext);
    const { description, campaigner_mail, campaigner_name, campaigner_phone, image, start_date, end_date, t_amount, title, address, category, _id } = campaign;


    const [isAdmin, isAdminLoading] = useAdmin(user?.email);



    const filteredDonations = donations.filter(donation => donation.campaign_id === campaign._id);
    const reportDonations = filteredDonations.filter(filteredDonation => {
        const donationTime = new Date(filteredDonation.time).getTime();
        // console.log("donationAmount->",donationTime);
        return donationTime >= startDate.getTime() && donationTime <= endDate.getTime();
    })

    // console.log("found in range->",reportDonations);
    let totalDonation = 0;
    reportDonations.forEach(element => {
        totalDonation = totalDonation + element.amount;
    });



    const handleDownloadReport = () => {
        const report = document.getElementById('report');
        var opt = {
            margin: 0,
            filename: `${title}_Report.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(report).set(opt).save();
    }


    if (isAdminLoading) {
        return <Loading></Loading>
    }

    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="report-details" className="modal-toggle  " />
            <div className="modal bg-transparent z-30 lg:w-3/4 lg:mx-96">
                <div className="modal-box bg-base-100 w-11/12 max-w-5xl">

                    <div id='report' className='m-5 '>
                        <div className='flex justify-between'>
                            {isAdmin ? <h1 className='text-lg md:text-3xl font-semibold text-slate-700'>Admin campaign Report</h1> :
                                <h1 className='text-lg md:text-3xl font-semibold text-slate-700'>Campaign Report</h1>}
                        </div>
                        <div className="divider"></div>

                        {/* report header info */}
                        <div className=' md:flex justify-between'>
                            <div className='py-2'>
                                {
                                    isAdmin ? <h1 className='text-4xl text-primary font-bold'>FundFuture</h1> :
                                        <div> <p className='text-slate-700 font-medium'>{address}</p>
                                            <p className='text-slate-700 font-medium'>{campaigner_mail}</p>
                                            <p className='text-slate-700 font-medium'>+88 0{campaigner_phone}</p> </div>
                                }
                            </div>
                            <div className='py-2'>
                                {
                                    isAdmin ? <div><h3 className='text-xl font-bold text-primary'>ID #{_id}</h3>
                                        <h3 className='text-slate-700 text-xl font-medium pt-2 '>{title}</h3>
                                        <p className='text-slate-700 font-bold pt-2 '>Created by: {campaigner_name}</p>
                                        <p className='text-slate-700 font-bold pt-2 '>Email: {campaigner_mail}</p>
                                        <p className='text-slate-700 font-bold pt-2 '>Email: {campaigner_phone}</p>
                                        <p className='text-slate-700 font-bold pt-2 '>Created: {new Date(start_date).toLocaleString()}</p> </div> :
                                        <div><h3 className='text-xl font-bold text-primary'>ID #{_id}</h3>
                                            <h3 className='text-slate-700 text-lg font-medium pt-2 '>{title}</h3>
                                            <p className='text-slate-700 font-bold pt-2 '>Created: {new Date(start_date).toLocaleString()}</p> </div>
                                }

                            </div>

                        </div>
                        <div className='mt-5'>
                            
                            <p className='text-slate-700 font-sm'><small>Report To:</small> </p>
                            <div className='md:flex justify-between'>
                                <p className='text-slate-700 text-2xl font-medium'>{campaigner_name}</p>
                                <p className='text-slate-700 text-2xl font-medium'>Total Donation: </p>
                                <p className='text-primary  text-2xl font-bold'>$ {totalDonation} </p>
                            </div>
                        </div>
                        <div className='divider py-5'></div>

                        {
                            isAdmin && <div className=' w-full md:w-9/12 mx-auto'>
                                <ReportChart donations={filteredDonations}></ReportChart>
                            </div>
                        }

                        <div>
                            <h2 className='py-4 text-lg font-medium text-slate-700'>Donations: </h2>
                            <div className="overflow-x-auto">
                                <table className="table w-full bg-white">
                                    <thead >
                                        <tr >
                                            <th></th>
                                            <th >Name</th>
                                            <th>Date</th>
                                            <th>TRANSACTION ID</th>
                                            <th>AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reportDonations?.map((reportDonation, i) => <ReportTable key={reportDonation._id} reportDonation={reportDonation} i={i}></ReportTable>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <div className="modal-action mt-10">
                        <label htmlFor="report-details" className='bg-neutral btn px-10 text-slate-700 font-bold  border-none  hover:bg-primary '>Close</label>
                        <button onClick={handleDownloadReport} className='bg-neutral btn px-10 text-slate-700 font-bold  border-none  hover:bg-primary '>Download pdf</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportDetails;