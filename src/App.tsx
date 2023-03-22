import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Galleries from "./Pages/Galleries";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:galleryName" element={<Gallery />} />
        <Route path="/galleries" element={<Galleries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
