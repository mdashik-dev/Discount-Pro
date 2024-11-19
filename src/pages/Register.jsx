import React, { useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 shadow-sm bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
        <form>
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control mt-4 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            {/* Toggle Icon */}
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoEyeOffSharp className="text-2xl mt-8" /> // Hide icon
              ) : (
                <FaEye className="text-2xl mt-8" /> // Show icon
              )}
            </button>
          </div>

          {/* Register Button */}
          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Social Registration Buttons */}
        <div className="flex flex-col space-y-2">
          <button className="btn btn-outline w-full">
            <FaGoogle className="mr-24" /> Continue with Google
          </button>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
