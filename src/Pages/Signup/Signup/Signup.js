import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/login/undraw_security_re_a2rk.svg';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUserWithEmail, updateUserProfile, googleLogin, verifyUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (data) => {


        createUserWithEmail(data.email, data.password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                handleProfileUpdate(data.name,data.email);
                toast.success("Account created successfully");
                handleVerification()

            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    const handleProfileUpdate = (name,email) => {

        updateUserProfile({ displayName: name })
            //saving user info to database
            .then(result => saveUserInfo(name,email))
            .catch(error => console.error(error))
    }

    const handleVerification = () => {
        verifyUser();
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');

            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
    }

    const saveUserInfo =(name,email) =>{
        const user = {name,email};
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (

        <div className='min-h-screen mt-20'>
            {/* min-h-screen */}
            <div className="hero ">
                <div className="hero-content grid justify-between md:grid-cols-2  flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-full md:w-3/4' src={logo} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card flex-shrink-0 w-full max-w-lg mt-10  lg:mx-20 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl text-center text-green-600 font-bold">SIGN UP</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input type="text" {...register("name", {
                                    required: "Name is Required"
                                })} className="input input-bordered" />

                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" {...register("email", {
                                    required: "Email Address is required"
                                })} className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })} className="input input-bordered " />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="h-12 rounded-md text-white text-xl bg-green-600 outline-none">SIGNUP</button>
                            </div>
                            <div className="mt-6">
                                <p className='text-center text-md'>Or sign Up with</p>
                                <div className="text-center py-4">
                                    <button type='submit' className='bg-base-300 rounded-full p-2 mx-3'><ImFacebook color='green' size='30'></ImFacebook></button>
                                    <button onClick={handleGoogleLogin} type='submit' className='bg-base-300 rounded-full p-2 mx-3'><FcGoogle size='30'></FcGoogle></button>
                                </div>
                                <p className='text-center py-2'>Already have an account? <Link className='text-green-600 font-bold' to={'/login'}> Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signup;