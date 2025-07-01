import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Bounce, ToastContainer, Zoom } from 'react-toastify';
import useAuth from '../Hooks/useAuth';
import Loading from '../Components/Loading';

const MainLaout = () => {
    const { loading } = useAuth()

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={1200}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Zoom}
            />
            <header className=' bg-primary text-primary-content sticky z-50 top-0 '>
                <Navbar />

            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />

            </footer>
        </div>
    );
};

export default MainLaout;