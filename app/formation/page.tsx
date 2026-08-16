import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/app/_components/PageHero";
import { CTASection } from "@/app/_components/CTASection";
import { PremiumMetrics, TransformationComparison } from "@/app/_components/PremiumServiceStory";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Formations professionnelles au Maroc",
  description: "Formations pratiques en gestion administrative et comptable, intelligence artificielle, ISO-QSE, Excel et analyse des données au Maroc.",
  alternates: { canonical: "/formation" },
  openGraph: { title: "Formations professionnelles LIDA", description: "Développez des compétences directement applicables à votre activité.", url: "/formation", images: [{ url: "/photos/formation.jpg", alt: "Formations professionnelles LIDA" }] },
};

const trainingAreas = [
  {
    title: "Gestion administrative et comptable",
    description: "Ces formations permettent de mieux organiser les documents, les opérations courantes et le suivi administratif au sein de votre entreprise.",
    listLabel: "Les thèmes peuvent comprendre :",
    items: ["Organisation administrative et circuits documentaires", "Classement et suivi documentaire structuré", "Préparation des pièces comptables avant transmission à l'expert-comptable", "Suivi des échéances fiscales et administratives (IS, TVA, CNSS)", "Facturation et recouvrement des créances clients", "Construction de tableaux de suivi opérationnels", "Coordination entre les services (commercial, achats, comptabilité)"],
    image: "/photos/training-axes/gestion.webp",
    imageAlt: "Documents de gestion administrative et comptable",
    href: "/formation/axe-gestion-administrative-comptable",
  },
  {
    title: "Intelligence artificielle appliquée à l'entreprise",
    description: "Ces formations permettent d'utiliser l'intelligence artificielle de manière professionnelle, structurée et responsable — sans dépendance excessive ni risque pour la confidentialité des données de l'entreprise.",
    listLabel: "Les participants apprennent notamment à :",
    items: ["Rédiger des prompts efficaces et reproductibles", "Synthétiser et analyser rapidement de gros volumes d'informations", "Préparer des documents professionnels (courriers, comptes rendus, rapports)", "Améliorer et documenter des procédures internes", "Automatiser certaines tâches répétitives à faible valeur ajoutée", "Vérifier systématiquement la fiabilité et la qualité des réponses obtenues", "Protéger les informations sensibles et confidentielles de l'entreprise", "Construire des méthodes de travail réutilisables par toute l'équipe"],
    image: "/photos/training-axes/ia.webp",
    imageAlt: "Professionnels utilisant l’intelligence artificielle en entreprise",
    href: "/formation/axe-intelligence-artificielle",
  },
  {
    title: "ISO et QSE",
    description: "Ces formations facilitent la compréhension et l'application concrète des systèmes de management, pour des équipes qui doivent vivre le système au quotidien — pas seulement le connaître en théorie.",
    listLabel: "Les thèmes peuvent concerner :",
    items: ["ISO 9001 (qualité), ISO 14001 (environnement) et ISO 45001 (santé-sécurité)", "Approche processus et cartographie des activités", "Gestion des risques et opportunités", "Documentation du système de management", "Construction et suivi des indicateurs et objectifs", "Réalisation d'audits internes", "Traitement des non-conformités et actions correctives", "Préparation opérationnelle à l'audit de certification"],
    image: "/photos/training-axes/iso-qse.webp",
    imageAlt: "Équipe en atelier de formation ISO et QSE",
    href: "/formation/axe-iso-qse",
  },
  {
    title: "Excel et analyse des données",
    description: "Ces formations permettent d'améliorer la qualité, l'analyse et la présentation des données utilisées pour le pilotage de l'entreprise.",
    listLabel: "Les programmes peuvent comprendre :",
    items: ["Organisation et nettoyage des données sources", "Formules et fonctions avancées", "Tableaux croisés dynamiques", "Graphiques et visualisations professionnelles", "Construction de tableaux de bord de pilotage", "Contrôle de la qualité et de la fiabilité des données", "Automatisation de tâches répétitives (macros, formules dynamiques)", "Analyse d'indicateurs de performance"],
    image: "/photos/training-axes/excel.webp",
    imageAlt: "Graphiques pour une formation Excel et analyse des données",
    href: "/formation/axe-excel-analyse-donnees",
  },
];

const method = [
  "Analyse du besoin — Comprendre le contexte, le niveau et les attentes réelles.",
  "Définition des objectifs — Fixer des résultats concrets et mesurables.",
  "Construction du programme — Bâtir un contenu adapté, pas un modèle standard.",
  "Apports méthodologiques — Transmettre les concepts et bonnes pratiques nécessaires.",
  "Exercices et mises en situation — Appliquer directement sur des cas proches du métier des participants.",
  "Évaluation des acquis — Vérifier la compréhension et la capacité d'application.",
  "Remise des supports — Fournir une documentation réutilisable après la formation.",
];

const trainingMetrics = [
  { value: "4", label: "axes de formation" },
  { value: "7", label: "étapes pédagogiques" },
  { value: "5", label: "formats possibles" },
  { value: "1", label: "plan d’application" },
] as const;

