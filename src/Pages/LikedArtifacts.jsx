import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import MyArtifactsDetails from '../Components/MyArtifactsDetails';
import LikedArtifactsdetails from '../Components/LikedArtifactsdetails';
import DataLoading from '../Components/DataLoading';

const LikedArtifacts = () => {

    const { user } = useAuth()
    const [artifacts, setArtifacts] = useState([])

    const [load, setLoad] = useState(true)

    useEffect(() => {
        document.title = "My Liked Artifacts";


        axios.get(`https://assignment-11-server-green-beta.vercel.app/liked?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
                email: user.email
            }
        })
            .then((res) => {
                setLoad(false)
                setArtifacts(res.data)
            })
            .catch(() => {
                setLoad(false)
            })
    }, [user.accessToken, user.email])




    if (load) {
        return <DataLoading />
    }

    return (
        <div className="min-h-[60vh] bg-background p-6 text-text-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-primary mb-10 text-center">Favourite Artifacts Collection</h2>
                {
                    artifacts.length === 0 ? <p className='py-10 text-2xl text-center text-gray-500'>No Liked Artifacts Found !</p> : <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {artifacts.map(artifact => <LikedArtifactsdetails key={artifact._id} artifact={artifact} />)}
                    </div>
                }
            </div>
        </div>
    );
};

export default LikedArtifacts;