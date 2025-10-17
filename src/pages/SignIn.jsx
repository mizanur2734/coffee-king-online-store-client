import React, { use } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { NavLink, useLocation, useNavigate } from "react-router";
import logo from "../assets/banner/icons8-google-48.png";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // firebase sign in send
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="md:min-h-screen flex flex-col px-4 py-8 mt-20">
      {/* Login Box */}
      <div className="md:max-w-md mx-auto p-6 border-2 border-[#c0aa83] rounded-lg shadow-xl bg-white">
        <h2 className="text-3xl font-bold text-center text-[#c0aa83] mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-2 border border-gray-300 rounded px-6 md:px-3 py-2">
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
          <button type="submit" className="fromBtn w-full">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-gray-700 my-4">OR</div>

        {/* Google Login */}
        <button className="googleBtn flex items-center justify-center gap-2 mx-auto px-4 py-2 border rounded shadow hover:shadow-md transition">
          <img src={logo} alt="Google Icon" className="w-6 h-6" />
          <span className="text-base font-medium text-gray-700">
            Log In With Google
          </span>
        </button>

        {/* Register Redirect */}
        <p className="text-sm text-center mt-6 text-gray-700">
          Don’t have an account?{" "}
          <NavLink to="/signUp" className="text-teal-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
