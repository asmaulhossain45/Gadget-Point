import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GrUpdate } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import SwiperCarousel from "./Carousel/SwiperCarousel";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="">
      <SwiperCarousel loadedProducts={loadedProducts}></SwiperCarousel>
      <div className="my-6 md:my-10 lg:my-14">
        <h1 className="text-xl md:text-3xl text-white text-center font-bold">
          Featured Product
        </h1>
        <p className="text-xs md:text-base text-center text-white">
          Get Your Desired Product from Featured Product!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center my-6 px-4 md:px-8">
          {loadedProducts.map((product) => (
            <div
              data-aos="fade-up"
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
                  <h1 className="font-bold">{product.name}</h1>
                  <p className="text-sm font-medium text-slate-500">
                    Category: {product.category}
                  </p>
                  <p className="text-base font-medium">
                    Brand: {product.brand}
                  </p>
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
      </div>
    </div>
  );
};

export default BrandProducts;
