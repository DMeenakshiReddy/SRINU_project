import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Home from "./pages/Home.jsx";
import BodyTypeDetail from "./pages/BodyTypeDetail.jsx";
import Tips from "./pages/Tips.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BodyShapeCalculator from "./pages/BodyShapeCalculator.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bodytypes/:typeId" element={<BodyTypeDetail />} />
        <Route path="/calculator" element={<BodyShapeCalculator />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
