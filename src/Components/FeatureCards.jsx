import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactsCard from './artifactsCard';
import { Link } from 'react-router';
import FeatureCard from './FeatureCard';
import { motion } from 'motion/react';

const FeatureCards = () => {
    const [features, setFeatures] = useState([])


    useEffect(() => {

        axios.get('http://localhost:3000/featureCardinitial')
            .then(res => setFeatures(res.data))

    }, [])





    return (
        <div className='my-10 container mx-auto space-y-10'>
            <h2 className='text-3xl font-bold text-center text-primary '> Fetures Artifacts Collection.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 px-6 md:px-0'>

                {
                    features.map(art => <FeatureCard key={art._id} art={art} />)
                }

            </div>

            <div className='flex items-center justify-center'>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} className='py-3 px-16 bg-secondary text-secondary-content rounded hover:opacity-90 cursor-pointer'>
                    <Link to='/all-artifacts'>See All</Link>
                </motion.button>
            </div>
        </div>
    );
};

export default FeatureCards;