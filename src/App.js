import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/navbar";
import Footer from "./pages/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Memepage from "./pages/meme";
import MemeMekar from "./pages/mememaker";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />


        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />


        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />


        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />


        <Route
          path="/memepage"
          element={<Memepage />}
        />


        <Route
          path="/mememaker"
          element={<MemeMekar />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
