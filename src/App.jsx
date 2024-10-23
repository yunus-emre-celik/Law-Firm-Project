import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Hakkimizda from "./pages/Hakkimizda";
import { Route, Switch, Redirect, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
      </Routes>
    </Router>
  );
}

export default App;
