import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const ArtifactsCard = ({ art }) => {

    const { _id, name, image, context, discoveredAt, createdAt } = art


    const half = Math.floor(context.length / 2)
    const halfContext = context.slice(0, half) + "..."

    






    return (

        <div className="p-5 bg-base-200 border border-primary rounded-lg flex flex-col justify-between h-full shadow-sm">
            <div className="bg-base-100 rounded-md flex justify-center items-center overflow-hidden h-[25vh] mb-4">
                <img
                    src={image}
                    alt={name}
                    className="h-full object-cover rounded"
                />
            </div>


            <div className="flex flex-col justify-between flex-1 space-y-4">

                <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-center md:text-left truncate">
                        {name}
                    </h2>
                    <p
                        className="text-sm text-gray-500 h-[50px] overflow-hidden text-center md:text-left"
                    >
                        {halfContext}
                    </p>
                </div>

                <hr className="border-base-300" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 text-sm text-gray-600 px-1">
                    <span><strong>Created:</strong> {createdAt}</span>
                    <span><strong>Discovered:</strong> {discoveredAt}</span>
                </div>

                <hr className="border-base-300" />

                <Link to={`/artifacts-details/${_id}`} className="mt-auto">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded bg-secondary text-primary-content font-medium hover:opacity-90"
                    >
                        View Details
                    </motion.button>
                </Link>
            </div>
        </div>

    );
};

export default ArtifactsCard;