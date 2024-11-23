import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainAuthContext } from "../context/AuthContext";

function CouponCard({ brand }) {
  const { user } = useContext(MainAuthContext);
  const navigate = useNavigate();

  const handleViewCoupons = () => {
    if (user?.uid) {
      navigate(`/brand/${brand?._id}`);
    } else {
      navigate("/login", { state: { to: `/brand/${brand?._id}` } });
    }
  };

  return (
    <div className="card w-full bg-base-100">
      {/* Brand Info */}
      <figure className="px-10 pt-10">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="rounded-full w-24 h-24 object-contain bg-gray-50 p-3"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          {/* Brand Name and Rating */}
          <h2 className="card-title text-xl font-semibold">{brand.brand_name}</h2>
          <div className="flex items-center">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="ml-2 text-lg">{brand.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2">{brand.description}</p>

        {/* Sale is On Bouncing Text */}
        {brand.isSaleOn && (
          <div className="mt-3">
            <span className="animate-bounce text-red-600 font-bold text-sm">
              SALE IS ON!
            </span>
          </div>
        )}

        {/* View Coupons Button */}
        <div className="card-actions justify-between mt-5">
          <button
            onClick={handleViewCoupons}
            className="btn btn-primary text-white"
          >
            View Coupons
          </button>
          <span className="badge badge-accent">{brand.category}</span>
        </div>
      </div>
    </div>
  );
}

export default CouponCard;
