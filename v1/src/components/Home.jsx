import React from "react";
import { Link } from "react-router-dom";
import gmplogo from "../assets/images/gmplogo.png";
import Navbar from "./Navbar"


const Home = () => {
  return (
    <>
    <Navbar/>
      <header className="header">
        <div className="logo-box">
          <img src={gmplogo} alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-sub">Welcome To</span>
            <span className="heading-primary-main">GMP-MSK Beats</span>
            <span className="heading-primary-sub heading-primary-sub2">
              your beats library
            </span>
          </h1>
          <Link to="/" className="btn btn-black btn-animated">
            Pick your beats
          </Link>
        </div>
      </header>
    </>
  );
};

export default Home;
