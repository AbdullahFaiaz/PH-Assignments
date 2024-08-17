


import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const navigate = useNavigate()
    const {logOut,user} = useContext(AuthContext)
    const navLinks = <>
        <NavLink to="/"> <span>Home</span></NavLink>
        {user && <NavLink to="/saved-property"><span>Saved Property</span></NavLink>}
        {user && <NavLink to="/userProfile"><span>User Profile</span></NavLink> }
        {user && <NavLink to="/updateProfile"><span>Update Profile</span></NavLink> }
        {!user && <><NavLink to="/login"><span>Log In</span></NavLink>
        <NavLink to="/register"><span>Register</span></NavLink></>}
    </>

    const handleLogOut=() =>{
        logOut()
        navigate("/login")
    }


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(false);
    };


  return (
    <div className="text-[3vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.3vw]">
        <div className="navbar bg-slate-900 border-gray-500 rounded-md border-b text-white">
        <div className="navbar-start w-[68%] flex items-center">
            {/* <div className="dropdown z-[20]">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm bg-[#dcdcdc] text-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >

          
        <li><NavLink to="/"> Home</NavLink></li>
        {user && <li><NavLink to="/userProfile">User Profile</NavLink></li> }
        {user && <li><NavLink to="/updateProfile">Update Profile</NavLink></li> }
        {!user && <><li><NavLink to="/login">Log In</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li></>}

            </ul>
            </div> */}


<div className="dropdown z-40">
                        <div
                            tabIndex={0}
                            role="button"
                            className="flex flex-col justify-center items-center bg-slate-900 p-[1vw] pr-[2vw] lg:hidden"
                            onClick={handleHamburgerClick}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-9 w-9"
                                fill="none"
                                viewBox="0 0 21 21"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-lg bg-[#dcdcdc] text-black dropdown-content mt-3 z-1 p-2 shadow rounded-box w-52"
                                onClick={handleDropdownClick}
                            >
                                {/* {navLinks} */}
                                <li><NavLink to="/">Home</NavLink></li>
                                {user && <li><NavLink to="/saved-property">Saved Property</NavLink></li>}
                                {user && <li><NavLink to="/userProfile">User Profile</NavLink></li>}
                                {user && <li><NavLink to="/updateProfile">Update Profile</NavLink></li>}
                                {!user && (
                                    <>
                                        <li><NavLink to="/login">Log In</NavLink></li>
                                        <li><NavLink to="/register">Register</NavLink></li>
                                    </>
                                )}
                            </ul>
                        )}
                    </div>



            <a className="text-[5.5vw] sm:text-[5vw] md:pl-[2vw] md:text-[4vw] lg:[3vw] w-full">Harmony Homes</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navLinks}
            </ul>
        </div>
        <div className="navbar-end">
        <Tooltip id="my-tooltip" />

                   {user ? (
                        <>
                            <button className="mr-[2vw] text-[4.2vw] font-light sm:font-normal sm:text-[2.5] md:text-[2.2vw] lg:text-[1.8vw]" onClick={handleLogOut}>
                                Log Out
                            </button>
                            
                            <span
                                title={user?.displayName || "User name not found"}
                                className="rounded-full sm:mr-[2vw] h-[9vw] w-[9vw] sm:h-[6vw] sm:w-[6vw] md:h-[4vw] md:w-[4vw] overflow-hidden border-2 border-[#e8ae29] shadow-lg"
                            >
                                <Link to={"/userProfile"}>
                                <img
                                    className="rounded-full h-full w-full object-cover"
                                    src={user?.photoURL || "https://i.ibb.co/sV6w5ct/Vecteezy-illustration-of-human-icon-vector-user-symbol-icon-modern-8442086.jpg"}
                                    alt="Profile Picture"
                                />
                            </Link>
                            </span>
                        </>
                    ) : (
                        <Link className="mr-[2vw] text-[4.2vw] font-light sm:font-normal sm:text-[2.5] md:text-[2.2vw] lg:text-[1.8vw]" to={"/login"}>
                            Log In
                        </Link>
                    )}
        </div>
        </div>
    </div>
  );
};

export default Navbar;
