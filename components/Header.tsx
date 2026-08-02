"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>12);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]);
  return <header className={`site-header${scrolled?" is-scrolled":""}`}><div className="container nav-wrap">
    <Link href="/" className="brand" aria-label="LIDA Formation, accueil"><span className="brand-mark">L</span><span><strong>LIDA</strong><small>FORMATION</small></span></Link>
    <nav className={open?"main-nav open":"main-nav"} aria-label="Navigation principale">
      <Link href="/" onClick={()=>setOpen(false)}>Accueil</Link><Link href="/formations" onClick={()=>setOpen(false)}>Formations</Link><Link href="/#pourquoi" onClick={()=>setOpen(false)}>Pourquoi nous ?</Link><Link href="/formateurs" onClick={()=>setOpen(false)}>Formateurs</Link><Link href="/faq" onClick={()=>setOpen(false)}>FAQ</Link>
      <div className="mobile-nav-actions"><Link href="/connexion" onClick={()=>setOpen(false)}>Connexion</Link><Link href="/inscription" className="button primary compact" onClick={()=>setOpen(false)}>S&apos;inscrire</Link></div>
    </nav>
    <div className="desktop-nav-actions"><Link href="/connexion" className="login-link">Connexion</Link><Link href="/inscription" className="button primary compact">S&apos;inscrire</Link></div>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?"Fermer le menu":"Ouvrir le menu"}>{open?<X/>:<Menu/>}</button>
  </div></header>;
}
