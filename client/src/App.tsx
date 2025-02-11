import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("bg-gray-100");

  const changeBackground = () => {
    const colors = [
      "bg-blue-100",
      "bg-green-100",
      "bg-purple-100",
      "bg-red-100",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div className={`app-container ${backgroundColor}`}>
      <Header />

      <main className="main-content">
        <h2>Contenu Principal</h2>
        <button
          type="button"
          onClick={changeBackground}
          className="color-change-button"
        >
          Changer de couleur
        </button>
      </main>

      <Footer />
    </div>
  );
}