const trainingBefore = [
  "Programme générique éloigné du métier",
  "Participants de niveaux très différents",
  "Exercices sans lien avec les outils utilisés",
  "Peu d’application après la session",
] as const;

const trainingAfter = [
  "Objectifs construits à partir du besoin réel",
  "Parcours adapté au niveau des participants",
  "Mises en situation proches de l’activité",
  "Supports et plan d’application réutilisables",
] as const;

export default function FormationPage() {
  return (
    <main className="premium-service-page premium-training-page">
      <PageHero eyebrow="Formations professionnelles" title="Développez des compétences directement applicables à votre activité" description="Une formation n'a de valeur que si elle répond à des situations réellement rencontrées par les participants dans leur travail quotidien. Trop de formations restent théoriques et n'ont aucun effet visible une fois les participants revenus à leur poste." image="/photos/formation.jpg" imageAlt="Salle de formation professionnelle pour les entreprises au Maroc" breadcrumbs={[{ label: "Formations", href: "/formation" }]} primaryLabel="Demander un programme de formation" primaryHref="/formation/inscription" whatsappMessage={whatsappMessages.formation} />

      <PremiumMetrics eyebrow="Votre parcours de formation" metrics={trainingMetrics} />

      <section className="section narrative-intro"><div className="container narrative-intro-layout"><p className="eyebrow eyebrow-dark"><span /> Notre approche</p><div><p>LIDA construit des parcours sur mesure, adaptés au niveau des participants, aux objectifs de l’entreprise, aux outils déjà en place et au contexte réglementaire marocain — pour que chaque heure de formation se traduise en compétence utilisable dès le lendemain.</p></div></div></section>

      <TransformationComparison
        eyebrow="Avant / après formation"
        title="Passer d’un contenu théorique à des compétences réellement applicables"
        description="Le programme, les exercices et les supports sont construits autour des situations que les participants devront maîtriser après la formation."
        beforeTitle="Formation standard"
        afterTitle="Parcours LIDA"
        before={trainingBefore}
        after={trainingAfter}
      />

      <section className="section light-section"><div className="container"><div className="section-heading"><p className="eyebrow eyebrow-dark"><span /> Quatre axes</p><h2>Formations professionnelles</h2></div><div className="training-editorial-grid">{trainingAreas.map((area) => <article key={area.href}><div className="training-editorial-grid__image"><Image src={area.image} alt={area.imageAlt} fill sizes="(max-width: 820px) 100vw, 50vw" /></div><div className="training-editorial-grid__body"><h2>{area.title}</h2><p>{area.description}</p><h3>{area.listLabel}</h3><ul>{area.items.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={16} />{item}</li>)}</ul><Link href={area.href}>Voir les programmes <ArrowRight aria-hidden="true" size={17} /></Link></div></article>)}</div></div></section>

      <section className="section"><div className="container training-context-layout"><div><p className="eyebrow eyebrow-dark"><span /> Sur mesure</p><h2>Une formation adaptée à votre contexte, pas un catalogue générique</h2><p>Avant chaque formation, nous précisons ensemble :</p><ul className="icon-list">{["Le niveau réel des participants", "Les compétences à développer en priorité", "Les situations concrètement rencontrées dans leur activité", "Les outils déjà disponibles dans l'entreprise", "Les exercices souhaités", "Les résultats attendus à l'issue de la formation"].map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={18} />{item}</li>)}</ul></div><div className="training-context-note"><p>Les exercices sont construits à partir d’exemples proches de l’activité réelle de l’entreprise — pas de cas génériques sans lien avec votre secteur.</p></div></div></section>

      <section className="section dark-section"><div className="container"><div className="section-heading heading-light"><p className="eyebrow"><span /> Méthode pédagogique</p><h2>Du besoin à l’application.</h2></div><ol className="narrative-method narrative-method--seven">{method.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></div></section>

      <section className="section light-section"><div className="container two-column-sections"><div><p className="eyebrow eyebrow-dark"><span /> Modalités possibles</p><h2>Un format adapté à votre équipe</h2><ul className="icon-list">{["Formation en présentiel", "Formation à distance", "Formation intra-entreprise", "Ateliers pratiques", "Accompagnement individuel ou collectif"].map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={18} />{item}</li>)}</ul></div><div><p className="eyebrow eyebrow-dark"><span /> Livrables</p><h2>Des supports réutilisables</h2><ul className="icon-list">{["Programme détaillé", "Supports de formation", "Exercices pratiques", "Modèles et outils réutilisables", "Évaluation des acquis", "Attestation de participation", "Plan d'application post-formation"].map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={18} />{item}</li>)}</ul></div></div></section>

      <CTASection title="Besoin d'un programme adapté à votre équipe ?" text="Indiquez-nous les compétences recherchées, le niveau des participants et le format souhaité. Nous vous préparerons une proposition sur mesure." primaryLabel="Demander un programme de formation" primaryHref="/formation/inscription" whatsappMessage={whatsappMessages.formation} />
    </main>
  );
}
