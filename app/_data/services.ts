import { whatsappMessages } from "@/app/_lib/site";
import { serviceOffers, type ServiceOfferDetail } from "@/app/_data/serviceOffers";

export type LinkItem = { label: string; href: string };
export type ServiceChild = { label: string; description: string; href?: string };
export type FaqItem = { question: string; answer: string };
export type PracticalCase = {
  context: string;
  situation: string;
  problem: string;
  solution: string;
  deliverables: string[];
  result: string;
};

export type ServicePageData = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  problems: string[];
  objectives: string[];
  steps: { title: string; text: string }[];
  deliverables: string[];
  benefits: string[];
  audience: string[];
  examples: string[];
  practicalCase: PracticalCase;
  offer?: ServiceOfferDetail;
  faq: FaqItem[];
  related: LinkItem[];
  children?: ServiceChild[];
  primaryLabel: string;
  whatsappMessage: string;
  seoTitle: string;
  seoDescription: string;
};

type DetailSeed = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  problems: string[];
  objectives: string[];
  deliverables: string[];
  benefits?: string[];
  audience?: string[];
  examples: string[];
  related: LinkItem[];
  primaryLabel: string;
  whatsappMessage: string;
  seoTitle: string;
  seoDescription: string;
  steps?: ServicePageData["steps"];
  faq?: FaqItem[];
};

const photos = {
  accounting: "/photos/services/conseil-comptable.webp",
  fiscal: "/photos/services/conseil-fiscal.webp",
  legal: "/photos/services/conseil-juridique.webp",
  analytics: "/photos/services/tableaux-bord.webp",
  documents: "/photos/services/documents.webp",
  digitalTeam: "/photos/services/erp.webp",
  workflow: "/photos/services/suivi-comptable.webp",
  process: "/photos/services/processus.webp",
  operations: "/photos/services/outils-gestion.webp",
  management: "/photos/services/pilotage-qse.webp",
} as const;

const sharedSteps = [
  { title: "Cadrer", text: "Clarifier le besoin, le périmètre, les contraintes et le résultat attendu." },
  { title: "Diagnostiquer", text: "Observer les pratiques, analyser les données et identifier les écarts prioritaires." },
  { title: "Construire", text: "Définir la solution, les responsabilités, les outils et une feuille de route réaliste." },
  { title: "Déployer", text: "Mettre en œuvre avec les équipes, mesurer les résultats et ajuster durablement." },
];

const defaultFaq: FaqItem[] = [
  { question: "Comment démarre la mission ?", answer: "Un échange de cadrage permet de comprendre votre situation, vos priorités et les informations déjà disponibles." },
  { question: "La prestation est-elle adaptée aux PME ?", answer: "Oui. Le périmètre, les outils et le rythme sont adaptés à la taille et à la maturité de l’entreprise." },
  { question: "Quels résultats sont remis ?", answer: "La proposition précise les livrables, le calendrier et les critères permettant de suivre les résultats." },
];

const illustrativeContext = "Cas illustratif : il décrit une mission possible, pas un client ni un résultat constaté.";

