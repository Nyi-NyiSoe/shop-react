// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Detail from "./screens/Detail";
import { Category, Home } from "./screens/Home";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Category />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
