import React from 'react'
import {Link} from "react-router-dom"
import classes from "./Header.css"
import gmpmsk_logo from "../../assets/gmpmsk_logo.png";
const Header = () => {
    return (
      <header className="header">
        <div className="logobox">
          <img src={gmpmsk_logo}></img>
          {/* <h1>GMPMSK</h1> */}
        </div>
        <nav className="navbar">
          <ul className="navlist">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header
