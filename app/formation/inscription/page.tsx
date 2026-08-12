import type { Metadata } from "next";
import { PageHero } from "@/app/_components/PageHero";
import { RegistrationForm } from "@/app/_components/RegistrationForm";
import { trainings } from "@/app/_data/trainings";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Inscription à une formation professionnelle",
  description: "Préparez votre demande d’inscription à une formation LIDA en présentiel, à distance ou en intra-entreprise.",
  alternates: { canonical: "/formation/inscription" },
  openGraph: { title: "Inscription formation LIDA", description: "Préparez votre demande de formation professionnelle avec LIDA.", url: "/formation/inscription", images: [{ url: "/photos/pages/inscription.webp", alt: "Inscription à une formation LIDA" }] },
};

type Props = { searchParams: Promise<{ formation?: string }> };

export default async function TrainingRegistrationPage({ searchParams }: Props) {
  const { formation = "" } = await searchParams;
  const options = trainings.map((training) => ({ value: training.slug, label: training.title }));
  const defaultTraining = options.some((option) => option.value === formation) ? formation : "";
  return (
    <main>
      <PageHero eyebrow="Inscription" title="Préparez votre demande de formation." description="Précisez votre besoin, votre niveau et le format souhaité. Vous pourrez ensuite transmettre la demande complète sur WhatsApp." image="/photos/pages/inscription.webp" imageAlt="Participants réunis pour une formation professionnelle" breadcrumbs={[{ label: "Formations", href: "/formation" }, { label: "Inscription", href: "/formation/inscription" }]} primaryLabel="Voir les quatre axes" primaryHref="/formation" whatsappMessage={whatsappMessages.formation} />
      <section className="section registration-page"><div className="container narrow-form"><div className="section-heading"><p className="eyebrow eyebrow-dark"><span /> Vos informations</p><h2>Une demande claire pour une réponse adaptée.</h2><p>Les champs marqués d’un astérisque sont obligatoires. Aucune donnée n’est enregistrée sur un serveur par ce formulaire : vous choisissez de la transmettre via WhatsApp.</p></div><RegistrationForm options={options} defaultTraining={defaultTraining} /></div></section>
    </main>
  );
}
