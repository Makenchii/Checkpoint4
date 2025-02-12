import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import AlbumDetails from "./pages/AlbumDetails";
import Home from "./pages/Home"; // Ajustez le chemin selon votre structure
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<AlbumDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
