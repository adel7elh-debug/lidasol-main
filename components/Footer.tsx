import Link from "next/link";
import {Clock3, Mail, MapPin, MessageCircle, Phone} from "lucide-react";
import {Brand} from "@/components/Brand";
import {services} from "@/data/services";
import {siteConfig} from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Brand className="footer-brand"/>
          <p>Cabinet marocain de conseil, gestion, digitalisation, accompagnement ISO et formation professionnelle.</p>
          {siteConfig.socialLinks.length > 0 && <div className="social-links">{siteConfig.socialLinks.map((social) => <a key={social.href} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}</div>}
        </div>
        <div>
          <h3>Liens rapides</h3>
          <Link href="/">Accueil</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#digital">Solutions digitales</Link>
          <Link href="/formations">Formations</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Nos services</h3>
          {services.map((service) => <Link key={service.slug} href={`/#${service.slug}`}>{service.title}</Link>)}
        </div>
        <div>
          <h3>Coordonnées</h3>
          <span className="footer-contact"><MapPin/>{siteConfig.location}</span>
          <a href={`mailto:${siteConfig.email}`}><Mail/>{siteConfig.email}</a>
          {siteConfig.phoneNumber && <a href={`tel:${siteConfig.phoneNumber}`}><Phone/>{siteConfig.phoneNumber}</a>}
          {siteConfig.whatsappNumber && <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle/>WhatsApp</a>}
          <span className="footer-contact"><Clock3/>{siteConfig.contactHours}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} LIDA Solutions &amp; Consulting. Tous droits réservés.</span>
        <span><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-confidentialite">Politique de confidentialité</Link></span>
      </div>
    </footer>
  );
}
