import React from "react";
// import classes from "../../ui/UI.module.css";
import classes from "../../ui/UI.module.css"
import { Link } from "react-router-dom";
import Library from "../../pages/library/Library"
import About from "../../pages/about/About"
import Account from "../../pages/account/Account"
const Home = () => {
  return (
    <>
      <div className={classes.section_view}>
        <div className={classes.text_box}>
          <h1 className={classes.heading_primary}>
            <span className={classes.heading_primary_sub}>Welcome To</span>
            <span className={classes.heading_primary_main}>GMP-MSK Beats</span>
            <span className={classes.heading_primary_sub2}>
              your beats library
            </span>
          </h1>
          <Link
            to="/"
            className={`${classes.btn} ${classes.btn_black} ${classes.btn_animated}`}
          >
            Pick your beats
          </Link>
        </div>
        
      </div>
      <About/>
      <Library/>
      <Account/>

    </>
  );
};

export default Home;
