import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./common/header/Header";
import Cart from "./pages/Cart/Cart";
import Footer from "./common/footer/Footer";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductDetail from "./pages/ProductDetail";

// components
import Home from "./components/MainPage/Home";
import FlashDeals from "./components/flashDeals/FlashDeals";
import TopCategories from "./components/top/TopCategories";
import NewArrivals from "./components/newarrivals/NewArrivals";
import Discount from "./components/discount/Discount";
import Shop from "./components/shops/Shop";
import Annocument from "./components/annocument/Annocument";
import Wrapper from "./components/wrapper/Wrapper";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <>
            <Home />
            <FlashDeals />
            <TopCategories />
            <NewArrivals />
            <Discount />
            <Shop />
            <Annocument />
            <Wrapper />
          </>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/about">
          <AboutUsPage />
        </Route>
        <Route path="/Bonik-Ecommerice">
          <Redirect to="/" />
        </Route>
        <Route path="/:prductName" exact>
          <ProductDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
