import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/app/_components/PageHero";
import { CTASection } from "@/app/_components/CTASection";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "À propos de LIDA Solutions & Consulting",
  description: "Un cabinet de conseil proche du terrain et orienté résultats pour les entreprises marocaines.",
  alternates: { canonical: "/a-propos" },
  openGraph: { title: "À propos de LIDA Solutions & Consulting", description: "Un cabinet de conseil proche du terrain et orienté résultats.", url: "/a-propos", images: [{ url: "/photos/pages/a-propos.webp", alt: "À propos de LIDA Solutions & Consulting" }] },
};

const values = [
  { title: "Clarté", text: "Rendre les enjeux compréhensibles avant de recommander une solution. Un dirigeant doit pouvoir comprendre pourquoi une action est prioritaire, pas seulement qu'elle l'est." },
  { title: "Proximité", text: "Construire avec les dirigeants et les équipes, au plus près du terrain — pas depuis un rapport rédigé à distance du fonctionnement réel de l'entreprise." },
  { title: "Utilité", text: "Produire des outils et des décisions qui améliorent réellement le travail quotidien, pas des livrables destinés à rester classés." },
  { title: "Progression", text: "Mesurer, apprendre et renforcer ce qui fonctionne dans la durée — une organisation se construit par itérations, pas en une seule intervention." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="À propos" title="Un cabinet de conseil proche du terrain et orienté résultats" description="LIDA Solutions & Consulting accompagne les entreprises marocaines pour structurer leur organisation, digitaliser leurs pratiques, sécuriser leurs obligations comptables, fiscales et juridiques, préparer leurs certifications ISO et développer les compétences de leurs équipes." image="/photos/pages/a-propos.webp" imageAlt="Équipe d’entreprise travaillant avec LIDA Solutions & Consulting" breadcrumbs={[{ label: "À propos", href: "/a-propos" }]} primaryLabel="Découvrir notre méthode" primaryHref="/a-propos/methodologie" whatsappMessage={whatsappMessages.general} />

      <section className="section"><div className="container two-column-sections about-pillars"><article><p className="eyebrow eyebrow-dark"><span /> Vision</p><h2>Des entreprises mieux structurées, capables de progresser avec autonomie</h2><p>LIDA défend une approche où les méthodes, les normes et les outils numériques restent au service du travail réel et des décisions — jamais l’inverse. Une organisation n’a pas besoin de plus de procédures ; elle a besoin des bonnes procédures, appliquées par les bonnes personnes, au bon moment.</p></article><article><p className="eyebrow eyebrow-dark"><span /> Mission</p><h2>Transformer les enjeux de votre entreprise en systèmes simples et applicables</h2><p>Diagnostic, feuille de route, déploiement, formation et mesure : chaque intervention vise une amélioration visible, mesurable et durable — pas un rapport de recommandations qui reste sans suite une fois la mission terminée.</p></article></div></section>

      <section className="section light-section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Nos valeurs</p><h2>Une exigence professionnelle sans complexité inutile</h2></div><p>Clarté, proximité, utilité et progression guident la façon dont chaque intervention est cadrée et conduite.</p></div><div className="value-card-grid">{values.map((value, index) => <article key={value.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></div></section>

      <section className="section"><div className="container consultant-profile"><div className="consultant-monogram"><span>AE</span><small>LIDA · CONSEIL</small></div><div><p className="eyebrow eyebrow-dark"><span /> Votre interlocuteur</p><h2>Adel El Haddioui</h2><p>Adel El Haddioui est l’interlocuteur de LIDA Solutions & Consulting pour cadrer vos demandes de conseil, d’organisation, de digitalisation, d’accompagnement ISO et de formation. Un point de contact unique, du premier diagnostic jusqu’au suivi des résultats — sans dilution de responsabilité entre plusieurs intervenants.</p><Link className="text-link text-link-blue" href="/a-propos/adel-el-haddioui">Découvrir son approche <ArrowRight aria-hidden="true" size={16} /></Link></div></div></section>

      <CTASection title="Construisons une intervention adaptée à votre réalité" text="Présentez votre besoin et vos priorités lors d'un premier échange. Aucune proposition standardisée : le périmètre de la mission est défini à partir de votre contexte, pas d'un catalogue de prestations figées." primaryLabel="Contacter LIDA" primaryHref="/contact" whatsappMessage={whatsappMessages.general} />
    </main>
  );
}
