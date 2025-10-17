import React, { useState } from "react";
import logo from "../assets/banner/logo_black-9.png";
import { LuSquareMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex justify-between items-center bg-white py-4 md:px-8 px-4">
        {/* Logo */}
        <div>
          <img className="w-[140px]" src={logo} alt="logo" />
        </div>

        {/* Menu Icon for Mobile */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {open ? <IoCloseSharp /> : <LuSquareMenu />}
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-white md:z-auto z-[-1]
             left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-lg md:my-0 my-6 font-medium"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-indigo-600 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Link to={"/signIn"} className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-300">
            Sign In
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
