import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


const testimonials = [
    {
        name: "Sarah M.",
        role: "Historian",
        feedback:
            "This platform has been incredible for discovering rare artifacts and connecting with fellow history enthusiasts.",
    },
    {
        name: "John D.",
        role: "Archaeology Student",
        feedback:
            "The detailed descriptions and user-friendly design make exploring artifacts enjoyable and educational.",
    },
    {
        name: "Anika R.",
        role: "Researcher",
        feedback:
            "I love how easy it is to add and share my own findings. The community is supportive and passionate.",
    },
    {
        name: "David L.",
        role: "Museum Curator",
        feedback:
            "Finally, a digital space that brings historical treasures to light. A fantastic resource for curators and enthusiasts alike.",
    },
    {
        name: "Emily T.",
        role: "History Teacher",
        feedback:
            "My students are fascinated by what we find here. It adds depth and curiosity to our lessons like never before.",
    },
    {
        name: "Karim H.",
        role: "Collector",
        feedback:
            "The artifact showcase is sleek and well-designed. Uploading my collection was effortless and rewarding.",
    },
    {
        name: "Lina P.",
        role: "Cultural Anthropologist",
        feedback:
            "A well-thought-out platform that helps preserve and promote historical understanding. Truly a gem for researchers.",
    },
    {
        name: "Marcus B.",
        role: "Graduate Student",
        feedback:
            "I used this platform for my thesis research. The artifact documentation is thorough and very helpful.",
    }
];



const PeopleSays = () => {
    return (
        <div className="py-10">
            <section className="container mx-auto py-16 px-6 bg-base-300 rounded shadow-lg text-base-content/80">
                <h2
                    className="text-4xl font-bold text-center mb-6"
                >
                    What People Say About Us
                </h2>

                <p
                    className="text-center max-w-2xl mx-auto mb-12 font-medium drop-shadow-sm"

                >
                    Hear from our community and users who cherish history with us.
                </p>

                <Swiper
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    autoplay={{ delay: 2000 }}
                    className="pb-8"
                >
                    {testimonials.map(({ name, role, feedback }, i) => (
                        <SwiperSlide key={i}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="rounded  bg-base-200 text-base-content p-6  flex flex-col justify-between transition-all duration-300"
                            >
                                <p className="italic text-lg mb-6">“{feedback}”</p>
                                <div>
                                    <h3 className="font-semibold text-xl">{name}</h3>
                                    <p className="text-sm">{role}</p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};


export default PeopleSays;