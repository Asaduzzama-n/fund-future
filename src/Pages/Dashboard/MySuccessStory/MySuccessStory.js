import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MySuccessStoryRow from './MySuccessStoryRow';
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion"

const MySuccessStory = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/successStories?email=${user?.email}`;

    const { data: stories = [], refetch } = useQuery({
        queryKey: ['success-stories', user?.email],
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

    const handleStoryDelete = (id) => {

        fetch(`http://localhost:5000/successStories/${id}`, {
            method: 'DELETE',
            headers: {
                // authorization:`Bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("DELETED SUCCESSFULLY !!");
                    refetch();
                } else {
                    toast.error("FAIL TO DELETE!")
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
            <h3 className="text-3xl mb-5">My Stories</h3>
            <div className="overflow-x-auto">
                <table className="table lg:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            {/* <th>Created</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stories &&
                            stories?.map((story, i) => <MySuccessStoryRow key={story._id} handleStoryDelete={handleStoryDelete} story={story} i={i}></MySuccessStoryRow>)

                        }
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default MySuccessStory;