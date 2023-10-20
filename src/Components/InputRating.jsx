import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Routes/AuthProvider";

const InputRating = () => {
  const { user } = useContext(AuthContext);
  console.log(user.displayName);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user.displayName;
    const photoURL = user.photoURL;
    const message = form.message.value;
    const review = { name, photoURL, message };
    console.log(review);
    fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message Sent!",
            text: "We will contact you soon!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-11/12 md:w-3/4 mx-auto pb-6 bg-white border-sky-400 border-4 rounded-lg my-10">
      <h1 className="text-center text-white text-xl md:text-3xl font-bold bg-sky-400 py-2">
        Leave a Review
      </h1>
      <form
        onSubmit={handleReview}
        className="text-slate-900 px-4 md:px-10 pt-4"
      >
        <div className="mt-2">
          <label className="font-semibold">Your Review</label>
          <textarea
            className="bg-transparent border-2 border-slate-300 outline-0 px-3 py-1 rounded-md w-full"
            name="message"
            placeholder="Message"
            id="3"
            rows="5"
          ></textarea>
        </div>
        <input
          className="w-full text-lg font-semibold text-white bg-sky-500 py-1 mt-3 rounded-md hover:scale-95 duration-300"
          type="submit"
          value="Send Your Review"
        />
      </form>
    </div>
  );
};

export default InputRating;
