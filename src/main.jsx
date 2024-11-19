import { createRoot } from "react-dom/client";
import Router from "./components/Router.jsx";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <Router />
  </AuthContext>
);
