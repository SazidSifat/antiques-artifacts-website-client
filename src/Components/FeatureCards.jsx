import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactsCard from './artifactsCard';
import { Link } from 'react-router';

const FeatureCards = () => {
    const [features, setFeatures] = useState([])


    useEffect(() => {

        axios.get('http://localhost:3000/featureCardinitial')
            .then(res => setFeatures(res.data))

    }, [])
    console.log(features)




    return (
        <div className='my-10 container mx-auto space-y-10'>
            <h2 className='text-3xl font-bold text-center text-primary '> Fetures Artifacts Collection.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 px-6 md:px-0'>

                {
                    features.map(art => <ArtifactsCard art={art} />)
                }

            </div>

            <div className='flex items-center justify-center'>
                <Link to='/all-artifacts'><button className='py-3 px-10 bg-secondary rounded hover:opacity-90 cursor-pointer'>See All</button></Link>
            </div>
        </div>
    );
};

export default FeatureCards;