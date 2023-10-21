import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch(
      "https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/brand"
    )
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <>
      <h1 className="text-lg md:text-2xl lg:text-3xl text-orange-500 text-center font-bold">
        SHOP BY BRAND
      </h1>
      <p className="text-xs md:text-sm lg:text-base text-center text-slate-200">
        Find Your Desire Products By Brand and Be Happy!
      </p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 my-6 rounded-md overflow-hidden justify-items-center">
        {brands.map((brand) => (
          <Link
            data-aos="flip-right"
            key={brand._id}
            to={`/brandProduct/${brand.name}`}
            className="bg-white rounded-md overflow-hidden hover:scale-90 duration-300 w-full h-full flex justify-center items-center"
          >
            <img className="px-5" src={brand.photoURL} alt={brand.name} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllBrand;