const practicalCases: Record<string, PracticalCase> = {
  "conseil-accompagnement/conseil-comptable": {
    context: illustrativeContext,
    situation: "Une PME de distribution reçoit ses factures et justificatifs par email, WhatsApp et papier avant la clôture mensuelle.",
    problem: "Des pièces manquent au moment de la transmission au cabinet comptable, tandis que les anomalies restent dispersées dans les échanges.",
    solution: "LIDA organise un cycle mensuel de collecte, de contrôle et de relance, avec un responsable et une date de vérification pour chaque famille de pièces.",
    deliverables: ["Plan de classement comptable", "Checklist mensuelle", "Tableau des pièces manquantes"],
    result: "Le dirigeant visualise l’état du dossier avant l’échéance et le professionnel comptable reçoit un ensemble plus complet et mieux ordonné.",
  },
  "conseil-accompagnement/conseil-fiscal": {
    context: illustrativeContext,
    situation: "Une petite entreprise suit ses obligations fiscales dans plusieurs agendas et prépare les justificatifs uniquement à l’approche des échéances.",
    problem: "Les responsabilités sont floues, certains documents arrivent tard et les questions nécessitant un avis habilité ne sont pas isolées assez tôt.",
    solution: "LIDA construit un calendrier partagé, structure le dossier de justificatifs et prépare une liste de points à faire valider par le professionnel compétent.",
    deliverables: ["Calendrier fiscal partagé", "Checklist des justificatifs", "Note des points à valider"],
    result: "L’entreprise anticipe la préparation de ses dossiers et distingue clairement l’organisation interne des consultations réglementées.",
  },
  "conseil-accompagnement/conseil-juridique": {
    context: illustrativeContext,
    situation: "Une SARL en croissance conserve statuts, procès-verbaux, contrats et délégations dans plusieurs dossiers physiques et numériques.",
    problem: "Les versions sont difficiles à identifier, les échéances statutaires peu visibles et les demandes adressées aux juristes manquent de pièces.",
    solution: "LIDA centralise l’inventaire, prépare l’échéancier et constitue un dossier factuel à transmettre à l’avocat, au notaire ou au professionnel habilité concerné.",
    deliverables: ["Registre documentaire", "Échéancier juridique", "Checklist de constitution du dossier"],
    result: "Le dirigeant sait quels documents existent, ce qui manque et quels points doivent être confiés à un professionnel du droit.",
  },
  "digitalisation/organisation-numerique-documents": {
    context: illustrativeContext,
    situation: "Une entreprise de services partage ses dossiers clients dans un espace commun où coexistent des doublons et des fichiers nommés « scan » ou « version finale ».",
    problem: "Les équipes perdent du temps à retrouver la bonne version et les droits d’accès ne correspondent plus aux responsabilités.",
    solution: "LIDA définit une arborescence par activité, des règles de nommage, les droits utiles et une méthode d’archivage testée sur un dossier pilote.",
    deliverables: ["Plan de classement numérique", "Convention de nommage", "Matrice des accès"],
    result: "Chaque collaborateur dispose d’un emplacement connu, d’une règle de version et d’un chemin clair pour archiver ou retrouver un document.",
  },
  "digitalisation/automatisation-integration-erp": {
    context: illustrativeContext,
    situation: "Une PME commerciale ressaisit les données d’un devis dans la commande, la facture puis un tableau de suivi séparé.",
    problem: "Les écarts de saisie se multiplient, le statut des commandes n’est pas partagé et le projet ERP reste défini par une liste de fonctionnalités.",
    solution: "LIDA cartographie le flux commande-facturation, précise les données de référence, formalise les besoins et prépare des scénarios de test avant intégration.",
    deliverables: ["Cartographie du flux cible", "Cahier des besoins ERP", "Plan de tests métier"],
    result: "L’entreprise dispose d’un processus cible validé pour sélectionner ou paramétrer l’outil et limiter les ressaisies inutiles.",
  },
  "digitalisation/tableaux-de-bord-automatises": {
    context: illustrativeContext,
    situation: "Une direction reconstruit chaque mois ses indicateurs commerciaux, de trésorerie et d’impayés à partir de plusieurs fichiers Excel.",
    problem: "Les chiffres diffèrent selon les versions, les calculs sont difficiles à contrôler et la préparation retarde la réunion de pilotage.",
    solution: "LIDA définit les KPI et leurs sources, nettoie le modèle de données puis automatise la consolidation et les contrôles essentiels.",
    deliverables: ["Dictionnaire des KPI", "Modèle de données contrôlé", "Tableau de bord avec guide d’actualisation"],
    result: "La mise à jour suit un enchaînement reproductible et les responsables peuvent concentrer la réunion sur les écarts et les décisions.",
  },
  "digitalisation/suivi-comptable-fiscal": {
    context: illustrativeContext,
    situation: "Une entreprise collecte mensuellement ses pièces comptables auprès de plusieurs responsables par messages et relances individuelles.",
    problem: "Personne ne voit l’avancement global, les demandes sont répétées et les pièces incomplètes sont découvertes tardivement.",
    solution: "LIDA met en place un espace unique de dépôt, un échéancier, des rappels et un tableau de contrôle accessible aux personnes concernées.",
    deliverables: ["Workflow de collecte", "Échéancier partagé", "Registre des anomalies documentaires"],
    result: "Les pièces attendues, reçues et à corriger deviennent visibles avant leur transmission aux professionnels habilités.",
  },
  "digitalisation/outils-gestion-management": {
    context: illustrativeContext,
    situation: "Une société de maintenance suit clients, interventions, planning et actions dans plusieurs fichiers et conversations WhatsApp.",
    problem: "Les équipes ne partagent pas la même information et les abonnements déjà souscrits ne couvrent pas le flux réel de travail.",
    solution: "LIDA décrit les usages prioritaires, compare les solutions sur des critères concrets et accompagne un paramétrage pilote avec les utilisateurs.",
    deliverables: ["Cahier des usages", "Grille de comparaison", "Configuration pilote et guide de prise en main"],
    result: "L’entreprise choisit sur la base de son processus et dispose d’un point de suivi commun pour les interventions et les actions.",
  },
  "gestion-organisation/diagnostic-organisationnel-iso": {
    context: illustrativeContext,
    situation: "Une PME souhaite préparer ISO 9001 mais ne sait pas si ses processus, documents et pratiques actuels couvrent les exigences essentielles.",
    problem: "Les actions partent dans plusieurs directions, les risques ne sont pas hiérarchisés et aucune base commune ne permet de planifier le projet.",
    solution: "LIDA observe les pratiques, échange avec les responsables, examine les preuves disponibles et rapproche les constats du référentiel visé.",
    deliverables: ["Rapport de diagnostic", "Matrice des écarts", "Feuille de route priorisée"],
    result: "La direction dispose d’un état de départ argumenté et d’un ordre de traitement pour organiser la suite du projet ISO.",
  },
  "gestion-organisation/processus-responsabilites": {
    context: illustrativeContext,
    situation: "Dans une PME, une commande passe du commercial aux achats puis à la livraison sans règles partagées pour les validations et les changements.",
    problem: "Les décisions sont reprises plusieurs fois, certaines tâches n’ont pas de responsable clair et les blocages sont attribués aux personnes plutôt qu’au flux.",
    solution: "LIDA cartographie le processus réel avec les équipes, définit les étapes de décision et attribue pilote, contributeurs et validations dans une matrice RACI.",
    deliverables: ["Cartographie commande-livraison", "Matrice RACI", "Plan des améliorations prioritaires"],
    result: "Les interfaces et responsabilités sont explicites, ce qui donne une base commune pour corriger les ruptures du processus.",
  },
  "gestion-organisation/documentation-conformite": {
    context: illustrativeContext,
    situation: "Une organisation utilise plusieurs versions de ses procédures et conserve les preuves d’application dans des dossiers propres à chaque service.",
    problem: "Les collaborateurs ne savent pas toujours quel modèle utiliser et la préparation d’un audit mobilise de longues recherches.",
    solution: "LIDA crée une liste maîtresse, définit les règles d’approbation et de version, puis rédige avec le terrain les documents réellement nécessaires.",
    deliverables: ["Liste maîtresse documentaire", "Règle de gestion des versions", "Procédures et modèles prioritaires"],
    result: "Les documents applicables et leurs preuves associées sont identifiables, accessibles et reliés aux responsabilités.",
  },
  "gestion-organisation/risques-maitrise-operationnelle": {
    context: illustrativeContext,
    situation: "Un atelier traite les incidents au cas par cas sans registre commun des dangers, des mesures existantes et des actions décidées.",
    problem: "Les mêmes situations reviennent, les priorités de prévention sont discutées sans critères et certaines actions restent sans échéance.",
    solution: "LIDA anime l’identification des risques, évalue leur criticité, documente les mesures de maîtrise et organise le suivi des incidents et actions.",
    deliverables: ["Cartographie des risques", "Plan de maîtrise", "Registre incidents et actions"],
    result: "Les responsables visualisent les risques prioritaires, les mesures en place et les actions qui nécessitent encore une décision ou un contrôle.",
  },
  "gestion-organisation/tableaux-de-bord-kpi": {
    context: illustrativeContext,
    situation: "Une équipe de direction examine de nombreux indicateurs mais ne partage ni les formules, ni les seuils, ni les responsables de chaque donnée.",
    problem: "La réunion commente les chiffres sans conclure sur les écarts et les actions décidées sont rarement reprises au point suivant.",
    solution: "LIDA réduit le tableau aux KPI utiles, formalise calcul, fréquence et pilote, puis installe une trame de revue orientée décision.",
    deliverables: ["Fiches KPI", "Tableau de bord de pilotage", "Registre des décisions et actions"],
    result: "Chaque indicateur a une définition et un propriétaire, et chaque revue aboutit à des actions tracées avec une date de suivi.",
  },
  "gestion-organisation/audit-interne-certification": {
    context: illustrativeContext,
    situation: "Une entreprise prépare un audit de certification indépendant alors que son programme d’audit interne et ses preuves restent incomplets.",
    problem: "Les écarts connus ne sont pas analysés jusqu’à leur cause et les équipes associent l’audit à une recherche de documents de dernière minute.",
    solution: "LIDA prépare le programme, mène les entretiens et vérifications, formalise les constats puis accompagne le suivi des corrections et de leur efficacité.",
    deliverables: ["Programme d’audit interne", "Rapport de constats", "Plan d’actions suivi"],
    result: "L’organisation connaît les écarts à traiter avant l’audit externe, sans préjuger de la décision de l’organisme certificateur.",
  },
  "gestion-organisation/pilotage-iso-qse-smq-externalise": {
    context: illustrativeContext,
    situation: "Une PME dispose d’un système de management mais ne peut pas mobiliser un responsable à temps plein pour en suivre le calendrier.",
    problem: "Les actions s’accumulent entre deux audits, les indicateurs ne sont pas revus régulièrement et la revue de direction est préparée tard.",
    solution: "LIDA organise un rythme d’appui défini : calendrier, collecte des indicateurs, suivi des actions, préparation des audits et dossiers de revue.",
    deliverables: ["Calendrier annuel du système", "Reporting périodique", "Dossier de revue de direction"],
    result: "La direction conserve une vision régulière du système et des décisions à prendre, avec des responsabilités maintenues dans l’entreprise.",
  },
  "accompagnement-iso/iso-9001": {
    context: illustrativeContext,
    situation: "Une entreprise de services prépare ISO 9001 alors que les réclamations clients et les actions correctives sont suivies par emails séparés.",
    problem: "Le lien entre attentes clients, processus, indicateurs et amélioration n’est pas démontré de manière cohérente.",
    solution: "LIDA structure les processus, les critères de performance et le traitement des non-conformités, puis prépare les équipes à l’audit interne.",
    deliverables: ["Diagnostic ISO 9001", "Cartographie et fiches processus", "Registre des non-conformités et actions"],
    result: "Le système qualité relie les exigences aux pratiques et fournit des preuves organisées pour l’évaluation par un organisme indépendant.",
  },
  "accompagnement-iso/iso-14001": {
    context: illustrativeContext,
    situation: "Un site de production souhaite structurer ISO 14001 mais suit séparément déchets, consommations et obligations environnementales.",
    problem: "Les aspects significatifs ne sont pas hiérarchisés et le plan d’action ne relie pas clairement impacts, conformité et responsabilités.",
    solution: "LIDA aide à identifier les aspects environnementaux, organiser la veille de conformité et construire les contrôles et indicateurs adaptés au site.",
    deliverables: ["Analyse environnementale", "Registre des obligations", "Programme de maîtrise et d’amélioration"],
    result: "L’organisation dispose d’un système environnemental documenté et pilotable avant l’évaluation de certification indépendante.",
  },
  "accompagnement-iso/iso-45001": {
    context: illustrativeContext,
    situation: "Une entreprise avec atelier et interventions extérieures souhaite préparer ISO 45001 à partir de pratiques de sécurité déjà présentes mais peu coordonnées.",
    problem: "L’évaluation des risques, la consultation des travailleurs et le retour sur incidents ne suivent pas une méthode commune.",
    solution: "LIDA structure l’identification des dangers, les mesures de prévention, la participation des équipes et la préparation aux situations d’urgence.",
    deliverables: ["Évaluation des risques SST", "Plan de prévention", "Registre incidents, consultations et actions"],
    result: "Les risques et responsabilités deviennent suivis dans un même système, sans garantie préalable sur l’issue de la certification indépendante.",
  },
};

