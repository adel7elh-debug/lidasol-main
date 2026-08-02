export type Course = {
  slug: string;
  title: string;
  category: string;
  filterCategory: "Finance & Comptabilité" | "Fiscalité" | "Gestion" | "RH" | "Logiciels" | "HSE";
  description: string;
  duration: string;
  level: string;
  format: string;
  modules: number;
  coverIndex: number;
  featured?: boolean;
  nextSession?: string;
  places?: number;
  objectives: string[];
  audience: string[];
  program: { title: string; lessons: string[] }[];
};

export const courses: Course[] = [
  {
    slug: "comptabilite-generale-pratique", title: "Comptabilité générale et pratique", category: "Finance & Comptabilité", filterCategory: "Finance & Comptabilité",
    description: "Maîtrisez le cycle comptable complet à travers des cas pratiques inspirés de situations d’entreprise.", duration: "10 semaines", level: "Débutant", format: "100 % en ligne", modules: 10, coverIndex: 0, featured: true,
    objectives: ["Organiser et contrôler les pièces comptables", "Enregistrer les opérations courantes", "Préparer les travaux d’inventaire", "Lire un bilan et un CPC"],
    audience: ["Assistants comptables", "Entrepreneurs et dirigeants de TPE", "Étudiants en gestion", "Professionnels en reconversion"],
    program: [{title:"Les fondamentaux",lessons:["Organisation comptable","Pièces et documents comptables","Plan comptable marocain"]},{title:"Le cycle comptable",lessons:["Journal et grand livre","Balance","Rapprochement bancaire"]},{title:"Opérations courantes",lessons:["Achats et ventes","TVA","Immobilisations"]},{title:"Clôture et états de synthèse",lessons:["Travaux d’inventaire","Bilan et CPC","Étude de cas complète"]}],
  },
  {
    slug:"fiscalite-marocaine",title:"Fiscalité marocaine",category:"Fiscalité",filterCategory:"Fiscalité",description:"Comprenez les principaux impôts marocains et sécurisez la préparation de vos déclarations.",duration:"8 semaines",level:"Intermédiaire",format:"En direct + replay",modules:5,coverIndex:1,featured:true,
    objectives:["Déterminer la TVA exigible","Comprendre le calcul de l’IS et de l’IR","Identifier les échéances déclaratives","Éviter les erreurs fiscales courantes"],audience:["Comptables et aides-comptables","Responsables administratifs","Entrepreneurs","Étudiants en finance"],program:[{title:"Taxe sur la valeur ajoutée",lessons:["Champ d’application","Déductions et prorata","Déclaration de TVA"]},{title:"Impôt sur les sociétés",lessons:["Résultat fiscal","Liquidation de l’IS","Cotisation minimale"]},{title:"Impôt sur le revenu",lessons:["Revenus professionnels","Revenus salariaux","Obligations déclaratives"]}],
  },
  {
    slug:"sage-100-comptabilite",title:"Sage 100 Comptabilité",category:"Logiciels de gestion",filterCategory:"Logiciels",description:"Prenez en main Sage 100, de la création du dossier à l’édition des états comptables.",duration:"6 semaines",level:"Tous niveaux",format:"100 % en ligne",modules:7,coverIndex:2,featured:true,
    objectives:["Paramétrer un dossier comptable","Saisir et automatiser les écritures","Réaliser le lettrage","Préparer une clôture"],audience:["Comptables","Assistants administratifs","Gestionnaires de PME","Étudiants"],program:[{title:"Configuration",lessons:["Création du dossier","Plan comptable","Journaux"]},{title:"Traitement courant",lessons:["Saisie","Lettrage","Rapprochement"]},{title:"Éditions et clôture",lessons:["États comptables","Contrôles","Clôture"]}],
  },
  {
    slug:"gestion-administrative",title:"Gestion administrative",category:"Gestion",filterCategory:"Gestion",description:"Structurez les processus administratifs et gagnez en fiabilité dans le suivi quotidien.",duration:"6 semaines",level:"Débutant",format:"En direct + replay",modules:6,coverIndex:3,featured:true,
    objectives:["Organiser les dossiers administratifs","Mettre en place des procédures simples","Suivre les échéances","Produire des documents professionnels"],audience:["Assistants administratifs","Office managers","Entrepreneurs","Personnes en reconversion"],program:[{title:"Organisation administrative",lessons:["Classement et archivage","Gestion des priorités"]},{title:"Communication professionnelle",lessons:["Courriers et comptes rendus","Suivi des demandes"]},{title:"Outils de pilotage",lessons:["Tableaux de suivi","Procédures internes"]}],
  },
  {
    slug:"grh-paie",title:"GRH & Paie",category:"Ressources humaines",filterCategory:"RH",description:"Gérez les dossiers du personnel et comprenez les étapes essentielles de la paie.",duration:"8 semaines",level:"Intermédiaire",format:"100 % en ligne",modules:8,coverIndex:4,featured:true,
    objectives:["Administrer les dossiers salariés","Suivre les congés et absences","Comprendre un bulletin de paie","Préparer les variables mensuelles"],audience:["Assistants RH","Gestionnaires administratifs","Responsables de PME","Étudiants en RH"],program:[{title:"Administration du personnel",lessons:["Dossier salarié","Contrats","Temps de travail"]},{title:"Préparation de la paie",lessons:["Variables","Absences","Éléments du bulletin"]},{title:"Suivi social",lessons:["Déclarations","Tableaux de bord RH"]}],
  },
  {
    slug:"controle-gestion",title:"Contrôle de gestion",category:"Pilotage",filterCategory:"Gestion",description:"Analysez les coûts, construisez des budgets et transformez les données en décisions.",duration:"7 semaines",level:"Avancé",format:"En direct + replay",modules:6,coverIndex:5,featured:true,
    objectives:["Calculer les coûts","Construire un budget","Analyser les écarts","Créer un tableau de bord"],audience:["Contrôleurs de gestion juniors","Comptables","Responsables financiers","Dirigeants de PME"],program:[{title:"Analyse des coûts",lessons:["Charges directes et indirectes","Coûts complets","Seuil de rentabilité"]},{title:"Gestion budgétaire",lessons:["Construction du budget","Analyse des écarts"]},{title:"Pilotage",lessons:["Indicateurs","Tableau de bord"]}],
  },
  {
    slug:"excel-professionnel",title:"Excel professionnel",category:"Bureautique",filterCategory:"Logiciels",description:"Analysez vos données plus vite avec les fonctions avancées, TCD et tableaux de bord.",duration:"5 semaines",level:"Intermédiaire",format:"100 % en ligne",modules:6,coverIndex:6,featured:true,
    objectives:["Fiabiliser les calculs","Nettoyer et structurer des données","Créer des TCD","Construire un reporting lisible"],audience:["Professionnels administratifs","Comptables et financiers","Responsables RH","Toute personne utilisant Excel"],program:[{title:"Fonctions utiles",lessons:["Recherche et référence","Fonctions logiques","Fonctions de date"]},{title:"Analyse",lessons:["Tableaux croisés dynamiques","Graphiques"]},{title:"Reporting",lessons:["Mise en forme","Dashboard"]}],
  },
  {
    slug:"hse-qhse",title:"HSE / QHSE",category:"Santé, sécurité & qualité",filterCategory:"HSE",description:"Acquérez les bases pour identifier les risques et contribuer à une démarche HSE structurée.",duration:"6 semaines",level:"Débutant",format:"En direct + replay",modules:6,coverIndex:7,featured:true,
    objectives:["Identifier les dangers","Évaluer les risques","Participer à un plan d’action","Suivre les incidents"],audience:["Animateurs HSE débutants","Responsables de site","Chefs d’équipe","Professionnels en reconversion"],program:[{title:"Fondamentaux HSE",lessons:["Dangers et risques","Cadre de prévention"]},{title:"Évaluation des risques",lessons:["Méthodes d’analyse","Plan d’action"]},{title:"Amélioration continue",lessons:["Incidents","Indicateurs","Sensibilisation"]}],
  },
];
