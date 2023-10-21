import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Routes/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut, setUser } = useContext(AuthContext);
  const [menuToggle, setMenuToggle] = useState(true);
  const navigate = useNavigate();

  const handleLogOutButton = () => {
    handleLogOut()
      .then(() => {
        setUser(null);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log Out Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to={`/myCart/${user?.uid}`}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="px-4 navbar bg-opacity-95 bg-slate-900 text-sky-400 font-semibold">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label
            onClick={() => setMenuToggle(!menuToggle)}
            tabIndex={0}
            className="btn btn-ghost md:hidden"
          >
            {menuToggle ? (
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            ) : (
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            )}
          </label>
          <ul
            tabIndex={0}
            className={`${
              menuToggle ? "hidden" : ""
            } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}
          >
            {NavLinks}
          </ul>
        </div>
        <Link to="/">
          <img
            className="sm:ml-2 md:ml-0 w-28"
            src="https://i.ibb.co/DD31dTM/Logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/XSZJkg3/Default-pfp-svg.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>{user.displayName}</p>
              </li>
              <li>
                <p>{user.email}</p>
              </li>
              <li>
                <button onClick={handleLogOutButton}>Log Out</button>
              </li>
            </ul>
          </div>
        ) : (
          <button>
            <NavLink to="/login">Login</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
