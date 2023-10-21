import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotProducts = () => {
  const [hotProduct, setHotProduct] = useState([]);
  useEffect(() => {
    fetch(
      "https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setHotProduct(data);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <>
      <h1 className="text-lg md:text-2xl lg:text-3xl text-orange-500 text-center font-bold">
        HOT PRODUCT
      </h1>
      <p className="text-xs md:text-sm lg:text-base text-center text-slate-200">
        Most Popular Product in Market Now!
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mx-auto my-6">
        {hotProduct.slice(0, 8).map((product) => (
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
                <img className="p-6" src={product.photoURL} alt="Product" />
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
      <Link
        to="/products"
        className="bg-sky-400 text-white text-sm md:text-2xl font-semibold py-1 px-2 flex justify-center rounded-sm hover:scale-110 duration-300"
      >
        See all Products
      </Link>
    </>
  );
};

export default HotProducts;
