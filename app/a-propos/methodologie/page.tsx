import type { Metadata } from "next";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Gauge,
  GitBranch,
  ListChecks,
  Rocket,
  SearchCheck,
  Target,
  UsersRound,
} from "lucide-react";
import { PageHero } from "@/app/_components/PageHero";
import { CTASection } from "@/app/_components/CTASection";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Méthodologie d’accompagnement LIDA",
  description:
    "La méthode LIDA : cadrage, diagnostic, feuille de route, déploiement avec les équipes et mesure des résultats.",
  alternates: { canonical: "/a-propos/methodologie" },
  openGraph: {
    title: "La méthodologie LIDA",
    description:
      "Cadrer, diagnostiquer, prioriser, déployer et mesurer avec les équipes.",
    url: "/a-propos/methodologie",
    images: [
      { url: "/photos/pages/methodologie.webp", alt: "Méthodologie LIDA" },
    ],
  },
};

const steps = [
  {
    title: "Cadrer le résultat",
    text: "Clarifier le besoin, le périmètre, les décideurs et les critères de réussite.",
    icon: Target,
  },
  {
    title: "Observer le terrain",
    text: "Croiser entretiens, pratiques, données et documents existants.",
    icon: SearchCheck,
  },
  {
    title: "Prioriser",
    text: "Distinguer l’urgent, l’important et ce qui peut attendre.",
    icon: ListChecks,
  },
  {
    title: "Co-construire",
    text: "Créer les outils et nouvelles pratiques avec les personnes concernées.",
    icon: UsersRound,
  },
  {
    title: "Déployer",
    text: "Accompagner l’application, former et lever les difficultés.",
    icon: Rocket,
  },
  {
    title: "Mesurer et ajuster",
    text: "Suivre les résultats, corriger les écarts et transmettre l’autonomie.",
    icon: ChartNoAxesCombined,
  },
];

export default function MethodPage() {
  return (
    <main className="methodology-page">
      <PageHero
        eyebrow="Méthodologie"
        title="De l’idée au résultat, sans perdre le terrain."
        description="Une démarche progressive, collaborative et orientée action, avec une vision claire de l’avancement à chaque étape."
        image="/photos/pages/methodologie.webp"
        imageAlt="Équipe appliquant une méthodologie de travail collaborative"
        breadcrumbs={[
          { label: "À propos", href: "/a-propos" },
          { label: "Méthodologie", href: "/a-propos/methodologie" },
        ]}
        primaryLabel="Présenter mon besoin"
        primaryHref="/contact"
        whatsappMessage={whatsappMessages.diagnostic}
      />

      <section className="section methodology-steps-section">
        <div className="container">
          <div className="section-heading methodology-heading">
            <p className="eyebrow eyebrow-dark">
              <span /> Les étapes
            </p>
            <h2>Une progression lisible du diagnostic à l’autonomie.</h2>
            <p>
              Six étapes coordonnées pour transformer le diagnostic en actions
              concrètes, puis installer une amélioration durable.
            </p>
          </div>

          <ol
            className="methodology-step-grid"
            aria-label="Les six étapes de la méthodologie LIDA"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li className="methodology-step-card" key={step.title}>
                  <div className="methodology-step-card__meta">
                    <span className="methodology-step-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="methodology-step-card__icon"
                      aria-hidden="true"
                    >
                      <Icon strokeWidth={1.7} />
                    </span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {index < steps.length - 1 ? (
                    <span
                      className="methodology-step-connector"
                      aria-hidden="true"
                    >
                      <ArrowRight strokeWidth={1.6} />
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section light-section methodology-principles-section">
        <div className="container methodology-principles-grid">
          <article className="methodology-principle-card">
            <span
              className="methodology-principle-card__icon"
              aria-hidden="true"
            >
              <GitBranch strokeWidth={1.7} />
            </span>
            <div>
              <h2>
                <span>Gouvernance</span>
                <i aria-hidden="true">—</i>
                Des décisions au bon niveau
              </h2>
              <p>
                Le sponsor, les responsables et les contributeurs sont identifiés
                dès le départ. Les points de suivi servent à arbitrer et agir.
              </p>
            </div>
          </article>

          <article className="methodology-principle-card">
            <span
              className="methodology-principle-card__icon"
              aria-hidden="true"
            >
              <Gauge strokeWidth={1.7} />
            </span>
            <div>
              <h2>
                <span>Mesure</span>
                <i aria-hidden="true">—</i>
                Des résultats observables
              </h2>
              <p>
                Les indicateurs sont choisis en fonction du projet : délai,
                qualité, charge, conformité, adoption ou progression des
                compétences.
              </p>
            </div>
          </article>
        </div>
      </section>

      <CTASection
        title="Appliquons cette méthode à votre priorité."
        text="L’intervention commence par un cadrage proportionné, sans engagement inutile."
        primaryLabel="Demander un diagnostic"
        primaryHref="/contact"
        whatsappMessage={whatsappMessages.diagnostic}
      />
    </main>
  );
}
