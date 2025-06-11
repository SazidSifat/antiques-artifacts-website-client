import login from '../../assets/lottie/Animation - 1749619178405.json'
import Lottie from 'lottie-react';
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from 'react-icons/fa6';
import { AuthCotext } from '../../Contexts/AuthContext';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';


const Login = () => {

    const { withGoogle } = useAuth()
    console.log(withGoogle);


    const handleLogin = (e) => {
        e.preventDefault();

        console.log(e.target.email.value);
        console.log(e.target.password.value);

    }
    const handlegoogleLogin = () => {
        withGoogle()
            .then(res => console.log(res))
            .catch(err => {
                
                if (err.code === "auth/invalid-credential") {
                    toast.error("Invalid Credential.")
                }else{
                    toast.error(err.message)
                }
            })


    }



    return (
        <div className='min-h-[70vh] flex items-center justify-center p-6'>

            <div className='shadow-lg w-full md:w-8/12 shadow-secondary/30 bg-base-200 rounded  p-10  lg:p-24 flex flex-col lg:flex-row  gap-10 '>
                <div className='flex-1 hidden lg:block' >
                    <Lottie animationData={login}></Lottie>
                </div>


                <div className='flex-1 flex flex-col gap-4 items-center justify-center w-full'>
                    <form onSubmit={handleLogin} className='w-full space-y-6 '>
                        <div className='space-y-3'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="email">Email</label>
                                <input required name='email' className='py-3 px-4 border  border-primary rounded' type="email" placeholder='Enter Your Email' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="password">Password</label>
                                <input required name='password' className='py-3 px-4 border  border-primary rounded' type="password" placeholder='Enter Your Password' />
                            </div>
                        </div>
                        <button type='submit' className='py-3 w-full cursor-pointer bg-primary rounded text-primary-content'>
                            Log In
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <div className='w-full'>
                        <button onClick={handlegoogleLogin} className='py-3 cursor-pointer w-full bg-secondary text-secondary-content rounded  flex items-center justify-center gap-3'>
                            <FaGoogle size={22} />
                            Log In with Google
                        </button>

                    </div>



                </div>

            </div>



        </div>
    );
};

export default Login;