function detail(seed: DetailSeed): ServicePageData {
  const benefits = seed.benefits ?? ["Organisation plus claire", "Temps mieux utilisé", "Risques réduits", "Suivi plus fiable"];
  return {
    ...seed,
    steps: seed.steps ?? sharedSteps,
    benefits,
    audience: seed.audience ?? ["Dirigeants de PME", "Responsables de service", "Équipes administratives", "Entreprises en croissance"],
    faq: seed.faq ?? defaultFaq,
    practicalCase: practicalCases[seed.path],
    offer: serviceOffers[seed.path],
  };
}

const conseilDetails = [
  detail({
    path: "conseil-accompagnement/conseil-comptable",
    eyebrow: "Conseil & accompagnement · Organisation comptable",
    title: "Fiabiliser votre organisation comptable avant chaque échéance.",
    description: "LIDA organise les pièces, les flux et les contrôles nécessaires pour faciliter le suivi comptable et les échanges avec votre professionnel comptable.",
    image: photos.accounting,
    imageAlt: "Calculatrice, formulaires et documents comptables sur un bureau",
    problems: ["Pièces justificatives dispersées", "Retards de transmission", "Rapprochements difficiles", "Échéances peu visibles"],
    objectives: ["Structurer la collecte des pièces", "Sécuriser les contrôles", "Fluidifier les échanges avec le comptable", "Suivre les anomalies"],
    deliverables: ["Plan de classement comptable", "Checklist mensuelle", "Calendrier des échéances", "Tableau des anomalies"],
    examples: ["Organisation mensuelle des pièces", "Suivi clients et fournisseurs", "Préparation du dossier comptable"],
    related: [{ label: "Suivi comptable et fiscal digitalisé", href: "/digitalisation/suivi-comptable-fiscal" }, { label: "Formation gestion administrative", href: "/formation/gestion-administrative-comptable" }],
    primaryLabel: "Diagnostiquer mon organisation comptable",
    whatsappMessage: whatsappMessages.diagnostic,
    seoTitle: "Organisation et préparation comptable pour PME au Maroc",
    seoDescription: "Organisation des pièces, échéances, contrôles et échanges comptables pour les TPE et PME au Maroc.",
    faq: [
      { question: "LIDA remplace-t-elle l’expert-comptable ?", answer: "Non. LIDA prépare, organise et suit les informations. Les actes réglementés restent réalisés par les professionnels habilités." },
      { question: "Pouvez-vous travailler avec notre cabinet actuel ?", answer: "Oui. L’objectif est de fluidifier la préparation des dossiers et la coordination avec votre interlocuteur habituel." },
      { question: "Peut-on digitaliser ce suivi ?", answer: "Oui. Les collectes, contrôles et tableaux de suivi peuvent être digitalisés après cadrage." },
    ],
  }),
  detail({
    path: "conseil-accompagnement/conseil-fiscal",
    eyebrow: "Conseil & accompagnement · Échéances fiscales",
    title: "Anticiper vos obligations fiscales avec une organisation claire.",
    description: "LIDA vous aide à préparer les informations, suivre le calendrier fiscal et coordonner les points nécessitant un professionnel habilité.",
    image: photos.fiscal,
    imageAlt: "Documents fiscaux, calculatrice et stylo préparés pour contrôle",
    problems: ["Échéances suivies tardivement", "Justificatifs incomplets", "Risques difficiles à identifier", "Décisions mal préparées"],
    objectives: ["Construire un calendrier fiscal", "Organiser les justificatifs", "Identifier les points de vigilance", "Préparer les arbitrages"],
    deliverables: ["Calendrier fiscal", "Liste des justificatifs", "Matrice de vigilance", "Dossier de préparation"],
    examples: ["Préparation d’une échéance", "Organisation des justificatifs", "Suivi d’un plan de régularisation"],
    related: [{ label: "Organisation & préparation comptable", href: "/conseil-accompagnement/conseil-comptable" }, { label: "Suivi digitalisé", href: "/digitalisation/suivi-comptable-fiscal" }],
    primaryLabel: "Cadrer mes échéances fiscales",
    whatsappMessage: whatsappMessages.diagnostic,
    seoTitle: "Préparation et suivi des échéances fiscales au Maroc",
    seoDescription: "Préparation, organisation et suivi des obligations fiscales des PME avec professionnels habilités selon la mission.",
    faq: [
      { question: "Proposez-vous des consultations fiscales réglementées ?", answer: "LIDA assure l’organisation et la préparation. Les consultations ou actes réservés sont réalisés avec des professionnels habilités." },
      { question: "Pouvez-vous reprendre un dossier incomplet ?", answer: "Oui. Un état des lieux identifie les pièces disponibles, les manques et les priorités." },
      { question: "L’accompagnement inclut-il un calendrier ?", answer: "Oui. Les obligations, responsables, pièces attendues et dates de contrôle sont regroupés dans un suivi clair." },
    ],
  }),
  detail({
    path: "conseil-accompagnement/conseil-juridique",
    eyebrow: "Conseil & accompagnement · Dossiers juridiques",
    title: "Préparer vos dossiers juridiques et sécuriser leur suivi.",
    description: "LIDA structure les documents, les échéances et les demandes juridiques, puis coordonne si nécessaire un professionnel du droit habilité.",
    image: photos.legal,
    imageAlt: "Statue de la justice symbolisant le conseil juridique",
    problems: ["Documents juridiques éparpillés", "Échéances statutaires oubliées", "Demandes mal préparées", "Interlocuteur difficile à choisir"],
    objectives: ["Centraliser les documents", "Suivre les échéances", "Préparer les faits et pièces", "Orienter vers le professionnel adapté"],
    deliverables: ["Dossier juridique organisé", "Échéancier", "Checklist de pièces", "Note de cadrage"],
    examples: ["Organisation des documents sociaux", "Préparation d’un dossier contractuel", "Suivi des échéances juridiques"],
    related: [{ label: "Documentation & conformité", href: "/gestion-organisation/documentation-conformite" }, { label: "Suivi des échéances fiscales", href: "/conseil-accompagnement/conseil-fiscal" }],
    primaryLabel: "Organiser mon dossier juridique",
    whatsappMessage: whatsappMessages.diagnostic,
    seoTitle: "Organisation des dossiers juridiques pour PME au Maroc",
    seoDescription: "Organisation des documents et dossiers juridiques, avec professionnels habilités lorsque la mission l’exige.",
    faq: [
      { question: "LIDA remplace-t-elle un avocat ou un notaire ?", answer: "Non. LIDA organise et prépare le dossier. Les consultations et actes réservés sont confiés aux professionnels habilités." },
      { question: "Quels documents peuvent être organisés ?", answer: "Statuts, procès-verbaux, contrats, délégations, registres et échéanciers peuvent être structurés." },
      { question: "Mes informations restent-elles confidentielles ?", answer: "Oui. Les règles d’accès, de partage et de confidentialité sont définies au démarrage." },
    ],
  }),
];

