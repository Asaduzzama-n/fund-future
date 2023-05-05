import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';

const UserInfoModal = ({ targetUserEmail }) => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const [targetUser, setTargetUser] = useState({});
    useEffect(() => {
        fetch(`https://fund-future-server.vercel.app/users?email=${targetUserEmail}`)
            .then(res => res.json())
            .then(data => setTargetUser(data))
    }, [targetUserEmail])

    // console.log(targetUser[0]?.name)

    const handleSendMail = (data) => {
        const mailInfo = {
            mailTo: targetUser[0]?.email,
            mailSubject: data.subject,
            mailBody: data.body,
            mailToName: targetUser[0]?.name
        }

        // console.log(mailInfo)

        fetch('https://fund-future-server.vercel.app/sendEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(mailInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Mail send successfully to ", targetUser[0]?.email)
                console.log(data);
                //implement send mail
            })

    }


    return (
        <div className=''>
            <input type="checkbox" id="userInfo" className="modal-toggle" />

            <div className={`modal  w-full modal-bottom bg-transparent sm:modal-middle z-20`}>
                <div className="modal-box bg-neutral">
                    <div className=' '>

                        <div className="w-full p-5">
                            <form onSubmit={handleSubmit(handleSendMail)} className="w-full">

                                <div className="form-control">


                                    <label className="label">
                                        <span className="label-text font-medium text-accent">To</span>
                                    </label>
                                    <input type="text" {...register("mailTo", {
                                    })} defaultValue={targetUser[0]?.email} disabled className="p-3 h-10 rounded-md input border-solid border-2 bg-white  border-slate-200 w-full" />

                                    <label className="label">
                                        <span className="label-text font-medium text-accent">Subject</span>
                                    </label>
                                    <input type="text" {...register("subject", {
                                        required: "Subject is Required"
                                    })} className="p-3 h-10 rounded-md input border-solid border-2  bg-white border-slate-200 w-full" />
                                    {errors.subject && <p className='text-error py-3'>{errors.subject.message}</p>}



                                    <label className="label">
                                        <span className="label-text font-medium text-accent">Message</span>
                                    </label>
                                    <textarea type="text" {...register("body", {
                                        required: "Short Description is required",
                                    })} className="p-2 h-44 rounded-md input border-solid border-2 bg-white border-slate-200 w-full" />
                                    {errors.body && <p className='text-error py-2'>{errors.body.message}</p>}

                                    <div className="form-control my-3">
                                        <button type='submit' className="btn bg-white border-none  text-slate-700 font-bold  hover:bg-primary">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-action flex items-center">
                        <label htmlFor="userInfo" className="btn bg-white border-none  text-slate-700 font-bold  hover:bg-primary">Close</label>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default UserInfoModal;