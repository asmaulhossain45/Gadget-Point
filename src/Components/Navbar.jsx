import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Routes/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut, setUser } = useContext(AuthContext);
  const [menuToggle, setMenuToggle] = useState(true);
  const [profileToggle, setProfileToggle] = useState(true);
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

  console.log(user);

  return (
    <div className="pr-4 md:px-6 navbar bg-slate-900 text-sky-400 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              onClick={() => setMenuToggle(!menuToggle)}
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
            onClick={() => setMenuToggle(!menuToggle)}
            tabIndex={0}
            className={`${
              menuToggle ? "" : "hidden"
            } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52`}
          >
            {NavLinks}
          </ul>
        </div>
        <Link to="/">
          <img
            className="w-28"
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  onClick={() => setProfileToggle(!profileToggle)}
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
              className={`${
                profileToggle ? "" : "hidden"
              } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52 flex justify-center`}
            >
              {user.emailVerified ? (
                <h1 className="text-xs border-2 border-green-600 py-1 rounded-full bg-white text-green-600 flex justify-center">
                  VERIFIED
                </h1>
              ) : (
                <h1 className="text-xs border-2 border-red-600 py-1 rounded-full bg-white text-red-600 flex justify-center">UNVERIFIED</h1>
              )}

              <p className="text-center mt-1">{user.displayName}</p>
              <button className="mt-1" onClick={handleLogOutButton}>Log Out</button>
            </ul>
          </div>
        ) : (
          <Link to="/login"
          className="btn btn-ghost">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
