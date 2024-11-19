import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-3">About Us</h2>
            <p className="text-sm">
              We aggregate the best coupons from e-commerce shops in Bangladesh,
              helping you save on every purchase. Shop smart, save big!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-3">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/" className="link link-hover">
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link link-hover">
                  {" "}
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">
                  {" "}
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="link link-hover">
                  {" "}
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <Link to="/" className="btn btn-ghost btn-circle">
                <FaFacebook className="text-lg" />
              </Link>
              <Link to="/" className="btn btn-ghost btn-circle">
                <FaTwitter className="text-lg" />
              </Link>
              <Link to="/" className="btn btn-ghost btn-circle">
                <RiInstagramFill className="text-lg" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">Newsletter</h2>
            <p className="text-sm mb-3">
              Subscribe to get the latest deals and coupons delivered to your
              inbox!
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-base-300 pt-5 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Discount Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
