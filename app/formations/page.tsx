import type { Metadata } from "next";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsApp } from "@/components/WhatsApp";

export const metadata: Metadata = {title: "Formations professionnelles", description: "Découvrez les formations pratiques de LIDA Solutions & Consulting en gestion, comptabilité, fiscalité, paie, QHSE, Excel et Sage."};

export default function FormationsPage() {
  return <><Header/><main><section className="page-hero"><div className="container"><span className="eyebrow">Formation professionnelle</span><h1>Des compétences concrètes, directement applicables.</h1><p>Nos programmes associent séances en direct, études de cas, outils professionnels, supports pédagogiques et accompagnement.</p><div className="page-highlights"><span>100 % en ligne</span><span>Cas pratiques</span><span>Enregistrements disponibles</span><span>Attestation de formation</span></div></div></section><section className="section"><div className="container"><Catalog/></div></section></main><Footer/><WhatsApp/></>;
}
