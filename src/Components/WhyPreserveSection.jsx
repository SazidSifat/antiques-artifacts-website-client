import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const WhyPreserveSection = () => {
    const imageUrl = "https://i.ibb.co/fz1p7pVQ/Default-A-wideangle-photo-of-ancient-stone-ruins-partially-cov-0.jpg";

    return (
        <section className="py-16 px-4 bg-base-100 border-t border-base-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.06 }}
                >
                    <motion.img
                        src={imageUrl}
                        alt="Wide-angle view of ancient stone ruins partially covered with greenery"
                        loading="lazy"
                        className="w-full h-[300px] object-cover rounded-lg shadow-md"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                        Why Preserve the Past?
                    </h2>
                    <p className="text-base text-gray-500 leading-relaxed">
                        Every artifact tells a story — of civilizations, inventions, conflicts, and cultures.
                        Our mission is to digitally preserve these fragments of history and make them accessible
                        to everyone. Whether you're a historian, student, or curious mind, explore a growing archive
                        of humanity’s greatest discoveries.
                    </p>
                    <Link to="/all-artifacts">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-secondary text-primary-content px-6 py-3 rounded shadow hover:opacity-90"
                        >
                            Explore Collection
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyPreserveSection;
