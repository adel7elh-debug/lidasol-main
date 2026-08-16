import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleOff, ClipboardCheck, FileInput, PackageCheck, SearchCheck } from "lucide-react";
import type { ServicePageData } from "@/app/_data/services";
import { servicePages } from "@/app/_data/services";
import { PageHero } from "@/app/_components/PageHero";
import { FAQ } from "@/app/_components/FAQ";
import { CTASection } from "@/app/_components/CTASection";
import { OfferVisual } from "@/app/_components/OfferVisual";
import { PremiumMetrics, TransformationComparison, type PremiumMetric } from "@/app/_components/PremiumServiceStory";
import { serviceNarratives, type ServiceNarrative } from "@/app/_data/serviceNarratives";
import { absoluteUrl, SITE_NAME } from "@/app/_lib/site";

type PremiumServiceStory = {
  metrics: readonly PremiumMetric[];
  eyebrow: string;
  title: string;
  description: string;
  beforeTitle: string;
  afterTitle: string;
  before: readonly string[];
  after: readonly string[];
};

const premiumServiceStories: Record<string, PremiumServiceStory> = {
  digitalisation: {
    metrics: [
      { value: "4", label: "axes d’intervention" },
      { value: "6", label: "étapes de déploiement" },
      { value: "8", label: "livrables opérationnels" },
      { value: "1", label: "feuille de route priorisée" },
    ],
    eyebrow: "Avant / après digitalisation",
    title: "Passer d’outils dispersés à des flux simples, fiables et suivis",
    description: "La digitalisation utile ne consiste pas à multiplier les logiciels. Elle rend l’information plus facile à saisir, retrouver, contrôler et transmettre.",
    beforeTitle: "Fonctionnement actuel",
    afterTitle: "Après la transformation",
    before: ["Ressaisies et doubles saisies", "Fichiers répartis entre plusieurs collaborateurs", "Validations sans historique fiable", "Indicateurs reconstruits manuellement"],
    after: ["Flux simplifiés et documentés", "Documents centralisés et accessibles", "Validations et responsabilités visibles", "Tableaux de bord actualisés plus facilement"],
  },
  "conseil-accompagnement": {
    metrics: [
      { value: "3", label: "domaines complémentaires" },
      { value: "5", label: "étapes d’accompagnement" },
      { value: "11", label: "livrables structurants" },
      { value: "1", label: "suivi consolidé" },
    ],
    eyebrow: "Avant / après organisation",
    title: "Transformer des dossiers dispersés en obligations anticipées et maîtrisées",
    description: "L’objectif est de donner à la direction une vision claire des pièces, des responsables, des validations et des prochaines échéances.",
    beforeTitle: "Gestion réactive",
    afterTitle: "Organisation maîtrisée",
    before: ["Documents reçus par plusieurs canaux", "Échéances suivies de mémoire", "Dossiers incomplets au moment de transmettre", "Contrats et justificatifs difficiles à retrouver"],
    after: ["Plan de classement partagé", "Calendrier et alertes formalisés", "Dossiers contrôlés avant transmission", "Responsables et statuts visibles par la direction"],
  },
  "gestion-organisation": {
    metrics: [
      { value: "5", label: "axes de structuration" },
      { value: "7", label: "leviers de pilotage" },
      { value: "10", label: "livrables possibles" },
      { value: "1", label: "système de décision" },
    ],
    eyebrow: "Avant / après structuration",
    title: "Passer d’une organisation dépendante des personnes à un pilotage partagé",
    description: "Processus, responsabilités, risques et indicateurs sont reliés pour que les décisions deviennent des actions attribuées, datées et vérifiables.",
    beforeTitle: "Organisation peu lisible",
    afterTitle: "Pilotage structuré",
    before: ["Responsabilités implicites", "Procédures éloignées du terrain", "Risques traités au cas par cas", "Réunions centrées sur les chiffres"],
    after: ["Rôles et validations clarifiés", "Processus applicables et documentés", "Risques hiérarchisés et suivis", "Décisions transformées en plans d’action"],
  },
};

function getBreadcrumbs(page: ServicePageData) {
  const parts = page.path.split("/");
  if (parts.length === 1) return [{ label: page.eyebrow, href: `/${page.path}` }];
  const parent = servicePages[parts[0]];
  return [{ label: parent?.eyebrow ?? parts[0], href: `/${parts[0]}` }, { label: page.eyebrow, href: `/${page.path}` }];
}

