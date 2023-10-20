import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedProduct = useLoaderData();
  const [products, setProducts] = useState(loadedProduct);
  // Delete Cart Data
  const handleDeleteButton = (id) => {
    console.log("delete");
    fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Product Deleted");
        }
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      });
  };

  return (
    <div className="min-h-[85vh] px-4 md:px-8 my-6 md:my-10 lg:my-14">
      <h1 className="text-xl md:text-3xl text-white text-center font-bold">
        Your Cart Product
      </h1>
      <p className="text-xs md:text-base text-center text-white">
        Get Your Desired Product from Featured Product!
      </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          {products.map((product) => (
            <div
              key={product._id}
              className="grid grid-cols-2 bg-white items-center rounded-md"
            >
              <figure className="h-full">
                <img className="p-5" src={product.photoURL} alt="" />
              </figure>
              <div className="grow space-y-1">
                <h2 className="font-semibold text-xl lg:text-3xl">
                  {product.name}
                </h2>
                <p className="text-xl font-semibold text-slate-500">
                  {product.brand}
                </p>
                <button
                  onClick={() => handleDeleteButton(product._id)}
                  className="text-white rounded-sm bg-sky-400 py-1 px-2 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
