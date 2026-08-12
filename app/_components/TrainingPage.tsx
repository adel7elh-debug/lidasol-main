import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, ClipboardList, FileDown, Gauge, GraduationCap, MonitorUp, Target, UsersRound } from "lucide-react";
import type { TrainingData } from "@/app/_data/trainings";
import { trainings } from "@/app/_data/trainings";
import { PageHero } from "@/app/_components/PageHero";
import { RegistrationForm } from "@/app/_components/RegistrationForm";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";
import { absoluteUrl, SITE_NAME } from "@/app/_lib/site";

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
      <PageHero eyebrow={`${training.category} · Formation professionnelle`} title={training.title} description={training.description} image={training.image} imageAlt={training.imageAlt ?? `Formation ${training.shortTitle} avec LIDA`} breadcrumbs={[{ label: "Formations", href: "/formation" }, { label: training.shortTitle, href: `/formation/${training.slug}` }]} primaryLabel="Recevoir le programme et le devis" primaryHref="#inscription" whatsappMessage={training.whatsappMessage} />

      <section className="promise-band"><div className="container"><span>À l’issue du parcours</span><strong>{training.promise}</strong><div><small>Niveau</small>{training.level}</div><div><small>Format</small>Défini après cadrage</div></div></section>

      <section className="section training-fit-section"><div className="container training-fit-layout"><div><p className="eyebrow eyebrow-dark"><span /> Problèmes de travail traités</p><h2>Cette formation est utile si vous devez…</h2><div className="training-problem-list">{training.why.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><Target aria-hidden="true" size={19} /><p>{item}</p></article>)}</div></div><aside className="training-path" aria-label="Aperçu illustratif du parcours"><header><GraduationCap aria-hidden="true" size={25} /><div><small>Aperçu illustratif</small><h2>Parcours de mise en pratique</h2></div></header><ol>{training.program.map((module, index) => <li key={module.title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{module.title}</strong><small>{module.items.slice(0, 2).join(" · ")}</small></div></li>)}</ol><p>Le déroulé final est ajusté au positionnement et confirmé dans le programme.</p></aside></div></section>

      <section className="section light-section training-objectives-section"><div className="container two-column-sections"><div><p className="eyebrow eyebrow-dark"><span /> Objectifs opérationnels</p><h2>Des actions observables.</h2><ul className="icon-list">{training.objectives.map((item) => <li key={item}><ClipboardList aria-hidden="true" size={18} />{item}</li>)}</ul></div><div><p className="eyebrow eyebrow-dark"><span /> Compétences visées</p><h2>Ce que le participant saura mobiliser.</h2><ul className="icon-list">{training.skills.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={18} />{item}</li>)}</ul></div></div></section>

      <section className="section dark-section compact-method-section"><div className="container"><div className="compact-heading compact-heading-light"><p className="eyebrow"><span /> Programme</p><h2>Un parcours progressif et applicable.</h2></div><div className="program-grid compact-program-grid">{training.program.map((module, index) => <article key={module.title}><span>Module {index + 1}</span><h3>{module.title}</h3><ul>{module.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="section training-workshop-section"><div className="container workshop-layout"><div><p className="eyebrow eyebrow-dark"><span /> Ateliers & exercices</p><h2>Pratiquer sur des situations réalistes et neutres.</h2><p>Les exercices utilisent des données fictives ou anonymisées. L’utilisation de documents de l’entreprise n’est envisagée qu’après accord et cadrage de la confidentialité.</p><ol className="workshop-list">{training.workshops.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div><aside className="training-kit"><FileDown aria-hidden="true" size={28} /><small>Aperçu illustratif</small><h2>Kit pédagogique envisagé</h2><ul>{training.supports.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={17} />{item}</li>)}</ul><p>La liste exacte des supports remis est confirmée dans le programme et le devis.</p></aside></div></section>

      <section className="section light-section compact-practical-section"><div className="container training-practical"><div><UsersRound aria-hidden="true" size={24} /><p className="eyebrow eyebrow-dark"><span /> Public cible</p><h2>Pour qui ?</h2><div className="pill-list">{training.audience.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div></div><div><BookOpenCheck aria-hidden="true" size={24} /><p className="eyebrow eyebrow-dark"><span /> Prérequis</p><h2>Avant de commencer</h2><p>{training.prerequisites}</p></div><div><MonitorUp aria-hidden="true" size={24} /><p className="eyebrow eyebrow-dark"><span /> Modalités confirmées</p><h2>Formats possibles</h2><p>{training.format}</p><ul className="icon-list compact-training-facts"><li><CheckCircle2 aria-hidden="true" size={19} />Niveau : {training.level}</li></ul></div></div></section>

      <section className="section format-factors-section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Construction du format</p><h2>La durée découle de quatre facteurs.</h2></div><p>Le format est défini après un échange sur le niveau, les objectifs, le nombre de participants et les exercices souhaités.</p></div><div className="format-factor-grid"><article><Gauge aria-hidden="true" /><span>01</span><h3>Niveau actuel</h3></article><article><Target aria-hidden="true" /><span>02</span><h3>Objectifs visés</h3></article><article><UsersRound aria-hidden="true" /><span>03</span><h3>Participants</h3></article><article><ClipboardList aria-hidden="true" /><span>04</span><h3>Exercices souhaités</h3></article></div></div></section>

      <section className="training-contact-band"><div className="container"><div><small>Interlocuteur de la demande</small><h2>Adel El Haddioui</h2><p>LIDA confirme dans le programme et le devis l’intervenant, le contenu, les modalités et les supports du parcours retenu. Aucune qualification non documentée n’est ajoutée sur cette page.</p></div><Link className="button button-outline-light" href="/a-propos/adel-el-haddioui">Découvrir l’approche</Link></div></section>

      <section className="section registration-section" id="inscription"><div className="container registration-layout"><div><p className="eyebrow eyebrow-dark"><span /> Programme & devis</p><h2>Recevez une proposition adaptée au groupe.</h2><p>Indiquez le niveau, le nombre de participants et les situations à travailler. Vous pourrez vérifier puis transmettre la demande à LIDA sur WhatsApp.</p><WhatsAppButton message={training.whatsappMessage} label="Demander le programme" /></div><RegistrationForm options={options} defaultTraining={training.slug} /></div></section>

      <section className="related-section compact-related-section"><div className="container related-layout"><div><p className="eyebrow eyebrow-dark"><span /> Pour aller plus loin</p><h2>Complétez votre parcours.</h2></div><div>{training.related.slice(0, 2).map((item) => <Link href={item.href} key={item.href}>{item.label}<ArrowRight aria-hidden="true" size={17} /></Link>)}</div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    </main>
  );
}
