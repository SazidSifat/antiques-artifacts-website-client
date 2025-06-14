import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactsCard from '../Components/artifactsCard';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([])

    useEffect(() => {
        document.title = "All Artifacts ";


        axios.get('http://localhost:3000/artifacts')
            .then((res) => setArtifacts(res.data))
    }, [])





    return (
        <div className='py-10  space-y-10'>
            <h2 className="text-3xl lg:text-4xl  font-bold  text-primary text-center ">All Artifacts Collection.</h2>

            <div className='container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 px-10' >
                {
                    artifacts.map(art => <ArtifactsCard art={art} />)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;