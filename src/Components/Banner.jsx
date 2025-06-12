import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion, scale } from "motion/react"
import { Slide } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div className=' '>
            <Swiper
                navigation={true}
                pagination={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="mySwiper min-h-[90vh]">
                {/* one */}
                <SwiperSlide className=''>
                    <div style={{
                        background: "linear-gradient(#00000000  0%,  #222222D4 110%), url('https://i.ibb.co/23LjDM1D/v1-1.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }} className='h-[90vh] flex  items-center justify-center'>

                        <div className='flex items-center flex-col justify-center gap-4 overflow-hidden py-6'>

                            <Slide duration={1500} direction='down' className=''>
                                <h1 className='text-gray-200 text-4xl lg:text-7xl text-center'>
                                    Uncover the Secrets of <br /> Lost Artifacts
                                </h1>
                            </Slide>

                            <Slide duration={1500} direction='up'>
                                <motion.button
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='py-3 px-8 md:px-10 border rounded border-secondary text-white  hover:bg-secondary'>
                                    Learn More
                                </motion.button>
                            </Slide>

                        </div>



                    </div>
                </SwiperSlide>


                {/* two */}
                <SwiperSlide>
                    <div style={{
                        background: "linear-gradient(#00000000  0%,  #222222D4 110%), url('https://i.ibb.co/MDcrr8S3/v4-1.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }} className='h-[90vh] flex  items-center justify-center'>
                        <div className='flex items-center flex-col justify-center gap-4 overflow-hidden py-6'>

                            <Slide direction='down' duration={1500} className=''>
                                <h1 className='text-gray-200 text-4xl lg:text-7xl text-center'>
                                    Tracking Ancient Artifacts <br /> Around the World
                                </h1>
                            </Slide>

                            <Slide duration={1500} direction='up'>
                                <motion.button
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='py-3 px-8 md:px-10 border rounded border-secondary text-white  hover:bg-secondary'>
                                    Learn More
                                </motion.button>
                            </Slide>

                        </div>




                    </div>
                </SwiperSlide>


                {/* three */}
                <SwiperSlide>
                    <div style={{
                        background: "linear-gradient(#00000000  0%,  #222222D4 110%), url('https://i.ibb.co/jP58xy7x/v1-3.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }} className='h-[90vh] flex  items-center justify-center'>
                        <div className='flex items-center flex-col justify-center gap-4 overflow-hidden py-6'>

                            <Slide duration={1500} direction='down' className=''>
                                <h1 className='text-gray-200 text-4xl lg:text-7xl text-center'>
                                   Preserving History Through <br /> Every Artifact
                                </h1>
                            </Slide>

                            <Slide duration={1500} direction='up'>
                                <motion.button
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='py-3 px-8 md:px-10 border rounded border-secondary text-white  hover:bg-secondary'>
                                    Learn More
                                </motion.button>
                            </Slide>

                        </div>




                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;