export type OfferVisualKind = "workflow" | "checklist" | "dashboard" | "calendar" | "matrix";

export type ServiceOfferDetail = {
  inputs: string[];
  included: string[];
  excluded: string[];
  steps: { title: string; text: string }[];
  visual: {
    kind: OfferVisualKind;
    kicker: string;
    title: string;
    items: { label: string; value: string }[];
  };
  ctaTitle: string;
  ctaText: string;
};

const offer = (data: ServiceOfferDetail) => data;

export const serviceOffers: Record<string, ServiceOfferDetail> = {
  "conseil-accompagnement/conseil-comptable": offer({
    inputs: ["Pièces et canaux de collecte actuels", "Calendrier de transmission", "Interlocuteurs internes et cabinet comptable"],
    included: ["Diagnostic du cycle mensuel", "Organisation des responsabilités et relances", "Outils de suivi et passation aux équipes"],
    excluded: ["Tenue ou arrêté des comptes", "Validation des écritures et déclarations", "Missions réservées au professionnel comptable habilité"],
    steps: [
      { title: "Reconstituer le cycle", text: "Identifier qui produit, reçoit, contrôle et transmet chaque famille de pièces." },
      { title: "Repérer les ruptures", text: "Vérifier les canaux, dates, pièces manquantes et anomalies qui retardent le dossier." },
      { title: "Organiser le mois", text: "Créer classement, calendrier, checklist, règles de relance et responsabilités." },
      { title: "Tester une clôture", text: "Simuler un cycle mensuel puis ajuster les outils avant leur prise en main par l’équipe." },
    ],
    visual: { kind: "checklist", kicker: "Aperçu illustratif", title: "Contrôle du dossier mensuel", items: [{ label: "Factures clients", value: "Reçues" }, { label: "Achats & frais", value: "À compléter" }, { label: "Banque & caisse", value: "Contrôlés" }, { label: "Transmission", value: "Planifiée" }] },
    ctaTitle: "Obtenez un cadrage de votre organisation comptable.",
    ctaText: "Le premier échange précise les flux, les responsabilités et les outils nécessaires avant toute proposition.",
  }),
  "conseil-accompagnement/conseil-fiscal": offer({
    inputs: ["Calendrier et obligations déjà suivis", "Liste des justificatifs disponibles", "Questions à soumettre au professionnel habilité"],
    included: ["Organisation de l’échéancier", "Préparation et contrôle documentaire", "Coordination des points à faire valider"],
    excluded: ["Consultation fiscale réglementée", "Établissement ou validation des déclarations", "Arbitrage juridique ou fiscal réservé"],
    steps: [
      { title: "Inventorier", text: "Rassembler les échéances, responsables, justificatifs et validations actuellement utilisés." },
      { title: "Qualifier les risques", text: "Distinguer les manques documentaires des questions nécessitant un avis habilité." },
      { title: "Construire l’échéancier", text: "Fixer les dates de préparation, contrôle, validation et transmission." },
      { title: "Installer le suivi", text: "Tester le dossier sur une échéance et transmettre la méthode aux responsables." },
    ],
    visual: { kind: "calendar", kicker: "Aperçu illustratif", title: "Échéancier de préparation", items: [{ label: "J-20", value: "Collecte" }, { label: "J-12", value: "Contrôle" }, { label: "J-7", value: "Validation externe" }, { label: "J-2", value: "Dossier prêt" }] },
    ctaTitle: "Préparez vos prochaines échéances fiscales.",
    ctaText: "Recevez un cadrage distinguant l’organisation interne des points à confier au professionnel habilité.",
  }),
  "conseil-accompagnement/conseil-juridique": offer({
    inputs: ["Statuts, procès-verbaux et contrats disponibles", "Échéances connues", "Objet précis de la demande juridique"],
    included: ["Inventaire et classement du dossier", "Préparation d’un échéancier", "Constitution des pièces pour le professionnel du droit"],
    excluded: ["Consultation ou représentation juridique", "Rédaction d’actes réservés", "Authentification ou formalités notariales"],
    steps: [
      { title: "Inventorier les pièces", text: "Recenser les documents sociaux, contractuels et délégations existants." },
      { title: "Qualifier la demande", text: "Séparer l’organisation documentaire des questions relevant du droit." },
      { title: "Constituer le dossier", text: "Ordonner les faits, versions, pièces manquantes et échéances utiles." },
      { title: "Préparer la transmission", text: "Remettre un dossier lisible au professionnel habilité et suivre les compléments." },
    ],
    visual: { kind: "matrix", kicker: "Aperçu illustratif", title: "Registre des documents juridiques", items: [{ label: "Statuts", value: "Version identifiée" }, { label: "PV", value: "Classement annuel" }, { label: "Contrats", value: "Échéances suivies" }, { label: "Avis juridique", value: "À solliciter" }] },
    ctaTitle: "Cadrez votre dossier avant consultation.",
    ctaText: "L’échange permet d’identifier les pièces à organiser et l’intervention professionnelle à prévoir.",
  }),
  "digitalisation/organisation-numerique-documents": offer({
    inputs: ["Échantillon de dossiers et arborescences", "Profils d’utilisateurs", "Contraintes de partage et d’archivage"],
    included: ["Analyse des usages documentaires", "Règles de nommage, version et accès", "Test sur un périmètre pilote"],
    excluded: ["Numérisation massive des archives", "Fourniture d’un abonnement logiciel", "Cybersécurité ou hébergement non cadrés"],
    steps: [
      { title: "Observer les recherches", text: "Repérer où les équipes créent, partagent, valident et retrouvent les fichiers." },
      { title: "Dessiner l’arborescence", text: "Définir dossiers, propriétaires, accès et règles de nommage par activité." },
      { title: "Migrer un pilote", text: "Classer un échantillon, traiter les doublons et vérifier les droits." },
      { title: "Passer la méthode", text: "Remettre le guide et accompagner les utilisateurs sur leurs premiers dossiers." },
    ],
    visual: { kind: "workflow", kicker: "Aperçu illustratif", title: "Cycle de vie d’un document", items: [{ label: "Créer", value: "Modèle validé" }, { label: "Nommer", value: "Règle commune" }, { label: "Partager", value: "Accès maîtrisé" }, { label: "Archiver", value: "Version conservée" }] },
    ctaTitle: "Faites diagnostiquer votre organisation documentaire.",
    ctaText: "Présentez vos dossiers actuels pour obtenir un périmètre de classement et de migration réaliste.",
  }),
  "digitalisation/automatisation-integration-erp": offer({
    inputs: ["Processus et outils actuels", "Échantillons de données", "Utilisateurs, validations et contraintes techniques"],
    included: ["Cartographie des flux et besoins", "Scénarios d’automatisation ou d’intégration", "Recette métier et accompagnement à l’adoption"],
    excluded: ["Licence ou abonnement éditeur", "Développement non prévu au cahier des besoins", "Reprise de données non qualifiée"],
    steps: [
      { title: "Suivre une transaction", text: "Tracer les données du devis jusqu’à la facture et relever chaque ressaisie." },
      { title: "Définir le flux cible", text: "Choisir les étapes, validations, données de référence et exceptions." },
      { title: "Prototyper", text: "Configurer un scénario prioritaire et préparer des jeux de tests neutres." },
      { title: "Recetter avec les métiers", text: "Vérifier les cas normaux et les erreurs avant transfert aux utilisateurs." },
    ],
    visual: { kind: "workflow", kicker: "Aperçu illustratif", title: "Flux commande-facturation", items: [{ label: "Devis", value: "Donnée source" }, { label: "Validation", value: "Règle tracée" }, { label: "Commande", value: "Sans ressaisie" }, { label: "Facture", value: "Contrôle final" }] },
    ctaTitle: "Cadrez votre projet ERP avant de choisir l’outil.",
    ctaText: "Recevez un premier cadrage des flux, intégrations, tests et responsabilités à prévoir.",
  }),
  "digitalisation/tableaux-de-bord-automatises": offer({
    inputs: ["Fichiers ou sources de données", "Décisions à éclairer", "KPI actuellement produits"],
    included: ["Définition et contrôle des KPI", "Prototype de tableau de bord", "Automatisation et guide d’actualisation"],
    excluded: ["Correction de données sources sans périmètre", "Licence d’un outil de BI", "Prévision garantie à partir de données incomplètes"],
    steps: [
      { title: "Cadrer les décisions", text: "Relier chaque indicateur à une question, un responsable et une fréquence." },
      { title: "Fiabiliser les sources", text: "Tester complétude, formats, doublons et règles de calcul." },
      { title: "Construire le prototype", text: "Assembler vues, filtres, alertes et contrôles sur un jeu représentatif." },
      { title: "Automatiser l’actualisation", text: "Documenter l’import, la vérification et la lecture avant transfert." },
    ],
    visual: { kind: "dashboard", kicker: "Aperçu illustratif", title: "Tableau de pilotage mensuel", items: [{ label: "Activité", value: "Tendance" }, { label: "Trésorerie", value: "Écart" }, { label: "Impayés", value: "À traiter" }, { label: "Actions", value: "3 ouvertes" }] },
    ctaTitle: "Évaluez vos besoins en tableau de bord.",
    ctaText: "Partagez vos sources et décisions attendues pour recevoir un cadrage du prototype et de l’automatisation.",
  }),
  "digitalisation/suivi-comptable-fiscal": offer({
    inputs: ["Liste des pièces attendues", "Canaux de collecte", "Échéances et personnes concernées"],
    included: ["Workflow de collecte et relance", "Échéancier et suivi des anomalies", "Configuration du support partagé retenu"],
    excluded: ["Tenue comptable ou déclaration fiscale", "Validation réglementée", "Archivage légal sans étude spécifique"],
    steps: [
      { title: "Cartographier la collecte", text: "Recenser les pièces, émetteurs, canaux, dates et contrôles nécessaires." },
      { title: "Définir les statuts", text: "Créer un langage commun : attendu, reçu, incomplet, validé et transmis." },
      { title: "Configurer les rappels", text: "Organiser les vues, notifications et responsabilités sans multiplier les outils." },
      { title: "Tester un mois", text: "Suivre un cycle complet puis corriger les règles avant généralisation." },
    ],
    visual: { kind: "checklist", kicker: "Aperçu illustratif", title: "Suivi partagé des pièces", items: [{ label: "Attendu", value: "24" }, { label: "Reçu", value: "19" }, { label: "À corriger", value: "3" }, { label: "À relancer", value: "2" }] },
    ctaTitle: "Digitalisez votre cycle de collecte.",
    ctaText: "Recevez un cadrage du workflow, des rappels et des contrôles à mettre en place.",
  }),
  "digitalisation/outils-gestion-management": offer({
    inputs: ["Usages et irritants prioritaires", "Outils et abonnements existants", "Contraintes d’accès, budget et adoption"],
    included: ["Cahier des usages", "Comparaison sur critères métier", "Paramétrage pilote et prise en main"],
    excluded: ["Achat de licence pour le client", "Développement sur mesure non cadré", "Garantie de compatibilité sans test"],
    steps: [
      { title: "Décrire les usages", text: "Transformer les demandes de fonctionnalités en tâches et décisions concrètes." },
      { title: "Établir les critères", text: "Pondérer simplicité, intégrations, droits, coût et maintien." },
      { title: "Tester les scénarios", text: "Comparer les solutions sur des cas représentatifs et documenter les limites." },
      { title: "Déployer le pilote", text: "Configurer le socle utile, former les utilisateurs et suivre l’adoption." },
    ],
    visual: { kind: "matrix", kicker: "Aperçu illustratif", title: "Grille de choix d’un outil", items: [{ label: "Usage prioritaire", value: "Couvert" }, { label: "Prise en main", value: "Simple" }, { label: "Intégrations", value: "À tester" }, { label: "Coût total", value: "À valider" }] },
    ctaTitle: "Choisissez votre outil sur des critères métier.",
    ctaText: "Décrivez vos usages pour recevoir un cadrage de comparaison et de pilote.",
  }),
  "gestion-organisation/diagnostic-organisationnel-iso": offer({
    inputs: ["Objectifs de direction", "Processus et documents disponibles", "Référentiel ISO éventuellement visé"],
    included: ["Entretiens et observation des pratiques", "Analyse des écarts et risques", "Feuille de route priorisée"],
    excluded: ["Certification ou décision de conformité", "Audit de certification", "Déploiement complet hors proposition"],
    steps: [
      { title: "Cadrer le diagnostic", text: "Définir activités, sites, référentiel, interlocuteurs et décisions attendues." },
      { title: "Croiser les preuves", text: "Comparer entretiens, pratiques, données et documents plutôt que les déclarations seules." },
      { title: "Qualifier les écarts", text: "Relier chaque constat à un risque, une exigence et un niveau de priorité." },
      { title: "Arbitrer la feuille de route", text: "Présenter les actions, dépendances, responsables et premières échéances." },
    ],
    visual: { kind: "matrix", kicker: "Aperçu illustratif", title: "Matrice de diagnostic", items: [{ label: "Processus", value: "À clarifier" }, { label: "Risques", value: "Partiels" }, { label: "Preuves", value: "Dispersées" }, { label: "Priorité", value: "30 jours" }] },
    ctaTitle: "Demandez votre Diagnostic 180° offert.",
    ctaText: "L’échange de qualification précise le périmètre organisationnel et ISO à examiner.",
  }),
  "gestion-organisation/processus-responsabilites": offer({
    inputs: ["Processus prioritaire", "Acteurs et validations actuels", "Exemples de dossiers ou transactions"],
    included: ["Cartographie du fonctionnement réel", "Clarification des décisions et rôles", "RACI et plan d’amélioration"],
    excluded: ["Réorganisation hiérarchique imposée", "Fiches de poste exhaustives hors périmètre", "Automatisation avant validation du flux"],
    steps: [
      { title: "Suivre le flux réel", text: "Reconstituer étapes, attentes, reprises et décisions sur des cas concrets." },
      { title: "Identifier les interfaces", text: "Repérer doublons, zones grises, dépendances et points de blocage." },
      { title: "Attribuer les rôles", text: "Définir pilote, contributeurs, validations et informations attendues." },
      { title: "Tester le processus cible", text: "Simuler plusieurs scénarios puis ajuster la cartographie et le RACI." },
    ],
    visual: { kind: "workflow", kicker: "Aperçu illustratif", title: "Processus commande-livraison", items: [{ label: "Commercial", value: "Prépare" }, { label: "Direction", value: "Valide" }, { label: "Opérations", value: "Exécute" }, { label: "Finance", value: "Contrôle" }] },
    ctaTitle: "Clarifiez un processus prioritaire.",
    ctaText: "Recevez un cadrage des acteurs, décisions et livrables nécessaires à la mission.",
  }),
  "gestion-organisation/documentation-conformite": offer({
    inputs: ["Documents et modèles existants", "Exigences applicables connues", "Responsables de création et validation"],
    included: ["Architecture et liste maîtresse", "Règles de création, version et diffusion", "Co-rédaction des documents prioritaires"],
    excluded: ["Avis juridique sur la conformité réglementaire", "Rédaction de tous les documents sans terrain", "Hébergement documentaire non prévu"],
    steps: [
      { title: "Inventorier", text: "Identifier documents actifs, doublons, versions et preuves associées." },
      { title: "Relier aux usages", text: "Vérifier qui applique chaque document, quand et pour quelle exigence." },
      { title: "Construire le système", text: "Définir liste maîtresse, modèles, approbation, diffusion et archivage." },
      { title: "Valider avec le terrain", text: "Tester les documents prioritaires et former leurs propriétaires." },
    ],
    visual: { kind: "checklist", kicker: "Aperçu illustratif", title: "Liste maîtresse documentaire", items: [{ label: "Procédure achats", value: "V3 applicable" }, { label: "Fiche contrôle", value: "V2 à valider" }, { label: "Modèle incident", value: "Propriétaire nommé" }, { label: "Archive", value: "Accès limité" }] },
    ctaTitle: "Structurez les documents réellement utiles.",
    ctaText: "Présentez votre documentation actuelle pour obtenir un périmètre de remise à plat priorisé.",
  }),
  "gestion-organisation/risques-maitrise-operationnelle": offer({
    inputs: ["Activités et situations dangereuses", "Incidents ou dysfonctionnements connus", "Mesures de maîtrise existantes"],
    included: ["Identification et hiérarchisation des risques", "Plan de maîtrise et responsabilités", "Suivi des incidents et actions"],
    excluded: ["Étude technique spécialisée non prévue", "Contrôle réglementaire par un organisme habilité", "Suppression garantie de tout risque"],
    steps: [
      { title: "Observer les situations", text: "Décrire activités, dangers, défaillances, personnes exposées et contrôles." },
      { title: "Évaluer", text: "Appliquer des critères partagés pour rendre les priorités explicites." },
      { title: "Choisir les mesures", text: "Préciser prévention, détection, réaction, responsable et preuve de contrôle." },
      { title: "Suivre l’efficacité", text: "Relier incidents, actions, indicateurs et réévaluation des risques." },
    ],
    visual: { kind: "matrix", kicker: "Aperçu illustratif", title: "Registre de maîtrise", items: [{ label: "Risque critique", value: "Action immédiate" }, { label: "Mesure existante", value: "À vérifier" }, { label: "Responsable", value: "Nommé" }, { label: "Contrôle", value: "Mensuel" }] },
    ctaTitle: "Évaluez vos risques opérationnels prioritaires.",
    ctaText: "Le cadrage précise les activités, incidents et mesures à examiner.",
  }),
  "gestion-organisation/tableaux-de-bord-kpi": offer({
    inputs: ["Objectifs et décisions de pilotage", "Indicateurs existants", "Rituels et responsables actuels"],
    included: ["Sélection et définition des KPI", "Tableau de bord et seuils", "Trame de revue et registre de décisions"],
    excluded: ["Automatisation technique non prévue", "Garantie de performance", "Production permanente des données par LIDA"],
    steps: [
      { title: "Relier objectif et décision", text: "Écarter les chiffres qui n’appellent ni analyse ni action." },
      { title: "Formaliser les KPI", text: "Définir formule, source, fréquence, seuil et propriétaire." },
      { title: "Construire la revue", text: "Organiser la lecture des écarts, décisions, actions et arbitrages." },
      { title: "Tester le rituel", text: "Animer une revue pilote et ajuster contenu, rythme et responsabilités." },
    ],
    visual: { kind: "dashboard", kicker: "Aperçu illustratif", title: "Revue de performance", items: [{ label: "KPI service", value: "Dans la cible" }, { label: "KPI délai", value: "Écart à analyser" }, { label: "Décision", value: "Attribuée" }, { label: "Prochaine revue", value: "Planifiée" }] },
    ctaTitle: "Évaluez votre dispositif de pilotage.",
    ctaText: "Recevez un cadrage des KPI, sources et rituels utiles à vos décisions.",
  }),
  "gestion-organisation/audit-interne-certification": offer({
    inputs: ["Référentiel et périmètre d’audit", "Documents et audits précédents", "Calendrier de certification envisagé"],
    included: ["Programme et préparation de l’audit interne", "Entretiens, vérifications et rapport", "Suivi des écarts et préparation des équipes"],
    excluded: ["Audit de certification", "Délivrance d’un certificat", "Garantie d’absence d’écart lors de l’audit externe"],
    steps: [
      { title: "Préparer le programme", text: "Définir critères, processus, personnes, preuves et échantillonnage." },
      { title: "Auditer l’application", text: "Croiser entretiens, observations, enregistrements et exigences." },
      { title: "Analyser les constats", text: "Rédiger les écarts factuellement et aider à rechercher leurs causes." },
      { title: "Préparer la suite", text: "Suivre les actions et vérifier que l’équipe sait présenter son système." },
    ],
    visual: { kind: "checklist", kicker: "Aperçu illustratif", title: "Programme d’audit interne", items: [{ label: "Critères", value: "Définis" }, { label: "Entretiens", value: "Planifiés" }, { label: "Preuves", value: "Échantillonnées" }, { label: "Actions", value: "À suivre" }] },
    ctaTitle: "Planifiez votre audit interne.",
    ctaText: "Précisez le référentiel, le périmètre et l’échéance pour recevoir une proposition d’intervention.",
  }),
  "gestion-organisation/pilotage-iso-qse-smq-externalise": offer({
    inputs: ["Périmètre du système", "Calendrier et actions en cours", "Rôles maintenus dans l’entreprise"],
    included: ["Rythme d’appui défini", "Suivi des KPI, actions, audits et revues", "Préparation des dossiers avec les responsables internes"],
    excluded: ["Remplacement de la responsabilité de direction", "Présence permanente non prévue", "Certification ou contrôle réglementaire"],
    steps: [
      { title: "Fixer la gouvernance", text: "Clarifier décisions internes, rythme d’appui et points d’escalade." },
      { title: "Construire le calendrier", text: "Planifier indicateurs, audits, actions, sensibilisations et revues." },
      { title: "Animer le suivi", text: "Préparer les points périodiques et relancer les responsables désignés." },
      { title: "Rendre compte", text: "Consolider les preuves et décisions sans déplacer la responsabilité de l’entreprise." },
    ],
    visual: { kind: "calendar", kicker: "Aperçu illustratif", title: "Cycle annuel du système", items: [{ label: "Mensuel", value: "KPI & actions" }, { label: "Trimestriel", value: "Revue ciblée" }, { label: "Semestriel", value: "Audit interne" }, { label: "Annuel", value: "Revue de direction" }] },
    ctaTitle: "Définissez votre besoin d’appui ISO ou QSE.",
    ctaText: "Le cadrage précise le rythme, les responsabilités conservées en interne et les livrables attendus.",
  }),
};