const digitalDetails = [
  detail({
    path: "digitalisation/organisation-numerique-documents",
    eyebrow: "Digitalisation · Documents",
    title: "Retrouver chaque document rapidement et maîtriser ses versions.",
    description: "Nous concevons une organisation numérique simple pour classer, partager, valider, retrouver et archiver les documents.",
    image: photos.documents,
    imageAlt: "Dossiers de classement représentant l’organisation numérique des documents",
    problems: ["Fichiers dispersés", "Noms incohérents", "Accès difficiles à contrôler", "Temps perdu à rechercher"],
    objectives: ["Créer une arborescence claire", "Définir les droits d’accès", "Maîtriser les versions", "Sécuriser l’archivage"],
    deliverables: ["Plan de classement", "Règles de nommage", "Matrice d’accès", "Guide d’archivage"],
    examples: ["Dossier client partagé", "Archive comptable numérique", "Bibliothèque de procédures"],
    related: [{ label: "Documentation & conformité", href: "/gestion-organisation/documentation-conformite" }, { label: "Outils adaptés", href: "/digitalisation/outils-gestion-management" }],
    primaryLabel: "Organiser mes documents",
    whatsappMessage: whatsappMessages.digitalisation,
    seoTitle: "Organisation numérique des documents au Maroc",
    seoDescription: "Classement numérique, droits d’accès, versions et archivage des documents pour les PME marocaines.",
  }),
  detail({
    path: "digitalisation/automatisation-integration-erp",
    eyebrow: "Digitalisation · ERP & automatisation",
    title: "Connecter vos flux et supprimer les ressaisies inutiles.",
    description: "Nous simplifions le processus, cadrons les besoins ERP et automatisons les échanges entre les outils utiles à votre activité.",
    image: photos.digitalTeam,
    imageAlt: "Équipe travaillant sur ordinateurs pour intégrer un ERP",
    problems: ["Données saisies plusieurs fois", "Outils déconnectés", "Validations manuelles", "Projet ERP mal cadré"],
    objectives: ["Simplifier les flux", "Définir les besoins ERP", "Intégrer les données prioritaires", "Sécuriser tests et adoption"],
    deliverables: ["Cartographie des flux", "Cahier des besoins ERP", "Scénarios d’automatisation", "Plan de tests"],
    examples: ["Circuit commande-facturation", "Synchronisation de données", "Workflow de validation"],
    related: [{ label: "Processus & responsabilités", href: "/gestion-organisation/processus-responsabilites" }, { label: "Outils adaptés", href: "/digitalisation/outils-gestion-management" }],
    primaryLabel: "Cadrer mon projet ERP",
    whatsappMessage: whatsappMessages.digitalisation,
    seoTitle: "Automatisation et intégration ERP pour PME au Maroc",
    seoDescription: "Cadrage ERP, automatisation des tâches et intégration des flux pour les PME au Maroc.",
  }),
  detail({
    path: "digitalisation/tableaux-de-bord-automatises",
    eyebrow: "Digitalisation · Tableaux de bord",
    title: "Suivre vos indicateurs sans reconstruire le reporting chaque mois.",
    description: "Nous définissons les KPI, fiabilisons leurs sources et automatisons leur consolidation dans un tableau de bord lisible.",
    image: photos.analytics,
    imageAlt: "Ordinateur affichant des graphiques et un tableau de bord analytique",
    problems: ["Reporting long à préparer", "Chiffres contradictoires", "Fichiers fragiles", "Écarts découverts tard"],
    objectives: ["Définir des KPI décisionnels", "Fiabiliser les calculs", "Automatiser la consolidation", "Visualiser les écarts"],
    deliverables: ["Dictionnaire des KPI", "Modèle de données", "Tableau de bord automatisé", "Guide de lecture"],
    examples: ["Suivi commercial", "Trésorerie prévisionnelle", "Dashboard qualité et QHSE"],
    related: [{ label: "Tableaux de bord & KPI", href: "/gestion-organisation/tableaux-de-bord-kpi" }, { label: "Formation Excel", href: "/formation/excel" }],
    primaryLabel: "Automatiser mon reporting",
    whatsappMessage: whatsappMessages.digitalisation,
    seoTitle: "Tableaux de bord automatisés et KPI au Maroc",
    seoDescription: "Conception de KPI et tableaux de bord automatisés pour le pilotage des PME au Maroc.",
  }),
  detail({
    path: "digitalisation/suivi-comptable-fiscal",
    eyebrow: "Digitalisation · Comptabilité & fiscalité",
    title: "Centraliser les pièces, échéances et contrôles comptables et fiscaux.",
    description: "Nous digitalisons le suivi des documents, validations, échéances et anomalies pour faciliter la coordination avec les professionnels habilités.",
    image: photos.workflow,
    imageAlt: "Pièces comptables et fiscales en cours de vérification",
    problems: ["Pièces reçues par plusieurs canaux", "Relances manuelles", "Échéances peu visibles", "Anomalies suivies par messages"],
    objectives: ["Centraliser les demandes", "Automatiser les rappels", "Tracer les contrôles", "Partager l’avancement"],
    deliverables: ["Workflow de collecte", "Échéancier partagé", "Tableau des anomalies", "Guide d’utilisation"],
    examples: ["Collecte mensuelle", "Rappels automatiques", "Suivi des écarts documentaires"],
    related: [{ label: "Organisation comptable", href: "/conseil-accompagnement/conseil-comptable" }, { label: "Échéances fiscales", href: "/conseil-accompagnement/conseil-fiscal" }],
    primaryLabel: "Digitaliser mon suivi",
    whatsappMessage: whatsappMessages.digitalisation,
    seoTitle: "Digitalisation du suivi comptable et fiscal au Maroc",
    seoDescription: "Digitalisation de la collecte, des échéances et des contrôles comptables et fiscaux des PME.",
  }),
  detail({
    path: "digitalisation/outils-gestion-management",
    eyebrow: "Digitalisation · Outils de gestion",
    title: "Choisir un outil adapté à votre entreprise, pas l’inverse.",
    description: "Nous traduisons vos besoins en critères concrets, comparons les options et accompagnons le paramétrage et l’adoption.",
    image: photos.operations,
    imageAlt: "Équipe utilisant des ordinateurs dans un espace de travail organisé",
    problems: ["Outils sous-utilisés", "Abonnements multipliés", "Fonctions mal adaptées", "Équipes peu formées"],
    objectives: ["Formaliser les usages", "Comparer les solutions", "Configurer les fonctions utiles", "Accompagner la prise en main"],
    deliverables: ["Cahier des besoins", "Grille de comparaison", "Paramétrage cible", "Guide d’adoption"],
    examples: ["Outil de suivi commercial", "Gestion de tâches", "Solution documentaire ou reporting"],
    related: [{ label: "Automatisation & ERP", href: "/digitalisation/automatisation-integration-erp" }, { label: "Formation IA", href: "/formation/gestion-intelligence-artificielle" }],
    primaryLabel: "Cadrer mon besoin outil",
    whatsappMessage: whatsappMessages.digitalisation,
    seoTitle: "Outils de gestion et de management pour PME au Maroc",
    seoDescription: "Cadrage, sélection, paramétrage et adoption d’outils de gestion adaptés aux PME marocaines.",
  }),
];

