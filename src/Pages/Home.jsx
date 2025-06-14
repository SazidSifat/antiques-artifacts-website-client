import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import useAuth from '../Hooks/useAuth';
import FeatureCards from '../Components/FeatureCards';
import All from '../Components/All';

const Home = () => {
    useEffect(() => { document.title = "Antiques " }, [])

    const { user } = useAuth()
    console.log(user)

    return (
        <div className='min-h-screen'>
            <Banner />
            <FeatureCards />

        </div>
    );
};

export default Home;