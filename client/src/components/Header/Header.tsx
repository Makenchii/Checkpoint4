import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <h1>JazzStream</h1>
        <button type="button" className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`} />
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/albums">Albums</a>
            </li>
            <li>
              <a href="/about">À propos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
