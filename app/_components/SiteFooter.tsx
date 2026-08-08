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
              src="/logo-lida-new.png?v=20260808"
              alt=""
              width={500}
              height={500}
              unoptimized
            />
          </Link>
          <p>Conseil, organisation, digitalisation, ISO et formation professionnelle pour les entreprises au Maroc.</p>
        </div>
        <div><strong>Expertises</strong><Link href="/conseil-accompagnement">Conseil</Link><Link href="/digitalisation">Digitalisation</Link><Link href="/gestion-organisation">Gestion & organisation</Link><Link href="/accompagnement-iso">Accompagnement ISO</Link></div>
        <div><strong>Formations</strong><Link href="/formation">Catalogue</Link><Link href="/formation/excel">Excel</Link><Link href="/formation/excel-vba">Excel VBA</Link><Link href="/formation/gestion-intelligence-artificielle">Intelligence Artificielle</Link></div>
        <div><strong>Contact</strong><a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><span>{LOCATION}</span><Link href="/contact">Nous écrire</Link></div>
      </div>
      <div className="container footer-bottom"><small>© 2026 LIDA Solutions & Consulting</small><div><Link href="/contact">Contact</Link></div></div>
    </footer>
  );
}
