import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const {
    name,
    released,
    brand,
    category,
    photoURL,
    price,
    rating,
    description,
  } = loadedProduct;

  const handleCartButton = () => {
    fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loadedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product added to Cart")
      });
  };

  return (
    <div className="bg-white m-10 p-10">
      <img src={photoURL} alt={name} />
      <h1>{name}</h1>
      <h2>{brand}</h2>
      <h3>{category}</h3>
      <p>{price}</p>
      <p>{rating}</p>
      <p>{description}</p>
      <p>{released}</p>
      <button
        onClick={handleCartButton}
        className="bg-sky-400 px-4 py-1 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
