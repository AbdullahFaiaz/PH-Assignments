import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navbar bg-base-100 pt-[1.5vw]">
        <div className="navbar-start flex items-center">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[5vw] w-[5vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to={'/'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:text-green-500">Home</button></NavLink>
            <NavLink to={'/listedbooks'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:text-green-500">Listed Books</button></NavLink>
            <NavLink to={'/pagestoread'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:text-green-500">Pages to Read</button></NavLink>
            <NavLink to={'/about'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:text-green-500">About Us</button></NavLink>
            <NavLink to={'/contact'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:text-green-500">Contact Us</button></NavLink>
            </ul>
        </div>
        <a className="text-[5vw] lg:text-[2.5vw] font-bold ">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[3vw] lg:text-[1.4vw]">
            <NavLink to={'/'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:bg-gray-200">Home</button></NavLink>
            <NavLink to={'/listedbooks'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:bg-gray-200">Listed Books</button></NavLink>
            <NavLink to={'/pagestoread'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:bg-gray-200">Pages to Read</button></NavLink>
            <NavLink to={'/about'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:bg-gray-200">About Us</button></NavLink>
            <NavLink to={'/contact'}><button className="px-[1vw] py-[1vw] rounded-md border-2 border-solid border-white hover:border-2 hover:bg-gray-200">Contact Us</button></NavLink>

        </ul>
        </div>
        <div className="navbar-end">
        <a className="bg-[#23be0a] hover:bg-gray-200 hover:text-black px-[1.4vw] py-[.8vw] text-white font-bold text-[4vw] lg:text-[1.5vw] rounded-lg mr-2">Sign In</a>
        <a className="bg-[#59c6d2] hover:bg-gray-200 hover:text-black px-[1.4vw] py-[.8vw] text-white font-bold text-[4vw] lg:text-[1.5vw] rounded-lg ">Sign Up</a>
        </div>
    </div>
    );
};

export default Nav;