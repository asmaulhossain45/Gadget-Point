import { useEffect, useState } from "react";

const AllBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/Brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <>
      <h1 className="text-3xl text-white font-bold text-center mb-5">ALL BRAND</h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 rounded-md overflow-hidden justify-items-center">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-md overflow-hidden">
            <img className="px-5" src={brand.image} alt={brand.name} />
            <h1 className="text-center font-medium bg-sky-400 w-full py-1">{brand.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBrand;
