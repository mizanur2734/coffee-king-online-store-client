import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router";
import { use } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Swal from 'sweetalert2'


const SignUp = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, name, photo } = Object.fromEntries(
      formData.entries()
    );
    console.log("name:", name);
    console.log("Photo URL:", photo);
    console.log("Email:", email);
    console.log("Password:", password);
    // create user in the firebase
    createUser(email, password).then((result) => {
      console.log(result.user);
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...result?.user, displayName: name, photoURL: photo });
          Swal.fire({
            icon: "success",
            title: "Your account is created.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:mt-6">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-6 border-2 border-[#c0aa83]">
        <h2 className="text-3xl font-bold text-center text-[#c0aa83] mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Name */}
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
            <FaRegUserCircle className="text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full outline-none text-gray-700"
            />
          </div>
          {/* photo */}
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
            <FaRegUserCircle className="text-gray-500" />
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
            <TfiEmail className="text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
            <RiLockPasswordLine className="text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700"
            />
          </div>
          {/* Submit */}
          <button className="fromBtn w-full bg-lime-500 text-white py-2 rounded hover:bg-lime-600 transition">
            Sign In
          </button>
        </form>

        {/* Redirect */}
        <p className="text-sm text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <NavLink to="/signIn" className="text-teal-600 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
