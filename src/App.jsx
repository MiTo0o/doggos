import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery.jsx";
import About from "./pages/About/About";
import Profiles from "./pages/Profiles/Profiles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* page not found */}
        {/* <Route path="*" element={<PageNotFound />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/galleries" element={<Profiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
