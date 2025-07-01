import React, { useEffect } from 'react';
import Banner from '../Components/Banner';

import FeatureCards from '../Components/FeatureCards';
import All from '../Components/All';
import Loading from '../Components/Loading';
import Gallery from '../Components/Gallery';
import PeopleSays from '../Components/PeopleSays';
import WhyPreserveSection from '../Components/WhyPreserveSection';
import HowItWorks from '../Components/HowItWorks';


const Home = () => {
    useEffect(() => { document.title = "Antiques " }, [])

    return (
        <div className='min-h-screen space-y-16'>
            <Banner />
            <FeatureCards />
            <Gallery />
            <WhyPreserveSection/>
            <HowItWorks/>
            <PeopleSays/>


        </div>
    );
};

export default Home;