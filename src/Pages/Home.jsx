import React, { useEffect } from 'react';
import Banner from '../Components/Banner';

import FeatureCards from '../Components/FeatureCards';
import All from '../Components/All';
import Loading from '../Components/Loading';


const Home = () => {
    useEffect(() => { document.title = "Antiques " }, [])

    return (
        <div className='min-h-screen'>
            <Banner />
            <FeatureCards />


        </div>
    );
};

export default Home;