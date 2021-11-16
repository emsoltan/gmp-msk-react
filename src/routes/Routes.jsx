import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import classes from "../components/ui/UI.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import Library from "../components/pages/library/Library";
import Album from "../components/pages/album/Album"
import Account from "../components/pages/account/Account"
import Cart from "../components/pages/cart/Cart"
const Routes = () => {
  return (
  
      <Router className="containerbanner">
        <Header />
        <Switch>
          <Route path="/" element={<Home />} className={classes.section_view} />
          <Route path = "/about" element={<About/>}/>
          <Route path = "/library" element={<Library/>}/>
          <Route path = "/account" element={<Account/>}/>
          <Route path = "/cart" element={<Cart/>}/>
          <Route path = "/album" element={<Album/>}/>
        </Switch>
        <Footer/>
      </Router>
   
  );
};

export default Routes;
