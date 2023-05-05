// import React from 'react';
// import { AuthContext } from '../../../Context/AuthProvider';
// import { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';

// const ContactModal = ({ campaigner_mail }) => {

//     const { user } = useContext(AuthContext);
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const handleContact = (data) => {
//         const contactMail = {
//             mailFrom:data?.mailFrom || campaigner_mail,
//             mailTo:data?.mailTo || user?.email,
//             subject:data?.subject,
//             mailBody:data?.body
//         }

//         fetch('https://fund-future-server.vercel.app/sendEmail', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 // authorization: `bearer ${localStorage.getItem('accessToken')}`
//             },
//             body: JSON.stringify(contactMail)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 //implement send mail
//             })
//     }

//     return (
//         <>
//             <input type="checkbox" id="contact-modal" className="modal-toggle" />

//             <div className={`modal w-full modal-bottom bg-transparent sm:modal-middle z-20`}>
//                 <div className="modal-box">
//                     <div className='  '>

//                         <div className="w-full p-5">
//                             <form onSubmit={handleSubmit(handleContact)} className="w-full">

//                                 <div className="form-control">

//                                     <label className="label">
//                                         <span className="label-text font-medium text-accent">From</span>
//                                     </label>
//                                     <input type="text" {...register("mailFrom", {
//                                     })} defaultValue={user?.email} disabled className="p-5 h-14 rounded-md input border-solid border-2  bg-neutral border-slate-200 w-full" />



//                                     <label className="label">
//                                         <span className="label-text font-medium text-accent">To</span>
//                                     </label>
//                                     <input type="text" {...register("mailTo", {
//                                     })} defaultValue={campaigner_mail} disabled className="p-5 h-14 rounded-md input border-solid border-2  bg-neutral border-slate-200 w-full" />




//                                     <label className="label">
//                                         <span className="label-text font-medium text-accent">Subject</span>
//                                     </label>
//                                     <input type="text" {...register("subject", {
//                                         required: "Subject is Required"
//                                     })} className="p-5 h-14 rounded-md input border-solid border-2  bg-neutral border-slate-200 w-full" />
//                                     {errors.subject && <p className='text-red-500 py-3'>{errors.subject.message}</p>}



//                                     <label className="label">
//                                         <span className="label-text font-medium text-accent">Body</span>
//                                     </label>
//                                     <textarea type="text" {...register("body", {
//                                         required: "Short Description is required",
//                                     })} className="p-5 h-44 rounded-md input border-solid border-2 bg-neutral border-slate-200 w-full" />
//                                     {errors.body && <p className='text-red-500 py-2'>{errors.body.message}</p>}

//                                     <div className="form-control my-5">
//                                         <button type='submit' className="py-2 rounded-sm bg-green-500 font-semibold text-lg">Send Email</button>
//                                     </div>
//                                 </div>



//                             </form>
//                         </div>
//                     </div>
//                     <div className="modal-action flex items-center">
//                         <label htmlFor="contact-modal" className="btn bg-green-500 border-none text-slate-700 font-medium mx-10 hover:bg-green-300">Close</label>



//                     </div>

//                 </div>
//             </div>

//         </>

//     );
// };

// export default ContactModal;