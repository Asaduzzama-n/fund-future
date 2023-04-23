import React from 'react';
import CharityCard from './CharityCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const Charity = () => {


    const {data:charities = [], refetch, isLoading } = useQuery({
        queryKey: ['charities'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/charity');
            const data = await res.json();
            return data;
        }
    })


    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='bg-neutral p-10 my-10 rounded-md'>
            <h2 className='text-slate-600 text-3xl lg:text-4xl text-center  font-bold mb-5'>Charity</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    charities.map(charity => <CharityCard key={charity._id} charity={charity}></CharityCard>)
                }
            </div>
        </div>
    );
};

export default Charity;