const pilotageDetails = [
  detail({
    path: "gestion-organisation/diagnostic-organisationnel-iso",
    eyebrow: "Pilotage & organisation · Diagnostic ISO",
    title: "Identifier les blocages organisationnels et les écarts ISO prioritaires.",
    description: "Le diagnostic croise organisation, processus, risques, documentation et exigences ISO 9001, 14001 ou 45001 selon votre objectif.",
    image: "/photos/services/diagnostic-iso.webp",
    imageAlt: "Réunion de diagnostic organisationnel et ISO",
    problems: ["Dysfonctionnements inexpliqués", "Projet ISO sans départ clair", "Risques peu hiérarchisés", "Actions dispersées"],
    objectives: ["Établir un état des lieux", "Mesurer les écarts ISO", "Prioriser les risques", "Construire une feuille de route"],
    deliverables: ["Rapport de diagnostic", "Matrice des écarts", "Priorités 30/60/90 jours", "Feuille de route ISO"],
    examples: ["Diagnostic organisationnel", "Gap analysis ISO 9001", "Diagnostic intégré QSE"],
    related: [{ label: "Accompagnement ISO", href: "/accompagnement-iso" }, { label: "Risques & maîtrise", href: "/gestion-organisation/risques-maitrise-operationnelle" }],
    primaryLabel: "Demander le diagnostic 180° offert",
    whatsappMessage: whatsappMessages.diagnostic,
    seoTitle: "Diagnostic organisationnel et ISO au Maroc",
    seoDescription: "Diagnostic organisationnel et analyse des écarts ISO 9001, 14001 ou 45001 pour les PME.",
  }),
  detail({
    path: "gestion-organisation/processus-responsabilites",
    eyebrow: "Pilotage & organisation · Processus",
    title: "Clarifier les processus, les rôles et les décisions.",
    description: "Nous cartographions le fonctionnement réel, clarifions les interfaces et attribuons les responsabilités nécessaires.",
    image: photos.process,
    imageAlt: "Équipe construisant un processus sur un tableau blanc",
    problems: ["Responsabilités ambiguës", "Doublons entre services", "Décisions non attribuées", "Dépendance à quelques personnes"],
    objectives: ["Cartographier les flux", "Définir les pilotes", "Clarifier qui décide", "Réduire les ruptures"],
    deliverables: ["Cartographie des processus", "Fiches processus", "Matrice RACI", "Plan d’amélioration"],
    examples: ["Processus commande-livraison", "Répartition des responsabilités", "Circuit de validation"],
    related: [{ label: "Automatisation & ERP", href: "/digitalisation/automatisation-integration-erp" }, { label: "Documentation & conformité", href: "/gestion-organisation/documentation-conformite" }],
    primaryLabel: "Clarifier mon organisation",
    whatsappMessage: whatsappMessages.organisation,
    seoTitle: "Processus et responsabilités en entreprise au Maroc",
    seoDescription: "Cartographie des processus, matrice RACI et clarification des responsabilités pour les PME.",
  }),
  detail({
    path: "gestion-organisation/documentation-conformite",
    eyebrow: "Pilotage & organisation · Conformité",
    title: "Construire une documentation utile, maîtrisée et conforme.",
    description: "Nous organisons les procédures, preuves et règles documentaires nécessaires au fonctionnement, à la conformité et aux audits.",
    image: "/photos/services/documentation.webp",
    imageAlt: "Dossiers classés représentant la documentation et la conformité",
    problems: ["Procédures obsolètes", "Modèles dispersés", "Versions non maîtrisées", "Preuves difficiles à retrouver"],
    objectives: ["Définir l’architecture documentaire", "Rédiger avec le terrain", "Maîtriser les versions", "Relier documents et exigences"],
    deliverables: ["Liste maîtresse", "Procédures", "Modèles de preuves", "Règles documentaires"],
    examples: ["Procédure achats", "Gestion des versions", "Dossier de conformité"],
    related: [{ label: "Organisation numérique", href: "/digitalisation/organisation-numerique-documents" }, { label: "ISO 9001", href: "/accompagnement-iso/iso-9001" }],
    primaryLabel: "Structurer ma documentation",
    whatsappMessage: whatsappMessages.organisation,
    seoTitle: "Documentation et conformité d’entreprise au Maroc",
    seoDescription: "Procédures, preuves, maîtrise documentaire et conformité pour les PME et systèmes ISO.",
  }),
  detail({
    path: "gestion-organisation/risques-maitrise-operationnelle",
    eyebrow: "Pilotage & organisation · Risques",
    title: "Prévenir les incidents et sécuriser les opérations critiques.",
    description: "Nous identifions les risques, évaluons leurs impacts et mettons en place des mesures de maîtrise suivies.",
    image: "/photos/services/risques.webp",
    imageAlt: "Professionnel équipé pour la maîtrise des risques opérationnels",
    problems: ["Risques non formalisés", "Prévention non suivie", "Incidents répétitifs", "Plans d’urgence incomplets"],
    objectives: ["Identifier les risques", "Évaluer leurs impacts", "Définir les mesures", "Suivre incidents et actions"],
    deliverables: ["Cartographie des risques", "Plan de maîtrise", "Registre incidents", "Indicateurs de suivi"],
    examples: ["Risques opérationnels", "Analyse d’incident", "Plan d’urgence"],
    related: [{ label: "ISO 45001", href: "/accompagnement-iso/iso-45001" }, { label: "Audit interne", href: "/gestion-organisation/audit-interne-certification" }],
    primaryLabel: "Évaluer mes risques",
    whatsappMessage: whatsappMessages.organisation,
    seoTitle: "Risques et maîtrise opérationnelle au Maroc",
    seoDescription: "Cartographie des risques, plans de maîtrise et suivi des incidents pour les entreprises au Maroc.",
  }),
  detail({
    path: "gestion-organisation/tableaux-de-bord-kpi",
    eyebrow: "Pilotage & organisation · KPI",
    title: "Piloter les résultats avec peu d’indicateurs, mais les bons.",
    description: "Nous relions objectifs, KPI, responsabilités et plans d’action dans des routines de pilotage simples.",
    image: "/photos/services/kpi.webp",
    imageAlt: "Tableau de bord affichant les indicateurs de performance KPI",
    problems: ["Trop d’indicateurs", "Calculs non partagés", "Réunions sans décisions", "Plans d’action oubliés"],
    objectives: ["Choisir les bons KPI", "Formaliser les calculs", "Installer les revues", "Tracer décisions et actions"],
    deliverables: ["Fiches KPI", "Tableau de bord", "Trame de revue", "Registre des décisions"],
    examples: ["Comité mensuel", "KPI processus", "Plan de progrès multi-services"],
    related: [{ label: "Tableaux de bord automatisés", href: "/digitalisation/tableaux-de-bord-automatises" }, { label: "Processus", href: "/gestion-organisation/processus-responsabilites" }],
    primaryLabel: "Améliorer mon pilotage",
    whatsappMessage: whatsappMessages.organisation,
    seoTitle: "Tableaux de bord et KPI de pilotage au Maroc",
    seoDescription: "Définition des KPI, tableaux de bord, revues de performance et plans d’action pour PME.",
  }),
  detail({
    path: "gestion-organisation/audit-interne-certification",
    eyebrow: "Pilotage & organisation · Audit interne",
    title: "Vérifier le système et préparer la certification sans surprise.",
    description: "Nous réalisons l’audit interne, accompagnons le traitement des écarts et préparons vos équipes à l’audit de certification.",
    image: "/photos/services/audit-interne.webp",
    imageAlt: "Documents de contrôle utilisés pour un audit interne",
    problems: ["Programme d’audit incomplet", "Écarts mal analysés", "Preuves dispersées", "Équipes peu préparées"],
    objectives: ["Évaluer l’application du système", "Identifier les écarts", "Traiter les causes", "Préparer l’audit externe"],
    deliverables: ["Programme d’audit", "Rapport d’audit interne", "Plan d’actions", "Audit blanc"],
    examples: ["Audit ISO 9001", "Audit intégré QSE", "Audit blanc"],
    related: [{ label: "Accompagnement ISO", href: "/accompagnement-iso" }, { label: "Documentation", href: "/gestion-organisation/documentation-conformite" }],
    primaryLabel: "Planifier un audit interne",
    whatsappMessage: whatsappMessages.iso,
    seoTitle: "Audit interne ISO et préparation certification au Maroc",
    seoDescription: "Audit interne ISO 9001, 14001 et 45001, traitement des écarts et audit blanc au Maroc.",
    faq: [
      { question: "LIDA délivre-t-elle la certification ?", answer: "Non. La certification est délivrée par un organisme indépendant." },
      { question: "Pouvez-vous auditer un système intégré ?", answer: "Oui. Le programme peut combiner ISO 9001, ISO 14001 et ISO 45001 selon le périmètre." },
      { question: "Que se passe-t-il après l’audit ?", answer: "Les écarts deviennent des actions avec responsables, délais et vérification d’efficacité." },
    ],
  }),
  detail({
    path: "gestion-organisation/pilotage-iso-qse-smq-externalise",
    eyebrow: "Pilotage & organisation · Management externalisé",
    title: "Maintenir votre système ISO ou QSE actif toute l’année.",
    description: "LIDA appuie le pilotage de votre SMQ ou système QSE : calendrier, indicateurs, audits, actions et revues.",
    image: photos.management,
    imageAlt: "Équipe de management réunie autour de documents et ordinateurs",
    problems: ["Système actif avant l’audit seulement", "Responsable QSE surchargé", "Actions en retard", "Revues non préparées"],
    objectives: ["Planifier les obligations", "Animer les actions", "Préparer audits et revues", "Maintenir l’amélioration"],
    deliverables: ["Calendrier annuel", "Reporting SMQ ou QSE", "Suivi des actions", "Dossiers de revue"],
    examples: ["Appui mensuel SMQ", "Coordination QSE", "Préparation de la revue de direction"],
    related: [{ label: "Audit interne", href: "/gestion-organisation/audit-interne-certification" }, { label: "Accompagnement ISO", href: "/accompagnement-iso" }],
    primaryLabel: "Étudier un pilotage externalisé",
    whatsappMessage: whatsappMessages.iso,
    seoTitle: "Pilotage ISO QSE et SMQ externalisé au Maroc",
    seoDescription: "Pilotage externalisé des systèmes ISO, QSE et SMQ : calendrier, KPI, audits, actions et revues.",
  }),
];