function NarrativeServicePage({ page, narrative, schema }: { page: ServicePageData; narrative: ServiceNarrative; schema: Record<string, unknown> }) {
  const premiumStory = premiumServiceStories[page.path];

  return (
    <main className="premium-service-page">
      <PageHero
        eyebrow={page.eyebrow}
        title={narrative.heroTitle}
        description={narrative.heroDescription}
        image={page.image}
        imageAlt={page.imageAlt}
        breadcrumbs={getBreadcrumbs(page)}
        primaryLabel={narrative.ctaLabel}
        primaryHref="/contact#contact-form"
        whatsappMessage={page.whatsappMessage}
      />

      {premiumStory ? <PremiumMetrics eyebrow="Votre parcours LIDA" metrics={premiumStory.metrics} /> : null}

      {narrative.notice ? <aside className="service-notice"><div className="container"><strong>{narrative.notice.title}</strong><p>{narrative.notice.text}</p></div></aside> : null}

      <section className="section narrative-intro"><div className="container narrative-intro-layout"><p className="eyebrow eyebrow-dark"><span /> Votre situation</p><div>{narrative.lead.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

      {narrative.signals ? <section className="section light-section"><div className="container"><div className="section-heading"><p className="eyebrow eyebrow-dark"><span /> Points de vigilance</p><h2>{narrative.signals.title}</h2></div><div className="narrative-signal-grid">{narrative.signals.items.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div></div></section> : null}

      {page.children ? <section className="section service-navigation-section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Nos domaines d’intervention</p><h2>Choisissez le point d’entrée adapté à votre besoin.</h2></div><p>Chaque domaine présente les situations traitées, les actions prévues et les livrables associés.</p></div><div className="service-image-grid">{page.children.map((child, index) => { const childPage = child.href ? servicePages[child.href.slice(1)] : undefined; return child.href ? <Link href={child.href} key={child.href}><div className="service-image-grid__visual">{childPage ? <Image src={childPage.image} alt={childPage.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" /> : null}</div><div><small>{String(index + 1).padStart(2, "0")}</small><h3>{child.label}</h3><p>{child.description}</p><span>Découvrir <ArrowRight aria-hidden="true" size={16} /></span></div></Link> : null; })}</div></div></section> : null}

      {premiumStory ? <TransformationComparison {...premiumStory} /> : null}

      <section className="narrative-detail-list">{narrative.sections.map((section, index) => <article className="section" key={section.title}><div className="container narrative-detail-layout"><div><span className="narrative-index">{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2><p>{section.description}</p>{section.outcome ? <div className="narrative-outcome"><small>Résultat attendu</small><p>{section.outcome}</p></div> : null}</div><div><h3>{section.listLabel ?? "Ce que comprend l'accompagnement"}</h3><ul>{section.items.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={17} />{item}</li>)}</ul></div></div></article>)}</section>

      {narrative.tracking ? <section className="section narrative-tracking"><div className="container narrative-tracking-layout"><div><p className="eyebrow"><span /> Pilotage</p><h2>{narrative.tracking.title}</h2>{narrative.tracking.intro ? <p>{narrative.tracking.intro}</p> : null}{narrative.tracking.outro ? <p>{narrative.tracking.outro}</p> : null}</div><div className="tracking-list">{narrative.tracking.items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div></div></section> : null}

      {narrative.method ? <section className="section dark-section"><div className="container"><div className="section-heading heading-light"><p className="eyebrow"><span /> Notre méthode</p><h2>Une progression claire, du diagnostic au suivi.</h2></div><ol className="narrative-method">{narrative.method.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></div></section> : null}

      <section className="section light-section"><div className="container"><div className="section-heading"><p className="eyebrow eyebrow-dark"><span /> Livrables</p><h2>Des supports directement exploitables par vos équipes.</h2></div><div className="narrative-deliverables">{narrative.deliverables.map((item) => <div key={item}><PackageCheck aria-hidden="true" size={20} /><span>{item}</span></div>)}</div></div></section>

      <CTASection title={narrative.ctaTitle} text={narrative.ctaText} primaryLabel={narrative.ctaLabel} primaryHref="/contact#contact-form" whatsappMessage={page.whatsappMessage} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}

export function ServicePage({ page }: { page: ServicePageData }) {
  const isSubService = page.path.includes("/");
  const regulatedNotice = page.path.startsWith("conseil-accompagnement")
    ? "Certaines prestations sont réalisées en collaboration avec des professionnels habilités, selon la nature de la mission."
    : page.path.startsWith("accompagnement-iso") || page.path.includes("audit-interne-certification") || page.path.includes("diagnostic-organisationnel-iso")
      ? "LIDA accompagne la préparation à la certification. La certification est délivrée par un organisme certificateur indépendant."
      : null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.seoTitle,
    description: page.seoDescription,
    url: absoluteUrl(`/${page.path}`),
    provider: { "@type": "ProfessionalService", name: SITE_NAME, url: absoluteUrl() },
    areaServed: { "@type": "Country", name: "Maroc" },
  };

  const narrative = serviceNarratives[page.path];
  if (!isSubService && narrative) return <NarrativeServicePage page={page} narrative={narrative} schema={schema} />;

  if (isSubService) {
    const offer = page.offer;
    if (!offer) throw new Error(`Données d’offre manquantes pour ${page.path}`);

    return (
      <main>
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
          image={page.image}
          imageAlt={page.imageAlt}
          breadcrumbs={getBreadcrumbs(page)}
          primaryLabel={page.primaryLabel}
          primaryHref="/contact#contact-form"
          whatsappMessage={page.whatsappMessage}
        />

        {regulatedNotice ? <aside className="service-notice"><div className="container"><strong>À savoir</strong><p>{regulatedNotice}</p></div></aside> : null}

        <section className="section service-fit-section"><div className="container service-fit-layout"><div><p className="eyebrow eyebrow-dark"><span /> Cette offre est utile si…</p><h2>Vous reconnaissez ces situations dans votre activité.</h2><div className="offer-signal-list">{page.problems.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div></div><OfferVisual visual={offer.visual} /></div></section>

        <section className="section light-section service-scope-detail"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Périmètre</p><h2>Ce que LIDA analyse, construit et transmet.</h2></div><p>La proposition finale ajuste ce périmètre au diagnostic et distingue explicitement les responsabilités de LIDA, de l’entreprise et des professionnels habilités.</p></div><div className="scope-action-grid">{page.objectives.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><ClipboardCheck aria-hidden="true" size={20} /><strong>{item}</strong></article>)}</div></div></section>

        <section className="section deliverable-showcase"><div className="container deliverable-showcase__layout"><div><p className="eyebrow eyebrow-dark"><span /> Ce que vous recevez</p><h2>Des supports nommés, utilisables et transmis aux responsables.</h2><p>Chaque livrable est adapté aux outils retenus et au niveau de maturité constaté.</p></div><div className="deliverable-cards">{page.deliverables.map((item, index) => <article key={item}><PackageCheck aria-hidden="true" size={22} /><small>Livrable {String(index + 1).padStart(2, "0")}</small><strong>{item}</strong></article>)}</div></div></section>

        <section className="section practical-case-section">
          <div className="container">
            <div className="compact-heading practical-case-heading">
              <p className="eyebrow eyebrow-dark"><span /> Cas pratique représentatif</p>
              <h2>Un exemple concret, présenté en toute transparence.</h2>
              <p>{page.practicalCase.context}</p>
            </div>
            <div className="practical-case-grid">
              <article><small>Situation</small><p>{page.practicalCase.situation}</p></article>
              <article><small>Problème</small><p>{page.practicalCase.problem}</p></article>
              <article><small>Solution LIDA</small><p>{page.practicalCase.solution}</p></article>
              <article><small>Livrables</small><ul>{page.practicalCase.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article><small>Résultat attendu</small><p>{page.practicalCase.result}</p></article>
            </div>
          </div>
        </section>

        <section className="section dark-section compact-method-section">
          <div className="container">
            <div className="compact-heading compact-heading-light">
               <p className="eyebrow"><span /> Déroulement concret</p>
               <h2>Les quatre étapes propres à cette mission.</h2>
            </div>
            <ol className="compact-process-grid">
              {offer.steps.map((step, index) => (
                <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section service-boundaries"><div className="container"><div className="section-heading"><p className="eyebrow eyebrow-dark"><span /> Rôles et limites</p><h2>Ce qui est inclus, attendu et hors périmètre.</h2></div><div className="boundary-grid"><article><SearchCheck aria-hidden="true" /><h3>Inclus dans l’accompagnement</h3><ul>{offer.included.map((item) => <li key={item}>{item}</li>)}</ul></article><article><FileInput aria-hidden="true" /><h3>À fournir par l’entreprise</h3><ul>{offer.inputs.map((item) => <li key={item}>{item}</li>)}</ul></article><article><CircleOff aria-hidden="true" /><h3>Hors périmètre ou réservé</h3><ul>{offer.excluded.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>

        <section className="related-section compact-related-section">
          <div className="container related-layout">
            <div><p className="eyebrow eyebrow-dark"><span /> À découvrir aussi</p><h2>Des expertises complémentaires.</h2></div>
            <div>{page.related.slice(0, 2).map((item) => <Link href={item.href} key={item.href}>{item.label}<ArrowRight aria-hidden="true" size={17} /></Link>)}</div>
          </div>
        </section>

        <CTASection title={offer.ctaTitle} text={offer.ctaText} primaryLabel={page.primaryLabel} primaryHref="/contact#contact-form" whatsappMessage={page.whatsappMessage} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={page.image}
        imageAlt={page.imageAlt}
        breadcrumbs={getBreadcrumbs(page)}
        primaryLabel={page.primaryLabel}
        primaryHref="/contact#contact-form"
        whatsappMessage={page.whatsappMessage}
      />

      {regulatedNotice ? <aside className="service-notice"><div className="container"><strong>À savoir</strong><p>{regulatedNotice}</p></div></aside> : null}

      <section className="section intro-section">
        <div className="container split-copy">
          <div><p className="eyebrow eyebrow-dark"><span /> Votre situation</p><h2>Des difficultés concrètes à rendre visibles.</h2></div>
          <div className="check-grid problem-grid">{page.problems.map((item) => <div key={item}><span aria-hidden="true">!</span>{item}</div>)}</div>
        </div>
      </section>

      {page.children ? (
        <section className="section light-section">
          <div className="container">
            <div className="section-heading"><p className="eyebrow eyebrow-dark"><span /> Nos interventions</p><h2>Choisissez le point d’entrée adapté à votre besoin.</h2></div>
            <div className="feature-card-grid service-child-grid">
              {page.children.map((child, index) => {
                const content = <><small>{String(index + 1).padStart(2, "0")}</small><h3>{child.label}</h3><p>{child.description}</p>{child.href ? <span>Découvrir <ArrowRight aria-hidden="true" size={16} /></span> : null}</>;
                return child.href
                  ? <Link className="feature-card linked-card" href={child.href} key={child.href}>{content}</Link>
                  : <article className="feature-card service-scope-card" key={child.label}>{content}</article>;
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container outcomes-layout">
          <div className="sticky-copy"><p className="eyebrow eyebrow-dark"><span /> Objectifs</p><h2>Ce que l’intervention doit rendre possible.</h2><p>Le périmètre est ajusté au diagnostic. Les objectifs restent explicites afin que chacun puisse suivre les progrès.</p></div>
          <div className="benefit-list">{page.objectives.map((item, index) => <article key={item}><span>0{index + 1}</span><div><h3>{item}</h3><p>Effet recherché : {page.benefits[index]?.toLowerCase() ?? "un fonctionnement plus fiable"}.</p></div></article>)}</div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading heading-light"><p className="eyebrow"><span /> Méthodologie LIDA</p><h2>Avancer par étapes, avec les équipes.</h2></div>
          <ol className="process-grid">{page.steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </div>
      </section>

      <section className="section light-section">
        <div className="container two-column-sections">
          <div><p className="eyebrow eyebrow-dark"><span /> Livrables</p><h2>Des supports directement exploitables.</h2><ul className="icon-list">{page.deliverables.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={19} />{item}</li>)}</ul></div>
          <div><p className="eyebrow eyebrow-dark"><span /> Bénéfices</p><h2>Des changements utiles au quotidien.</h2><ul className="icon-list">{page.benefits.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={19} />{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-sections bordered-columns">
          <div><p className="eyebrow eyebrow-dark"><span /> Entreprises concernées</p><h2>Une approche proportionnée à votre contexte.</h2><div className="pill-list">{page.audience.map((item) => <span key={item}>{item}</span>)}</div></div>
          <div><p className="eyebrow eyebrow-dark"><span /> Exemples de missions</p><h2>Des cas d’intervention possibles.</h2><ul className="numbered-list">{page.examples.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="related-section">
        <div className="container related-layout"><div><p className="eyebrow eyebrow-dark"><span /> À découvrir aussi</p><h2>Relier les expertises pour traiter le besoin dans son ensemble.</h2></div><div>{page.related.map((item) => <Link href={item.href} key={item.href}>{item.label}<ArrowRight aria-hidden="true" size={17} /></Link>)}</div></div>
      </section>

      <FAQ items={page.faq} />
      <CTASection title="Parlons de votre situation." text="Un premier échange permet de clarifier le besoin, le périmètre et la prochaine étape utile." primaryLabel={page.primaryLabel} primaryHref="/contact#contact-form" whatsappMessage={page.whatsappMessage} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
