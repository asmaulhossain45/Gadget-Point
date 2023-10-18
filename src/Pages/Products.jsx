import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl text-white text-center font-bold">
        Featured Product
      </h1>
      <div className="grid grid-cols-3 gap-4 justify-items-center m-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex items-center text-slate-900 bg-slate-300 text-xl"
          >
            <div>
              <img
                className="w-36 p-2 rounded-md"
                src={product.photoURL}
                alt="Product"
              />
            </div>
            <div>
              <h1>{product.name}</h1>
              <h1>{product.brand}</h1>
              <div>
                <Link to={`/Update/${product._id}`}>Update</Link>
                <Link to={`/products/${product._id}`}>Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
