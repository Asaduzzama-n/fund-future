import React from 'react';
import CharityCard from './CharityCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const Charity = () => {


    const { data: charities = [], isLoading } = useQuery({
        queryKey: ['charities'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/charity');
            const data = await res.json();
            return data;
        }
    })


    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(()=>{
        console.log("use effect hook, inView = ",inView);
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 3, bounce: 0.3
                }
            });
        }
        if(!inView){
            animation.start({x: '100vw'})
        }

    },[animation, inView]);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div ref={ref}>
            <motion.div 
                className='bg-neutral p-10 my-10 rounded-md'
                animate={animation}
            >
                <h2 className='text-slate-600 text-3xl lg:text-4xl text-center  font-bold mb-5'>Charity</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        charities.map(charity => <CharityCard key={charity._id} charity={charity}></CharityCard>)
                    }
                </div>
            </motion.div>
        </div>
    );
};

export default Charity;