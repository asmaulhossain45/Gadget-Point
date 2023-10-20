import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://gadget-point-server-fafvkgxmw-asmaul-hossains-projects.vercel.app/api/brand")
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
            className="bg-white rounded-md overflow-hidden hover:scale-90 duration-300"
          >
            <img
              className="px-5 h-full"
              src={brand.photoURL}
              alt={brand.name}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllBrand;
