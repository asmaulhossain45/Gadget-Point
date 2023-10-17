import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-sky-400 text-base-content rounded">
      <nav className="grid grid-flow-col gap-2 md:gap-4 list-none">
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
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>facebook</a>
          <a>Twitter</a>
          <a>Instagram</a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © 2023
          <br />
          All right reserved by AH SOHAG
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
