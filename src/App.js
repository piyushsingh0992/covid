import React from "react";
import "./App.css";
import Home from "./container/home";
import Food from "./container/food";
import Resources from "./container/resources";
import Plasma from "./container/plasma";
import Login from "./container/login";
import Dashboard from "./container/dashboard";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/plasma" element={<Plasma />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />


        
        
         </Routes>
    </div>
  );
}

export default App;
