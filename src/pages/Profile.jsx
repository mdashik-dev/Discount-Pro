import React, { useState, useContext } from "react";
import { MainAuthContext } from "../context/AuthContext"; // Assuming you're using context for Firebase auth
import { toast } from "react-toastify"; // For toast notifications
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, updateUserProfile } = useContext(MainAuthContext); // Assuming updateUserProfile is a custom function for update
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission for profile update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photoURL } = formData;
    if (!name || !photoURL) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      // Update user profile
      await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Profile || Discount Pro</title>
      </Helmet>

      {/* Cover Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-5">
        <h1 className="text-4xl font-bold text-center">
          Welcome, {user?.displayName || "User"}!
        </h1>
        <p className="text-center mt-2 text-lg">
          Manage your profile and update your details below.
        </p>
      </div>

      {/* Profile Card */}
      <div className="container mx-auto mt-10 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8">
          {/* User Info */}
          <div className="flex justify-center mb-6">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-28 h-28 object-cover rounded-full border-4 border-indigo-600"
            />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">
              {user?.displayName || "No Name Provided"}
            </h2>
            <p className="text-lg text-gray-600">{user?.email}</p>
          </div>

          {/* Profile Update Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Enter your photo URL"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  className="input input-bordered w-full focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className={`btn btn-primary w-full disabled:bg-slate-500 disabled:cursor-not-allowed`}
                  disabled={loading}
                >
                  Save Changes {loading && "loading.."}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
