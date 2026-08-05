"use client";

import Link from "next/link";
import {ArrowUpRight, Menu, X} from "lucide-react";
import { useState } from "react";
import {Brand} from "@/components/Brand";

const links = [
  ["/", "Accueil"],
  ["/#services", "Services"],
  ["/#digital", "Solutions digitales"],
  ["/formations", "Formations"],
  ["/a-propos", "À propos"],
  ["/contact", "Contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand onClick={close}/>
        <button className="menu-toggle" type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
        <nav id="main-navigation" className={open ? "main-nav open" : "main-nav"} aria-label="Navigation principale">
          {links.map(([href, label]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}
          <Link href="/contact?service=Diagnostic" className="button gold-button small" onClick={close}>Diagnostic gratuit <ArrowUpRight/></Link>
        </nav>
      </div>
    </header>
  );
}
