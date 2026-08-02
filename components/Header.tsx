"use client";

import Link from "next/link";
import { Bell, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="LIDA Formation, accueil">
          <span className="brand-mark">L</span>
          <span><strong>LIDA</strong><small>FORMATION</small></span>
        </Link>
        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Navigation principale">
          <Link href="/formations" onClick={() => setOpen(false)}>Formations</Link>
          <Link href="/a-propos" onClick={() => setOpen(false)}>L&apos;organisme</Link>
          <Link href="/formateurs" onClick={() => setOpen(false)}>Formateurs</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/connexion" className="nav-login" onClick={() => setOpen(false)}>Espace stagiaire</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/dashboard" className="icon-button" aria-label="Notifications"><Bell size={19} /></Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir le menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
