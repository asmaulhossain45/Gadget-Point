import { useLoaderData } from "react-router-dom";
import Carousel from "./Carousel";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  return (
    <div>
      <Carousel></Carousel>
      <div className="grid grid-cols-2 gap-4 px-8 my-10">
        {loadedProducts.map((product) => (
          <div
            key={product._id}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img src={product.photoURL} alt="Movie" />
            </figure>
            <div className="card-body w-2/4">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.brand}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
