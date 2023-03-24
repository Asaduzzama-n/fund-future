import React, { useContext, useState } from 'react';
import logo from '../../../assets/login/undraw_security_re_a2rk.svg';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {
    const {userLoginWithEmail,googleLogin,setLoading,passwordReset,user} = useContext(AuthContext);
    const [email,setEmail] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        setEmail(email);
        const password = form.password.value;

        userLoginWithEmail(email,password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('Login',user);

            if(user.emailVerified){
                console.log(from)
                console.log('Login',user);
                toast.success(`Welcome ${user?.displayName}`)
                navigate(from, {replace: true});
            }else{
                toast.error("YOUR EMAIL IS NOT VERIFIED! PLEASE VERIFY YOUR EMAIL...");
            }
        })
        .catch(error => toast.error(error.message))

    }

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error =>{
           console.log(error.message);
           toast.error(error.message);
        })
        .finally(()=>{setLoading(false)})
    }

    const handleForgetPassword = () =>{
        if(!email) return;
        alert('Check Your Email!')
        passwordReset(email)
        .then(()=>{
            
        })
        .catch(error =>{
            toast.error(error.message);
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
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-lg mt-10  lg:mx-20 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl text-center text-green-600 font-bold">LOGIN</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover"><button onClick={handleForgetPassword}>Forgot password?</button> </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="h-12 rounded-md text-white text-xl bg-green-600 outline-none">LOGIN</button>
                            </div>
                            <div className="mt-6">
                                <p className='text-center text-md'>Or sign Up with</p>
                                <div className="text-center py-4">
                                    <button type='submit' className='bg-base-300 rounded-full p-2 mx-3'><ImFacebook color='green' size='30'></ImFacebook></button>
                                    <button onClick={handleGoogleLogin} type='submit' className='bg-base-300 rounded-full p-2 mx-3'><FcGoogle size='30'></FcGoogle></button>
                                </div>
                                <p className='text-center py-2'>Already have an account? <Link className='text-green-600 font-bold' to={'/signup'}> Signup</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;