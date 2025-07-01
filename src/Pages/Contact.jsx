import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="bg-base-100 text-base-content py-20 px-4">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Get in Touch With Us
                </h1>
                <p className="text-gray-600 text-md">
                    Have questions, suggestions, or collaboration ideas? Reach out and we’ll get back to you as soon as possible.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-base-200 p-8 rounded-lg border border-base-300 shadow-md space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-semibold">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full input input-bordered bg-base-100"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full input input-bordered bg-base-100"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Subject</label>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full input input-bordered bg-base-100"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Your message..."
                            className="w-full textarea textarea-bordered bg-base-100"
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-secondary text-primary-content py-3 px-6 rounded w-full md:w-fit"
                    >
                        Send Message
                    </motion.button>
                </motion.form>

                {/* Contact Info Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-secondary">Contact Information</h2>
                        <p className="text-gray-600">
                            We'd love to hear from you — whether you're a researcher, collector, or just a curious mind.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <FiMapPin className="text-xl text-secondary mt-1" />
                        <div>
                            <h4 className="font-semibold">Address</h4>
                            <p className="text-gray-600 text-sm">
                                Zero Point,Shaheb Bazar<br />
                                Rajshahi, Bangladesh
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FiPhone className="text-xl text-secondary mt-1" />
                        <div>
                            <h4 className="font-semibold">Phone</h4>
                            <p className="text-gray-600 text-sm">
                                +880 1234 567 890
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FiMail className="text-xl text-secondary mt-1" />
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <p className="text-gray-600 text-sm">
                                contact@antiques.com
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
