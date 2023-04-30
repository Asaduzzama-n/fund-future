import React, { useContext, useState } from 'react';
import logo from '../../../assets/login/undraw_access_account_re_8spm (1).svg';
import { FcGoogle } from 'react-icons/fc';
// import { ImFacebook } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useToken from '../../../hooks/useToken';
// import loginImg from '../../../assets/login/login.gif'


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userLoginWithEmail, googleLogin, setLoading, passwordReset, user } = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {

        setEmail(data.email);

        userLoginWithEmail(data.email, data.password)
            .then(userCredential => {
                const user = userCredential.user;

                if (user.emailVerified) {
                    // console.log(from)
                    setLoginUserEmail(user?.email)
                    toast.success(`Welcome ${user?.displayName}`)
                    // navigate(from, { replace: true });
                } else {
                    toast.error("YOUR EMAIL IS NOT VERIFIED! PLEASE VERIFY YOUR EMAIL...");
                }
            })
            .catch(error => toast.error(error.message))

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUserInfo(user?.displayName,user?.email);
                setLoginUserEmail(user?.email)
                saveUserInfo(user?.displayName,user?.email);
                toast.success(`Welcome ${user?.displayName}`)
                // navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            })
            .finally(() => { setLoading(false) })
    }

    const handleForgetPassword = () => {
        if (!email) return;
        alert('Check Your Email!')
        passwordReset(email)
            .then(() => {

            })
            .catch(error => {
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
            setLoginUserEmail(email);
            console.log(data);
        })
    }
    return (

        <div className='min-h-screen mt-20 '>
            {/* min-h-screen */}
            <div className="hero ">
                <div className="hero-content grid justify-between md:grid-cols-2  flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-full md:w-3/4' src={logo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg mt-10 bg-neutral  lg:mx-20 ">
                        <form onSubmit={handleSubmit(handleLogin)} >
                            <div className="card-body">
                                <h1 className="text-5xl text-center text-primary font-bold">LOGIN</h1>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input type="text"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        className="input input-bordered" />
                                    {errors.email && <p className='text-error font-medium mt-2 ml-2'>{errors.email?.message}</p>}

                                </div>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                        className="input input-bordered" />

                                    {errors.password && <p className='text-error font-medium mt-2 ml-2'>{errors.password?.message}</p>}

                                    <label className="label">
                                        <Link className="label-text-alt link link-hover"><button onClick={handleForgetPassword}>Forgot password?</button> </Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="h-12 rounded-md text-white font-bold text-xl bg-primary outline-none">LOGIN</button>
                                </div>

                            </div>
                        </form>
                        <div className="">
                            <div className="divider my-0">OR</div>
                            <div className="text-center my-4">
                                <button onClick={handleGoogleLogin} type='submit' className='bg-base-300 rounded-full p-2 mx-3'><FcGoogle size='30'></FcGoogle></button>
                            </div>
                            <p className='text-center my-4'>Already have an account? <Link className='text-primary font-bold' to={'/signup'}> Signup</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Login;