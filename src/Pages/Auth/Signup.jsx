import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import register from '../../assets/lottie/Animation - 1749619178406.json'
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const Signup = () => {

    useEffect(() => { document.title = "Antiques | Sign Up Now" }, [])

    const { createWithEmailPassword, updateUserProfile, withGoogle, setLoading } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()



    const handleSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast.error("Password Must be 6 Characters !")
        } else if (!/(?=.*[a-z])/.test(password)) {
            toast.error("Password Must Include Lowercase !")

        } else if (!/(?=.*[A-Z])/.test(password)) {
            toast.error("Password Must Include Uppercase !")
        } else {
            createWithEmailPassword(email, password)
                .then(() => {
                    updateUserProfile({ displayName: name, photoURL: photo })
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Registration Successful !",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    setLoading(false)
                    location.state ? navigate(location.state) : navigate("/")

                })
                .catch(err => {
                    if (err.code === "auth/email-already-in-use") {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Email Already Exist",
                            showConfirmButton: false,
                            timer: 1000
                        });

                    }
                    setLoading(false)
                })

        }

    }

    // google
    const handleGoogleSignUp = () => {
        withGoogle()
            .then(() => {
                location.state ? navigate(location.state) : navigate("/")
                setLoading(false)

            })
            .catch(err => {
                setLoading(false)
                if (err.code === "auth/invalid-credential") {
                    toast.error("Invalid Credential.")
                } else {
                    toast.error(err.message)
                }
            })
    }

    return (
        <div className='min-h-[70vh] flex items-center justify-center p-6'>

            <div className='shadow-lg w-full lg:w-8/12 shadow-secondary/30 bg-base-200 rounded  py-10 px-10  lg:py-24 lg:px-36 flex flex-col lg:flex-row  gap-10 '>
                <div className='lg:w-96 flex-1 place-content-center hidden lg:block' >
                    <Lottie animationData={register}></Lottie>
                </div>


                <div className='flex-1 flex flex-col gap-4 items-center w-full'>
                    <form onSubmit={handleSignUp} className='w-full space-y-4 '>
                        <div className='space-y-2'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="name">Name</label>
                                <input required name='name' className='py-3 px-4 border  border-primary rounded' type="text" placeholder='Enter Your Name' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="email">Email</label>
                                <input required name='email' className='py-3 px-4 border  border-primary rounded' type="email" placeholder='Enter Your Email' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="photo">Photo</label>
                                <input required name='photo' className='py-3 px-4 border  border-primary rounded' type="url" placeholder='Enter Photo URL' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="password">Password</label>
                                <input required name='password' className='py-3 px-4 border  border-primary rounded' type="password" placeholder='Enter Your Password' />
                            </div>
                        </div>
                        <button className='py-3 cursor-pointer w-full bg-primary rounded text-primary-content'>
                            Sign Up
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <div className='w-full'>
                        <button onClick={handleGoogleSignUp} className='py-3 w-full cursor-pointer bg-secondary text-secondary-content rounded  flex items-center justify-center gap-3'>
                            <FaGoogle size={22} />
                            Sign Up with Google
                        </button>

                    </div>
                    <p className='desc font-medium'>Already Have Account ? <Link className='font-bold text-primary hover:underline' to='/login'>Sign In</Link></p>



                </div>

            </div>



        </div>
    );
};

export default Signup;