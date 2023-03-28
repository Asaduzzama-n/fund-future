import JoditEditor from 'jodit-react';
import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const CreateStory = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [content2, setContent2] = useState('');
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCreateStory = (data) => {

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

                                        <input type="text" {...register("image1", {
                                            required: "Image url is required",
                                        })} className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                        {errors.image1 && <p className='text-red-500 py-2'>{errors.image1.message}</p>}

                                    
                                    </div>

                                    <div className="form-control w-full md:w-5/12 my-4">
                                        <label className="label">
                                            <span className="label-text">Image 2</span>
                                        </label>

                                        <input type="text" {...register("image2", {
                                            required: "Image url is required",
                                        })} className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                        {errors.image2 && <p className='text-red-500 py-2'>{errors.image2.message}</p>}

                                        {/* <input type="text" name='image' placeholder='URL' className=" px-2 file-input-success px-0 rounded-md input border-solid border-2  border-slate-200 w-full " /> */}
                                        {/* <input type="file" name='image' className="file-input file-input-bordered file-input-success px-0 rounded-md input border-solid border-2  border-slate-200 w-full " /> */}
                                    </div>
                                </div>

                            



                                <div className=''>

                                <div className="form-control w-full  my-10">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
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

                                <div className="form-control w-full my-10">
                                    <label className="label">
                                        <span className="label-text">Full description</span>
                                    </label>
                                    {/* <input type="text" placeholder="Title" className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" /> */}
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