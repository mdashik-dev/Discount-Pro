import React from "react";
import Slider from "../components/Slider";
import Marque from "../components/Marque";
import BrandsOnSale from "../components/BrandsOnSale";
import { ToastContainer } from "react-toastify";

function Home() {
  return (
    <div>
      <Slider />
      <Marque />
      <BrandsOnSale />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default Home;
