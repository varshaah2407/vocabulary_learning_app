import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./components/Navbar/navbar";
import Login from "./components/Login/Login";
import TakeaTest from "./components/TakeATest/TakeATest";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Signup from "./components/Signup/Signup";
import WordFinder from "./components/games/WordFinder";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/takeatest" element={<TakeaTest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/WordFinder" element={<WordFinder />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
