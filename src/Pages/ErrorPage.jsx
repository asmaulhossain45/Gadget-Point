import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-slate-900">
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-[92vh]">
        <img
          className="w-full"
          src="https://i.ibb.co/XJxWN99/404-error.jpg"
          alt=""
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
