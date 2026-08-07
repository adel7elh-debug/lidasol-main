import type { Metadata } from "next";
import { PageHero } from "@/app/_components/PageHero";
import { TrainingCatalog } from "@/app/_components/TrainingCatalog";
import { CTASection } from "@/app/_components/CTASection";
import { trainings } from "@/app/_data/trainings";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Formations professionnelles au Maroc",
  description: "Catalogue LIDA : gestion, comptabilité, fiscalité, IA, Excel, VBA, management, QHSE et ISO pour les professionnels au Maroc.",
  alternates: { canonical: "/formation" },
  openGraph: { title: "Formations professionnelles LIDA", description: "Des formations pratiques et adaptables aux besoins des entreprises.", url: "/formation", images: [{ url: "/photos/formation.jpg", alt: "Formations professionnelles LIDA" }] },
};

export default function FormationPage() {
  const cards = trainings.map(({ slug, title, category, level, duration, description }) => ({ slug, title, category, level, duration, description }));
  const categories = ["Toutes", ...Array.from(new Set(cards.map((item) => item.category)))];
  return (
    <main>
      <PageHero eyebrow="Formation professionnelle" title="Des formations qui améliorent le travail dès le retour en entreprise." description="Développez les compétences de vos équipes avec des parcours pratiques en gestion, fiscalité, IA, Excel, management, QHSE et ISO." image="/photos/formation.jpg" imageAlt="Formation professionnelle pour entreprises au Maroc" breadcrumbs={[{ label: "Formations", href: "/formation" }]} primaryLabel="S’inscrire" primaryHref="/formation/inscription" whatsappMessage={whatsappMessages.formation} />
      <section className="section catalog-section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow eyebrow-dark"><span /> Catalogue</p><h2>Choisissez une compétence à développer.</h2></div><p>Les durées et modalités sont confirmées après positionnement. Chaque programme peut être adapté en intra-entreprise.</p></div><TrainingCatalog items={cards} categories={categories} /></div></section>
      <section className="section light-section"><div className="container outcomes-layout"><div className="sticky-copy"><p className="eyebrow eyebrow-dark"><span /> Notre pédagogie</p><h2>Apprendre, pratiquer, appliquer.</h2><p>Chaque parcours part des situations rencontrées par les participants et aboutit à des outils ou méthodes réutilisables.</p></div><div className="benefit-list"><article><span>01</span><div><h3>Positionnement</h3><p>Le niveau et les attentes sont clarifiés avant la session.</p></div></article><article><span>02</span><div><h3>Cas pratiques</h3><p>Les exercices sont reliés aux activités et décisions du quotidien.</p></div></article><article><span>03</span><div><h3>Transfert</h3><p>Les participants repartent avec un plan d’application concret.</p></div></article></div></div></section>
      <CTASection title="Construisons le bon parcours pour votre équipe." text="Indiquez la compétence, le niveau et le nombre de participants. LIDA vous proposera un format adapté." primaryLabel="S’inscrire à une formation" primaryHref="/formation/inscription" whatsappMessage={whatsappMessages.formation} />
    </main>
  );
}
