import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BrandDetaild() {
  const [brand, setbrand] = useState([]);

  const { id } = useParams();

  const loadData = async () => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const findCurrentBand = data.find((band) => band._id === id);
        setbrand(findCurrentBand);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const notifySuccess = () => toast.success("Coupon code copied successfully!");

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <h3 className="text-3xl font-bold text-center mb-5">
        {brand?.brand_name}'s Details
      </h3>
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src={brand?.brand_logo}
            alt={brand?.brand_name}
            className="w-36 h-36 bg-gray-50 p-3 rounded-full object-contain"
          />
          <div>
            <h2 className="card-title text-2xl font-semibold">
              {brand.brand_name}
            </h2>
            <p className="text-sm text-gray-500">{brand.description}</p>
            <div className="flex items-center mt-3">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-2 text-lg">{brand.rating}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
          {brand?.coupons?.map((coupon, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-lg">{coupon.coupon_code}</h3>
              <p className="text-sm text-gray-600">{coupon.description}</p>
              <p className="text-xs text-gray-400">
                Expiry: {new Date(coupon.expiry_date).toLocaleDateString()}
              </p>
              <p className="text-xs text-gray-400">{coupon.condition}</p>
              <div className="flex space-x-2 mt-3">
                <CopyToClipboard
                  text={coupon.coupon_code}
                  onCopy={notifySuccess}
                >
                  <button className="btn btn-outline btn-sm">Copy Code</button>
                </CopyToClipboard>
                <Link
                  to={brand?.shop_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Use Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer position="bottom-center" autoClose={2000} />
    </div>
  );
}

export default BrandDetaild;
