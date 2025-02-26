import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/navbar";
import Footer from "./pages/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Memepage from "./pages/meme";
import MemeMekar from "./pages/mememaker";

function App() {
  const [darkMode, setDarkMode] = useState(false); // No localStorage

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/home" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/memepage" element={<Memepage darkMode={darkMode} />} />
          <Route path="/mememaker" element={<MemeMekar darkMode={darkMode} />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
