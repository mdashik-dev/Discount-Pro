import React from "react";

function BrandCard() {
  const brand = {
    _id: "1",
    brand_name: "Nike",
    rating: 4.7,
    description: "Leading brand in athletic footwear, apparel, and equipment.",
    brand_logo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    coupons: [
      {
        coupon_code: "NIKE10",
        description: "10% off on select items.",
        expiry_date: "2024-12-31",
        condition: "Valid on full-price items only.",
        coupon_type: "Discount",
      },
    ],
    shop_Link: "https://www.nike.com",
    category: "Footwear",
    isSaleOn: true,
  };
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="rounded-xl w-24 h-24 object-cover"
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
          <a
            href={brand.shop_Link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white"
          >
            Visit Shop
          </a>
          <span className="badge badge-accent">{brand.category}</span>
        </div>

        {/* Coupons Section */}
        <div className="divider my-5">Coupons</div>
        <div>
          {brand.coupons.map((coupon, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-lg">{coupon.coupon_code}</h3>
              <p className="text-sm text-gray-600">{coupon.description}</p>
              <p className="text-xs text-gray-400">
                Expiry: {new Date(coupon.expiry_date).toLocaleDateString()}
              </p>
              <p className="text-xs text-gray-400">{coupon.condition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandCard;
