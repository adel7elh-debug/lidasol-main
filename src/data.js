export const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Normes ISO", href: "#normes" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Méthode", href: "#methode" },
  { label: "Outils", href: "#outils" },
  { label: "Consultant", href: "#consultant" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3", label: "Normes ISO" },
  { value: "23", label: "Secteurs accompagnés" },
  { value: "100+", label: "Bénéfices identifiés" },
  { value: "360°", label: "Audit, formation et accompagnement" },
];

export const coverage = [
  {
    icon: "scan",
    title: "Diagnostic ISO",
    text: "Analyse rapide de vos écarts, priorités et risques avant d'engager la démarche.",
  },
  {
    icon: "file",
    title: "Mise en place documentaire",
    text: "Processus, procédures, registres et preuves adaptés à votre activité réelle.",
  },
  {
    icon: "users",
    title: "Formation des équipes",
    text: "Sessions pratiques pour rendre les exigences ISO compréhensibles et applicables.",
  },
  {
    icon: "shield",
    title: "Audit interne et certification",
    text: "Préparation structurée aux audits, non-conformités et plans d'actions correctives.",
  },
];

export const standards = [
  {
    number: "ISO 9001",
    title: "Management de la qualité",
    text: "Qualité, satisfaction client, processus, indicateurs et amélioration continue.",
    points: ["Orientation client", "Maîtrise des processus", "Pilotage des réclamations"],
  },
  {
    number: "ISO 14001",
    title: "Management environnemental",
    text: "Conformité, déchets, énergie, prévention des pollutions et réduction des impacts.",
    points: ["Analyse environnementale", "Conformité réglementaire", "Performance énergie/déchets"],
  },
  {
    number: "ISO 45001",
    title: "Santé et sécurité au travail",
    text: "Prévention des accidents, maîtrise des risques professionnels et culture sécurité.",
    points: ["Évaluation des risques", "Prévention terrain", "Participation des équipes"],
  },
];

export const sectors = [
  "Cabinet médical",
  "Clinique privée",
  "Laboratoire d'analyses",
  "Centre de radiologie",
  "Centre de formation",
  "École privée",
  "Université privée",
  "Société BTP",
  "Bureau d'études",
  "Industrie manufacturière",
  "Industrie agroalimentaire",
  "Maintenance industrielle",
  "Transport",
  "Logistique",
  "Hôtel",
  "Restaurant",
  "Nettoyage",
  "Gardiennage",
  "Cabinet comptable",
  "Cabinet de conseil",
  "Société informatique",
  "Commerce & distribution",
  "Entreprise multiservices",
];

