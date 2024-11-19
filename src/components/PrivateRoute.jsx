import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MainAuthContext } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useContext(MainAuthContext);
  const location = useLocation();

  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ to: location.pathname }}></Navigate>;
}

export default PrivateRoute;
