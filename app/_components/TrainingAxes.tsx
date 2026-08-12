import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Calculator, CheckCircle2, FileSpreadsheet, ShieldCheck, UsersRound } from "lucide-react";
import type { TrainingAxis } from "@/app/_data/trainingAxes";
import type { TrainingData } from "@/app/_data/trainings";
import { PageHero } from "@/app/_components/PageHero";
import { CTASection } from "@/app/_components/CTASection";
import { whatsappMessages } from "@/app/_lib/site";

const axisIcons = [Calculator, Bot, ShieldCheck, FileSpreadsheet] as const;

export function TrainingAxesGrid({ axes }: { axes: TrainingAxis[] }) {
  return (
    <div className="training-axis-grid">
      {axes.map((axis, index) => {
        const Icon = axisIcons[index];
        return (
          <article className="training-axis-card" key={axis.slug}>
            <div className="training-axis-card__image"><Image src={axis.image} alt={axis.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
            <div className="training-axis-card__body">
              <span className="training-axis-card__icon"><Icon aria-hidden="true" size={23} /></span>
              <small>{axis.trainingSlugs.length} formation{axis.trainingSlugs.length > 1 ? "s" : ""}</small>
              <h2>{axis.title}</h2>
              <div className="axis-profiles"><UsersRound aria-hidden="true" size={17} /><span>{axis.profiles.slice(0, 2).join(" · ")}</span></div>
              <ul>{axis.skills.map((skill) => <li key={skill}><CheckCircle2 aria-hidden="true" size={15} />{skill}</li>)}</ul>
              <Link href={`/formation/${axis.slug}`}>Voir les programmes <ArrowRight aria-hidden="true" size={17} /></Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function TrainingAxisPage({ axis, trainings }: { axis: TrainingAxis; trainings: TrainingData[] }) {
  return (
    <main>
      <PageHero eyebrow={`Formations · ${axis.eyebrow}`} title={axis.title} description={axis.description} image={axis.image} imageAlt={axis.imageAlt} breadcrumbs={[{ label: "Formations", href: "/formation" }, { label: axis.title, href: `/formation/${axis.slug}` }]} primaryLabel="Demander un programme" primaryHref="/formation/inscription" whatsappMessage={whatsappMessages.formation} />
      <section className="section catalog-section">
        <div className="container">
          <div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Programmes disponibles</p><h2>Comparez les situations traitées et les compétences visées.</h2></div><p>Le format final est défini après échange sur le niveau, les objectifs, le nombre de participants et les exercices souhaités.</p></div>
          <div className="training-grid">
            {trainings.map((training) => (
              <article className="training-card" key={training.slug}>
                <div className="training-card-top"><span><ArrowRight aria-hidden="true" size={21} /></span><small>{training.level}</small></div>
                <h2>{training.title}</h2>
                <p><strong>Promesse :</strong> {training.promise}</p>
                <div className="training-card-facts"><div><small>Public principal</small><span>{training.audience.slice(0, 2).join(" · ")}</span></div><div><small>Situations traitées</small><span>{training.why.slice(0, 2).join(" · ")}</span></div><div><small>Compétences</small><span>{training.skills.slice(0, 2).join(" · ")}</span></div></div>
                <dl><div><dt>Niveau</dt><dd>{training.level}</dd></div><div><dt>Modalités</dt><dd>Présentiel · distance · intra</dd></div></dl>
                <div className="card-actions"><Link href={`/formation/${training.slug}`}>Voir le programme <ArrowRight aria-hidden="true" size={16} /></Link><Link href={`/formation/inscription?formation=${training.slug}`}>Recevoir programme & devis</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Besoin d’un parcours adapté à votre équipe ?" text="Précisez les compétences à développer, le niveau actuel et le format souhaité." primaryLabel="Préparer la demande" primaryHref="/formation/inscription" whatsappMessage={whatsappMessages.formation} />
    </main>
  );
}
