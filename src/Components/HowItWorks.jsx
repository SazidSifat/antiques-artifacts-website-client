import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaSearch, FaGlobe } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <section className="py-16 px-4 bg-base-200 border-t border-base-300">
            <div className="max-w-6xl mx-auto space-y-10 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                    How We Preserve the Past
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Our platform bridges modern technology with ancient history. Here's how we make it accessible to everyone:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
                    {/* Step 1 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-base-100 p-6 rounded shadow border border-base-300 space-y-4"
                    >
                        <FaSearch className="text-3xl text-secondary" />
                        <h3 className="text-xl font-semibold">Artifact Discovery</h3>
                        <p className="text-gray-500 text-sm">
                            We collaborate with museums, historians, and contributors to uncover and document historical items from all around the world.
                        </p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-base-100 p-6 rounded shadow border border-base-300 space-y-4"
                    >
                        <FaDatabase className="text-3xl text-secondary" />
                        <h3 className="text-xl font-semibold">Digital Archiving</h3>
                        <p className="text-gray-500 text-sm">
                            Each artifact is digitized with detailed metadata, images, descriptions, and historical context to ensure its story is preserved.
                        </p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-base-100 p-6 rounded shadow border border-base-300 space-y-4"
                    >
                        <FaGlobe className="text-3xl text-secondary" />
                        <h3 className="text-xl font-semibold">Global Access</h3>
                        <p className="text-gray-500 text-sm">
                            Through our platform, anyone can explore, research, and interact with these treasures from any corner of the world.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