function parentPage(seed: Omit<ServicePageData, "steps" | "practicalCase">): ServicePageData {
  return {
    ...seed,
    steps: sharedSteps,
    practicalCase: {
      context: illustrativeContext,
      situation: "Une entreprise souhaite structurer une priorité devenue difficile à piloter.",
      problem: seed.problems.slice(0, 2).join(" et ").toLowerCase() + ".",
      solution: `LIDA intervient pour ${seed.objectives.slice(0, 2).join(" et ").toLowerCase()}.`,
      deliverables: seed.deliverables.slice(0, 3),
      result: `Le cadre proposé vise ${seed.benefits.slice(0, 2).join(" et ").toLowerCase()}.`,
    },
  };
}

const conseilParent = parentPage({
  path: "conseil-accompagnement", eyebrow: "Conseil & accompagnement", title: "Mieux préparer et suivre les obligations de votre entreprise.",
  description: "Nous vous aidons à préparer, organiser et suivre vos obligations administratives, comptables, fiscales et juridiques.",
  image: "/photos/services/conseil.webp", imageAlt: "Réunion de conseil et d’accompagnement d’une PME",
  problems: ["Échéances difficiles à suivre", "Documents dispersés", "Informations incomplètes", "Interlocuteurs multiples"],
  objectives: ["Organiser les informations", "Anticiper les échéances", "Préparer les dossiers", "Coordonner les professionnels"],
  deliverables: ["État des lieux", "Calendrier", "Dossiers organisés", "Points de vigilance"],
  benefits: ["Échéances maîtrisées", "Informations accessibles", "Décisions préparées", "Coordination facilitée"],
  audience: ["Dirigeants de PME", "Entrepreneurs", "Créateurs d’entreprise", "Services administratifs"],
  examples: ["Suivi comptable", "Préparation fiscale", "Cadrage juridique"],
  faq: [
    { question: "Intervenez-vous avec des professionnels habilités ?", answer: "Oui. Certaines prestations sont réalisées en collaboration avec des professionnels habilités, selon la nature de la mission." },
    { question: "L’accompagnement convient-il à une petite entreprise ?", answer: "Oui. Le périmètre et les outils sont adaptés à chaque entreprise." },
    { question: "Comment démarrer ?", answer: "Un premier échange permet de définir les priorités et les documents disponibles." },
  ],
  related: [{ label: "Digitaliser le suivi", href: "/digitalisation/suivi-comptable-fiscal" }, { label: "Structurer le pilotage", href: "/gestion-organisation" }],
  children: [
    { label: "Organisation et fiabilisation comptable", description: "Organiser les pièces, contrôles et échanges mensuels avec votre professionnel comptable.", href: "/conseil-accompagnement/conseil-comptable" },
    { label: "Anticipation et suivi des échéances fiscales", description: "Anticiper les échéances, rassembler les justificatifs et préparer les points à faire valider.", href: "/conseil-accompagnement/conseil-fiscal" },
    { label: "Structuration des dossiers administratifs, contractuels et juridiques", description: "Centraliser documents et échéances avant de transmettre un dossier complet au professionnel habilité.", href: "/conseil-accompagnement/conseil-juridique" },
  ],
  primaryLabel: "Présenter mon besoin", whatsappMessage: whatsappMessages.diagnostic,
  seoTitle: "Organisation comptable, fiscale et juridique au Maroc", seoDescription: "Préparation et suivi des dossiers comptables, des échéances fiscales et des documents juridiques des entreprises au Maroc.",
});