const sectorThemes = {
  "Cabinet médical": {
    challenges: "Traçabilité patient, confidentialité, hygiène, disponibilité des équipements et continuité de service.",
    iso9001: "Standardiser l'accueil, les rendez-vous, les dossiers et le traitement des réclamations.",
    iso14001: "Maîtriser les déchets médicaux, consommables, énergie et produits de nettoyage.",
    iso45001: "Réduire les risques biologiques, chimiques, ergonomiques et les incidents d'exposition.",
    actions: "Cartographier le parcours patient, formaliser l'hygiène, créer un registre des incidents.",
  },
  "Clinique privée": {
    challenges: "Coordination médicale, sécurité patient, achats, maintenance biomédicale et exigences réglementaires.",
    iso9001: "Piloter les processus critiques, les indicateurs qualité et les plans d'amélioration.",
    iso14001: "Structurer la gestion des DASRI, rejets, eau, énergie et prestataires sensibles.",
    iso45001: "Mettre sous contrôle les risques soignants, manutention, incendie et urgence.",
    actions: "Lancer un diagnostic QHSE par service, prioriser risques patients et risques professionnels.",
  },
  "Laboratoire d'analyses": {
    challenges: "Fiabilité des résultats, délais, équipements, réactifs, biosécurité et confidentialité.",
    iso9001: "Sécuriser les étapes pré-analytique, analytique et post-analytique avec des KPI.",
    iso14001: "Suivre les déchets biologiques, réactifs, emballages et consommations.",
    iso45001: "Prévenir exposition biologique, coupures, produits chimiques et stress opérationnel.",
    actions: "Créer le registre des équipements, la matrice des risques et le suivi des non-conformités.",
  },
  "Centre de radiologie": {
    challenges: "Sécurité patient, radioprotection, planning, confidentialité et maintenance des appareils.",
    iso9001: "Clarifier l'accueil, l'examen, le compte rendu et la satisfaction patient.",
    iso14001: "Réduire consommables, énergie, déchets spécifiques et impacts des équipements.",
    iso45001: "Maîtriser radioprotection, posture, manutention et risques électriques.",
    actions: "Formaliser les contrôles appareils, les incidents et les protocoles d'accueil.",
  },
  "Centre de formation": {
    challenges: "Qualité pédagogique, satisfaction apprenants, conformité, gestion formateurs et preuves.",
    iso9001: "Structurer conception, animation, évaluation et amélioration des formations.",
    iso14001: "Limiter papier, déplacements, énergie et achats non responsables.",
    iso45001: "Sécuriser salles, évacuations, ergonomie et accueil du public.",
    actions: "Créer le processus formation, les évaluations et le tableau de bord satisfaction.",
  },
  "École privée": {
    challenges: "Expérience parents/élèves, sécurité, documentation, communication et conformité.",
    iso9001: "Améliorer inscriptions, pédagogie, réclamations et suivi de la satisfaction.",
    iso14001: "Piloter déchets, eau, énergie, sensibilisation et achats scolaires.",
    iso45001: "Prévenir accidents, risques incendie, circulation interne et santé du personnel.",
    actions: "Cartographier les processus scolaires et lancer un plan sécurité établissement.",
  },
  "Université privée": {
    challenges: "Gouvernance académique, services étudiants, partenariats, infrastructures et image.",
    iso9001: "Mettre en cohérence admission, enseignement, examens, stages et réclamations.",
    iso14001: "Construire un campus plus responsable : énergie, déchets, mobilité et achats.",
    iso45001: "Sécuriser laboratoires, ateliers, événements, maintenance et circulation.",
    actions: "Définir les KPI académiques, risques campus et responsabilités par service.",
  },
  "Société BTP": {
    challenges: "Chantiers changeants, délais, sous-traitance, accidents, déchets et conformité.",
    iso9001: "Maîtriser études, achats, exécution, contrôles qualité et réception chantier.",
    iso14001: "Gérer déchets de chantier, poussières, bruit, consommations et voisinage.",
    iso45001: "Réduire chutes, engins, levage, coactivité et risques graves.",
    actions: "Mettre en place plan QHSE chantier, analyse de risques et fiches de contrôle.",
  },
  "Bureau d'études": {
    challenges: "Délais, validation des livrables, capitalisation, relation client et conformité technique.",
    iso9001: "Sécuriser revue d'offre, conception, vérification, modification et retour client.",
    iso14001: "Intégrer l'écoconception, les déplacements et la sobriété numérique.",
    iso45001: "Prévenir risques terrain, déplacements, ergonomie et charge mentale.",
    actions: "Formaliser revues de projet, gestion documentaire et grille risques missions.",
  },
  "Industrie manufacturière": {
    challenges: "Qualité produit, maintenance, rebuts, sécurité machine, énergie et productivité.",
    iso9001: "Standardiser production, contrôles, non-conformités, actions correctives et fournisseurs.",
    iso14001: "Réduire déchets, rejets, énergie, eau, bruit et impacts matières.",
    iso45001: "Maîtriser machines, EPI, consignation, manutention et risques chimiques.",
    actions: "Créer AMDEC simple, plan de contrôle, registre risques et suivi rebut.",
  },
  "Industrie agroalimentaire": {
    challenges: "Hygiène, traçabilité, fournisseurs, froid, déchets organiques et sécurité opérateurs.",
    iso9001: "Stabiliser les contrôles, réclamations, lots, fournisseurs et plans d'amélioration.",
    iso14001: "Piloter eau, énergie, emballages, pertes matières et valorisation déchets.",
    iso45001: "Réduire glissades, froid, machines, produits chimiques et manutention.",
    actions: "Aligner procédures qualité, plan hygiène, suivi des lots et risques SST.",
  },
  "Maintenance industrielle": {
    challenges: "Interventions urgentes, pièces, consignation, coactivité et fiabilité des équipements.",
    iso9001: "Structurer demandes, interventions, rapports, taux de panne et satisfaction client.",
    iso14001: "Maîtriser huiles, déchets dangereux, déplacements et consommables.",
    iso45001: "Renforcer permis de travail, consignation, hauteur, électricité et EPI.",
    actions: "Créer ordre de travail, analyse risques intervention et tableau de bord maintenance.",
  },
  Transport: {
    challenges: "Délais, flotte, sécurité routière, carburant, conducteurs et réclamations client.",
    iso9001: "Améliorer planification, suivi livraison, incidents, maintenance et retours client.",
    iso14001: "Suivre carburant, émissions, entretien, pneumatiques et optimisation trajets.",
    iso45001: "Prévenir accidents routiers, fatigue, manutention et urgences.",
    actions: "Mettre en place checklist véhicule, suivi incidents et KPI ponctualité.",
  },
  Logistique: {
    challenges: "Stock, préparation, erreurs, délais, engins, coactivité et surfaces de stockage.",
    iso9001: "Fiabiliser réception, stockage, préparation, expédition et inventaires.",
    iso14001: "Réduire emballages, énergie, déchets, retours et consommables.",
    iso45001: "Maîtriser circulation, chariots, manutention, hauteur et glissades.",
    actions: "Formaliser flux, zones, contrôles stock et analyse risques entrepôt.",
  },
  Hôtel: {
    challenges: "Expérience client, hygiène, maintenance, énergie, déchets et sécurité du public.",
    iso9001: "Piloter réservation, accueil, hébergement, réclamations et satisfaction.",
    iso14001: "Réduire eau, énergie, linge, déchets, achats et impacts touristiques.",
    iso45001: "Prévenir glissades, manutention, produits chimiques, incendie et travail isolé.",
    actions: "Créer parcours client, plan environnemental et registre incidents HSE.",
  },
  Restaurant: {
    challenges: "Hygiène, service, stocks, réclamations, déchets alimentaires et risques cuisine.",
    iso9001: "Standardiser accueil, production, service, contrôles et traitement des retours.",
    iso14001: "Réduire gaspillage, énergie, eau, emballages et huiles usagées.",
    iso45001: "Prévenir coupures, brûlures, glissades, TMS et produits chimiques.",
    actions: "Mettre en place checklists hygiène, suivi pertes et analyse risques cuisine.",
  },
  Nettoyage: {
    challenges: "Qualité prestation, rotation des équipes, produits chimiques, EPI et satisfaction client.",
    iso9001: "Définir cahiers de contrôle, planning, supervision et gestion réclamations.",
    iso14001: "Optimiser produits, dosage, déchets, eau et choix écoresponsables.",
    iso45001: "Maîtriser risques chimiques, glissades, postures et travail chez le client.",
    actions: "Créer fiches de poste, fiches produits, audits site et plan de formation.",
  },
  Gardiennage: {
    challenges: "Continuité de service, consignes, incidents, comportement terrain et sécurité agents.",
    iso9001: "Structurer consignes, rondes, rapports, supervision et satisfaction client.",
    iso14001: "Réduire impacts liés aux déplacements, énergie poste et consommables.",
    iso45001: "Prévenir agressions, travail de nuit, fatigue, incendie et situations d'urgence.",
    actions: "Formaliser main courante, fiches consignes, analyse risques poste et escalade incident.",
  },
  "Cabinet comptable": {
    challenges: "Délais fiscaux, confidentialité, erreurs, relation client et charge de travail.",
    iso9001: "Clarifier missions, revues dossiers, échéances, contrôles et réclamations.",
    iso14001: "Réduire papier, archivage physique, déplacements et consommation numérique.",
    iso45001: "Prévenir stress, ergonomie, surcharge et risques psychosociaux.",
    actions: "Mettre en place planning qualité, revue dossiers et registre risques clients.",
  },
  "Cabinet de conseil": {
    challenges: "Qualité livrables, capitalisation, satisfaction client, gestion missions et image.",
    iso9001: "Industrialiser cadrage, production, validation, retour client et amélioration.",
    iso14001: "Intégrer sobriété numérique, déplacements et achats responsables.",
    iso45001: "Gérer charge mentale, déplacements, ergonomie et interventions client.",
    actions: "Créer modèle de mission, check qualité livrable et enquête satisfaction.",
  },
  "Société informatique": {
    challenges: "Support, projets, sécurité, disponibilité, documentation et satisfaction client.",
    iso9001: "Structurer demandes, incidents, changements, SLA et amélioration continue.",
    iso14001: "Agir sur sobriété numérique, énergie, matériel, recyclage et achats IT.",
    iso45001: "Prévenir ergonomie, charge mentale, astreintes et risques électriques.",
    actions: "Déployer catalogue services, registre incidents, KPI support et risques IT.",
  },
  "Commerce & distribution": {
    challenges: "Stocks, fournisseurs, expérience client, réclamations, déchets et sécurité magasin.",
    iso9001: "Maîtriser achats, réception, stockage, vente, retours et satisfaction client.",
    iso14001: "Réduire emballages, énergie, déchets, transport et invendus.",
    iso45001: "Prévenir manutention, circulation, incendie, chutes et agressions.",
    actions: "Créer procédures réception/retour, suivi réclamations et registre risques magasin.",
  },
  "Entreprise multiservices": {
    challenges: "Activités variées, équipes mobiles, qualité homogène, sous-traitance et risques terrain.",
    iso9001: "Créer un système commun pour devis, planning, exécution, contrôle et réclamation.",
    iso14001: "Identifier impacts par activité et piloter produits, déchets, eau, énergie.",
    iso45001: "Évaluer les risques par mission, site client, déplacement et équipement.",
    actions: "Bâtir matrice activités-risques, fiches mission et contrôles terrain.",
  },
};

