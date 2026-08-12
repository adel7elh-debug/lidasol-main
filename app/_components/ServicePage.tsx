import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServicePageData } from "@/app/_data/services";
import { servicePages } from "@/app/_data/services";
import { PageHero } from "@/app/_components/PageHero";
import { FAQ } from "@/app/_components/FAQ";
import { CTASection } from "@/app/_components/CTASection";
import { absoluteUrl, SITE_NAME } from "@/app/_lib/site";

function getBreadcrumbs(page: ServicePageData) {
  const parts = page.path.split("/");
  if (parts.length === 1) return [{ label: page.eyebrow, href: `/${page.path}` }];
  const parent = servicePages[parts[0]];
  return [{ label: parent?.eyebrow ?? parts[0], href: `/${parts[0]}` }, { label: page.eyebrow, href: `/${page.path}` }];
}

export function ServicePage({ page }: { page: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.seoTitle,
    description: page.seoDescription,
    url: absoluteUrl(`/${page.path}`),
    provider: { "@type": "ProfessionalService", name: SITE_NAME, url: absoluteUrl() },
    areaServed: { "@type": "Country", name: "Maroc" },
  };

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
                const content = <><small>{String(index + 1).padStart(2, "0")}</small><h3>{child.label}</h3>{child.href ? <><p>Une intervention structurée, adaptée à votre contexte et orientée vers des résultats mesurables.</p><span>Découvrir <ArrowRight aria-hidden="true" size={16} /></span></> : null}</>;
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
          <div className="benefit-list">{page.objectives.map((item, index) => <article key={item}><span>0{index + 1}</span><div><h3>{item}</h3><p>Un objectif traduit en actions, responsables et critères de réussite.</p></div></article>)}</div>
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
