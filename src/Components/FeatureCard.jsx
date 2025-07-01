import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react'

const FeatureCard = ({ art }) => {
    const { _id, name, image, description, likeCount } = art
    return (
        <div className="p-6 space-y-6 border border-primary rounded bg-base-200 w-full">

            <div className="flex items-center justify-center bg-base-100 py-4 rounded">
                <img
                    src={image}
                    alt={name || 'Artifact Image'}
                    className="w-[60%] h-[150px] object-cover rounded"
                />
            </div>
            <div className="space-y-2 text-center md:text-left">
                <h2 className="text-2xl font-semibold overflow-hidden h-[35px]">{name}</h2>
                <p className="opacity-80 h-[50px] overflow-hidden text-sm">{description}</p>
            </div>

            <div className="flex justify-between items-center px-1 opacity-80 text-sm">
                <span className="font-semibold">Likes: {likeCount}</span>
            </div>
            <Link to={`/artifacts-details/${_id}`} className="block">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                    className="py-3 bg-secondary w-full rounded hover:opacity-90 text-primary-content"
                >
                    View Details
                </motion.button>
            </Link>
        </div>


    );
};

export default FeatureCard;