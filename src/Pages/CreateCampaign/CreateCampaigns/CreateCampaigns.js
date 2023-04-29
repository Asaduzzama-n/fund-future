import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useForm, Select } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const CreateCampaigns = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleCampaignFormSubmit = (data) => {

        const start_date = new Date();

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=979eaeb52cadeb701c87bf31679bdd99`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const campaign = {
                        title: data.title,
                        t_amount: data.t_amount,
                        campaigner_mail: user?.email,
                        campaigner_name: user?.displayName,
                        campaigner_phone: data.phone,
                        category: data.category,
                        image: imgData.data.url,
                        address: data.address,
                        status: 'pending',
                        short_desc: data.short_desc,
                        description: content,
                        start_date: start_date,
                        end_date: ''
                    }
                    //Save campaign data to database-->

                    fetch('http://localhost:5000/campaigns', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(campaign)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Campaign created Successfully");
                                navigate('/');
                            } else {
                                toast.error("Something went wrong")
                            }
                        })
                        .catch(err => console.error(err));
                }
            })

    }


    return (
        <div>

            <div className=' w-11/12 mx-auto '>
                <div className="hero min-h-screen">
                    <div className="w-full flex-col">
                        <div className=" w-full p-10 ">
                            <form onSubmit={handleSubmit(handleCampaignFormSubmit)} className="w-full">

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>

                                    <input type="text" {...register("title", {
                                        required: "Title is Required"
                                    })} className="p-5 bg-neutral h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
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
                                            required: "Phone number is Required"
                                        })} className="p-5 h-14 rounded-md input border-solid border-2  bg-neutral border-slate-200 w-full" />
                                        {errors.phone && <p className='text-error py-3'>{errors.phone.message}</p>}

                                       
                                    </div>

                                </div>

                                <div className='md:flex justify-between'>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>

                                        <select className="select h-14 rounded-md input border-solid border-2  bg-neutral border-slate-200" {...register("category")}>
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
                                            required: "Target amount is required",
                                            pattern: { value: /^([^.0-]\d+|\d)$/, message: 'Amount must be grater than 0' }
                                        })} className="p-5 h-14 rounded-md input border-solid border-2  bg-neutral border-slate-200 w-full" />
                                        {errors.t_amount && <p className='text-error py-2'>{errors.t_amount.message}</p>}

                                    </div>
                                </div>

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>

                                    <input type="file" {...register("image", {
                                        required: "Image is required",
                                    })} className="file-input file-input-bordered file-input-primary px-0 rounded-md input border-solid border-2  bg-neutral border-slate-200 w-full" />
                                    {errors.image && <p className='text-error py-2'>{errors.image.message}</p>}
                                </div>



                                <div className='md:flex justify-between'>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>

                                        <textarea type="text" {...register("address", {
                                            required: "Address is required",
                                        })} className="p-5 h-36 rounded-md input border-solid border-2 bg-neutral border-slate-200 w-full" />
                                        {errors.address && <p className='text-error py-2'>{errors.address.message}</p>}
                                    </div>


                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>

                                        <textarea type="text" {...register("short_desc", {
                                            required: "Short Description is required",
                                        })} className="p-5 h-36 rounded-md input border-solid border-2 bg-neutral border-slate-200 w-full" />
                                        {errors.short_desc && <p className='text-error py-2'>{errors.short_desc.message}</p>}
                                    </div>
                                </div>

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    {/* <input type="text" placeholder="Title" className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" /> */}
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        // config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={(newContent) => { }}
                                    />
                                </div>


                                <div className="form-control my-10">
                                    <button type='submit' className="py-2 rounded-full w-1/2 lg:w-1/5 mx-auto text-accent bg-primary font-semibold text-lg">Create Campaign</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreateCampaigns;