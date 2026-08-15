import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, LOCATION, PHONE_DISPLAY, PHONE_LINK } from "@/app/_lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link className="brand footer-brand" href="/" aria-label="LIDA Solutions & Consulting — Accueil">
            <Image
              className="brand-logo footer-brand-logo"
              src="/logo-lida-affiche.png"
              alt=""
              width={900}
              height={648}
            />
          </Link>
          <p>Digitalisation, conseil, pilotage, accompagnement ISO et formations professionnelles pour les entreprises au Maroc.</p>
        </div>
        <div><strong>Services</strong><Link href="/digitalisation">Digitalisation & automatisation</Link><Link href="/conseil-accompagnement">Conseil & accompagnement</Link><Link href="/gestion-organisation">Pilotage & organisation</Link><Link href="/iso">Accompagnement ISO</Link><Link href="/formation">Formations professionnelles</Link></div>
        <div><strong>Formations</strong><Link href="/formation/axe-gestion-administrative-comptable">Gestion administrative & comptable</Link><Link href="/formation/axe-intelligence-artificielle">IA appliquée à l’entreprise</Link><Link href="/formation/axe-iso-qse">ISO & QSE</Link><Link href="/formation/axe-excel-analyse-donnees">Excel & analyse des données</Link></div>
        <div><strong>Contact</strong><a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><span>{LOCATION}</span><Link href="/contact">Nous écrire</Link></div>
      </div>
      <div className="container footer-bottom"><small>© 2026 LIDA Solutions & Consulting</small><div><Link href="/contact">Contact</Link></div></div>
    </footer>
  );
}
