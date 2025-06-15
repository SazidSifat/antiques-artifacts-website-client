import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import MyArtifactsDetails from '../Components/MyArtifactsDetails';
import LikedArtifactsdetails from '../Components/LikedArtifactsdetails';

const LikedArtifacts = () => {

    const { user } = useAuth()
    const [artifacts, setArtifacts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/liked?email=${user.email}`)
            .then((res) => setArtifacts(res.data))
    }, [])

    console.log(artifacts)




    return (
        <div className="min-h-screen bg-background p-6 text-text-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-primary mb-10 text-center">Favourite Artifacts Collection</h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {artifacts.map(artifact => <LikedArtifactsdetails artifact={artifact} />)}
                </div>
            </div>
        </div>
    );
};

export default LikedArtifacts;