import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Routes/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [eyeToggle, setEyeToggle] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLoginUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login with Email & password
    loginUser(email, password)
      .then(() => {
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are Login Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="px-4 mx-auto py-20 md:py-32">
      <div className="bg-white rounded-ee-3xl rounded-ss-3xl overflow-hidden pb-10 md:w-2/4 mx-auto">
        <h1 className="text-3xl text-center text-white font-bold py-2 bg-sky-400">
          Welcome
        </h1>
        <div className="flex justify-center relative text-center">
          <h1 className="absolute font-medium text-red-600 top-3">{error}</h1>
        </div>
        <form
          onSubmit={handleLoginUser}
          className="flex flex-col gap-2 text-slate-900 px-4 md:px-10 pt-10"
        >
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
              defaultValue="asmaulhossain@gmail.com"
              id="2"
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
              defaultValue="789456123"
              id="1"
            />
          </div>
          <input
            className="text-xl font-semibold text-white w-full bg-sky-400 rounded-3xl py-1 mt-2 hover:scale-95 duration-300"
            type="submit"
            value="Login"
          />
        </form>

        <p className="text-center text-sm mt-1">
          Already have an account?{" "}
          <Link
            className="font-semibold text-base text-sky-400 hover:underline"
            to="/register"
          >
            Register
          </Link>
        </p>

        <div className="flex flex-col mt-4 gap-2 px-10 font-bold">
          <button className="border-2 border-sky-400 py-1 rounded-full hover:scale-95 duration-300">
            Login With Google
          </button>
          <button className="border-2 border-sky-400 py-1 rounded-full hover:scale-95 duration-300">
            Login With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
