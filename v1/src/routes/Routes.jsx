import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

import About from "../components/pages/About"
import Album from "../components/pages/Album"
import Cart from "../components/pages/Cart"
import Library from "../components/pages/Library"
import MyAccount from "../components/pages/MyAccount"

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/album" element={Album} />
        <Route path="/library" element={Library} />
        <Route path="/cart" element={Cart} />
        <Route path="/about" element={About} />
        <Route path="/about" element={About} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
