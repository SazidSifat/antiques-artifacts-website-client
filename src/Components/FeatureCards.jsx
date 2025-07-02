import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactsCard from './artifactsCard';
import { Link, Links } from 'react-router';
import FeatureCard from './FeatureCard';
import { motion } from 'motion/react';
import DataLoading from './DataLoading';
import { Fade } from 'react-awesome-reveal';

const FeatureCards = () => {
    const [features, setFeatures] = useState([])

    const [load, setLoad] = useState(true)


    useEffect(() => {

        axios.get(' https://assignment-11-server-green-beta.vercel.app/featureCardinitial')
            .then(res => {
                setLoad(false)
                setFeatures(res.data)
            }).catch(() => {
                setLoad(false)
            })

    }, [])

    if (load) {
        return <DataLoading />
    }



    return (
        <div className=' container mx-auto space-y-10'>
            <h2 className='text-3xl font-bold text-center text-primary '> Fetures Artifacts Collection.</h2>
            <Fade>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 px-6 md:px-0'>

                    {
                        features.map(art => <FeatureCard key={art._id} art={art} />)
                    }

                </div>
            </Fade>

            <div className='flex items-center justify-center'>
                <Link to='all-artifacts'><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} className='py-3 px-16 bg-secondary text-secondary-content rounded hover:opacity-90 cursor-pointer'>
                    See All
                </motion.button></Link>
            </div>
        </div>
    );
};

export default FeatureCards;