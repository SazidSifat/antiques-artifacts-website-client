import Lottie from 'lottie-react';
import React from 'react';

import animate from '../assets/lottie/error.json'
import { Link } from 'react-router';

const error_404 = () => {
    return (
        <div className='min-h-[60vh] flex flex-col gap-10 items-center justify-center'>
            <div className='flex w-1/2 items-center justify-center '>
                <Lottie animationData={animate} className='w-1/2' />
            </div>
            <div className='flex flex-col items-center gap-6 justify-center'>
                <h2 className='text-4xl font-bold text-primary' >No Page Found.</h2>
                <Link to='/' className='py-3 px-10 bg-secondary space-y-6 rounded text-secondary-content'>Back To Home</Link>
            </div>
        </div>
    );
};

export default error_404;