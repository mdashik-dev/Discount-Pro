import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { user, logOut } = useContext(MainAuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut();
    toast.success("Successfully Logged Out");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-transparent sticky top-0 p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link to="/">Discount Pro</Link>
          </div>

          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul
            className={`lg:flex items-center space-x-6 ${
              isMenuOpen
                ? "block absolute top-16 left-0 bg-white w-full p-4 shadow-md z-10"
                : "hidden lg:flex"
            }`}
          >
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/brands" className="hover:text-yellow-400">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            {user?.uid && (
              <>
                <li>
                  <Link to="/my-profile" className="hover:text-yellow-400">
                    My Profile
                  </Link>
                </li>
                <li
                  onClick={handleLogOut}
                  className="hover:text-yellow-400 cursor-pointer"
                >
                  <a>Logout</a>
                </li>
              </>
            )}
            {user?.uid ? (
              <Link to="/my-profile">
                <img
                  alt={
                    user?.displayName
                      ? user?.displayName
                      : user?.email.slice(0, 2)
                  }
                  className="w-9 rounded-full mt-3 lg:mt-0"
                  src={user?.photoURL}
                />
              </Link>
            ) : (
              <li>
                <Link to="/login" className="hover:text-yellow-400">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
