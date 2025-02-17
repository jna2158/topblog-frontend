import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Credit from "./pages/credit/Credit";
import Pro from "./pages/pro/Pro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Home />} />
        <Route path="/fail" element={<Home />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/pro" element={<Pro />} />
      </Routes>
    </Router>
  );
}

export default App;
