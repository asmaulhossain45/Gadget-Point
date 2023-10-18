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
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Product Deleted");
        }
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      });
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto bg-white">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Released Date</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {products.map((product) => (
              <tbody key={product._id}>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-sm opacity-50">
                          {product.brand}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.released}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {product.rating}
                    </span>
                  </td>
                  <td>$ {product.price}</td>
                  <th>
                    <button
                      onClick={() => handleDeleteButton(product._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
