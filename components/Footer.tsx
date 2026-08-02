import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><div className="brand footer-brand"><span className="brand-mark">L</span><span><strong>LIDA</strong><small>FORMATION</small></span></div><p>Des compétences concrètes pour faire progresser votre carrière et votre entreprise.</p></div>
      <div><h3>Navigation</h3><Link href="/formations">Nos formations</Link><Link href="/a-propos">À propos</Link><Link href="/faq">FAQ</Link></div>
      <div><h3>Votre espace</h3><Link href="/connexion">Connexion</Link><Link href="/inscription">S&apos;inscrire</Link><Link href="/dashboard">Dashboard démo</Link></div>
      <div><h3>Nous contacter</h3><span><MapPin size={16}/> Casablanca, Maroc</span><span><Phone size={16}/> +212 6 00 00 00 00</span><span><Mail size={16}/> contact@lidasol.com</span></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 LIDA Formation</span><span>Confidentialité · Mentions légales</span></div>
  </footer>;
}