const digitalParent = parentPage({
  path: "digitalisation", eyebrow: "Digitalisation & automatisation", title: "Digitaliser ce qui ralentit réellement votre activité.",
  description: "Nous digitalisons et automatisons les tâches qui ralentissent réellement votre activité.",
  image: "/photos/services/digitalisation.webp", imageAlt: "Équipe collaborant avec des outils numériques en entreprise",
  problems: ["Saisies multiples", "Fichiers dispersés", "Reporting chronophage", "Outils déconnectés"],
  objectives: ["Fluidifier les processus", "Centraliser les données", "Automatiser les tâches", "Faciliter les décisions"],
  deliverables: ["Cartographie des flux", "Cahier des besoins", "Workflows", "Tableaux de bord et guides"],
  benefits: ["Temps réduit", "Moins d’erreurs", "Données fiables", "Meilleure visibilité"],
  audience: ["PME", "Administration", "Finance", "Équipes opérationnelles"],
  examples: ["Organisation documentaire", "Intégration ERP", "Reporting automatisé"], faq: defaultFaq,
  related: [{ label: "Processus & responsabilités", href: "/gestion-organisation/processus-responsabilites" }, { label: "Formation IA", href: "/formation/gestion-intelligence-artificielle" }],
  children: [
    { label: "Organisation numérique des documents", description: "Définir où classer, comment nommer, qui accède et quelle version conserver.", href: "/digitalisation/organisation-numerique-documents" },
    { label: "Automatisation et intégration ERP", description: "Cartographier les flux, supprimer les ressaisies et tester un processus cible avant déploiement.", href: "/digitalisation/automatisation-integration-erp" },
    { label: "Tableaux de bord automatisés", description: "Fiabiliser les sources et actualiser les KPI sans reconstruire le reporting à chaque période.", href: "/digitalisation/tableaux-de-bord-automatises" },
    { label: "Digitalisation du suivi comptable et fiscal", description: "Centraliser les demandes, rappels, pièces reçues et anomalies avant les échéances.", href: "/digitalisation/suivi-comptable-fiscal" },
    { label: "Outils de gestion et de management adaptés", description: "Comparer les solutions à partir des usages réels, puis accompagner paramétrage et adoption.", href: "/digitalisation/outils-gestion-management" },
  ],
  primaryLabel: "Demander un diagnostic digital", whatsappMessage: whatsappMessages.digitalisation,
  seoTitle: "Digitalisation et automatisation des PME au Maroc", seoDescription: "Organisation numérique, ERP, automatisation, tableaux de bord et outils de gestion pour PME.",
});

const pilotageParent = parentPage({
  path: "gestion-organisation", eyebrow: "Pilotage & organisation", title: "Mieux décider, mieux agir et mieux suivre les résultats.",
  description: "Nous structurons le fonctionnement de votre entreprise et mettons en place les outils nécessaires pour mieux décider, agir et suivre les résultats.",
  image: "/photos/services/pilotage.webp", imageAlt: "Analyse d’indicateurs pour le pilotage d’une entreprise",
  problems: ["Rôles mal définis", "Procédures peu appliquées", "Risques non maîtrisés", "ISO difficile à maintenir"],
  objectives: ["Structurer le fonctionnement", "Clarifier les responsabilités", "Maîtriser les risques", "Piloter les résultats et l’ISO"],
  deliverables: ["Processus", "Responsabilités", "Documentation", "KPI et routines"],
  benefits: ["Coordination renforcée", "Continuité", "Risques visibles", "ISO intégré au quotidien"],
  audience: ["PME en croissance", "Entreprises familiales", "Structures multi-activités", "Organisations certifiées"],
  examples: ["Diagnostic organisationnel et ISO", "Audit interne", "Pilotage QSE externalisé"], faq: defaultFaq,
  related: [{ label: "Digitalisation", href: "/digitalisation" }, { label: "Accompagnement ISO", href: "/accompagnement-iso" }],
  children: [
    { label: "Diagnostic organisationnel", description: "Établir un état de départ, mesurer les écarts et ordonner la feuille de route.", href: "/gestion-organisation/diagnostic-organisationnel-iso" },
    { label: "Processus & responsabilités", description: "Représenter les flux réels et préciser qui prépare, décide, valide et contrôle.", href: "/gestion-organisation/processus-responsabilites" },
    { label: "Tableaux de bord & KPI", description: "Choisir les indicateurs utiles et installer des revues qui débouchent sur des décisions tracées.", href: "/gestion-organisation/tableaux-de-bord-kpi" },
    { label: "Audit interne & préparation à la certification", description: "Vérifier l’application du système, analyser les écarts et préparer l’audit indépendant.", href: "/gestion-organisation/audit-interne-certification" },
    { label: "Pilotage ISO, QSE & SMQ externalisé", description: "Maintenir le calendrier, les indicateurs, les actions, les audits et les revues tout au long de l’année.", href: "/gestion-organisation/pilotage-iso-qse-smq-externalise" },
  ],
  primaryLabel: "Demander un diagnostic organisationnel & ISO", whatsappMessage: whatsappMessages.organisation,
  seoTitle: "Pilotage, organisation et ISO au Maroc", seoDescription: "Diagnostic, processus, risques, KPI, audit et pilotage ISO QSE externalisé au Maroc.",
});

