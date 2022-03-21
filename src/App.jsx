import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Galleries from "./pages/Galleries/Galleries";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* page not found */}
        {/* <Route path="*" element={<PageNotFound />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Galleries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
