import React from "react";
import { Link } from "react-router-dom";

function CouponCard({ brand }) {
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
        <h2 className="card-title text-2xl font-semibold">
          {brand.brand_name}
        </h2>
        <p className="text-sm text-gray-500">{brand.description}</p>
        <div className="flex items-center mt-3">
          <span className="text-yellow-500">⭐</span>
          <span className="ml-2 text-lg">{brand.rating}</span>
        </div>
        <div className="card-actions justify-between mt-5">
          <Link
            to={`/brand/${brand?._id}`}
            rel="noopener noreferrer"
            className="btn btn-primary text-white"
          >
            Detail
          </Link>
          <span className="badge badge-accent">{brand.category}</span>
        </div>
      </div>
    </div>
  );
}

export default CouponCard;
