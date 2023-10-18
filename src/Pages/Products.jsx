import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="grid grid-cols-3">
      {products.map((product) => (
        <div key={product._id} className="text-white text-xl">
          <img className="w-28" src={product.photoURL} alt="Product" />
          <h1>{product.name}</h1>
          <h1>{product.brand}</h1>
          <div>
            <Link to={`/Update/${product._id}`}>Update</Link>
            <Link to={`/products/${product._id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
