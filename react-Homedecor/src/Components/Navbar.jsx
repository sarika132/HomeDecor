import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <h1 className="logo">Ghar Sanshar</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;