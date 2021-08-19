import React from "react";
import "./App.css";
import Home from "./container/home";
import Food from "./container/food";
import Resources from "./container/resources";
import WallOfHope from "./container/wallOfHope";
import Login from "./container/login";
import Dashboard from "./container/dashboard";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/wall-of-hope" element={<WallOfHope />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
