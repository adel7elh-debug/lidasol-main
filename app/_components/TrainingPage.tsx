import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, GraduationCap, Target } from "lucide-react";
import type { TrainingData } from "@/app/_data/trainings";
import { trainings } from "@/app/_data/trainings";
import { PageHero } from "@/app/_components/PageHero";
import { RegistrationForm } from "@/app/_components/RegistrationForm";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";
import { absoluteUrl, SITE_NAME } from "@/app/_lib/site";

export function TrainingPage({ training }: { training: TrainingData }) {
  const options = trainings.map((item) => ({ value: item.slug, label: item.title }));
  const summaryCards = [
    { label: "Pourquoi", icon: Target, items: training.why },
    { label: "Objectifs", icon: GraduationCap, items: training.objectives },
    { label: "Compétences acquises", icon: Award, items: training.skills },
  ];
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

      <section className="promise-band"><div className="container"><span>Résultat visé</span><strong>{training.promise}</strong><div><small>Niveau</small>{training.level}</div><div><small>Durée</small>{training.duration}</div></div></section>

      <section className="section compact-overview-section">
        <div className="container">
          <div className="compact-heading"><p className="eyebrow eyebrow-dark"><span /> L’essentiel</p><h2>Les besoins, objectifs et acquis de ce parcours.</h2></div>
          <div className="compact-summary-grid">
            {summaryCards.map(({ label, icon: Icon, items }, index) => (
              <article className="compact-summary-card" key={label}>
                <div className="compact-summary-card__top"><Icon aria-hidden="true" size={23} /><span>0{index + 1}</span></div>
                <h3>{label}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section compact-method-section"><div className="container"><div className="compact-heading compact-heading-light"><p className="eyebrow"><span /> Programme</p><h2>Un parcours progressif et applicable.</h2></div><div className="program-grid compact-program-grid">{training.program.map((module, index) => <article key={module.title}><span>Module {index + 1}</span><h3>{module.title}</h3><ul>{module.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="section light-section compact-practical-section"><div className="container training-practical"><div><p className="eyebrow eyebrow-dark"><span /> Public cible</p><h2>Pour qui ?</h2><div className="pill-list">{training.audience.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div></div><div><p className="eyebrow eyebrow-dark"><span /> Prérequis</p><h2>Avant de commencer</h2><p>{training.prerequisites}</p></div><div><p className="eyebrow eyebrow-dark"><span /> Format</p><h2>Modalités</h2><p>{training.format}</p><ul className="icon-list compact-training-facts"><li><CheckCircle2 aria-hidden="true" size={19} />Niveau : {training.level}</li><li><CheckCircle2 aria-hidden="true" size={19} />Durée : {training.duration}</li></ul></div></div></section>

      <section className="section registration-section" id="inscription"><div className="container registration-layout"><div><p className="eyebrow eyebrow-dark"><span /> Inscription</p><h2>Préparez votre demande de formation.</h2><p>Renseignez les informations utiles. Vous pourrez vérifier puis transmettre la demande à LIDA sur WhatsApp.</p><WhatsAppButton message={training.whatsappMessage} label="Demander le programme" /></div><RegistrationForm options={options} defaultTraining={training.slug} /></div></section>

      <section className="related-section compact-related-section"><div className="container related-layout"><div><p className="eyebrow eyebrow-dark"><span /> Pour aller plus loin</p><h2>Complétez votre parcours.</h2></div><div>{training.related.slice(0, 2).map((item) => <Link href={item.href} key={item.href}>{item.label}<ArrowRight aria-hidden="true" size={17} /></Link>)}</div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    </main>
  );
}
