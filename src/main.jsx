import { createRoot } from "react-dom/client";
import Router from "./components/Router.jsx";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <AuthContext>
    <HelmetProvider>
      <Router />
      <ToastContainer position="bottom-center" autoClose={3000} />
    </HelmetProvider>
  </AuthContext>
);
