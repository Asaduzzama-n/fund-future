// import React from 'react';
// import { useContext } from 'react';
// import { AuthContext } from '../../../../../Context/AuthProvider';
// import DonatedPart from '../../../../CampaignAndDonation/Donation/DonatedPart';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { Calendar, DateRangePicker } from 'react-date-range';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ReportDetails from './ReportDetails/ReportDetails';


// const ReportModal = ({ campaign }) => {


//     const { donations } = useContext(AuthContext);
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());


//     const handleSelect = (range) => {

//         setStartDate(range.selection.startDate);
//         setEndDate(range.selection.endDate);

//     }



//     const selectionRange = {
//         startDate: startDate,
//         endDate: endDate,
//         key: 'selection',
//     }

//     return (
//         <>
//             <input type="checkbox" id="report-modal" className="modal-toggle" />
//             <div className={`modal w-full modal-bottom bg-transparent sm:modal-middle z-20`}>
//                 <div className="modal-box">
//                     <div className='  '>
//                         <div className=' mx-auto'>
//                             <DateRangePicker className='w-5/6'
//                                 ranges={[selectionRange]}
//                                 onChange={handleSelect}
//                             />
//                         </div>
//                     </div>
//                     <div className="modal-action flex items-center">
//                         <label htmlFor="report-modal" className='bg-neutral btn px-10 text-slate-700 font-bold  border-none  hover:bg-primary '>Close</label>
//                         <label htmlFor="report-details" className='bg-neutral btn px-10 text-slate-700 font-bold  border-none  hover:bg-primary '>Generate Report</label>

//                         {/* <Link className='btn bg-green-500 border-none text-slate-700 font-medium mx-10 hover:bg-green-300' to={'/dashboard/report'}>View Report</Link> */}

//                     </div>

//                 </div>
//             </div>

//             <div className=''>
//                 <ReportDetails startDate={startDate} endDate={endDate} campaign={campaign}>

//                 </ReportDetails>
//             </div>


//         </>

//     );
// };

// export default ReportModal;