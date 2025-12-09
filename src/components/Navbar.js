import React from "react";
import "./Styles/Navbar.css";
import Company_Logo from "../assets/Company_Logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <span className="company_logo">
          <img src={Company_Logo} />
        </span>
        Know Your <span className="highlight">Trips</span>
      </div>

      <ul className="nav-links">
        <li>Blogs</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="btn-primary">Download the App</button>
    </nav>
  );
};

export default Navbar;
