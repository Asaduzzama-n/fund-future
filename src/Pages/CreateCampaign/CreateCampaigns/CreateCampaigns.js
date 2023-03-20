import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';


const CreateCampaigns = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    // const config = useMemo(
    //     {
    //         readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    //         placeholder: placeholder || 'Start typings...'
    //     },
    //     [placeholder]
    // );

    return (
        <div>

            <div className=' w-11/12 mx-auto '>
                <div className="hero min-h-screen">
                    <div className="w-full flex-col">
                        <div className=" w-full p-10 ">
                            <form className="w-full">
                                <div className='text-center mb-20'>
                                    <h1 className='text-6xl font-bold font-mono text-slate-600'>Provide Necessary Information</h1>
                                </div>

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" placeholder="Title" className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                </div>

                                <div className='md:flex justify-between'>
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <select className="select h-14 rounded-md input border-solid border-2  border-slate-200">
                                            <option disabled selected>Chose campaign type</option>
                                            <option>General</option>
                                            <option>Featured</option>
                                            <option>Healthcare</option>
                                            <option>Education</option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Tag</span>
                                        </label>
                                        <input type="text" placeholder="Tag" className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div>
                                </div>

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered file-input-success px-0 rounded-md input border-solid border-2  border-slate-200 w-full " />
                                </div>


                                <div className='md:flex justify-between'>
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Start Date</span>
                                        </label>
                                        <input type="date" className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div>
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Target Amount</span>
                                        </label>
                                        <input type="text" placeholder="Target amount" className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div>
                                </div>

                                <div className='md:flex justify-between'>
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">City</span>
                                        </label>
                                        <input type="text" className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div>
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="Address" className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
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
                                    <button className="py-4 rounded-full w-1/2 lg:w-1/5 mx-auto bg-green-500 font-semibold text-lg">Create Campaign</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {
                content
            }
        </div>
    );
};

export default CreateCampaigns;