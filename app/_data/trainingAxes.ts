export type TrainingAxis = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  profiles: string[];
  skills: string[];
  image: string;
  imageAlt: string;
  trainingSlugs: string[];
  seoTitle: string;
  seoDescription: string;
};

export const trainingAxes: TrainingAxis[] = [
  {
    slug: "axe-gestion-administrative-comptable",
    title: "Gestion administrative & comptable",
    eyebrow: "Organisation · Gestion · Comptabilité",
    description: "Organiser les documents, la facturation, le suivi des tiers, la trésorerie et la préparation des informations de gestion.",
    profiles: ["Dirigeants et entrepreneurs", "Assistants et responsables administratifs", "Managers de proximité"],
    skills: ["Fiabiliser un dossier administratif", "Suivre échéances et règlements", "Piloter avec des repères de gestion"],
    image: "/photos/training-axes/gestion.webp",
    imageAlt: "Planning et documents de gestion administrative sur un bureau",
    trainingSlugs: ["gestion-administrative-comptable", "optimisation-fiscale", "organisation", "gestion", "management"],
    seoTitle: "Formations en gestion administrative et comptable au Maroc",
    seoDescription: "Formations pratiques LIDA en organisation administrative, comptabilité, fiscalité, gestion et management au Maroc.",
  },
  {
    slug: "axe-intelligence-artificielle",
    title: "Intelligence artificielle appliquée à l’entreprise",
    eyebrow: "IA · Automatisation · Décision",
    description: "Utiliser l’IA de façon responsable pour rédiger, synthétiser, analyser, automatiser et préparer les décisions.",
    profiles: ["Dirigeants et managers", "Fonctions support", "Équipes finance, RH ou qualité"],
    skills: ["Concevoir des consignes efficaces", "Contrôler les résultats de l’IA", "Encadrer confidentialité et usages"],
    image: "/photos/training-axes/ia.webp",
    imageAlt: "Professionnels travaillant sur des outils numériques et l’intelligence artificielle",
    trainingSlugs: ["gestion-intelligence-artificielle"],
    seoTitle: "Formation intelligence artificielle en entreprise au Maroc",
    seoDescription: "Formation pratique à l’intelligence artificielle appliquée aux tâches, données, reportings et décisions de l’entreprise.",
  },
  {
    slug: "axe-iso-qse",
    title: "ISO & QSE",
    eyebrow: "Qualité · Sécurité · Environnement",
    description: "Comprendre les référentiels ISO, auditer les pratiques, gérer les risques et animer l’amélioration continue.",
    profiles: ["Responsables et animateurs QHSE", "Pilotes de processus", "Managers et auditeurs internes débutants"],
    skills: ["Interpréter une exigence ISO", "Évaluer risques et preuves", "Structurer un plan d’amélioration"],
    image: "/photos/training-axes/iso-qse.webp",
    imageAlt: "Équipe en atelier de formation ISO et QSE",
    trainingSlugs: ["qhse", "iso-9001", "iso-14001", "iso-45001", "amelioration-continue"],
    seoTitle: "Formations ISO et QSE au Maroc",
    seoDescription: "Formations LIDA en ISO 9001, ISO 14001, ISO 45001, QHSE, risques, audit interne et amélioration continue.",
  },
  {
    slug: "axe-excel-analyse-donnees",
    title: "Excel & analyse des données",
    eyebrow: "Excel · Données · Automatisation",
    description: "Maîtriser les formules, tableaux croisés, graphiques, tableaux de bord, analyse de données et automatisation VBA.",
    profiles: ["Utilisateurs réguliers d’Excel", "Finance et contrôle de gestion", "Administratifs, RH et reporting"],
    skills: ["Nettoyer et contrôler des données", "Construire une analyse dynamique", "Automatiser des tâches répétitives"],
    image: "/photos/training-axes/excel.webp",
    imageAlt: "Graphiques imprimés pour une formation Excel et analyse des données",
    trainingSlugs: ["excel", "excel-vba"],
    seoTitle: "Formations Excel et analyse de données au Maroc",
    seoDescription: "Formations Excel tous niveaux, tableaux croisés dynamiques, dashboards, analyse de données et automatisation VBA.",
  },
];

export const trainingAxisBySlug = Object.fromEntries(trainingAxes.map((axis) => [axis.slug, axis]));
