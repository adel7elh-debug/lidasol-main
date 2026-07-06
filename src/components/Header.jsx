import { useState } from "react";
import { navItems } from "../data.js";
import Icon from "./Icon.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Accueil LIDA Solutions & Consulting" onClick={closeMenu}>
        <span className="brand-mark">L</span>
        <span>
          <strong>LIDA</strong>
          <small>Solutions & Consulting</small>
        </span>
      </a>

      <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Navigation principale">
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">
        Diagnostic gratuit
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <Icon name={isOpen ? "close" : "menu"} />
      </button>
    </header>
  );
}
