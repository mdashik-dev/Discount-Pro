import React from "react";
import Slider from "../components/Slider";
import Marque from "../components/Marque";
import BrandsOnSale from "../components/BrandsOnSale";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Discount Pro</title>
      </Helmet>
      <Slider />
      <Marque />
      <BrandsOnSale />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default Home;
