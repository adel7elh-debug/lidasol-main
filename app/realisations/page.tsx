import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/app/_components/PageHero";
import { CTASection } from "@/app/_components/CTASection";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Exemples de missions pour les PME",
  description: "Exemples représentatifs de missions LIDA en organisation, digitalisation, pilotage et ISO, sans client ni résultat inventé.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Exemples de missions LIDA",
    description: "Des situations représentatives avec problème, intervention, livrables et résultat attendu.",
    url: "/realisations",
    images: [{ url: "/photos/pages/realisations.webp", alt: "Exemples de missions LIDA" }],
  },
};

const missionExamples = [
  {
    area: "Digitalisation · Flux commerciaux",
    title: "Supprimer les ressaisies entre devis, commandes et factures",
    context: "Une PME commerciale utilise un outil de devis, un fichier de commandes et un suivi séparé pour la facturation.",
    problem: "Les mêmes données sont saisies plusieurs fois, les statuts diffèrent selon les fichiers et les validations ne sont pas tracées.",
    intervention: "Cartographier le flux réel, définir les données de référence, formaliser les besoins d’intégration et tester le processus cible avant déploiement.",
    deliverables: ["Cartographie du flux", "Cahier des besoins", "Scénarios et plan de tests"],
    result: "Un circuit cible partagé, prêt à guider le paramétrage d’un ERP ou d’une automatisation sans promettre un gain chiffré avant mesure.",
  },
  {
    area: "Conseil · Organisation comptable",
    title: "Préparer un dossier mensuel complet avant l’échéance",
    context: "Une petite entreprise reçoit factures et justificatifs par email, WhatsApp et papier auprès de plusieurs responsables.",
    problem: "Les pièces manquantes sont découvertes tard et les anomalies restent réparties entre messages, dossiers et tableaux personnels.",
    intervention: "Définir un cycle de collecte, un responsable par famille de pièces, des contrôles simples et un point de suivi avant transmission.",
    deliverables: ["Plan de classement", "Checklist mensuelle", "Tableau des pièces manquantes"],
    result: "Une visibilité commune sur les documents reçus, à corriger et à transmettre au professionnel comptable habilité.",
  },
  {
    area: "Pilotage · Processus et KPI",
    title: "Faire d’une réunion mensuelle un véritable point de décision",
    context: "Une équipe de direction consulte de nombreux indicateurs sans partager leurs formules, leurs seuils ni leur responsable.",
    problem: "Les échanges commentent les chiffres mais les décisions, propriétaires et dates de suivi restent rarement formalisés.",
    intervention: "Sélectionner les KPI utiles, documenter leurs règles de calcul et installer une trame de revue qui relie chaque écart à une décision.",
    deliverables: ["Fiches KPI", "Tableau de bord", "Registre des décisions et actions"],
    result: "Des indicateurs définis de la même manière et un rituel de pilotage où les actions sont attribuées puis revues.",
  },
  {
    area: "ISO · Diagnostic initial",
    title: "Donner un point de départ concret à un projet ISO 9001",
    context: "Une PME souhaite préparer ISO 9001 mais ses processus, preuves et pratiques sont décrits de façon inégale selon les services.",
    problem: "Les actions sont lancées sans ordre commun et la direction ne distingue pas les écarts prioritaires des améliorations secondaires.",
    intervention: "Observer les pratiques, examiner les documents disponibles, rapprocher les constats des exigences et construire une feuille de route réaliste.",
    deliverables: ["Rapport de diagnostic", "Matrice des écarts", "Feuille de route priorisée"],
    result: "Un état de départ argumenté pour organiser la mise en œuvre, sans garantie sur la décision future de l’organisme certificateur indépendant.",
  },
];

export default function MissionExamplesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Exemples de missions"
        title="Comprendre une intervention avant de la confier."
        description="Ces cas illustratifs montrent comment LIDA peut cadrer une situation, intervenir et livrer des outils utiles. Ils ne présentent ni client réel, ni témoignage, ni résultat constaté."
        image="/photos/pages/realisations.webp"
        imageAlt="Équipe préparant les livrables d’une mission de conseil"
        breadcrumbs={[{ label: "Exemples de missions", href: "/realisations" }]}
        primaryLabel="Présenter mon besoin"
        primaryHref="/contact"
        whatsappMessage={whatsappMessages.general}
      />

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow eyebrow-dark"><span /> Situations représentatives</p><h2>Quatre problèmes de PME, quatre périmètres de mission.</h2></div>
            <p>Le résultat indiqué est un état attendu à valider dans chaque contexte. Aucun nom d’entreprise, chiffre de performance ou avis client n’est attribué à ces exemples.</p>
          </div>
          <div className="mission-examples">
            {missionExamples.map((mission, index) => (
              <article className="mission-example" key={mission.title}>
                <header><small>{String(index + 1).padStart(2, "0")} · {mission.area}</small><h2>{mission.title}</h2></header>
                <div className="mission-example__details">
                  <div><h3>Contexte</h3><p>{mission.context}</p></div>
                  <div><h3>Problème</h3><p>{mission.problem}</p></div>
                  <div><h3>Intervention</h3><p>{mission.intervention}</p></div>
                  <div><h3>Livrables</h3><ul>{mission.deliverables.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={17} />{item}</li>)}</ul></div>
                  <div><h3>Résultat attendu</h3><p>{mission.result}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Votre situation mérite son propre cadrage." text="Décrivez le problème, les outils actuels et le résultat attendu. Le premier échange sert à identifier un périmètre utile, pas à forcer une solution standard." primaryLabel="Présenter mon projet" primaryHref="/contact" whatsappMessage={whatsappMessages.general} />
    </main>
  );
}
