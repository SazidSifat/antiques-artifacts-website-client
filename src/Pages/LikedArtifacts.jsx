import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import DataLoading from '../Components/DataLoading';

import LikedArtifactsdetails from '../Components/LikedArtifactsdetails'

const LikedArtifacts = () => {
    const { user } = useAuth();
    const [artifacts, setArtifacts] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        if (!user?.email || !user?.accessToken) return;

        document.title = "My Liked Artifacts";

        axios.get(`https://assignment-11-server-green-beta.vercel.app/liked?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
                email: user.email
            }
        })
            .then((res) => {
                setArtifacts(res.data);
            })
            .catch(() => {
                
            })
            .finally(() => {
                setLoad(false);
            });
    }, [user]);

    if (load) {
        return <DataLoading />;
    }

    return (
        <div className="min-h-[60vh] bg-background p-6 text-text-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
                    Favourite Artifacts Collection
                </h2>

                {artifacts.length === 0 ? (
                    <p className="py-10 text-2xl text-center text-gray-500">
                        No Liked Artifacts Found!
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border border-primary rounded-lg overflow-hidden">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="px-4 py-3">Image</th>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Tyoe</th>
                                    <th className="px-4 py-3">Created</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-base-100">
                                {artifacts.map((artifact) => (

                                    <LikedArtifactsdetails artifact={artifact} />

                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LikedArtifacts;
