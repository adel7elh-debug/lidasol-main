export type Formation = {
  id: number;
  slug: string;
  title: string;
  category: "Comptabilité" | "Fiscalité" | "Gestion" | "RH" | "Logiciels" | "HSE";
  shortDescription: string;
  description: string;
  image: string;
  imagePosition: string;
  duration: string;
  sessions: string;
  level: string;
  format: string;
  language: string;
  objectives: string[];
  audience: string[];
  prerequisites: string[];
  modules: { title: string; content: string[] }[];
  features: string[];
  trainer: { name: string; role: string; bio: string } | null;
  price: string | null;
  nextSession: string | null;
};

const image = "/images/course-covers-sprite-v2.png";

export const formations: Formation[] = [
  {
    id: 1, slug: "comptabilite-generale", title: "Comptabilité générale", category: "Comptabilité",
    shortDescription: "Maîtrisez les fondamentaux comptables et enregistrez les opérations courantes avec méthode.",
    description: "Une formation pratique pour comprendre le cycle comptable, tenir les journaux et préparer les principaux états de synthèse.",
    image, imagePosition: "0% 0%", duration: "24 heures", sessions: "8 séances", level: "Débutant", format: "En ligne ou présentiel", language: "Français",
    objectives: ["Comprendre les principes de la comptabilité", "Enregistrer les opérations courantes", "Lire un bilan et un compte de résultat"],
    audience: ["Assistants comptables", "Entrepreneurs", "Étudiants et personnes en reconversion"], prerequisites: ["Aucun prérequis technique"],
    modules: [{title:"Les bases comptables",content:["Le plan comptable","Débit, crédit et pièces justificatives"]},{title:"Les opérations courantes",content:["Achats, ventes et trésorerie","TVA et rapprochement bancaire"]},{title:"Les états de synthèse",content:["Balance et grand livre","Bilan et compte de résultat"]}],
    features: ["Cas pratiques", "Supports de formation", "Accompagnement du formateur"], trainer: null, price: null, nextSession: null,
  },
  {
    id: 2, slug: "fiscalite-entreprise", title: "Fiscalité de l’entreprise", category: "Fiscalité",
    shortDescription: "Comprenez les principaux impôts et sécurisez les obligations fiscales de l’entreprise.",
    description: "Un parcours opérationnel pour identifier, calculer et déclarer les impôts courants d’une entreprise.",
    image, imagePosition: "33.333% 0%", duration: "18 heures", sessions: "6 séances", level: "Intermédiaire", format: "En ligne ou présentiel", language: "Français",
    objectives: ["Identifier les obligations fiscales", "Calculer la TVA et l’impôt", "Préparer les déclarations courantes"],
    audience: ["Comptables", "Responsables administratifs", "Dirigeants de TPE/PME"], prerequisites: ["Notions de comptabilité recommandées"],
    modules: [{title:"Cadre fiscal",content:["Calendrier et obligations","Documents justificatifs"]},{title:"TVA",content:["TVA collectée et déductible","Déclaration et régularisations"]},{title:"Impôts directs",content:["IS et IR professionnel","Cas pratiques de calcul"]}],
    features: ["Exercices de calcul", "Modèles de travail", "Questions-réponses"], trainer: null, price: null, nextSession: null,
  },
  {
    id: 3, slug: "controle-gestion", title: "Contrôle de gestion", category: "Gestion",
    shortDescription: "Construisez des budgets et tableaux de bord utiles à la prise de décision.",
    description: "Une formation centrée sur les outils essentiels du pilotage : coûts, budgets, indicateurs et analyse des écarts.",
    image, imagePosition: "66.666% 0%", duration: "21 heures", sessions: "7 séances", level: "Intermédiaire", format: "En ligne ou présentiel", language: "Français",
    objectives: ["Calculer et analyser les coûts", "Élaborer un budget", "Concevoir un tableau de bord"],
    audience: ["Contrôleurs de gestion juniors", "Responsables financiers", "Managers"], prerequisites: ["Bases en comptabilité ou gestion"],
    modules: [{title:"Analyse des coûts",content:["Charges directes et indirectes","Seuil de rentabilité"]},{title:"Gestion budgétaire",content:["Construction du budget","Analyse des écarts"]},{title:"Tableaux de bord",content:["Choix des indicateurs","Présentation et suivi"]}],
    features: ["Études de cas", "Fichiers modèles", "Approche orientée décision"], trainer: null, price: null, nextSession: null,
  },
  {
    id: 4, slug: "gestion-ressources-humaines", title: "Gestion des ressources humaines", category: "RH",
    shortDescription: "Structurez les processus RH, du recrutement au suivi administratif des salariés.",
    description: "Un programme concret pour organiser les missions RH essentielles et améliorer l’expérience collaborateur.",
    image, imagePosition: "100% 0%", duration: "18 heures", sessions: "6 séances", level: "Débutant", format: "En ligne ou présentiel", language: "Français",
    objectives: ["Organiser l’administration du personnel", "Conduire un recrutement", "Mettre en place des outils de suivi RH"],
    audience: ["Assistants RH", "Managers", "Dirigeants de petites structures"], prerequisites: ["Aucun prérequis"],
    modules: [{title:"Fonction RH",content:["Rôles et processus","Dossiers du personnel"]},{title:"Recrutement",content:["Définition du besoin","Entretien et intégration"]},{title:"Pilotage RH",content:["Indicateurs essentiels","Développement des compétences"]}],
    features: ["Outils prêts à l’emploi", "Mises en situation", "Méthodes applicables immédiatement"], trainer: null, price: null, nextSession: null,
  },
  {
    id: 5, slug: "excel-professionnel", title: "Excel professionnel", category: "Logiciels",
    shortDescription: "Gagnez du temps avec les formules, tableaux et outils d’analyse indispensables.",
    description: "Une progression guidée pour exploiter Excel dans les tâches de gestion, de suivi et de reporting.",
    image, imagePosition: "0% 100%", duration: "15 heures", sessions: "5 séances", level: "Tous niveaux", format: "En ligne ou présentiel", language: "Français",
    objectives: ["Automatiser les calculs courants", "Structurer des données fiables", "Créer des tableaux de bord lisibles"],
    audience: ["Professionnels administratifs", "Comptables", "Managers et entrepreneurs"], prerequisites: ["Disposer d’un ordinateur avec Excel"],
    modules: [{title:"Fondamentaux efficaces",content:["Références et formules","Mise en forme et validation"]},{title:"Analyse des données",content:["Fonctions de recherche","Tableaux croisés dynamiques"]},{title:"Reporting",content:["Graphiques utiles","Construction d’un tableau de bord"]}],
    features: ["Exercices sur ordinateur", "Fichiers d’entraînement", "Raccourcis et bonnes pratiques"], trainer: null, price: null, nextSession: null,
  },
  {
    id: 6, slug: "sage-comptabilite", title: "Sage Comptabilité", category: "Logiciels",
    shortDescription: "Prenez en main Sage pour saisir, contrôler et éditer vos travaux comptables.",
    description: "Une formation pas à pas pour configurer un dossier, traiter les écritures et produire les éditions courantes.",
    image, imagePosition: "33.333% 100%", duration: "15 heures", sessions: "5 séances", level: "Débutant", format: "En ligne ou présentiel", language: "Français",
    objectives: ["Créer et paramétrer un dossier", "Saisir les journaux comptables", "Contrôler et éditer les états"],
    audience: ["Comptables débutants", "Assistants administratifs", "Demandeurs d’emploi"], prerequisites: ["Notions de comptabilité recommandées"],
    modules: [{title:"Prise en main",content:["Interface et paramétrage","Plan comptable et journaux"]},{title:"Traitement comptable",content:["Saisie et lettrage","Rapprochement bancaire"]},{title:"Contrôle et éditions",content:["Balance et grand livre","Clôture et sauvegarde"]}],
    features: ["Démonstrations guidées", "Travaux pratiques", "Fiches mémo"], trainer: null, price: null, nextSession: null,
  },
  {
    id: 7, slug: "paie-administration-personnel", title: "Paie et administration du personnel", category: "RH",
    shortDescription: "Préparez la paie et gérez les principaux documents administratifs du personnel.",
    description: "Un parcours pratique pour comprendre le bulletin de paie, collecter les variables et sécuriser le suivi administratif.",
    image, imagePosition: "66.666% 100%", duration: "21 heures", sessions: "7 séances", level: "Intermédiaire", format: "En ligne ou présentiel", language: "Français",
    objectives: ["Comprendre les rubriques du bulletin", "Collecter et contrôler les variables", "Gérer les documents du personnel"],
    audience: ["Gestionnaires de paie juniors", "Assistants RH", "Comptables"], prerequisites: ["Notions RH ou comptables utiles"],
    modules: [{title:"Cadre de la paie",content:["Éléments du salaire","Temps de travail et absences"]},{title:"Calcul du bulletin",content:["Brut, retenues et net","Variables et contrôles"]},{title:"Administration",content:["Entrées et sorties","Classement et suivi des dossiers"]}],
    features: ["Bulletins d’exemple", "Cas pratiques", "Check-lists de contrôle"], trainer: null, price: null, nextSession: null,
  },
  {
    id: 8, slug: "hygiene-securite-environnement", title: "Hygiène, sécurité et environnement", category: "HSE",
    shortDescription: "Identifiez les risques professionnels et mettez en place des actions de prévention adaptées.",
    description: "Une initiation opérationnelle aux principes HSE, à l’évaluation des risques et au suivi des actions de prévention.",
    image, imagePosition: "100% 100%", duration: "12 heures", sessions: "4 séances", level: "Débutant", format: "En ligne ou présentiel", language: "Français",
    objectives: ["Repérer les principaux risques", "Participer à une évaluation des risques", "Proposer un plan d’action HSE"],
    audience: ["Responsables d’équipe", "Référents HSE débutants", "Salariés impliqués dans la prévention"], prerequisites: ["Aucun prérequis"],
    modules: [{title:"Fondamentaux HSE",content:["Vocabulaire et responsabilités","Culture de prévention"]},{title:"Évaluation des risques",content:["Identification des dangers","Hiérarchisation des risques"]},{title:"Plan d’action",content:["Mesures de prévention","Suivi des indicateurs"]}],
    features: ["Exemples terrain", "Grilles d’analyse", "Plan d’action personnalisé"], trainer: null, price: null, nextSession: null,
  },
];

export const getFormation = (slug: string) => formations.find((formation) => formation.slug === slug);
