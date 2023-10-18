const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const released = form.released.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const addProductData = {
      name,
      released,
      brand,
      category,
      photoURL,
      price,
      rating,
      description,
    };
    console.log(addProductData);
  };

  return (
    <div className="py-10 bg-white">
      <h1 className="text-center text-3xl font-bold">Add Product Details</h1>
      <form
        onSubmit={handleAddProduct}
        className=" text-slate-900 px-4 md:px-10 pt-4"
      >
        <div className="flex flex-col md:flex-row justify-center gap-x-6 gap-y-2 md:gap-y-0">
          <div className="w-full space-y-2">
            <div>
              <label className="font-semibold">Product Title</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="name"
                defaultValue="Galaxy A13"
                id="1"
              />
            </div>
            <div>
              <label className="font-semibold">Brand</label>
              <br />
              <select
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                name="brand"
                defaultValue="Select a Brand"
                id="3"
              >
                <option disabled>Select a Brand</option>
                <option>Apple</option>
                <option>Canon</option>
                <option>Dell</option>
                <option>Intel</option>
                <option>OLG</option>
                <option>Samsung</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Category</label>
              <br />
              <select
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                name="category"
                defaultValue="Select a Category"
                id="4"
              >
                <option disabled>Select a Category</option>
                <option>Television</option>
                <option>Laptop</option>
                <option>Tablet</option>
                <option>Smartphone</option>
                <option>Headphone</option>
                <option>AirPods</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Released Date</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="released"
                defaultValue="16-08-2023"
                id="2"
              />
            </div>
          </div>
          <div className="w-full space-y-2">
            <div>
              <label className="font-semibold">PhotoURL</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="photoURL"
                defaultValue="http://www.photoURL.jpg"
                id="5"
              />
            </div>
            <div>
              <label className="font-semibold">Product price</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 pl-3 py-1 rounded-md w-full"
                type="number"
                name="price"
                defaultValue="5000"
                id="6"
              />
            </div>
            <div>
              <label className="font-semibold">User Rating</label>
              <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 pl-3 py-1 rounded-md w-full"
                type="number"
                name="rating"
                defaultValue="4.5"
                id="7"
              />
            </div>
            <div>
              <label className="font-semibold">Description</label> <br />
              <input
                className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
                type="text"
                name="description"
                defaultValue="Short Description"
                id="8"
              />
            </div>
          </div>
        </div>
        <input
          className="w-full text-lg font-semibold text-white bg-sky-500 py-1 mt-3 rounded-md hover:scale-95 duration-300"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
