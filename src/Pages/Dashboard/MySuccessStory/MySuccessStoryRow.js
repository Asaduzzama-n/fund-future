import React from 'react';
import { Link } from 'react-router-dom';

const MySuccessStoryRow = ({ story, i,handleStoryDelete }) => {
    const { _id, title, create_date, status, start_date } = story;

    return (
        <tr>
            <th>
                {i + 1}
            </th>
            <td>
                <div>
                    <div className="font-bold">{title}</div>
                </div>
            </td>
            <td>
                <div className="badge badge-ghost badge-md">{_id}</div>
            </td>
            <td>{new Date(create_date).toLocaleDateString()}</td>
            <th>
                <div className='flex items-center justify-between'>
                    <Link to={`/successStory/${_id}`}><button className="bg-neutral text-primary rounded-full p-1 mx-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </button></Link>
                    <button onClick={()=>handleStoryDelete(_id)} className='bg-neutral text-red-500 p-1 mx-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                </div>
            </th>
        </tr>
    );
};

export default MySuccessStoryRow;