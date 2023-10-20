import { useContext, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { HiLink, HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Routes/AuthProvider";

const Register = () => {
  const { createUser, handleUserUpdate, handleGoogleLogin, handleGithubLogin } =
    useContext(AuthContext);
  const [eyeToggle, setEyeToggle] = useState(true);
  const [error, setError] = useState(null);
  // Create User with Email and Password
  const handleSubmitButton = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Use at least one Upper-Case later");
      return;
    } else if (!/[!@#$%&*+.?~=]/.test(password)) {
      setError("Use at least one special character");
      return;
    }

    createUser(email, password)
      .then(() => {
        handleUserUpdate(name, photoURL)
          .then(() => {})
          .catch(() => {});
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been Created!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="px-4 mx-auto py-10 md:py-20  min-h-[95vh]">
      <div className="bg-white rounded-ee-3xl rounded-ss-3xl overflow-hidden pb-10 md:w-2/4 mx-auto">
        <h1 className="text-3xl text-center text-white font-bold py-2 bg-sky-400">
          Create Account
        </h1>
        <div className="flex justify-center relative text-center">
          <h1 className="absolute font-medium text-red-600 top-3">{error}</h1>
        </div>
        <form
          onSubmit={handleSubmitButton}
          className="flex flex-col gap-2 text-slate-900 px-4 md:px-10 pt-10"
        >
          <div>
            <label className="font-semibold">Your Name</label>
            <br />
            <h1 className="relative">
              <span className="absolute right-2 top-2">
                <BiSolidUser></BiSolidUser>
              </span>
            </h1>
            <input
              className="bg-transparent border-2 border-slate-300 outline-0 pl-2 pr-6 py-1 rounded-md w-full"
              type="text"
              name="name"
              placeholder="John Doe"
              required
              id="1"
            />
          </div>
          <div>
            <label className="font-semibold">E-mail Address</label>
            <br />
            <h1 className="relative">
              <span className="absolute right-2 top-2">
                <HiMail></HiMail>
              </span>
            </h1>
            <input
              className="bg-transparent border-2 border-slate-300 outline-0 pl-2 pr-6 py-1 rounded-md w-full"
              type="email"
              name="email"
              placeholder="xyz@example.com"
              required
              id="2"
            />
          </div>
          <div>
            <label className="font-semibold">Photo URL</label>
            <br />
            <h1 className="relative">
              <span className=" absolute right-2 top-2">
                <HiLink></HiLink>
              </span>
            </h1>
            <input
              className="bg-transparent border-2 border-slate-300 outline-0 pl-2 pr-6 py-1 rounded-md w-full"
              type="text"
              name="photoURL"
              placeholder="http://www.photoURL.jpg"
              id="3"
            />
          </div>
          <div>
            <label className="font-semibold">Password</label>
            <br />
            <h1 className="relative">
              <span
                onClick={() => setEyeToggle(!eyeToggle)}
                className=" absolute right-2 top-2"
              >
                {eyeToggle ? (
                  <BsEyeSlashFill></BsEyeSlashFill>
                ) : (
                  <BsEyeFill></BsEyeFill>
                )}
              </span>
            </h1>
            <input
              className="bg-transparent border-2 border-slate-300 outline-0 pl-2 pr-6 py-1 rounded-md w-full"
              type={eyeToggle ? "password" : "text"}
              name="password"
              placeholder="********"
              required
              id="4"
            />
          </div>
          <input
            className="text-xl font-semibold text-white w-full bg-sky-400 rounded-3xl py-1 mt-2 hover:scale-95 duration-300"
            type="submit"
            value="Submit"
          />
        </form>
        <p className="text-center text-sm mt-1">
          Already have an account?{" "}
          <Link
            className="font-semibold text-base text-sky-400 hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
        <div className="flex flex-col mt-4 gap-2 px-10 font-bold">
          <button
            onClick={handleGoogleLogin}
            className="border-2 border-sky-400 py-1 rounded-full hover:scale-95 duration-300"
          >
            Login With Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="border-2 border-sky-400 py-1 rounded-full hover:scale-95 duration-300"
          >
            Login With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
