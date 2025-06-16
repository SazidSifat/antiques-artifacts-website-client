import React from 'react';
import { Link } from 'react-router';

import { motion } from 'motion/react'

const FeatureCard = ({ art }) => {
    const { _id, name, image, type, description, likeCount } = art
    return (

        <div className='p-6 space-y-6 border border-primary rounded bg-base-200'>
            <div className='flex items-center justify-center bg-base-100 py-4 rounded'>
                <img src={image} alt="" className='w-[50%] h-[220px] rounded' />
            </div>
            <div className='  space-y-2 md:space-y-4'>
                <div className='md:space-y-1'>
                    <h1 className='text-2xl'>{name}.</h1>
                    <p className='opacity-80 h-[50px] overflow-hidden'>{description}</p>
                </div>
                <hr className='text-base-300' />
                <div className='flex flex-col md:flex-row md:items-center justify-between md:px-3 opacity-80 '>
                    <span className='font-semibold'>Likes : {likeCount}</span>
                </div>
                <hr className='text-base-300' />

                <Link to={`/artifacts-details/${_id}`}>
                    <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .99 }} className='py-3 bg-secondary w-full rounded hover:opacity-90 text-primary-content'>View Details</motion.button>
                </Link>


            </div>

        </div>

    );
};

export default FeatureCard;