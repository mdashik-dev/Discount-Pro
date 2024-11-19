import React from "react";
import CouponCard from "./CouponCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BrandsOnSale() {
  const [brands, setbrands] = useState([]);
  const loadData = async () => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setbrands(data));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto flex flex-col justify-between items-center py-16">
        <div className="mt-3 mb-12">
          <h3 className="text-3xl font-bold text-center">
            Hot Deals Right Now
          </h3>
          <p className="opacity-70 w-8/12 text-center mx-auto mt-2 font-light leading-5">
            Discover incredible discounts across your favorite stores. Don’t
            miss out—shop the best deals happening now!
          </p>
        </div>
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands
            ?.filter((brand) => brand.isSaleOn === true)
            ?.map((brand, idx) => (
              <div key={idx} className="card w-auto bg-base-100">
                {/* Brand Info */}
                <figure className="px-10 pt-10">
                  <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="rounded-full w-24 h-24 object-contain bg-gray-50 p-2"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-semibold">
                    {brand.brand_name}
                  </h2>
                  <p className="text-sm text-gray-500">{brand.description}</p>
                  {/* <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="ml-2 text-lg">{brand.rating}</span>
                  </div> */}
                  <div className="card-actions justify-between mt-5">
                    <span className="badge badge-accent">{brand.category}</span>
                    <Link
                      to={`/brand/${brand?._id}`}
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full text-white"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BrandsOnSale;
