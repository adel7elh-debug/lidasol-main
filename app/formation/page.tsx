import type { Metadata } from "next";
import { PageHero } from "@/app/_components/PageHero";
import { TrainingAxesGrid } from "@/app/_components/TrainingAxes";
import { CTASection } from "@/app/_components/CTASection";
import { trainingAxes } from "@/app/_data/trainingAxes";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Formations professionnelles au Maroc",
  description: "Catalogue LIDA : gestion, comptabilité, fiscalité, IA, Excel, VBA, management, QHSE et ISO pour les professionnels au Maroc.",
  alternates: { canonical: "/formation" },
  openGraph: { title: "Formations professionnelles LIDA", description: "Des formations pratiques et adaptables aux besoins des entreprises.", url: "/formation", images: [{ url: "/photos/formation.jpg", alt: "Formations professionnelles LIDA" }] },
};

export default function FormationPage() {
  return (
    <main>
      <PageHero eyebrow="Formations professionnelles" title="Des formations construites autour du travail réel." description="Gestion, IA, ISO-QSE ou Excel : choisissez la compétence à développer, puis précisez le niveau, les usages et les situations que l’équipe doit maîtriser." image="/photos/formation.jpg" imageAlt="Salle de formation professionnelle pour les entreprises au Maroc" breadcrumbs={[{ label: "Formations", href: "/formation" }]} primaryLabel="Préparer une demande" primaryHref="/formation/inscription" whatsappMessage={whatsappMessages.formation} />
      <section className="section catalog-section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Quatre axes</p><h2>Un point d’entrée clair pour chaque besoin.</h2></div><p>Administration et gestion pour fiabiliser les flux, IA pour encadrer des usages utiles, ISO-QSE pour appliquer les référentiels, Excel pour analyser et automatiser les données. Le contenu final dépend du positionnement.</p></div><TrainingAxesGrid axes={trainingAxes} /></div></section>
      <section className="section light-section"><div className="container outcomes-layout"><div className="sticky-copy"><p className="eyebrow eyebrow-dark"><span /> Notre pédagogie</p><h2>Apprendre, pratiquer, appliquer.</h2><p>Chaque parcours part des situations rencontrées par les participants et aboutit à des outils ou méthodes réutilisables.</p></div><div className="benefit-list"><article><span>01</span><div><h3>Positionnement</h3><p>Le niveau et les attentes sont clarifiés avant la session.</p></div></article><article><span>02</span><div><h3>Cas pratiques</h3><p>Les exercices sont reliés aux activités et décisions du quotidien.</p></div></article><article><span>03</span><div><h3>Transfert</h3><p>Les participants repartent avec un plan d’application concret.</p></div></article></div></div></section>
      <CTASection title="Préparons un parcours utile à votre équipe." text="Indiquez la compétence, le niveau, les situations de travail et le nombre de participants. La durée et le format seront confirmés après positionnement." primaryLabel="Préparer la demande" primaryHref="/formation/inscription" whatsappMessage={whatsappMessages.formation} />
    </main>
  );
}
