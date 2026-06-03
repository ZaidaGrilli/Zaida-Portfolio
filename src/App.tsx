import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ArtGallery from "./pages/ArtGallery/ArtGallery";
import TechProjects from "./pages/TechProjects/tech";
import Resume from "./pages/Resume/resume";
import About from "./pages/About/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<ArtGallery />} />
        <Route path="/tech" element={<TechProjects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
