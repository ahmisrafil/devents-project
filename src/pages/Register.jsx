import { NavLink } from "react-router-dom";


const Register = () => {
    const handleRegister= () =>{

    }
    return (
        <div>
            <div className="hero min-h-screen bg-[#ca571469]">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-0">
                    <div className="text-center lg:text-left lg:bg-[url('https://i.ibb.co/q16dWvh/back.png')] lg:h-[390px] lg: lg:rounded-r-lg lg:p-10 lg:text-white lg:w-1/2">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:rounded-r-none">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="text-center mb-4">
                            <p>Already Have an Account..! <NavLink className="text-blue-600" to='/login'>Login Now</NavLink> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;