import { IoSearch } from "react-icons/io5";
import profile from '../assets/images/profile.png';

const Navbar = () => {
    return (
        <div className="w-[90%] mx-auto my-[2vw] lexend">

    <div className="navbar bg-base-100">
    <div className="navbar-start w-full sm:w-[42%]">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
        </ul>
        </div>
        <a className="text-[5vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2.5vw] lexend-bold">Recipe Calories</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[1.5vw] md:text-[1.2vw]">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
        </ul>
    </div>
    <div className="navbar-end">

    <div className="hidden relative sm:flex items-center mr-2">
    <input
        type="text"
        placeholder="Search..."
        className="text-[2.5vw] lg:text-[1.5vw] w-[20vw] sm:w-[25vw] md:w-[18vw] py-[.5vw] pl-[5vw] md:pl-[4.5vw] lg:pl-[3vw] bg-gray-100 rounded-full border-gray-200 focus:outline-sky-200"
      />
<IoSearch className="text-[2.5vw] lg:text-[1.5vw] absolute left-3 text-gray-500" />
    </div>
        <img className="h-[5.5vw] sm:h-[4vw] md:h-[3.7vw]" src={profile} alt="profile" />
    </div>
    </div>

        </div>
    )
}



export default Navbar