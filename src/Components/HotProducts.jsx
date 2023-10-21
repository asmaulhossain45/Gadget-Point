import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const HotProducts = () => {
  const [hotProduct, setHotProduct] = useState([]);
  useEffect(() => {
    fetch("https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setHotProduct(data);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="my-10">
      <h1 className="text-xl md:text-3xl text-orange-500 text-center font-bold">
        Most Popular
      </h1>
      <p className="text-xs md:text-base text-center text-white">
        Most popular Products on Market
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center my-6 px-4 md:px-8">
        {hotProduct.slice(0, 8).map((product) => (
          <div
            data-aos="zoom-in-down"
            key={product._id}
            className="flex flex-col text-slate-900 bg-white text-xl min-w-full mx-auto"
          >
            <div className="flex-grow border-b-2 relative">
              <span className="absolute badge bg-orange-500 font-semibold h-7 w-7 -right-2 -top-2 border-0 text-white">
                {product.rating}
              </span>
              <div className="flex justify-center h-full">
                <img className="p-5" src={product.photoURL} alt="Product" />
              </div>
            </div>
            <div className="px-4 py-2 flex">
              <div className="grow">
                <h1
                  className="font-bold
            "
                >
                  {product.name}
                </h1>
                <p className="text-sm font-medium text-slate-500">
                  Category: {product.category}
                </p>
                <p className="text-base font-medium">Brand: {product.brand}</p>
                <p className="text-base font-medium">
                  Price:{" "}
                  <span className="text-orange-500 font-semibold text-base">
                    ${product.price}
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-around items-center">
                <Link
                  className="text-2xl hover:scale-125 duration-300"
                  to={`/Update/${product._id}`}
                >
                  <GrUpdate></GrUpdate>
                </Link>
                <Link
                  className="text-2xl hover:scale-125 duration-300"
                  to={`/products/${product._id}`}
                >
                  <TbListDetails></TbListDetails>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/products"
        className="bg-sky-400 text-white text-xl md:text-2xl font-semibold py-1 px-4 rounded-sm flex justify-center w-56 mx-auto hover:scale-110 duration-300"
      >
        See all Products
      </Link>
    </div>
  );
};

export default HotProducts;