const isoOffers: Record<string, ServiceOfferDetail> = {
  "9001": offer({
    inputs: ["Processus et objectifs qualité", "Réclamations, indicateurs et preuves", "Périmètre de certification envisagé"],
    included: ["Diagnostic des exigences ISO 9001", "Structuration des processus et preuves", "Audit interne et préparation des équipes"],
    excluded: ["Délivrance de la certification", "Décision de conformité de l’organisme", "Garantie de résultat à l’audit externe"],
    steps: [{ title: "Définir le périmètre", text: "Relier contexte, clients, processus et objectifs qualité." }, { title: "Analyser les écarts", text: "Comparer pratiques et preuves aux exigences ISO 9001." }, { title: "Déployer le système", text: "Structurer processus, KPI, non-conformités et documents utiles." }, { title: "Préparer l’évaluation", text: "Auditer, traiter les écarts et entraîner les équipes à présenter leurs pratiques." }],
    visual: { kind: "workflow", kicker: "Aperçu illustratif", title: "Boucle qualité ISO 9001", items: [{ label: "Attentes client", value: "Identifiées" }, { label: "Processus", value: "Pilotés" }, { label: "Écarts", value: "Traités" }, { label: "Amélioration", value: "Suivie" }] },
    ctaTitle: "Préparez votre projet ISO 9001.", ctaText: "Recevez un cadrage du périmètre, des écarts à évaluer et des étapes de préparation."
  }),
  "14001": offer({
    inputs: ["Activités, sites et flux", "Consommations, déchets et incidents", "Obligations environnementales déjà suivies"],
    included: ["Analyse des aspects environnementaux", "Organisation de la conformité et de la maîtrise", "Audit interne et préparation des équipes"],
    excluded: ["Délivrance de la certification", "Étude réglementaire spécialisée non prévue", "Garantie de conformité par un tiers"],
    steps: [{ title: "Délimiter le système", text: "Identifier activités, sites, parties intéressées et enjeux environnementaux." }, { title: "Hiérarchiser les aspects", text: "Évaluer impacts, obligations, situations normales et urgences." }, { title: "Organiser la maîtrise", text: "Définir contrôles, responsabilités, objectifs, preuves et indicateurs." }, { title: "Vérifier la préparation", text: "Auditer l’application et traiter les écarts avant l’évaluation indépendante." }],
    visual: { kind: "matrix", kicker: "Aperçu illustratif", title: "Analyse environnementale", items: [{ label: "Énergie", value: "À mesurer" }, { label: "Déchets", value: "Filière suivie" }, { label: "Urgence", value: "Réponse testée" }, { label: "Conformité", value: "À vérifier" }] },
    ctaTitle: "Cadrez votre projet ISO 14001.", ctaText: "Précisez les sites, activités et enjeux pour recevoir une proposition de diagnostic."
  }),
  "45001": offer({
    inputs: ["Activités et postes de travail", "Risques, incidents et mesures existantes", "Périmètre de certification envisagé"],
    included: ["Diagnostic des exigences ISO 45001", "Évaluation des risques et organisation de la prévention", "Audit interne et préparation des équipes"],
    excluded: ["Délivrance de la certification", "Contrôles techniques réglementaires", "Garantie d’absence d’accident ou d’écart"],
    steps: [{ title: "Comprendre le travail", text: "Observer activités, travailleurs, dangers et situations d’urgence." }, { title: "Évaluer le système SST", text: "Comparer participation, risques, contrôles et preuves aux exigences." }, { title: "Renforcer la prévention", text: "Organiser mesures, consultations, incidents, objectifs et responsabilités." }, { title: "Préparer l’audit", text: "Vérifier l’application, traiter les écarts et préparer les acteurs." }],
    visual: { kind: "checklist", kicker: "Aperçu illustratif", title: "Plan de prévention SST", items: [{ label: "Dangers", value: "Identifiés" }, { label: "Mesures", value: "Attribuées" }, { label: "Consultation", value: "Planifiée" }, { label: "Urgence", value: "À tester" }] },
    ctaTitle: "Préparez votre projet ISO 45001.", ctaText: "Recevez un cadrage des activités, risques SST et étapes de mise en œuvre."
  }),
};

for (const [code, data] of Object.entries(isoOffers)) serviceOffers[`accompagnement-iso/iso-${code}`] = data;
