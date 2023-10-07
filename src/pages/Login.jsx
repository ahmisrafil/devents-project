import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const handleLogin =(e)=>{


    }


    return (
        <div className="hero min-h-screen bg-[#ca571469]">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-0">
            <div className="text-center lg:text-left lg:bg-[url('https://i.ibb.co/q16dWvh/back.png')] lg:h-[390px] lg: lg:rounded-r-lg lg:p-10 lg:text-white lg:w-1/2">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Login to explore the world of DVENTS.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:rounded-r-none ">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="email" 
                        name="email" 
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                         type={showPass ? "text":"password"} 
                        placeholder="password" 
                        name="password" 
                        className="input input-bordered" required />
                        <span onClick={() => { setShowPass(!showPass) }} className="absolute ml-72 mt-12 text-xl">
                            {showPass ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}
                        </span>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </form>
                
                <div className="text-center mb-4">
                <p>Don't Have an Account..! <NavLink className="text-blue-600" to='/register'>Register Now</NavLink> </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;