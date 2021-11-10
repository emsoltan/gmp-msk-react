import React from "react";
import {Link}from "react-router-dom"
import gmplogo from "../assets/images/gmplogo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={gmplogo} alt="logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-sub">Welcome To</span>
          <span className="heading-primary-main">GMP-MSK Beats</span>
          <span className="heading-primary-sub">House of your beats</span>
        </h1>
      <a href="#" className="btn btn-black">Pick your beats</a>
      </div>
    </header>
  );
};

export default Header;
