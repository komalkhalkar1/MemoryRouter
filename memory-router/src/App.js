// import logo from './logo.svg';
import './App.css';

import React from "react";
import { MemoryRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          {/* Navigation Links */}
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Route Switch */}
          {/* <Switch> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
