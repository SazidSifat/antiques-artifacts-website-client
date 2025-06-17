import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Masonry from 'react-masonry-css';

const images = [

    {
        src: "https://i.ibb.co/nNM8BQYM/photo-1642609628851-72494244d803.jpg",
    },
    {
        src: "https://i.ibb.co/8LcDqTt8/photo-1745655604897-e5182d810836.jpg"
    },
    {
        src: "https://i.ibb.co/WX8YYV9/photo-1695902263765-9636769b5833.jpg",

    },
    // 
    {
        src: "https://i.ibb.co/ZzhH6btj/photo-1642609629489-3fa5588d45de.jpg",
    },

    {
        src: "https://i.ibb.co/hJDLpNc8/photo-1695902263716-b9791bcc39cd.jpg",

    },
    {
        src: "https://i.ibb.co/q3nx8YMs/photo-1742495212524-e1b948aa089d.jpg",
    },

    {
        src: "https://i.ibb.co/NdhX2b0H/photo-1695902263752-992a68bb8a5e.jpg",

    },
    {
        src: "https://i.ibb.co/rKZM94Lx/photo-1695901742041-5b56f69b17a9.jpg"
    }

];

const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
};

const Gallery = () => {
    return (
        <div className="container mx-auto py-10 space-y-10 px-6 md:px-0" >

            <h2 className='text-4xl text-center font-bold '>Gallery. </h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex  gap-6"
                columnClassName="flex flex-col gap-6"
            >
                {images.map(({ src }, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                    >
                        <Zoom><img src={src} className="w-full h-auto rounded hover:grayscale" loading="lazy"
                        /></Zoom>
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default Gallery;
