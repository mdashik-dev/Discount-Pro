import React from "react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Marque() {
  const [brands, setbrands] = useState([]);
  const loadData = async () => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setbrands(data));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="container mx-auto flex justify-between items-center py-16">
      <Marquee pauseOnHover={true}>
        {brands?.map((brand) => (
          <Link to={`/brand/${brand?._id}`} key={brand._id}>
            <img
              src={brand?.brand_logo}
              className="w-36 max-h-16 object-contain space-x-12"
              alt=""
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

export default Marque;
