import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
      
        <ul className="navbar-nav">

        <li className="nav-item">
            <Link
              to="/"
              className="">Home</Link>
          </li>
        
          <li className="nav-item">
            <Link
              to="/search"
              className="">Search</Link>
          </li>

          <li className="nav-item">
            <Link
              to="/save"
              className="">Save</Link>
          </li>
        </ul>
     
    </nav>
  );
}

export default Navbar;
