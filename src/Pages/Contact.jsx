import Swal from "sweetalert2";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const form = event.target;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message Sent!",
      text: "We will contact you very soon.",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };

  return (
    <div className="w-11/12 md:w-3/4 mx-auto pb-6 bg-white border-sky-400 border-4 rounded-lg my-10">
      <h1 className="text-center text-white text-xl md:text-3xl font-bold bg-sky-400 py-2">
        Leave a Message
      </h1>
      <form
        onSubmit={handleContact}
        className="text-slate-900 px-4 md:px-10 pt-4"
      >
        <div className="md:flex justify-center items-center w-full gap-4">
          <div className="w-full my-1">
            <label className="font-semibold">Your Name</label>
            <br />
            <input
              className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
              type="text"
              name="name"
              required
              placeholder="John Doe"
              id="1"
            />
          </div>
          <div className="w-full my-1">
            <label className="font-semibold">E-mail Address</label>
            <br />
            <input
              className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
              type="email"
              name="email"
              required
              placeholder="xyz@example.com"
              id="2"
            />
          </div>
        </div>
        <div className="md:flex justify-center items-center w-full gap-4">
          <div className="w-full my-1">
            <label className="font-semibold">Contact Number</label>
            <br />
            <input
              className="bg-transparent border-2 border-slate-300 outline-0 pl-3 py-1 rounded-md w-full"
              type="number"
              name="phone"
              required
              placeholder="+0123456789"
              id="3"
            />
          </div>
          <div className="w-full my-1">
            <label className="font-semibold">Home Address</label>
            <br />
            <input
              className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
              type="text"
              name="address"
              required
              placeholder="New-York, USA"
              id="2"
            />
          </div>
        </div>
        <div className="mt-2">
          <label className="font-semibold">Your Review</label>
          <textarea
            className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
            name="message"
            placeholder="Message"
            id="5"
            rows="5"
          ></textarea>
        </div>
        <input
          className="w-full text-lg font-semibold text-white bg-sky-500 py-1 mt-3 rounded-md hover:scale-95 duration-300"
          type="submit"
          value="Send Your Message"
        />
      </form>
    </div>
  );
};

export default Contact;