const isoParent = parentPage({
  path: "accompagnement-iso", eyebrow: "Pilotage & organisation · ISO", title: "Préparer votre certification avec un système utile au terrain.",
  description: "Du diagnostic à l’audit blanc, LIDA accompagne vos équipes sur ISO 9001, ISO 14001 et ISO 45001.",
  image: "/photos/services/accompagnement-iso.webp", imageAlt: "Équipe en réunion pour préparer une certification ISO",
  problems: ["Exigences difficiles", "Documentation déconnectée", "Échéance de certification", "Équipes peu sensibilisées"],
  objectives: ["Évaluer les écarts", "Déployer le système", "Former les acteurs", "Préparer la certification"],
  deliverables: ["Rapport d’écarts", "Plan d’action", "Documentation", "Audit interne et audit blanc"],
  benefits: ["Projet maîtrisé", "Équipes impliquées", "Documents utiles", "Certification préparée"],
  audience: ["PME", "Industries", "Services", "Organisations certifiées ou en préparation"],
  examples: ["ISO 9001", "ISO 14001", "ISO 45001"],
  faq: [
    { question: "LIDA délivre-t-elle la certification ?", answer: "Non. La certification est délivrée par un organisme certificateur indépendant." },
    { question: "Quelles normes accompagnez-vous ?", answer: "ISO 9001, ISO 14001 et ISO 45001, séparément ou dans un système intégré QSE." },
    { question: "Combien de temps faut-il ?", answer: "Le diagnostic initial permet de définir un calendrier selon la taille et la maturité de l’organisation." },
  ],
  related: [{ label: "Diagnostic organisationnel & ISO", href: "/gestion-organisation/diagnostic-organisationnel-iso" }, { label: "Audit interne", href: "/gestion-organisation/audit-interne-certification" }],
  children: [
    { label: "ISO 9001 · Qualité", description: "Relier satisfaction client, processus, indicateurs et traitement des non-conformités.", href: "/accompagnement-iso/iso-9001" },
    { label: "ISO 14001 · Environnement", description: "Structurer aspects environnementaux, conformité, maîtrise opérationnelle et amélioration.", href: "/accompagnement-iso/iso-14001" },
    { label: "ISO 45001 · Santé et sécurité", description: "Organiser l’évaluation des risques SST, la prévention et la participation des travailleurs.", href: "/accompagnement-iso/iso-45001" },
  ],
  primaryLabel: "Demander un diagnostic ISO", whatsappMessage: whatsappMessages.iso,
  seoTitle: "Accompagnement ISO 9001 14001 45001 au Maroc", seoDescription: "Diagnostic, documentation, formation et audit interne ISO au Maroc.",
});

const standards = [
  { code: "9001", name: "qualité", purpose: "la satisfaction client et la maîtrise des processus", image: "/photos/services/iso-9001.webp", alt: "Espace de travail structuré pour un système qualité ISO 9001", benefits: ["Satisfaction client", "Processus maîtrisés", "Écarts traités", "Amélioration continue"] },
  { code: "14001", name: "environnement", purpose: "les impacts environnementaux et les obligations de conformité", image: "/photos/services/iso-14001.webp", alt: "Installations énergétiques au coucher du soleil pour ISO 14001", benefits: ["Impacts priorisés", "Obligations suivies", "Consommations maîtrisées", "Performance mesurée"] },
  { code: "45001", name: "santé et sécurité", purpose: "les risques SST et la prévention des accidents", image: "/photos/services/iso-45001.webp", alt: "Professionnel équipé pour la sécurité au travail ISO 45001", benefits: ["Risques SST évalués", "Prévention suivie", "Travailleurs consultés", "Culture sécurité"] },
] as const;

const isoPages = standards.map((standard) => detail({
  path: "accompagnement-iso/iso-" + standard.code,
  eyebrow: "Pilotage & organisation · ISO " + standard.code,
  title: "Faire de l’ISO " + standard.code + " un système de management vivant.",
  description: "LIDA accompagne votre entreprise pour structurer " + standard.purpose + ", du diagnostic à l’audit blanc.",
  image: standard.image, imageAlt: standard.alt,
  problems: ["Exigences difficiles", "Pratiques peu formalisées", "Preuves dispersées", "Audit à préparer"],
  objectives: ["Comprendre ISO " + standard.code, "Analyser les écarts", "Déployer les pratiques", "Préparer la certification"],
  deliverables: ["Diagnostic ISO", "Plan d’action", "Documentation et formation", "Audit interne"],
  benefits: [...standard.benefits],
  audience: ["PME", "Industries", "Services", "Organisations visant la certification"],
  examples: ["Diagnostic initial", "Mise en œuvre", "Audit blanc"],
  related: [{ label: "Audit interne", href: "/gestion-organisation/audit-interne-certification" }, { label: "Formation ISO " + standard.code, href: "/formation/iso-" + standard.code }],
  primaryLabel: "Demander un diagnostic ISO " + standard.code, whatsappMessage: whatsappMessages.iso,
  seoTitle: "Accompagnement ISO " + standard.code + " au Maroc", seoDescription: "Diagnostic, plan d’action, documentation et audit interne ISO " + standard.code + " au Maroc.",
  faq: [
    { question: "LIDA délivre-t-elle le certificat ?", answer: "Non. La certification est réalisée par un organisme indépendant." },
    { question: "Peut-on intégrer plusieurs normes ?", answer: "Oui. ISO 9001, 14001 et 45001 peuvent être organisées dans un système intégré." },
    { question: "Comment démarrer ?", answer: "Un diagnostic initial mesure les écarts et définit le plan d’action." },
  ],
}));

const pages: ServicePageData[] = [conseilParent, ...conseilDetails, digitalParent, ...digitalDetails, pilotageParent, ...pilotageDetails, isoParent, ...isoPages];

export const servicePages = Object.fromEntries(pages.map((page) => [page.path, page]));
export const servicePaths = pages.map((page) => page.path);
