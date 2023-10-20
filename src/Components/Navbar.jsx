import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Routes/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);

  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-900 text-sky-400 pr-4 md:px-8 shadow-sm shadow-sky-400 font-semibold">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <img
          className="sm:ml-2 md:ml-0 w-28"
          src="https://i.ibb.co/DD31dTM/Logo.png"
          alt=""
        />
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
                <button onClick={handleLogOut}>Log Out</button>
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
