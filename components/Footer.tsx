import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="brand footer-brand">
            <span className="brand-mark">L</span>
            <span><strong>LIDA</strong><small>FORMATION</small></span>
          </div>
          <p>Des formations pratiques pour développer les compétences réellement utiles en entreprise.</p>
        </div>
        <div>
          <h3>Formations</h3>
          <Link href="/formations">Toutes les formations</Link>
          <Link href="/formations?categorie=Finance">Finance & Comptabilité</Link>
          <Link href="/formations?categorie=RH">Ressources humaines</Link>
          <Link href="/formations?categorie=Logiciels">Logiciels</Link>
        </div>
        <div>
          <h3>Navigation</h3>
          <Link href="/a-propos">À propos</Link>
          <Link href="/formateurs">Formateurs</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/connexion">Connexion</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <span><Mail />{siteConfig.email}</span>
          <span><MessageCircle />{siteConfig.whatsappDisplay}</span>
          <span><MapPin />{siteConfig.location}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 LIDA Formation. Tous droits réservés.</span>
        <span>Confidentialité · Mentions légales</span>
      </div>
    </footer>
  );
}
