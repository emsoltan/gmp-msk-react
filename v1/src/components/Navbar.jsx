import React from 'react'
import {Link} from "react-router-dom"
import Login from "./pages/account/Login";
import Register from "./pages/account/Register"
import Cart from "./pages/Cart";

const Navbar = () => {
    return (
      <nav>
        <ul className="navbar-list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/myaccount">My-Account</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
