import { useState } from "react";
import "./App.css";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
import MainTemplate from "./components/MainTemplate";
import Header from "./components/Header";
import Banners from "./components/Banners";
import Modal from "./components/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>

      {/* <MainTemplate /> */}
      {/* <Image/> */}
      {/* <Videos/> */}
    </>
  );
}

export default App;
