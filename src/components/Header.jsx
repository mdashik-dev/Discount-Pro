import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function Header() {
  const { user, logOut } = useContext(MainAuthContext);

  const handleLogOut = () => {
    logOut();
    toast.success("Successfully Logged Out");
  };
  return (
    <div>
      <nav className="bg-transparent sticky top-0 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link to="/">Discount Pro</Link>
          </div>
          <ul className="flex items-center space-x-6">
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
              <img
                alt={user?.displayName}
                className="w-9 rounded-full"
                src={user?.photoURL}
              />
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
