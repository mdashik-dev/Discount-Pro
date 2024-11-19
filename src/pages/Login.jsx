import React, { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MainAuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginWithGoogle } = useContext(MainAuthContext);
  const { user } = useContext(MainAuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user?.uid) {
      if (location?.state?.to) {
        navigate(location.state.to);
      } else {
        navigate("/");
      }
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 shadow-sm bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-center">
          Login to Your Account
        </h2>
        <form>
          {/* Email Input */}
          <div className="form-control">
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

          {/* Password Input */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <Link href="#" className="link link-hover text-sm">
              Forgot your password?
            </Link>
          </div>

          {/* Login Button */}
          <div className="mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-2">
          <button onClick={loginWithGoogle} className="btn btn-outline w-full">
            <FaGoogle className="mr-24" /> Continue with Google
          </button>
        </div>

        {/* Signup Redirect */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="link link-primary">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
