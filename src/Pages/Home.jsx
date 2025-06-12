import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import useAuth from '../Hooks/useAuth';

const Home = () => {
        useEffect(() => { document.title = "Antiques " }, [])

        const {user} = useAuth()
        console.log( user )
    
    return (
        <div className='min-h-screen'>
            <Banner/>
               
        </div>
    );
};

export default Home;