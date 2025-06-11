import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Bounce, ToastContainer } from 'react-toastify';

const MainLaout = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <header className='border-b border-base-300'>
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