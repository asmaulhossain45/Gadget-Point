import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Routes/AuthProvider";
import InputRating from "./InputRating";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const loadedProduct = useLoaderData();
  const {
    name,
    productId,
    brand,
    category,
    photoURL,
    display,
    features,
    released,
    price,
    rating,
    warranty,
    description,
  } = loadedProduct;
  const userUID = user.uid;
  const cart = {
    userUID,
    name,
    productId,
    brand,
    category,
    photoURL,
    display,
    features,
    released,
    price,
    rating,
    warranty,
    description,
  };

  const handleCartButton = () => {
    fetch("https://gadget-point-server-vxg3lda8h-asmaul-hossains-projects.vercel.app/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully added to Cart!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Already Added to Cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <div className="bg-white md:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-2 justify-items-center p-3">
          <div className="place-self-center">
            <img src={photoURL} alt={name} />
          </div>
          <div className="place-self-center md:space-y-2 lg:space-y-3">
            <h1 className="underline md:text-2xl lg:text-4xl text-orange-500 font-semibold mb-2">
              Product Features
            </h1>
            <h1 className="font-bold md:text-2xl lg:text-4xl">{name}</h1>
            <h3 className="text-slate-600 md:text-xl lg:text-2xl">
              {category}
            </h3>
            <h2 className="text-sm text-slate-600 md:text-xl lg:text-2xl">
              Brand: {brand}
            </h2>
            <p className="text-slate-600 md:text-xl lg:text-2xl">
              Price:{" "}
              <span className="text-orange-500 font-semibold">${price}</span>
            </p>
            <button
              onClick={handleCartButton}
              className="bg-sky-400 lg:text-xl text-white px-4 py-1 font-semibold rounded-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-lg font-semibold">Description:</h1>
          <p className="text-justify text-xs text-slate-600">{description}</p>
        </div>
      </div>
      <InputRating></InputRating>
    </>
  );
};

export default ProductDetails;
