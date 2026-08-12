import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Laptop2, Network, Sparkles, Target } from "lucide-react";
import { CTASection } from "@/app/_components/CTASection";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Digitalisation, conseil, pilotage, ISO et formation au Maroc",
  description: "LIDA accompagne les PME au Maroc en digitalisation et automatisation, conseil, pilotage et organisation, ISO 9001/14001/45001 et formation professionnelle.",
  alternates: { canonical: "/" },
  openGraph: { title: "LIDA Solutions & Consulting", description: "Digitaliser, conseiller, piloter, préparer l’ISO et développer les compétences de votre entreprise.", url: "/", images: [{ url: "/photos/conseil.jpg", alt: "LIDA Solutions & Consulting" }] },
};

const expertises = [
  {
    icon: Laptop2,
    number: "01",
    title: "Digitalisation & automatisation",
    text: "Nous digitalisons et automatisons les tâches qui ralentissent réellement votre activité.",
    items: ["Organisation numérique des documents", "Automatisation et intégration ERP", "Tableaux de bord automatisés", "Digitalisation du suivi comptable et fiscal", "Outils de gestion et de management adaptés"],
    href: "/digitalisation",
  },
  {
    icon: Target,
    number: "02",
    title: "Conseil & accompagnement",
    text: "Nous vous aidons à préparer, organiser et suivre vos obligations administratives, comptables, fiscales et juridiques.",
    items: ["Conseil comptable", "Conseil fiscal", "Conseil juridique"],
    note: "Certaines prestations sont réalisées en collaboration avec des professionnels habilités, selon la nature de la mission.",
    href: "/conseil-accompagnement",
  },
  {
    icon: Network,
    number: "03",
    title: "Pilotage & organisation",
    text: "Nous structurons le fonctionnement de votre entreprise et mettons en place les outils nécessaires pour mieux décider, agir et suivre les résultats.",
    items: ["Diagnostic organisationnel & ISO", "Processus & responsabilités", "Documentation & conformité", "Risques & maîtrise opérationnelle", "Tableaux de bord & KPI", "Audit interne & préparation à la certification", "Pilotage ISO, QSE & SMQ externalisé"],
    href: "/gestion-organisation",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Formations professionnelles",
    text: "Nous proposons des formations pratiques adaptées aux besoins des entreprises et de leurs équipes.",
    items: ["Gestion administrative & comptable", "Intelligence artificielle appliquée à l’entreprise", "ISO & QSE", "Excel & analyse des données"],
    href: "/formation",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow"><span /> Digitalisation · Conseil · Pilotage · Formation</p>
            <h1>Des solutions <em>intelligentes</em> pour développer votre activité.</h1>
            <p className="hero-lead">LIDA accompagne les entreprises marocaines pour digitaliser leurs activités, sécuriser leur gestion, structurer leur pilotage et préparer leurs certifications ISO.</p>
            <div className="hero-actions"><Link className="button button-gold" href="/contact">Diagnostic 180° offert <ArrowRight aria-hidden="true" size={17} /></Link><WhatsAppButton message={whatsappMessages.general} label="Échanger sur WhatsApp" /></div>
            <div className="trust-row"><span><CheckCircle2 aria-hidden="true" /> Approche sur mesure</span><span><CheckCircle2 aria-hidden="true" /> Solutions concrètes</span><span><CheckCircle2 aria-hidden="true" /> Suivi de proximité</span></div>
          </div>
          <div className="home-hero-visual">
            <Image src="/photos/conseil.jpg" alt="Accompagnement d’une entreprise par LIDA" fill priority sizes="(max-width: 900px) 100vw, 46vw" unoptimized />
            <div className="hero-insight"><small>Votre trajectoire</small><strong>Clarifier</strong><span>Structurer · Déployer · Mesurer</span><div><i style={{ width: "86%" }} /></div></div>
            <div className="floating-note"><Sparkles aria-hidden="true" /><span><strong>4 services complémentaires</strong><small>Un partenaire transversal</small></span></div>
          </div>
        </div>
      </section>

      <section className="signal-bar"><div className="container signal-grid"><div><strong>4</strong><span>services complémentaires</span></div><div><strong>3</strong><span>référentiels ISO maîtrisés</span></div><div><strong>1</strong><span>interlocuteur engagé</span></div><div><strong>PME</strong><span>approche adaptée au contexte</span></div></div></section>

      <section className="section value-section"><div className="container split-copy"><div><p className="eyebrow eyebrow-dark"><span /> Proposition de valeur</p><h2>Rendre l’entreprise plus claire, plus fluide et mieux pilotée.</h2></div><div><p>LIDA relie conseil, méthodes de management, outils numériques, référentiels ISO et formation. Cette approche évite les solutions isolées qui déplacent le problème au lieu de le résoudre.</p><Link className="text-link text-link-blue" href="/a-propos">Découvrir LIDA <ArrowRight aria-hidden="true" size={16} /></Link></div></div></section>

      <section className="section light-section" id="expertises"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Nos services</p><h2>Quatre expertises pour développer votre activité.</h2></div><p>Un accompagnement transversal pour simplifier la gestion, structurer l’organisation et améliorer durablement la performance.</p></div><div className="home-expertise-grid">{expertises.map(({ icon: Icon, number, title, text, items, note, href }) => <article key={href}><span className="expertise-icon"><Icon aria-hidden="true" size={23} /></span><small>{number}</small><h3>{title}</h3><p>{text}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>{note ? <p className="expertise-note">{note}</p> : null}<Link href={href}>Découvrir ce service <ArrowRight aria-hidden="true" size={16} /></Link></article>)}</div></div></section>

      <section className="section why-section"><div className="container outcomes-layout"><div className="sticky-copy"><p className="eyebrow eyebrow-dark"><span /> Pourquoi LIDA</p><h2>Un accompagnement qui reste utile après la mission.</h2><p>Les solutions sont construites avec les personnes qui devront les appliquer, les maintenir et les améliorer.</p></div><div className="benefit-list"><article><span>01</span><div><h3>Une lecture transversale</h3><p>Organisation, outils, compétences, conformité et performance sont considérés ensemble.</p></div></article><article><span>02</span><div><h3>Une approche terrain</h3><p>Les pratiques réelles et les contraintes guident les recommandations.</p></div></article><article><span>03</span><div><h3>Des livrables applicables</h3><p>Feuilles de route, procédures, tableaux de bord et supports sont pensés pour l’usage.</p></div></article></div></div></section>

      <section className="section dark-section"><div className="container"><div className="section-heading heading-light"><p className="eyebrow"><span /> Méthodologie</p><h2>De l’idée au résultat, sans perdre le terrain.</h2></div><ol className="process-grid"><li><span>01</span><h3>Comprendre</h3><p>Cadrer les enjeux, les contraintes et les résultats attendus.</p></li><li><span>02</span><h3>Prioriser</h3><p>Transformer le diagnostic en feuille de route réaliste.</p></li><li><span>03</span><h3>Déployer</h3><p>Construire et appliquer avec les équipes concernées.</p></li><li><span>04</span><h3>Mesurer</h3><p>Suivre les progrès, corriger et transmettre l’autonomie.</p></li></ol><Link className="text-link light-link" href="/a-propos/methodologie">Voir notre méthode <ArrowRight aria-hidden="true" size={16} /></Link></div></section>

      <section className="section iso-preview"><div className="container preview-layout"><div className="preview-image"><Image src="/photos/iso.jpg" alt="Accompagnement ISO 9001, 14001 et 45001" fill sizes="(max-width: 900px) 100vw, 45vw" unoptimized /></div><div><p className="eyebrow eyebrow-dark"><span /> Pilotage & organisation · ISO</p><h2>Préparer la certification sans déconnecter le système du terrain.</h2><p>Diagnostic initial, analyse des écarts, plan d’action, documentation, formation, audit interne et préparation à l’audit de certification.</p><div className="standard-links"><Link href="/accompagnement-iso/iso-9001">ISO 9001 <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/accompagnement-iso/iso-14001">ISO 14001 <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/accompagnement-iso/iso-45001">ISO 45001 <ArrowRight aria-hidden="true" size={15} /></Link></div><Link className="button button-blue" href="/accompagnement-iso">Découvrir l’accompagnement ISO</Link></div></div></section>

      <section className="section training-preview light-section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Formations</p><h2>Développer des compétences directement applicables.</h2></div><p>Des parcours en gestion, fiscalité, IA, Excel, VBA, management, QHSE et ISO, en présentiel, à distance ou en intra-entreprise.</p></div><div className="featured-trainings"><Link href="/formation/gestion-administrative-comptable"><small>Gestion</small><h3>Gestion administrative et comptable</h3><span>Voir la formation <ArrowRight aria-hidden="true" size={16} /></span></Link><Link href="/formation/gestion-intelligence-artificielle"><small>Innovation</small><h3>Optimisation de la gestion par IA</h3><span>Voir la formation <ArrowRight aria-hidden="true" size={16} /></span></Link><Link href="/formation/excel"><small>Outils</small><h3>Excel professionnel</h3><span>Voir la formation <ArrowRight aria-hidden="true" size={16} /></span></Link><Link href="/formation/excel-vba"><small>Automatisation</small><h3>Excel VBA</h3><span>Voir la formation <ArrowRight aria-hidden="true" size={16} /></span></Link></div><div className="center-action"><Link className="button button-blue" href="/formation">Voir toutes les formations</Link></div></div></section>

      <section className="section proof-section"><div className="container two-column-sections"><div><p className="eyebrow eyebrow-dark"><span /> Éléments de confiance</p><h2>Une expertise clairement présentée.</h2><p>Adel El Haddioui intervient comme consultant senior QHSE, auditeur ISO 9001, ISO 14001 et ISO 45001, formateur professionnel et expert en systèmes de management.</p><Link className="text-link text-link-blue" href="/a-propos/adel-el-haddioui">Découvrir le consultant <ArrowRight aria-hidden="true" size={16} /></Link></div><div className="transparency-box"><small>Transparence</small><h2>Pas de références inventées.</h2><p>Les études de cas, résultats et témoignages seront publiés uniquement lorsqu’ils auront été documentés et validés.</p><Link href="/realisations">Voir l’espace Réalisations <ArrowRight aria-hidden="true" size={16} /></Link></div></div></section>

      <CTASection title="Quel est le prochain cap de votre entreprise ?" text="Un premier échange pour comprendre votre besoin et identifier les premières actions utiles." primaryLabel="Diagnostic 180° offert" primaryHref="/contact" whatsappMessage={whatsappMessages.diagnostic} />

      <section className="quick-contact"><div className="container"><div><small>Contact rapide</small><strong>+212 663 667 848</strong></div><WhatsAppButton message={whatsappMessages.general} label="Écrire sur WhatsApp" /><Link className="button button-outline-dark" href="/contact">Accéder au contact</Link></div></section>
    </main>
  );
}
