import React, { useEffect } from 'react';
import Banner from '../Components/Banner';

import FeatureCards from '../Components/FeatureCards';
import All from '../Components/All';

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