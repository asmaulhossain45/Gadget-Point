import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import InputRating from "./InputRating";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const { name, brand, category, photoURL, price, description } = loadedProduct;

  const handleCartButton = () => {
    fetch("https://gadget-point-server-fafvkgxmw-asmaul-hossains-projects.vercel.app/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loadedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully added to Cart!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        else{
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
    <div className="my-6 md:my-10 lg:my-14 mx-4 md:mx-8">
      <div className="bg-white">
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
          <p className="text-justify text-slate-600">{description}</p>
        </div>
      </div>
      <InputRating></InputRating>
    </div>
  );
};

export default ProductDetails;
