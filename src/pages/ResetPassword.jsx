import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { MainAuthContext } from "../context/AuthContext";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { sendPassResetMail } = useContext(MainAuthContext);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPassResetMail(email);
      toast.success("Password reset email sent! Please check your inbox.");
      setEmail("");
    } catch (error) {
      toast.error(error.message || "Failed to send reset email. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 shadow-sm bg-white rounded-lg">
        <Helmet>
          <title>Password Reset || Discount Pro</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center">Reset Your Password</h2>
        <p className="text-sm text-center text-gray-600">
          Enter your email to receive password reset instructions.
        </p>
        <form onSubmit={handleReset}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Send Reset Link
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="link link-primary text-sm">
            Back to Login
          </Link>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default ResetPassword;
