import { useEffect, useState } from "react";

const CustomerRating = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://gadget-point-server-fafvkgxmw-asmaul-hossains-projects.vercel.app/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-6 md:my-10 lg:my-14 px-4 md:px-8">
      <h1 className="text-xl md:text-3xl text-orange-500 text-center font-bold">
        Customer Review
      </h1>
      <p className="text-xs md:text-base text-center text-white">
        What Our Customer Say About Our Services!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {reviews.slice(0, 4).map((review) => (
          <div key={review._id} className="flex flex-col bg-white p-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-sky-400">
                  <img
                    src={
                      review.photoURL
                        ? review.photoURL
                        : "https://i.ibb.co/XSZJkg3/Default-pfp-svg.png"
                    }
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-semibold mt-1">{review.name}</h1>
              </div>
            </div>
            <p className="grow mt-2 text-center text-sm text-slate-500">{review.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerRating;
