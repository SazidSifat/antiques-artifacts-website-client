import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import DataLoading from '../Components/DataLoading';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { motion } from 'motion/react';

const ArtifactsDetails = () => {
    const { user } = useAuth();
    const params = useParams()
    const [load, setLoad] = useState(true)


    const [data, setData] = useState({})
    const { _id, name, image, context, discoveredAt, createdAt, description, discoveredBy, location, type, userEmail, userName, likedBy } = data;

    const [likeCounts, setLikeCounts] = useState(data.likeCount || 0)
    const [liketoggle, setLikeToggle] = useState(false)

    useEffect(() => {

           document.title = "Artifacts Details"
        
        axios.get(`https://assignment-11-server-green-beta.vercel.app/artifacts/${params.id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
                email: user.email
            }


        })
            .then((res) => {
                const artifact = res.data;
                setLoad(false)
                setData(artifact);
                setLikeCounts(artifact.likeCount || 0);
                setLikeToggle(artifact.likedBy?.includes(user.email));
            })
            .catch((err) => {

            });
    }, [params.id, user.accessToken, user.email]);

    // liked
    const liked = () => {
        axios.patch(` https://assignment-11-server-green-beta.vercel.app/like-artifacts/${data._id}`, { email: user.email }, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
                email: user.email
            }

        })
            .then(res => {
                if (res.data.like) {
                    setLikeCounts(res.data.likeCount);
                    setLikeToggle(prev => !prev)
                } else {
                    setLikeCounts(res.data.likeCount);
                    setLikeToggle(prev => !prev)
                }
            })
    }


    if (load) {
        return <DataLoading />
    }

    return (
        <div className='container mx-auto px-6 md:px-24 bg-base-200 my-10 rounded'>
            <div className='lg:px-6 py-10 space-y-6'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className=' flex items-center justify-center py-6 rounded '>
                        <img src={image} alt="" className='lg:w-[75%] h-[410px] rounded' />
                    </div>
                    <div className='lg:col-span-2 py-6 space-y-2'>
                        <div>
                            <h1 className='text-4xl text-secondary'>{name}.</h1>
                            <p className='py-1 '><span className='text-secondary font-bold'>Type : </span><span className='text-sm'>{type}</span></p>
                        </div>
                        <hr className='text-base-300 ' />
                        <div>
                            <p className='py-1 '><span className='text-secondary font-bold'>Created At : </span><span >{createdAt}</span></p>
                            <p className='py-1 '><span className='text-secondary font-bold'>Discovered At : </span><span >{discoveredAt}</span></p>
                            <p className='py-1 '><span className='text-secondary font-bold'>Discovered By : </span><span >{discoveredBy}</span></p>
                            <p className='py-1 '><span className='text-secondary font-bold'>Current Location : </span><span  >{location}</span></p>
                        </div>
                        <hr className='text-base-300 ' />
                        <div className=''>
                            <p className='font-black text-secondary'>Added By:</p>
                            <p>{userName} <span className='text-sm'>({userEmail})</span></p>
                        </div>
                        <hr className='text-base-300 ' />
                        <p className='py-1 '><span className='text-secondary font-bold'>Total Likes : </span><span  >{likeCounts}</span></p>
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .99 }} onClick={liked} className={`py-3 px-8 cursor-pointer ${liketoggle ? "bg-error/80" : "bg-primary"} text-primary-content  rounded`}>{liketoggle ? <p className='flex items-center justify-center gap-1' >Dislike < AiFillDislike /></p> : <p className='flex items-center justify-center gap-1' >Like < AiFillLike /></p>}</motion.button>

                    </div>
                </div>
                <hr className='text-base-300 ' />

                <div>
                    <p className='text-xl font-medium text-secondary'>Historical Context:</p>
                    <p>{context}</p>
                </div>
                <hr className='text-base-300 ' />
                <div>
                    <p className='text-xl font-medium text-secondary'>Short Description:</p>
                    <p>{description}</p>
                </div>



            </div>


        </div>
    )
};

export default ArtifactsDetails;