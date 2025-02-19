import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import BrandDetaild from "../pages/BrandDetaild";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import NotFound from "./NotFound";
import Root from "./Root";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../pages/ResetPassword";
import AboutUs from "../pages/About";

function Router({ children }) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/brands",
          element: <Brands />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/brand/:id",
          element: (
            <PrivateRoute>
              <BrandDetaild />
            </PrivateRoute>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/my-profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}>{children} </RouterProvider>;
}

export default Router;
