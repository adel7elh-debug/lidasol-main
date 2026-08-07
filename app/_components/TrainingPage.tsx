import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { TrainingData } from "@/app/_data/trainings";
import { trainings } from "@/app/_data/trainings";
import { PageHero } from "@/app/_components/PageHero";
import { FAQ } from "@/app/_components/FAQ";
import { RegistrationForm } from "@/app/_components/RegistrationForm";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";
import { absoluteUrl, createWhatsAppUrl, SITE_NAME, whatsappMessages } from "@/app/_lib/site";

export function TrainingPage({ training }: { training: TrainingData }) {
  const options = trainings.map((item) => ({ value: item.slug, label: item.title }));
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: training.title,
    description: training.seoDescription,
    url: absoluteUrl(`/formation/${training.slug}`),
    provider: { "@type": "Organization", name: SITE_NAME, sameAs: absoluteUrl() },
    educationalLevel: training.level,
    inLanguage: "fr",
  };

  return (
    <main>
      <PageHero eyebrow={`${training.category} · Formation professionnelle`} title={training.title} description={training.description} image={training.image} imageAlt={training.imageAlt ?? `Formation ${training.shortTitle} avec LIDA`} breadcrumbs={[{ label: "Formations", href: "/formation" }, { label: training.shortTitle, href: `/formation/${training.slug}` }]} primaryLabel="S’inscrire" primaryHref="#inscription" whatsappMessage={training.whatsappMessage} />

      <section className="promise-band"><div className="container"><span>La promesse</span><strong>{training.promise}</strong><div><small>Niveau</small>{training.level}</div><div><small>Durée</small>{training.duration}</div></div></section>

      <section className="section"><div className="container two-column-sections"><div><p className="eyebrow eyebrow-dark"><span /> Pourquoi cette formation</p><h2>Des compétences reliées à vos situations de travail.</h2><ul className="icon-list">{training.why.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={19} />{item}</li>)}</ul></div><div><p className="eyebrow eyebrow-dark"><span /> Objectifs</p><h2>À l’issue du parcours, vous saurez…</h2><ul className="icon-list">{training.objectives.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={19} />{item}</li>)}</ul></div></div></section>

      <section className="section dark-section"><div className="container"><div className="section-heading heading-light"><p className="eyebrow"><span /> Programme</p><h2>Un parcours progressif et applicable.</h2></div><div className="program-grid">{training.program.map((module, index) => <article key={module.title}><span>Module {index + 1}</span><h3>{module.title}</h3><ul>{module.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="section light-section"><div className="container"><div className="section-heading"><p className="eyebrow eyebrow-dark"><span /> Compétences acquises</p><h2>Des acquis observables, pas seulement des notions.</h2></div><div className="feature-card-grid four-cols">{training.skills.map((skill, index) => <article className="feature-card" key={skill}><small>0{index + 1}</small><h3>{skill}</h3></article>)}</div></div></section>

      <section className="section"><div className="container training-practical"><div><p className="eyebrow eyebrow-dark"><span /> Public cible</p><h2>Pour qui ?</h2><div className="pill-list">{training.audience.map((item) => <span key={item}>{item}</span>)}</div></div><div><p className="eyebrow eyebrow-dark"><span /> Prérequis</p><h2>Avant de commencer</h2><p>{training.prerequisites}</p></div><div><p className="eyebrow eyebrow-dark"><span /> Format</p><h2>Modalités pédagogiques</h2><p>{training.format}</p><p>Apports ciblés, démonstrations, exercices, cas pratiques et plan d’application individuel ou collectif.</p></div></div></section>

      <section className="intra-section"><div className="container intra-layout"><div><p className="eyebrow"><span /> Intra-entreprise</p><h2>Vous souhaitez former plusieurs collaborateurs ?</h2><p>LIDA Solutions & Consulting peut organiser cette formation directement pour votre équipe et adapter le programme aux besoins spécifiques de votre entreprise.</p></div><a className="button button-gold" href={createWhatsAppUrl(whatsappMessages.intra)} target="_blank" rel="noreferrer">Demander une formation intra-entreprise <ArrowRight aria-hidden="true" size={17} /></a></div></section>

      <section className="section registration-section" id="inscription"><div className="container registration-layout"><div><p className="eyebrow eyebrow-dark"><span /> Inscription</p><h2>Préparez votre demande de formation.</h2><p>Renseignez les informations utiles. Vous pourrez vérifier puis transmettre la demande à LIDA sur WhatsApp.</p><WhatsAppButton message={training.whatsappMessage} label="Demander le programme" /></div><RegistrationForm options={options} defaultTraining={training.slug} /></div></section>

      <section className="related-section"><div className="container related-layout"><div><p className="eyebrow eyebrow-dark"><span /> Pour aller plus loin</p><h2>Complétez votre parcours.</h2></div><div>{training.related.map((item) => <Link href={item.href} key={item.href}>{item.label}<ArrowRight aria-hidden="true" size={17} /></Link>)}</div></div></section>
      <FAQ items={training.faq} title={`Questions sur la formation ${training.shortTitle}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    </main>
  );
}
