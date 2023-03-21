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


    const handleCampaignFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const tag = form.tag.value;
        const image = form.image.value;
        const date = form.date.value;
        const t_amount = form.t_amount.value;
        const city = form.city.value;
        const address = form.address.value;

        console.log(title, category, tag, image, date, t_amount, city, address, content);
    }


    return (
        <div>

            <div className=' w-11/12 mx-auto '>
                <div className="hero min-h-screen">
                    <div className="w-full flex-col">
                        <div className=" w-full p-10 ">
                            <form onSubmit={handleCampaignFormSubmit} className="w-full">
                                {/* <div className='text-center mb-20'>
                                    <h1 className='text-6xl font-bold font-mono text-slate-600'>Provide Necessary Information</h1>
                                </div> */}

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" placeholder="Title" name='title' className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                </div>

                                <div className='md:flex justify-between'>
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" name='email' className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="text" name='phone' className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div>

                                </div>

                                <div className='md:flex justify-between'>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <select name='category' className="select h-14 rounded-md input border-solid border-2  border-slate-200">
                                            <option disabled selected>Chose campaign type</option>
                                            <option value={'general'}>General</option>
                                            <option value={'featured'}>Featured</option>
                                            <option value={'healthcare'}>Healthcare</option>
                                            <option value={'education'}>Education</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Target Amount</span>
                                        </label>
                                        <input type="text" name='t_amount' placeholder="Target amount" className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div>
                                </div>

                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="file" name='image' className="file-input file-input-bordered file-input-success px-0 rounded-md input border-solid border-2  border-slate-200 w-full " />
                                </div>


                                <div className='md:flex justify-between'>
                                    {/* <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Start Date</span>
                                        </label>
                                        <input type="date" name='date' className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div> */}
                                    {/* <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Target Amount</span>
                                        </label>
                                        <input type="text" name='t_amount' placeholder="Target amount" className="p-4 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                                    </div> */}
                                </div>

                                <div className='md:flex justify-between'>
                                    
                                    <div className="form-control w-full md:w-5/12  my-4">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <textarea type="text"  name='address'  placeholder="City/Dist/post" className="p-4 h-32 rounded-md input border-solid border-2  border-slate-200 w-full" />
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
                                    <button type='submit' className="py-4 rounded-full w-1/2 lg:w-1/5 mx-auto bg-green-500 font-semibold text-lg">Create Campaign</button>
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