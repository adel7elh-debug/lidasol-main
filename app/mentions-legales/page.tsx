import type {Metadata} from "next";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {siteConfig} from "@/data/site";

export const metadata: Metadata = {title: "Mentions légales"};

export default function LegalPage() {
  return <><Header/><main><section className="page-hero compact"><div className="container"><span className="eyebrow">Informations</span><h1>Mentions légales</h1><p>Informations relatives au site de LIDA Solutions &amp; Consulting.</p></div></section><section className="section"><div className="container legal-content"><h2>Éditeur du site</h2><p><strong>{siteConfig.name}</strong><br/>{siteConfig.location}<br/><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p><h2>Objet du site</h2><p>Ce site présente les activités de conseil, gestion, digitalisation, accompagnement ISO et formation professionnelle de LIDA Solutions &amp; Consulting.</p><h2>Propriété intellectuelle</h2><p>Les contenus, textes, éléments graphiques et marques présents sur ce site sont protégés. Toute reproduction ou utilisation non autorisée est interdite.</p><h2>Responsabilité</h2><p>Les informations publiées sont fournies à titre général et peuvent être mises à jour. Elles ne constituent pas un engagement contractuel sans proposition formelle.</p></div></section></main><Footer/></>;
}
