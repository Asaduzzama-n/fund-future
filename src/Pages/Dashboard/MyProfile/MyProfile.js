import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from "framer-motion"
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const MyProfile = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [edit, setEdit] = useState(false);


    const url = `http://localhost:5000/users?email=${user?.email}`;

    const { data: loggedUser = [],refetch } = useQuery({
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


    // console.log(loggedUser);

    const handleProfileUpdate = (data) => {

        const image = data.profile[0];
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
                    const userInfo = {
                        name: user?.displayName,
                        email: user?.email,
                        phone: data.phone,
                        profile: imgData.data.url,
                        address: data.address,
                    }
                    // Save campaign data to database-->

                    fetch(`http://localhost:5000/users?email=${user?.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                toast.success("Your profile has been updated successfully");
                                refetch();
                            } else {
                                toast.error("Something went wrong")
                            }
                        })
                        .catch(err => console.error(err));
                }
            })

    }


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='w-11/12 mx-auto'>
            <div>
                <h3 className='text-primary font-semibold text-3xl my-5'>My Information</h3>

            </div>
            <div className="w-28 mx-auto  rounded-full my-5">
                <img className='w-28 h-28  rounded-full' src={loggedUser[0]?.profile} alt='' />
            </div>
            <form onSubmit={handleSubmit(handleProfileUpdate)} className="w-full">


                <div className='md:flex justify-between'>
                    <div className="form-control w-full md:w-1/2 md:mr-4 my-4">
                        <label className="label ">
                            <span className="label-text text-lg font-semibold text-accent">Email</span>
                        </label>

                        <input type="text" {...register("email", {})} defaultValue={user?.email} disabled className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />

                    </div>

                    <div className="form-control w-full md:w-1/2 md:ml-4  my-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-accent">Name</span>
                        </label>
                        <input type="text" {...register("name", {})} defaultValue={user?.displayName} disabled className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                    </div>

                </div>


                <div className='md:flex justify-between items-center'>
                    <div className="form-control w-full md:w-1/2 md:mr-4 my-4">
                        <label className="label ">
                            <span className="label-text text-lg font-semibold text-accent">Phone</span>
                        </label>

                        <input type="number" {...register("phone", {
                            required: "phone is required",
                        })} defaultValue={loggedUser[0]?.phone}
                            disabled={!edit}

                            className="p-5 h-14 rounded-md input border-solid border-2  border-slate-200 w-full" />
                        {errors.phone && <p className='text-error py-2'>{errors.phone.message}</p>}

                    </div>

                    <div className="form-control w-full md:w-1/2 md:ml-4  my-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-accent">Image</span>
                        </label>
                        <input type="file" {...register("profile", {
                            required: "profile picture is required",
                        })}
                            disabled={!edit}
                            className="file-input file-input-bordered file-input-primary px-0 rounded-md input border-solid border-2  border-slate-200 w-full" />
                        {errors.profile && <p className='text-error py-2'>{errors.profile.message}</p>}

                    </div>

                </div>

                {/* <div className='my-5'>
                    <label className="label">
                        <span className="label-text text-lg font-semibold text-accent">Bio</span>
                    </label>
                    <textarea {...register("bio", {})} rows='5' className="p-5  rounded-md input border-solid border-2 h-32 border-slate-200 w-full" />
                </div> */}
                <div className='my-5'>
                    <label className="label">
                        <span className="label-text text-lg font-semibold text-accent">Address</span>
                    </label>
                    <textarea {...register("address", {
                        required: "address picture is required",
                    })}
                        defaultValue={loggedUser[0]?.address}
                        disabled={!edit}
                        className="p-5  rounded-md input border-solid border-2 h-32 border-slate-200 w-full" />
                    {errors.address && <p className='text-error py-2'>{errors.address.message}</p>}
                </div>
                <div className="form-control my-10">
                    {edit && <div className='text-end'>
                        <button type='submit' className="py-2 rounded-sm  px-2 mx-2 border-2 border-primary text-primary text-xl hover:bg-primary hover:text-white hover:border-none font-bold">UPDATE</button>
                        <button onClick={() => setEdit(false)} className="py-2 rounded-sm px-2   border-2 border-error mx-2 text-error text-xl hover:bg-red-200 hover:border-none font-bold">CANCEL</button>
                    </div>
                    }
                </div>

            </form>
            <div className='text-end'>
                {edit === false && <button onClick={() => setEdit(true)} className="py-2 rounded-sm  px-2 mx-2 border-2 border-primary text-primary text-xl hover:bg-primary hover:text-white hover:border-none font-bold">EDIT</button>}
            </div>

        </motion.div>
    );
};

export default MyProfile;