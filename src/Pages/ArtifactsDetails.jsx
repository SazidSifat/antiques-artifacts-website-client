import React from 'react';
import { useLoaderData } from 'react-router';

const ArtifactsDetails = () => {
    const liked = true

    const { data } = useLoaderData()
    console.log(data)


    const { _id, name, image, context, discoveredAt, createdAt, description, discoveredBy, location, type, userEmail, userName, likeCount } = data;

    return (
        <div className='container mx-auto px-24 bg-base-200 my-10 rounded'>
            <div className='px-6 py-10 space-y-6'>

                <div className='grid grid-cols-3 gap-10'>
                    <div className=' flex items-center justify-center py-6 rounded '>
                        <img src={image} alt="" className='w-[75%] h-[410px] rounded' />
                    </div>
                    <div className='col-span-2 py-6 space-y-2'>
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
                        <p className='py-1 '><span className='text-secondary font-bold'>Total Likes : </span><span  >{likeCount}</span></p>
                        <button className='py-3 px-8 bg-primary text-primary-content  rounded'>Like</button>

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