import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from 'react-icons/rx';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';
import ThemeControler from '../Theme/ThemeControler';


const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [drop, setDrop] = useState(false)
    const { user, signOutUser } = useAuth();

    const handlesignOutUser = () => {
        signOutUser()
            .then(() => toast.success("Sign Out SucccesFul "))
            .catch((err) => {
                console.log(err);
            })
    }


    const links = <>
        <NavLink onClick={() => setToggle(!toggle)} className='py-1' to='/'>Home</NavLink>
        <NavLink onClick={() => setToggle(!toggle)} className='py-1' to='/all-artifacts'>All Artifacts</NavLink>
        <NavLink onClick={() => setToggle(!toggle)} className='py-1' to='/add-artifacts'>Add Artifacts</NavLink>
    </>

    return (
        <div className='container mx-auto py-6 flex items-center justify-between  px-4 md:px-0 '>

            <div onClick={() => setToggle(!toggle)} className='lg:hidden'>
                <HiOutlineMenuAlt2 size={30} />
            </div>
            <div className='place-items-center '>
                <Link to='/' className='text-2xl md:text-3xl font-medium  heading'>
                    Antiques<span className='text-primary'>.</span>
                </Link>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex items-center justify-center gap-6 heading font-semibold'>
                    {
                        links
                    }
                </ul>
            </div>
            <div className='flex items-center justify-center '>
                <ThemeControler />
                {
                    user ? <div className='p-0.5  cursor-pointer rounded-full bg-secondary flex items-center justify-center'>
                        <img onClick={() => { setDrop(!drop) }} referrerPolicy='no-referrer' src={user.photoURL} alt='Image' className='rounded-full w-10' />


                        <div className={`absolute z-10 ${drop ? "top-20" : "-top-96"} right-6 lg:right-48 duration-500 p-6 bg-base-300 whitespace-nowrap rounded`}>
                            <div className='flex flex-col items-start gap-3 heading font-semibold'>
                                <h1 className='font-bold'>Name: {user.displayName}</h1>
                                <Link onClick={() => { setDrop(!drop) }}  to='/myArtifacts' className='hover:text-primary hover:underline'>My Artifacts</Link>
                                <Link onClick={() => { setDrop(!drop) }} className='hover:text-primary hover:underline'>Liked Artifacts</Link>
                                <button onClick={handlesignOutUser} className='py-2.5 px-5  text-white bg-red-400 rounded hover:opacity-90'>
                                    Log Out
                                </button>
                            </div>

                        </div>


                    </div> :
                        <div className=' heading font-semibold flex items-center  gap-6'>
                            <Link to='/login' className='py-3 px-6 hover:opacity-90 border border-primary rounded'>
                                Log In
                            </Link>
                            <Link to='/signUp' className='py-3 px-6 hover:opacity-90 bg-primary text-primary-content rounded hidden lg:block'>
                                Sign Up
                            </Link>

                        </div>
                }

            </div>

            <div className={`absolute lg:hidden  z-50 bg-base-100 h-[1500px] shadow-2xl w-[65%] md:w-[40%] top-3 transition-all duration-500 ${toggle ? 'left-0' : '-left-[800px]'}`} >


                <div className='place-items-end p-6 border-base-300 border-x-0 border-t-0 w-full  border-b-1 '>
                    <div className=' hover:bg-secondary hover:text-secondary-content   p-1 rounded-sm bg-base-200  cursor-pointer' onClick={() => setToggle(!toggle)} >
                        <RxCross2 size={28} />
                    </div>
                </div>

                <div className=' text-base-content mt-6 flex items-center justify-center '>
                    <ul className='flex flex-col text-start items-start  gap-2 '>
                        {
                            links
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Navbar;