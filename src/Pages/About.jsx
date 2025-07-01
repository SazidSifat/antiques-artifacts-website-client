import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-base-100 text-base-content">
            {/* Hero Section */}
            <section className="py-20 text-center bg-base-200 border-b border-base-300">
                <div className="max-w-4xl mx-auto px-4 space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                        Keeping History Alive
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Our mission is to bring ancient history to modern fingertips — one artifact at a time.
                    </p>
                </div>
            </section>

            {/* Our Purpose */}
            <section className="py-16 px-4  space-y-6 max-w-6xl mx-auto">
                <h2 className="text-3xl  font-bold text-secondary">Why We Exist</h2>
                <p className="text-gray-600 leading-relaxed">
                    History is fragile. Artifacts, scrolls, tools, and remnants of lost civilizations often
                    remain buried, decaying, or inaccessible. Our platform is a digital sanctuary — a place
                    where these treasures are preserved, studied, and shared globally. Whether you're a
                    historian, educator, student, or explorer at heart, we empower you to uncover the stories
                    behind every artifact.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    From rare manuscripts to ancient weaponry, we aim to create the most accessible,
                    community-driven archive of historical objects — responsibly curated and respectfully presented.
                </p>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-base-200 border-y border-base-300">
                <div className="max-w-6xl mx-auto px-4 space-y-10 text-center">
                    <h2 className="text-3xl text-start font-bold text-primary">How Our Platform Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-base-100 p-6 rounded border border-base-300 space-y-3 shadow">
                            <h3 className="text-xl font-semibold">1. Discover</h3>
                            <p className="text-gray-600 text-sm">
                                We collaborate with institutions, archaeologists, and researchers to source and verify artifacts from all over the world.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-base-100 p-6 rounded border border-base-300 space-y-3 shadow">
                            <h3 className="text-xl font-semibold">2. Document</h3>
                            <p className="text-gray-600 text-sm">
                                Each artifact is photographed, categorized, and accompanied with rich historical data for educational and research use.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-base-100 p-6 rounded border border-base-300 space-y-3 shadow">
                            <h3 className="text-xl font-semibold">3. Share</h3>
                            <p className="text-gray-600 text-sm">
                                The digitized artifacts are made publicly available for anyone to explore, helping preserve cultural heritage for future generations.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 max-w-6xl mx-auto px-4 space-y-6">
                <h2 className="text-3xl font-bold text-secondary">What We Stand For</h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                    <li><strong>Preservation:</strong> We protect history by digitizing artifacts before they deteriorate.</li>
                    <li><strong>Accessibility:</strong> We believe knowledge should be available to all, not just locked in archives.</li>
                    <li><strong>Education:</strong> Our tools empower schools, researchers, and lifelong learners.</li>
                    <li><strong>Ethics:</strong> Every artifact is presented with cultural sensitivity and sourced responsibly.</li>
                    <li><strong>Community:</strong> We welcome contributors, from scholars to everyday explorers.</li>
                </ul>
            </section>

            {/* Call to Action */}
            <section className="py-16 text-center bg-secondary text-primary-content">
                <div className="max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold">Join Our Journey</h2>
                    <p className="text-md lg:text-lg">
                        Become part of our mission to preserve and promote the world’s heritage. Whether you contribute, explore, or learn — you belong here.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 bg-primary px-6 py-3 rounded font-semibold text-white"
                    >
                        Explore Artifacts
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default About;
