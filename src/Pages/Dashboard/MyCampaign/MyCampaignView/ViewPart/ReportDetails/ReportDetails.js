import html2pdf from 'html2pdf.js';
import React from 'react';

const ReportDetails = ({ startDate, endDate, campaign }) => {


    const { description, campaigner_mail, campaigner_name, campaigner_phone, image, start_date, end_date, t_amount, title, address, category, _id } = campaign;

    console.log('St', startDate.getTime());
    console.log('end', endDate.getTime());


    const handleDownloadReport = () => {
        const report = document.getElementById('report');
        var opt = {
            margin: 0.5,
            filename: 'Report.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(report).set(opt).save();
    }

    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="report-details" className="modal-toggle  " />
            <div className="modal bg-transparent z-30 lg:w-3/4 lg:mx-96">
                <div className="modal-box bg-white w-11/12 max-w-5xl">

                    <div id='report' className='m-5 '>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl md:text-3xl font-semibold text-slate-700'>Campaign Report</h1>
                        </div>
                        <div className="divider"></div>

                        {/* report header info */}
                        <div className=' md:flex justify-between'>
                            <div className='py-2'>
                                <p className='text-slate-600 font-medium'>{address}</p>
                                <p className='text-slate-600 font-medium'>{campaigner_mail}</p>
                                <p className='text-slate-600 font-medium'>+88 {campaigner_phone}</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-xl font-bold text-green-500'>ID #{_id}</h3>
                                <h3 className='text-slate-600 text-lg font-medium pt-2 md:text-center'>{title}</h3>
                                <p className='text-slate-600 font-medium pt-2 md:text-end'>Created: {start_date}</p>
                            </div>

                        </div>
                        <div className='mt-5'>
                            <p className='text-slate-600 font-sm'><small>Report To:</small> </p>
                            <div className='md:flex justify-between'>
                                <p className='text-slate-600 text-2xl font-medium'>{campaigner_name}</p>
                                <p className='text-slate-600 text-2xl font-medium'>Total Donation: </p>
                                <p className='text-slate-600  text-2xl font-medium'>$2000 </p>
                            </div>
                        </div>
                        <div className='divider py-5'></div>
                        <div>
                            <h2 className='py-4 text-lg font-medium text-slate-700'>Donations: </h2>
                            <div className="overflow-x-auto">
                                <table className="table table-compact w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>TRX ID</th>
                                            <th>AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>Quality Control Specialist</td>
                                            <td>Littel, Schaden and Vandervort</td>
                                            <td>Canada</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>Hart Hagerty</td>
                                            <td>Desktop Support Technician</td>
                                            <td>Zemlak, Daniel and Leannon</td>
                                            <td>United States</td>

                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>Brice Swyre</td>
                                            <td>Tax Accountant</td>
                                            <td>Carroll Group</td>
                                            <td>China</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div>
                            <p className='text-slate-500 mt-10 font-medium'>This report only contains data between 'From' and 'To'. </p>
                        </div>
                    </div>


                    <div className="modal-action">
                        <label htmlFor="report-details" className="btn bg-green-500 border-none text-slate-700 font-medium mx-10 hover:bg-green-300">Close!</label>
                        <button onClick={handleDownloadReport} className='bg-green-500 border-none text-slate-700 font-medium mx-10 hover:bg-green-300 w-36 h-10 rounded-md'>Download pdf</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportDetails;