import React from 'react'


const Navbar = () => {
    return (
      <nav>
        <ul className="navbar-list">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/library">Library</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/loginform">Login</a>
          </li>
          <li>
            <a href="/basket">Cart</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
