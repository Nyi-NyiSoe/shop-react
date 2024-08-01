// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Detail from "./screens/Detail";
import Home from "./screens/Home";
import Product from "./screens/Product";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Category />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}

        
        <Route path="/category/:id/details" element={<Detail />} />
        <Route path="/category/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
