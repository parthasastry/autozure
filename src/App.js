import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/:vin" element={<CarDetails />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
