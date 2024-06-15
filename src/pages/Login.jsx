import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useContextAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const { signIn, googleAuth, forgotPassword, currentUser } = useContextAuth();
  const navigate = useNavigate(); 

  const handleChange = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  const { email, password } = info;

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  if (currentUser) {
    navigate("/");
    return null; 
  }

  return (
    <div className="flex justify-center">
      <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-gray-dark-main">
        <div className="form-container mt-[5vh] w-[380px] h-[500px]">
          <form onSubmit={handleSubmit}>
            <h2 className="text-red-main text-2xl font-medium text-center tracking-wider mb-3">
              Sign In
            </h2>

            <div className="relative z-0 w-full mb-6 group">
              <input
                name="email"
                className="peer"
                type="email"
                placeholder=" "
                required
                onChange={handleChange}
                value={email} 
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                name="password"
                className="peer"
                type="password"
                placeholder=" "
                required
                onChange={handleChange}
                value={password} 
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="flex justify-between">
              <span
                className="py-3 text-sm cursor-pointer text-gray-500 hover:text-[#ff4b45]"
                onClick={() => forgotPassword(email)}
              >
                Forgot Password?
              </span>
              <Link
                className="py-3 text-sm cursor-pointer text-gray-500 hover:text-[#ff4b45]"
                to="/register"
              >
                Sign Up
              </Link>
            </div>

            <button className="btn-danger w-full mt-4" type="submit">
              Login
            </button>

            <button
              className="flex justify-center items-center btn-danger w-full mt-4"
              type="button"
              onClick={() => googleAuth()}
            >
              Continue with Google
              <GoogleIcon color="currentColor" className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
