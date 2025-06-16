import Lottie from 'lottie-react';
import React from 'react';
import data from '../assets/lottie/loading.json'

const Loading = () => {
    return (
        <div className='min-h-screen bg-base-300  flex items-center justify-center'>
            <Lottie className='w-20' animationData={data}></Lottie>
        </div>
    );
};

export default Loading;