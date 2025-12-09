import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";
import Company_Logo from "../assets/Company_Logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="logo-link">
          <span className="company_logo">
            <img src={Company_Logo} alt="Company Logo" />
          </span>
          Know Your <span className="highlight">Trips</span>
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
      </ul>

      <button className="btn-primary">Download the App</button>
    </nav>
  );
};

export default Navbar;
