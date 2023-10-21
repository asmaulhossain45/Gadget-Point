import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 my-4 md:my-8 lg:my-12">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1 className="text-xl md:text-3xl text-orange-500 text-center font-bold">
        Featured Product
      </h1>
      <p className="text-xs md:text-base text-center text-white">
        Get Your Desired Product from Featured Product!
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mx-auto my-6">
        {products.map((product) => (
          <div
            data-aos="zoom-in-down"
            key={product._id}
            className="bg-white flex flex-col justify-center items-center"
          >
            <div className="border-b-2 relative flex-grow">
              <span className="text-xs font-semibold absolute bg-orange-500  right-0 top-1 px-2 py-[1px] rounded-ss-full rounded-es-full text-white">
                Rating: {product.rating}
              </span>
              <div className="flex items-center h-full">
                <img className="p-6 grow" src={product.photoURL} alt="Product" />
              </div>
            </div>
            {/* Card Body */}
            <div className=" flex flex-col px-4 py-2 space-y-1">
              <div className="text-center space-y-[2px]">
                <h1 className="grow text-sm font-semibold">{product.name}</h1>
                <p className="text-xs text-slate-500">{product.brand}</p>
                <p className="text-sm text-orange-500 font-semibold">
                  ${product.price}
                </p>
              </div>
              <div className="flex gap-2 justify-around items-center">
                <Link
                  className="text-xs font-medium border border-sky-400 px-2 py-1 text-sky-400 rounded-sm hover:scale-110 duration-300"
                  to={`/Update/${product._id}`}
                >
                  Update
                </Link>
                <Link
                  className="text-xs font-medium bg-sky-400 px-2 py-1 text-white rounded-sm hover:scale-110 duration-300"
                  to={`/products/${product._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
