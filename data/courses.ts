export type Course = {
  slug: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  modules: number;
  icon: string;
  featured?: boolean;
  nextSession: string;
  places: number;
  objectives: string[];
  program: { title: string; lessons: string[] }[];
};

export const courses: Course[] = [
  {
    slug: "comptabilite-generale-pratique",
    title: "Comptabilité générale et pratique",
    category: "Finance & Comptabilité",
    description: "Maîtrisez le cycle comptable complet à travers des cas réels d'entreprise.",
    duration: "10 semaines",
    level: "Débutant",
    price: 2400,
    modules: 10,
    icon: "∑",
    featured: true,
    nextSession: "14 septembre 2026",
    places: 8,
    objectives: ["Tenir une comptabilité conforme", "Produire les états de synthèse", "Traiter la TVA et les immobilisations"],
    program: [
      { title: "Organisation comptable", lessons: ["Principes et pièces comptables", "Plan comptable marocain"] },
      { title: "Journal, grand livre et balance", lessons: ["Saisie des opérations", "Contrôles et rapprochements"] },
      { title: "Travaux d'inventaire", lessons: ["Immobilisations et stocks", "Bilan, CPC et cas pratique"] },
    ],
  },
  {
    slug: "fiscalite-marocaine",
    title: "Fiscalité marocaine",
    category: "Fiscalité",
    description: "Appliquez les règles de TVA, IS et IR et sécurisez vos déclarations fiscales.",
    duration: "8 semaines",
    level: "Intermédiaire",
    price: 2200,
    modules: 5,
    icon: "%",
    featured: true,
    nextSession: "21 septembre 2026",
    places: 12,
    objectives: ["Calculer la TVA", "Préparer l'IS et l'IR", "Anticiper les risques fiscaux"],
    program: [
      { title: "TVA", lessons: ["Champ d'application", "Déclaration et régularisation"] },
      { title: "IS et cotisation minimale", lessons: ["Résultat fiscal", "Liquidation de l'impôt"] },
      { title: "IR et taxe professionnelle", lessons: ["Revenus salariaux", "Obligations déclaratives"] },
    ],
  },
  {
    slug: "sage-100-comptabilite",
    title: "Sage 100 Comptabilité",
    category: "Logiciels de gestion",
    description: "Passez de la création du dossier à l'édition des états comptables sur Sage 100.",
    duration: "6 semaines",
    level: "Tous niveaux",
    price: 1900,
    modules: 7,
    icon: "S",
    featured: true,
    nextSession: "5 octobre 2026",
    places: 10,
    objectives: ["Paramétrer un dossier", "Automatiser les écritures", "Clôturer un exercice"],
    program: [{ title: "Prise en main", lessons: ["Paramétrage", "Journaux et modèles"] }, { title: "Production", lessons: ["Saisie et lettrage", "Clôture"] }],
  },
  {
    slug: "gestion-rh-paie",
    title: "Gestion RH & Paie",
    category: "Ressources humaines",
    description: "Gérez les dossiers du personnel et produisez une paie fiable et conforme.",
    duration: "8 semaines",
    level: "Intermédiaire",
    price: 2300,
    modules: 8,
    icon: "RH",
    nextSession: "12 octobre 2026",
    places: 14,
    objectives: ["Administrer le personnel", "Calculer un bulletin", "Gérer les obligations sociales"],
    program: [{ title: "Administration RH", lessons: ["Contrats", "Congés et absences"] }, { title: "Paie", lessons: ["Variables", "Bulletin et déclarations"] }],
  },
  {
    slug: "controle-gestion",
    title: "Contrôle de gestion",
    category: "Pilotage",
    description: "Construisez des budgets, analysez les coûts et pilotez la performance.",
    duration: "7 semaines",
    level: "Avancé",
    price: 2600,
    modules: 6,
    icon: "↗",
    nextSession: "19 octobre 2026",
    places: 9,
    objectives: ["Calculer les coûts", "Construire un budget", "Créer un tableau de bord"],
    program: [{ title: "Analyse des coûts", lessons: ["Coûts complets", "Seuil de rentabilité"] }, { title: "Pilotage", lessons: ["Budget", "Tableaux de bord"] }],
  },
  {
    slug: "excel-professionnel",
    title: "Excel professionnel",
    category: "Bureautique",
    description: "Gagnez du temps avec les fonctions avancées, TCD et tableaux de bord.",
    duration: "5 semaines",
    level: "Intermédiaire",
    price: 1500,
    modules: 6,
    icon: "X",
    nextSession: "26 octobre 2026",
    places: 16,
    objectives: ["Fiabiliser les calculs", "Analyser les données", "Automatiser les reportings"],
    program: [{ title: "Analyse", lessons: ["Fonctions avancées", "Tableaux croisés dynamiques"] }, { title: "Reporting", lessons: ["Graphiques", "Dashboard"] }],
  },
];

export const formatPrice = (price: number) => new Intl.NumberFormat("fr-MA").format(price) + " MAD";
