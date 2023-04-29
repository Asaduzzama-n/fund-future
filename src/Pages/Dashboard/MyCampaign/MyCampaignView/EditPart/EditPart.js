import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../../Context/AuthProvider';
import JoditEditor from 'jodit-react';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { toast } from 'react-hot-toast';

const EditPart = ({ campaign, setView }) => {

    const { description, campaigner_mail, campaigner_name, campaigner_phone, image, start_date, short_desc, end_date, t_amount, title, address, category, _id } = campaign;

    const sanitizer = DOMPurify.sanitize;

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const url = `http://localhost:5000/users?email=${user?.email}`;

    const { data: loggedUser = [], refetch } = useQuery({
        queryKey: ['loggedUser', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })



    const handleCampaignEditFormSubmit = (data) => {

        const campaign = {
            title: data.title,
            category: data.category,
            address: data.address,
            short_desc: data.short_desc,
            description: content || description,
        }
        // UPDATE campaign data to database-->
        fetch(`http://localhost:5000/campaigns/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(campaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Campaign has been updated successfully");
                    refetch();
                } else {
                    toast.error("Something went wrong")
                }
            })
            .catch(err => console.error(err));

    }

    return (
        <div className='min-h-screen'>
            <div className=' w-11/12 mx-auto '>
                <div className="hero min-h-screen">
                    <div className="w-full flex-col">
                        <div className=" w-full p-10 ">
                            <form onSubmit={handleSubmit(handleCampaignEditFormSubmit)} className="w-full">

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>

                                    <input type="text" {...register("title", {
                                        required: "Title is Required"

                                    })} defaultValue={title} className="p-5 bg-neutral h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    {errors.title && <p className='text-error py-3'>{errors.title.message}</p>}


                                </div>

                                <div className='md:flex justify-between'>
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" {...register("email", {})} defaultValue={user?.email} disabled className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="text" {...register("phone", {
                                        })} defaultValue={loggedUser[0]?.phone} disabled className="p-5 h-14 rounded-md input border-solid border-2  bg-neutral border-slate-200 w-full" />

                                    </div>

                                </div>

                                <div className='md:flex justify-between'>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>

                                        <select className="select h-14 rounded-md input border-solid border-2  bg-neutral border-slate-200" {...register("category")} defaultValue={category}>
                                            <option value="general">General</option>
                                            <option value="featured">Featured</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="education">Education</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Target Amount</span>
                                        </label>

                                        <input type="number" {...register("t_amount", {
                                        })} defaultValue={t_amount} disabled className="p-5 h-14 rounded-md input border-solid border-2 text-primary font-bold text-lg bg-neutral border-slate-200 w-full" />


                                    </div>
                                </div>


                                <div className='md:flex justify-between'>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>

                                        <textarea type="text" {...register("address", {
                                            required: "Address is required",
                                        })} defaultValue={address} className="p-5 h-36 rounded-md input border-solid border-2 bg-neutral border-slate-200 w-full" />
                                        {errors.address && <p className='text-error py-2'>{errors.address.message}</p>}
                                    </div>


                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>

                                        <textarea type="text" {...register("short_desc", {
                                            required: "Short Description is required",
                                        })} defaultValue={short_desc} className="p-5 h-36 rounded-md input border-solid border-2 bg-neutral border-slate-200 w-full" />
                                        {errors.short_desc && <p className='text-error py-2'>{errors.short_desc.message}</p>}
                                    </div>
                                </div>

                                <div className="form-control w-full my-4">


                                    <div>
                                        <p className='my-2 text-accent font-medium'>Old Description</p>
                                        <div dangerouslySetInnerHTML={{ __html: sanitizer(description) }}></div>
                                    </div>


                                    <label className="label">
                                        <span className='my-2 text-accent font-medium'>New Description</span>
                                    </label>


                                    <div>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            // config={config}
                                            tabIndex={1} // tabIndex of textarea
                                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                            onChange={(newContent) => { }}
                                        />
                                    </div>

                                </div>
                                <div className="flex items-center mt-10 mb-20">
                                    <button type='submit' className="py-2 rounded-full w-1/2 lg:w-1/5 mx-auto bg-primary font-semibold text-lg">Update Campaign</button>
                                    <button className=' rounded-full py-1 px-2 mx-2 border-2 border-primary text-primary text-xl hover:bg-green-200 hover:border-none font-bold' onClick={() => setView(true)}>View</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPart;