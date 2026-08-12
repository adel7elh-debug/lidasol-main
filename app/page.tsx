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
  openGraph: { title: "LIDA Solutions & Consulting", description: "Digitaliser, conseiller, piloter et développer les compétences de votre entreprise.", url: "/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "LIDA Solutions & Consulting — quatre activités pour développer votre entreprise" }] },
};

const expertises = [
  {
    icon: Laptop2,
    number: "01",
    title: "Digitalisation & automatisation",
    text: "Nous remplaçons les ressaisies, fichiers dispersés et reportings manuels par des flux plus simples à maintenir.",
    items: ["Organisation numérique des documents", "Automatisation et intégration ERP", "Tableaux de bord automatisés", "Digitalisation du suivi comptable et fiscal", "Outils de gestion et de management adaptés"],
    href: "/digitalisation",
  },
  {
    icon: Target,
    number: "02",
    title: "Conseil & accompagnement",
    text: "Nous organisons les pièces, échéances et dossiers à transmettre aux interlocuteurs comptables, fiscaux ou juridiques.",
    items: ["Conseil comptable", "Conseil fiscal", "Conseil juridique"],
    note: "Certaines prestations sont réalisées en collaboration avec des professionnels habilités, selon la nature de la mission.",
    href: "/conseil-accompagnement",
  },
  {
    icon: Network,
    number: "03",
    title: "Pilotage & organisation",
    text: "Nous clarifions processus, responsabilités, risques et indicateurs pour que les décisions débouchent sur des actions suivies.",
    items: ["Diagnostic organisationnel & ISO", "Processus & responsabilités", "Documentation & conformité", "Risques & maîtrise opérationnelle", "Tableaux de bord & KPI", "Audit interne & préparation à la certification", "Pilotage ISO, QSE & SMQ externalisé"],
    href: "/gestion-organisation",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Formations professionnelles",
    text: "Nous construisons des parcours autour des tâches, outils et situations que les participants doivent réellement maîtriser.",
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
            <h1>Des solutions <em>intelligentes</em> pour développer votre activité</h1>
            <p className="hero-lead">Fichiers dispersés, relances manuelles, responsabilités floues ou projet ISO difficile à cadrer : LIDA aide les TPE et PME au Maroc à transformer ces irritants en méthodes, outils et décisions applicables.</p>
            <div className="hero-actions"><Link className="button button-gold" href="/contact">Diagnostic 180° offert <ArrowRight aria-hidden="true" size={17} /></Link><WhatsAppButton message={whatsappMessages.general} label="Échanger sur WhatsApp" /></div>
            <div className="trust-row"><span><CheckCircle2 aria-hidden="true" /> Diagnostic avant solution</span><span><CheckCircle2 aria-hidden="true" /> Livrables identifiés</span><span><CheckCircle2 aria-hidden="true" /> Actions et responsables suivis</span></div>
          </div>
          <div className="home-hero-visual">
            <Image src="/photos/conseil.jpg" alt="Accompagnement d’une entreprise par LIDA" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
            <div className="hero-insight"><small>Votre trajectoire</small><strong>Clarifier</strong><span>Structurer · Déployer · Mesurer</span><div><i style={{ width: "86%" }} /></div></div>
            <div className="floating-note"><Sparkles aria-hidden="true" /><span><strong>4 services complémentaires</strong><small>Un partenaire transversal</small></span></div>
          </div>
        </div>
      </section>

      <section className="signal-bar"><div className="container signal-grid"><div><strong>4</strong><span>activités complémentaires</span></div><div><strong>3</strong><span>référentiels ISO accompagnés</span></div><div><strong>1</strong><span>interlocuteur engagé</span></div><div><strong>PME</strong><span>approche adaptée au contexte</span></div></div></section>

      <section className="section value-section"><div className="container split-copy"><div><p className="eyebrow eyebrow-dark"><span /> Problèmes traités</p><h2>Voir les blocages avant d’ajouter un nouvel outil ou une nouvelle procédure.</h2></div><div><p>Un retard peut venir d’une pièce manquante, d’une validation non attribuée, d’un fichier fragile ou d’une règle inconnue. LIDA part du flux réel, identifie la cause prioritaire et définit ce qui doit être organisé, automatisé, documenté ou transmis aux équipes.</p><Link className="text-link text-link-blue" href="/a-propos/methodologie">Comprendre la méthode <ArrowRight aria-hidden="true" size={16} /></Link></div></div></section>

      <section className="section light-section" id="expertises"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Nos services</p><h2>Quatre expertises pour développer votre activité.</h2></div><p>Un accompagnement transversal pour simplifier la gestion, structurer l’organisation et améliorer durablement la performance.</p></div><div className="home-expertise-grid">{expertises.map(({ icon: Icon, number, title, text, items, note, href }) => <article key={href}><span className="expertise-icon"><Icon aria-hidden="true" size={23} /></span><small>{number}</small><h3>{title}</h3><p>{text}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>{note ? <p className="expertise-note">{note}</p> : null}<Link href={href}>Découvrir ce service <ArrowRight aria-hidden="true" size={16} /></Link></article>)}</div></div></section>

      <section className="section why-section"><div className="container outcomes-layout"><div className="sticky-copy"><p className="eyebrow eyebrow-dark"><span /> Pourquoi LIDA</p><h2>Un accompagnement qui reste utile après la mission.</h2><p>Les solutions sont construites avec les personnes qui devront les appliquer, les maintenir et les améliorer.</p></div><div className="benefit-list"><article><span>01</span><div><h3>Une lecture transversale</h3><p>Organisation, outils, compétences, conformité et performance sont considérés ensemble.</p></div></article><article><span>02</span><div><h3>Une approche terrain</h3><p>Les pratiques réelles et les contraintes guident les recommandations.</p></div></article><article><span>03</span><div><h3>Des livrables applicables</h3><p>Feuilles de route, procédures, tableaux de bord et supports sont pensés pour l’usage.</p></div></article></div></div></section>

      <section className="section dark-section"><div className="container"><div className="section-heading heading-light"><p className="eyebrow"><span /> Méthodologie</p><h2>De l’idée au résultat, sans perdre le terrain.</h2></div><ol className="process-grid"><li><span>01</span><h3>Comprendre</h3><p>Cadrer les enjeux, les contraintes et les résultats attendus.</p></li><li><span>02</span><h3>Prioriser</h3><p>Transformer le diagnostic en feuille de route réaliste.</p></li><li><span>03</span><h3>Déployer</h3><p>Construire et appliquer avec les équipes concernées.</p></li><li><span>04</span><h3>Mesurer</h3><p>Suivre les progrès, corriger et transmettre l’autonomie.</p></li></ol><Link className="text-link light-link" href="/a-propos/methodologie">Voir notre méthode <ArrowRight aria-hidden="true" size={16} /></Link></div></section>

      <section className="section iso-preview"><div className="container preview-layout"><div className="preview-image"><Image src="/photos/iso.jpg" alt="Accompagnement ISO 9001, 14001 et 45001" fill sizes="(max-width: 900px) 100vw, 45vw" /></div><div><p className="eyebrow eyebrow-dark"><span /> Pilotage & organisation · ISO</p><h2>Préparer la certification sans déconnecter le système du terrain.</h2><p>Diagnostic initial, analyse des écarts, plan d’action, documentation, formation, audit interne et préparation à l’audit de certification.</p><div className="standard-links"><Link href="/accompagnement-iso/iso-9001">ISO 9001 <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/accompagnement-iso/iso-14001">ISO 14001 <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/accompagnement-iso/iso-45001">ISO 45001 <ArrowRight aria-hidden="true" size={15} /></Link></div><Link className="button button-blue" href="/accompagnement-iso">Découvrir l’accompagnement ISO</Link></div></div></section>

      <section className="section training-preview light-section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Formations</p><h2>Développer des compétences directement applicables.</h2></div><p>Quatre axes pratiques, en présentiel, à distance ou en intra-entreprise, adaptés au niveau et aux besoins de vos équipes.</p></div><div className="featured-trainings"><Link href="/formation/axe-gestion-administrative-comptable"><small>Gestion</small><h3>Gestion administrative & comptable</h3><span>Voir les formations <ArrowRight aria-hidden="true" size={16} /></span></Link><Link href="/formation/axe-intelligence-artificielle"><small>Innovation</small><h3>IA appliquée à l’entreprise</h3><span>Voir les formations <ArrowRight aria-hidden="true" size={16} /></span></Link><Link href="/formation/axe-iso-qse"><small>Management</small><h3>ISO & QSE</h3><span>Voir les formations <ArrowRight aria-hidden="true" size={16} /></span></Link><Link href="/formation/axe-excel-analyse-donnees"><small>Données</small><h3>Excel & analyse des données</h3><span>Voir les formations <ArrowRight aria-hidden="true" size={16} /></span></Link></div><div className="center-action"><Link className="button button-blue" href="/formation">Découvrir les quatre axes</Link></div></div></section>

      <section className="section proof-section"><div className="container two-column-sections"><div><p className="eyebrow eyebrow-dark"><span /> Repères de confiance</p><h2>Un interlocuteur nommé et une méthode vérifiable.</h2><p>Adel El Haddioui est présenté comme l’interlocuteur de LIDA. Le site décrit pour chaque prestation les situations traitées, les actions prévues, les livrables et les limites réglementaires applicables.</p><Link className="text-link text-link-blue" href="/a-propos/adel-el-haddioui">Découvrir l’interlocuteur <ArrowRight aria-hidden="true" size={16} /></Link></div><div className="transparency-box"><small>Transparence</small><h2>Des exemples, pas de faux clients.</h2><p>Les situations publiées sont signalées comme illustratives. Elles montrent comment une mission peut être cadrée sans inventer de témoignage, de référence commerciale ni de résultat chiffré.</p><Link href="/realisations">Voir les exemples de missions <ArrowRight aria-hidden="true" size={16} /></Link></div></div></section>

      <CTASection title="Quel est le prochain cap de votre entreprise ?" text="Un premier échange pour comprendre votre besoin et identifier les premières actions utiles." primaryLabel="Diagnostic 180° offert" primaryHref="/contact" whatsappMessage={whatsappMessages.diagnostic} />

      <section className="quick-contact"><div className="container"><div><small>Contact rapide</small><strong>+212 663 667 848</strong></div><WhatsAppButton message={whatsappMessages.general} label="Écrire sur WhatsApp" /><Link className="button button-outline-dark" href="/contact">Accéder au contact</Link></div></section>
    </main>
  );
}
