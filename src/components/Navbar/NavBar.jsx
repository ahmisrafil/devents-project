import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("logged out successfully");
            })
            .catch(error => {
                console.error(error);
            })
    }




    const navLinks = <>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2"> <NavLink to='/'>Home</NavLink></li>
        <li className="lg:text-white lg:text-xl lg:font-sans  lg:mx-2"> <NavLink to='/login'>Login</NavLink></li>
        <li className="lg:text-white lg:text-xl lg:font-sans lg:mx-2"> <NavLink to='/register'>Register</NavLink></li>
        {
            user && <>
            <li className="lg:text-white lg:text-xl lg:font-sans lg:mx-2"> <NavLink to='/profile'>Profile</NavLink></li>
            <li className="lg:text-white lg:text-xl lg:font-sans lg:mx-2"> <NavLink to='/contact'>Contact</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-[#995252]  px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-4">
                    <img className="h-10" src="https://i.ibb.co/DrsmXgz/d.png" alt="d" />
                    <div className="h-4">
                        <h3 className="font-bold">DVENTS</h3>
                        <p className="-mt-2 text-slate-400 text-xs md:text-base"><small>Events Planner</small></p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex flex-col justify-end md:flex-row">
                {
                    user && <>
                        <div className="text-white flex flex-row gap-2 items-center">
                        <img className="h-[40px] w-[40px] rounded-full " src={user.photoURL} alt="" />
                            <div>
                                <p>{user.displayName}</p>
                                <span className="text-xs mr-2">{user.email}</span>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="btn btn-sm">Sign Out</button></>

                }

            </div>
        </div>
    );
};

export default NavBar;