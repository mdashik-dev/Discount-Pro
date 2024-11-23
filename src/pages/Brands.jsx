import React, { useEffect, useState } from "react";
import CouponCard from "../components/CouponCard";
import { Helmet } from "react-helmet-async";

function Brands() {
  const [brands, setBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState([]);

  const loadData = async () => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setFilteredBrands(data);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = brands.filter(
      (brand) =>
        brand.brand_name.toLowerCase().includes(query) ||
        brand.description.toLowerCase().includes(query)
    );

    setFilteredBrands(filtered);
  };

  return (
    <div className="bg-gray-50 py-12">
      <Helmet>
        <title>Brands || Discount Pro</title>
      </Helmet>
      <div className="container max-w-[1200px] mx-auto mb-6">
        <input
          type="text"
          placeholder="Search brands by name or description..."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered w-full"
        />
      </div>

      <div className="container max-w-[1200px] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand, idx) => (
            <CouponCard key={idx} brand={brand} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No brands match your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Brands;
