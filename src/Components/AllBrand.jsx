import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/brand")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <>
      <h1 className="text-xl md:text-3xl text-orange-500 font-bold text-center">
        SHOP BY BRAND
      </h1>
      <p className="text-xs md:text-base text-center text-white mb-5">
        Find Your Desire Products By Brand and Be Happy!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 rounded-md overflow-hidden justify-items-center">
        {brands.map((brand) => (
          <Link
            key={brand._id}
            to={`/brandProduct/${brand.name}`}
            className="bg-white rounded-md overflow-hidden"
          >
            <img className="px-5" src={brand.photoURL} alt={brand.name} />
            <h1 className="text-center font-medium bg-sky-400 w-full py-1">
              {brand.name}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllBrand;
