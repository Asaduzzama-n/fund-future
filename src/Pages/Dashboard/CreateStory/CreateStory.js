import JoditEditor from 'jodit-react';
import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const CreateStory = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [content2, setContent2] = useState('');
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const handleCreateStory = (data) => {
        const create_date = new Date();

        const image = data.image1[0];

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
                    const story = {
                        title: data.title,
                        st_mail: user?.email,
                        st_name: user?.displayName,
                        st_phone: data.phone,
                        image1: imgData.data.url,
                        image2: imgData.data.url,
                        short_desc: content,
                        description: content2,
                        create_date: create_date,
                    }
                    // Save campaign data to database-->

                    fetch('http://localhost:5000/successStory', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(story)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Your story has been created successfully");
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
            <div className=' md:w-9/12 md:mx-auto lg:mx-10 '>
                <div className="hero min-h-screen">
                    <div className="w-full flex-col">
                        <div className=" w-full p-10 ">
                            <form onSubmit={handleSubmit(handleCreateStory)} className="w-full">

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>

                                    <input type="text" {...register("title", {
                                        required: "Title is Required"
                                    })} className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    {errors.title && <p className='text-red-500 py-3'>{errors.title.message}</p>}

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
                                        })} className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                        {errors.phone && <p className='text-red-500 py-3'>{errors.phone.message}</p>}

                                    </div>

                                </div>

                                <div className='md:flex justify-between'>

                                    <div className="form-control w-full md:w-5/12 my-4">
                                        <label className="label">
                                            <span className="label-text">Image 1</span>
                                        </label>

                                        <input type="file" {...register("image1", {
                                            required: "Image url is required",
                                        })} className="file-input file-input-bordered file-input-success px-0 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                        {errors.image1 && <p className='text-red-500 py-2'>{errors.image1.message}</p>}

                                    
                                    </div>

                                    {/* <div className="form-control w-full md:w-5/12 my-4">
                                        <label className="label">
                                            <span className="label-text">Image 2</span>
                                        </label>

                                        <input type="file" {...register("image2", {
                                            required: "Image url is required",
                                        })} className="file-input file-input-bordered file-input-success px-0 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                        {errors.image2 && <p className='text-red-500 py-2'>{errors.image2.message}</p>}

                                        
                                    </div> */}
                                </div>

                            



                                <div className=''>

                                <div className="form-control w-full  my-10">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                  
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                     
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={(newContent) => { }}
                                    />
                                </div>

                                <div className="form-control w-full my-10">
                                    <label className="label">
                                        <span className="label-text">Full description</span>
                                    </label>
                                 
                                    <JoditEditor
                                        ref={editor}
                                        value={content2}
                                        // config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={(newContent) => setContent2(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={(newContent) => { }}
                                    />
                                </div>

                                </div>


                                <div className="form-control my-10">
                                    <button type='submit' className="py-4 rounded-full w-1/2 lg:w-1/5 mx-auto bg-green-500 font-semibold text-lg">Create Story</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateStory;