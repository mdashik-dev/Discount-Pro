import React, { useEffect, useState } from "react";
import CouponCard from "../components/CouponCard";

function Brands() {
  const [brands, setbrands] = useState([]);

  const loadData = async () => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setbrands(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container max-w-[1200px] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {brands?.map((brand) => (
          <CouponCard brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default Brands;
