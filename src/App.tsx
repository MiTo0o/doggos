import Home from "./Pages/Home"
import Gallery from "./Pages/Gallery";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gal" element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App