import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const productId = form.productId.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const photoURL = form.photoURL.value;
    const display = form.display.value;
    const features = form.features.value;
    const released = form.released.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const warranty = form.warranty.value;
    const description = form.description.value;
    const addProductData = {
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
    console.log(addProductData);
    // Post data to server
    fetch(
      "https://gadget-point-server-fafvkgxmw-asmaul-hossains-projects.vercel.app/api/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addProductData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Product has been Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    form.reset();
  };

  return (
    <div className="bg-slate-900 min-h-[80vh] flex justify-center items-center my-6">
      <div className="w-11/12 md:w-3/4 mx-auto pb-6 bg-white border-sky-400 border-4 rounded-lg">
        <h1 className="text-center text-white text-xl md:text-3xl font-bold bg-sky-400 py-2">
          Add Product Details
        </h1>
        <form
          onSubmit={handleAddProduct}
          className=" text-slate-900 px-4 md:px-10 pt-4"
        >
          <div className="md:flex justify-center items-center w-full gap-4">
            <div className="w-full my-1">
              <label className="font-semibold">Product Title</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="name"
                placeholder="iPhone 15 Pro Max"
                id="1"
              />
            </div>
            <div className="w-full my-1">
              <label className="font-semibold">Product ID</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="productId"
                placeholder="IP458G"
                id="2"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            <div className="w-full my-1">
              <label className="font-semibold">Brand</label>
              <br />
              <select
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                name="brand"
                id="3"
              >
                <option disabled>Select a Brand</option>
                <option>Apple</option>
                <option>Asus</option>
                <option>Dell</option>
                <option>Sony</option>
                <option>LG</option>
                <option>Samsung</option>
              </select>
            </div>
            <div className="w-full my-1">
              <label className="font-semibold">Category</label>
              <br />
              <select
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                name="category"
                id="4"
              >
                <option disabled>Select a Category</option>
                <option>Television</option>
                <option>Monitor</option>
                <option>Laptop</option>
                <option>Tablet</option>
                <option>Smartphone</option>
                <option>Headphone</option>
                <option>AirPods</option>
              </select>
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            <div className="w-full my-1">
              <label className="font-semibold">PhotoURL</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="photoURL"
                placeholder="https://www.example.jpg"
                id="5"
              />
            </div>
            <div className="w-full my-1">
              <label className="font-semibold">Display</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="display"
                placeholder='6.7" Super Retina XDR'
                id="6"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            <div className="w-full my-1">
              <label className="font-semibold">Features</label> <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="features"
                placeholder="Face ID, eSIM Support"
                id="7"
              />
            </div>
            <div className="w-full my-1">
              <label className="font-semibold">Released Date</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="released"
                placeholder="22-09-2023"
                id="8"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            <div className="w-full my-1">
              <label className="font-semibold">Product price</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 pl-3 py-1 rounded-md w-full"
                type="number"
                name="price"
                step={0.1}
                placeholder="$1199"
                id="9"
              />
            </div>
            <div className="w-full my-1">
              <label className="font-semibold">User Rating</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 pl-3 py-1 rounded-md w-full"
                type="number"
                name="rating"
                step={0.1}
                max={10}
                placeholder="9.4"
                id="10"
              />
            </div>
          </div>

          <div className="md:flex justify-center items-center w-full gap-4">
            <div className="w-full my-1">
              <label className="font-semibold">Warranty</label> <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="warranty"
                placeholder="3"
                id="11"
              />
            </div>
            <div className="w-full my-1">
              <label className="font-semibold">Description</label> <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="description"
                placeholder="Description"
                id="12"
              />
            </div>
          </div>
          <input
            className="w-full text-lg font-semibold text-white bg-sky-500 py-1 mt-3 rounded-md hover:scale-95 duration-300"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
