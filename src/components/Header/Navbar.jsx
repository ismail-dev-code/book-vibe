import React from "react";
import logoImage from '../../assets/book.ico'
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
       <NavLink to='/'> <a>Home</a></NavLink>
      </li>

      <li>
      <NavLink to='/about'>  <a>About</a></NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar border-b-1 border-gray-300 mt-4 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            
            {links}
          </ul>
        </div>
        <img className="md:block hidden md:w-8 w-full" src={logoImage} alt="logo img" />
        <a className="md:text-2xl text-base font-bold cursor-pointer">
          Book <span className="text-yellow-400">Vibe</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLink to='/'><a className="btn text-[#23BE0A] mr-3.5 border-[#23BE0A]">Home</a></NavLink>
        <ul className="menu menu-horizontal px-1"> {links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#23BE0A] text-white mr-0 md:mr-4">Sign In</a>
        <a className="btn md:flex hidden bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