export const sectorDetails = sectors.reduce((acc, sector) => {
  acc[sector] = sectorThemes[sector];
  return acc;
}, {});

export const beforeAfter = {
  before: [
    "Processus informels",
    "Documentation dispersée",
    "Réclamations peu analysées",
    "Risques non maîtrisés",
    "Absence d'indicateurs fiables",
  ],
  after: [
    "Processus clairs",
    "Traçabilité documentaire",
    "Plan d'action structuré",
    "KPI et tableaux de bord",
    "Image professionnelle auprès des clients et partenaires",
  ],
};

export const roadmap = [
  { icon: "search", title: "Diagnostic initial", text: "État des lieux, priorités, écarts et feuille de route." },
  { icon: "map", title: "Cartographie des processus", text: "Vision claire des responsabilités, flux et interfaces." },
  { icon: "folder", title: "Mise en place documentaire", text: "Documents utiles, preuves terrain et maîtrise des versions." },
  { icon: "presentation", title: "Formation et déploiement", text: "Appropriation par les équipes et application opérationnelle." },
  { icon: "check", title: "Audit interne et préparation certification", text: "Audit blanc, actions correctives et préparation finale." },
];

export const tools = [
  "Politique Qualité",
  "Politique Environnement",
  "Politique SST",
  "SWOT / PESTEL",
  "Registre des risques",
  "Plan d'action",
  "Tableau KPI",
  "Programme d'audit",
  "Fiche de non-conformité",
  "Rapport d'audit interne",
];
