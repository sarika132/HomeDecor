import React from 'react';
import { Link } from "react-router-dom";
import "../Pages/Auth.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ghar Sansar</div>
      <input className="search-bar" type="text" placeholder="Start your Search" />
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
      <ul className="nav-links">
        <li>Categories</li>
        <li>Furniture</li>
        <li>Pillows</li>
        <li>Design</li>
        <li>Rugs</li>
        <li>Sale & Clearance</li>
        <li>Trends</li>
      </ul>
    </nav>
  );
}

export default Navbar;