import React, { useEffect } from 'react';
import Banner from '../Components/Banner';

import FeatureCards from '../Components/FeatureCards';
import All from '../Components/All';
import Loading from '../Components/Loading';
import Gallery from '../Components/Gallery';
import PeopleSays from '../Components/PeopleSays';


const Home = () => {
    useEffect(() => { document.title = "Antiques " }, [])

    return (
        <div className='min-h-screen'>
            <Banner />
            <FeatureCards />
            <Gallery />
            <PeopleSays/>


        </div>
    );
};

export default Home;