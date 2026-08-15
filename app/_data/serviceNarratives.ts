export type NarrativeSection = {
  title: string;
  description: string;
  listLabel?: string;
  items: string[];
  outcome?: string;
};

export type NarrativeBlock = {
  title: string;
  intro?: string;
  items: string[];
  outro?: string;
};

export type ServiceNarrative = {
  heroTitle: string;
  heroDescription: string;
  lead: string[];
  signals?: NarrativeBlock;
  sections: NarrativeSection[];
  tracking?: NarrativeBlock;
  method?: string[];
  deliverables: string[];
  notice?: { title: string; text: string };
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export const serviceNarratives: Record<string, ServiceNarrative> = {
  "conseil-accompagnement": {
    heroTitle: "Structurez vos obligations comptables, fiscales et juridiques avant qu'elles ne deviennent un risque",
    heroDescription: "Au Maroc, une grande partie des PME gère ses obligations comptables, fiscales et juridiques de façon dispersée : factures reçues par WhatsApp, justificatifs égarés entre plusieurs collaborateurs, échéances suivies « de mémoire », contrats introuvables au moment d'un contrôle ou d'un renouvellement.",
    lead: [
      "Ce fonctionnement informel n'est pas un problème de compétence : c'est un problème d'organisation. Or c'est précisément l'organisation qui détermine la qualité du dossier transmis à votre expert-comptable, la fiabilité de vos déclarations et votre capacité à réagir sereinement en cas de contrôle fiscal ou de litige contractuel.",
      "LIDA structure, centralise et fiabilise vos processus de collecte, de classement et de suivi documentaire — pour que vos interlocuteurs comptables, fiscaux et juridiques reçoivent des dossiers complets, dans les délais, et que votre direction garde une vision claire de ce qui est traité, en attente ou à risque.",
    ],
    signals: {
      title: "Signaux qui indiquent qu'une remise à plat est nécessaire",
      items: [
        "Les pièces justificatives (factures, bons de commande, relevés) sont dispersées entre email, WhatsApp et papier",
        "Des factures ou charges sont découvertes après la clôture, générant des régularisations évitables",
        "Aucun responsable clair n'est identifié pour chaque catégorie de pièces (achats, ventes, RH, banque)",
        "Les échéances fiscales (IS, TVA, IR, taxe professionnelle, CNSS) sont suivies sans calendrier formalisé",
        "Les dossiers transmis à l'expert-comptable ou au fiscaliste sont régulièrement incomplets",
        "Les contrats commerciaux, baux ou conventions ne sont pas centralisés ni datés pour leurs échéances de renouvellement",
        "La direction découvre les difficultés au moment de la clôture plutôt qu'en amont",
        "Aucune procédure écrite ne survit au départ ou à l'absence d'un collaborateur clé",
      ],
    },
    sections: [
      {
        title: "Organisation et fiabilisation comptable",
        description: "Nous structurons la chaîne de collecte, de vérification et de transmission des pièces nécessaires au traitement comptable, en cohérence avec le calendrier de votre expert-comptable.",
        listLabel: "Ce que comprend l'accompagnement",
        items: [
          "Cartographie des flux documentaires (achats, ventes, trésorerie, immobilisations)",
          "Définition d'un responsable par nature de pièce",
          "Mise en place d'un calendrier mensuel de clôture",
          "Structuration du classement des factures fournisseurs et clients",
          "Contrôles de cohérence entre pièces justificatives et opérations enregistrées",
          "Suivi actif des pièces manquantes avant échéance",
          "Constitution du dossier périodique attendu par le professionnel comptable",
          "Checklist de contrôle qualité avant transmission",
          "Point de coordination régulier avec votre expert-comptable",
        ],
        outcome: "Un dossier comptable structuré, transmis dans les délais, avec une traçabilité claire des pièces reçues, manquantes ou à corriger — réduisant le temps de traitement et le risque de régularisation tardive.",
      },
      {
        title: "Anticipation et suivi des échéances fiscales",
        description: "Nous mettons en place une organisation permettant d'identifier chaque échéance déclarative, de préparer en amont les éléments nécessaires et de suivre l'avancement jusqu'à la transmission finale.",
        listLabel: "Ce que comprend l'accompagnement",
        items: [
          "Construction d'un calendrier fiscal annuel propre à votre régime (IS, IR, TVA mensuelle ou trimestrielle, taxe professionnelle)",
          "Identification des pièces et justificatifs requis pour chaque déclaration",
          "Attribution d'un responsable par échéance",
          "Système d'alertes et de rappels en amont des dates limites",
          "Centralisation des justificatifs fiscaux (achats, charges déductibles, notes de frais)",
          "Tableau de suivi de l'avancement par échéance",
          "Préparation structurée des échanges avec votre fiscaliste ou expert-comptable",
          "Suivi des demandes de compléments d'information de l'administration",
          "Archivage organisé des déclarations et accusés définitifs",
        ],
        outcome: "Une anticipation réelle des échéances fiscales, moins de recherches de dernière minute, et une transmission d'informations plus fiable à votre conseil fiscal.",
      },
      {
        title: "Structuration des dossiers administratifs, contractuels et juridiques",
        description: "Nous aidons l'entreprise à centraliser, classer et suivre les documents administratifs, contractuels et juridiques indispensables à son fonctionnement et à sa sécurité juridique.",
        listLabel: "Dossiers concernés et accompagnement",
        items: [
          "Documents constitutifs de la société (statuts, K-bis équivalent, procès-verbaux)",
          "Contrats commerciaux avec clients et fournisseurs",
          "Contrats de prestation et de sous-traitance",
          "Autorisations, agréments et licences d'exploitation",
          "Polices d'assurance",
          "Dossiers des partenaires et actionnaires",
          "Contrats et dossiers relatifs aux collaborateurs",
          "Échéances de renouvellement contractuel",
          "Courriers officiels et mises en demeure éventuelles",
          "Documents à transmettre à votre conseil juridique",
          "Inventaire documentaire exhaustif",
          "Plan de classement structuré et sécurisé",
          "Identification des documents manquants ou obsolètes",
          "Suivi des dates d'échéance et de renouvellement",
          "Système d'alertes avant expiration contractuelle",
          "Définition des droits d'accès selon la confidentialité",
          "Préparation des dossiers avant transmission à votre avocat ou conseil juridique",
          "Coordination continue avec les professionnels concernés",
        ],
        outcome: "Des documents retrouvables en quelques minutes, des échéances contractuelles anticipées, et des dossiers prêts à être examinés par vos professionnels habilités en cas de besoin.",
      },
    ],
    tracking: {
      title: "Pilotage transversal des dossiers",
      intro: "Au-delà du classement, LIDA installe une méthode de suivi commune à l'ensemble de vos dossiers comptables, fiscaux et juridiques, précisant pour chacun :",
      items: ["Le responsable désigné", "Les documents attendus", "L'état d'avancement", "Les pièces manquantes", "La prochaine action à réaliser", "La personne à relancer", "L'échéance à respecter", "La date de validation ou de clôture"],
      outro: "Cette organisation donne à la direction une vision consolidée, sans dépendre de fichiers dispersés ou d'échanges informels.",
    },
    method: [
      "Diagnostic — Identification des dossiers, documents, intervenants, outils existants et principales zones de risque.",
      "Organisation — Définition du plan de classement, du calendrier fiscal et administratif, des responsabilités et des règles de suivi.",
      "Construction des outils — Création des checklists, tableaux de bord et procédures nécessaires.",
      "Mise en application — Accompagnement des équipes dans l'appropriation de la nouvelle organisation.",
      "Suivi et amélioration continue — Ajustement des outils selon les difficultés rencontrées et l'évolution réglementaire.",
    ],
    deliverables: ["Inventaire documentaire", "Plan de classement", "Calendrier fiscal et administratif annuel", "Checklist mensuelle de clôture", "Tableau des pièces manquantes", "Matrice des responsabilités", "Tableau de suivi des dossiers", "Procédure de collecte et de transmission", "Registre des contrats et échéances de renouvellement", "Guide d'utilisation pour vos équipes", "Feuille de route priorisée"],
    notice: { title: "Cadre d'intervention", text: "LIDA intervient sur l'organisation, la préparation, la coordination et le suivi de vos dossiers comptables, fiscaux et juridiques." },
    ctaTitle: "Reprenez le contrôle de vos dossiers avant la prochaine échéance",
    ctaText: "Présentez-nous vos documents, vos échéances et les difficultés rencontrées. Un premier diagnostic permet d'identifier les actions prioritaires et les outils adaptés à votre situation.",
    ctaLabel: "Demander un diagnostic",
  },

  digitalisation: {
    heroTitle: "Simplifiez vos opérations et éliminez les tâches qui n'apportent aucune valeur",
    heroDescription: "Fichiers Excel dispersés entre plusieurs collaborateurs, double saisie entre le devis, la commande et la facture, validations qui transitent par WhatsApp sans trace, informations introuvables au moment où elles sont nécessaires : ce fonctionnement ralentit l'activité, multiplie les erreurs et rend chaque contrôle plus long qu'il ne devrait l'être.",
    lead: ["LIDA analyse le fonctionnement réel de votre entreprise — pas seulement vos outils, mais la manière dont l'information circule réellement entre vos équipes — pour identifier ce qui doit être simplifié, automatisé ou regroupé dans un outil adapté à votre taille et à vos moyens."],
    sections: [
      {
        title: "Automatisation des processus",
        description: "Nous identifions les tâches répétitives et les étapes manuelles qui consomment du temps sans créer de valeur ajoutée.",
        listLabel: "L'intervention peut concerner :",
        items: ["La génération automatique de documents (devis, factures, bons de livraison)", "Les relances clients et fournisseurs, et les notifications internes", "Les circuits de validation (achats, congés, dépenses)", "Le transfert automatisé de données entre plusieurs outils (CRM, facturation, comptabilité)", "La centralisation des demandes entrantes (commercial, support, RH)", "Le suivi automatique des statuts et des échéances"],
        outcome: "L'objectif n'est pas d'automatiser l'ensemble de vos processus, mais de sélectionner les tâches pour lesquelles l'automatisation apporte un gain réel de fiabilité, de temps ou de visibilité — sans complexifier inutilement votre organisation.",
      },
      {
        title: "Intégration ERP et outils de gestion",
        description: "Nous définissons vos besoins fonctionnels avant tout choix, paramétrage ou évolution d'un ERP ou d'un outil de gestion, pour éviter les investissements mal dimensionnés.",
        listLabel: "L'accompagnement peut comprendre :",
        items: ["L'analyse de vos processus actuels et de leurs points de friction", "L'identification des utilisateurs, de leurs rôles et de leurs besoins réels", "La rédaction d'un cahier des charges fonctionnel", "La comparaison objective des solutions disponibles sur le marché marocain et international", "La préparation et la fiabilisation des données à migrer", "La définition de scénarios de test avant mise en production", "L'accompagnement au déploiement et à la conduite du changement"],
        outcome: "L'objectif est de mettre en place un outil réellement adapté au fonctionnement de votre entreprise — ni sous-dimensionné, ni surdimensionné par rapport à vos moyens et vos équipes.",
      },
      {
        title: "Organisation numérique des documents",
        description: "Nous structurons le classement, la circulation et l'accès aux documents de l'entreprise, pour que l'information soit fiable, traçable et accessible aux bonnes personnes.",
        listLabel: "Cela peut inclure :",
        items: ["Un plan de classement numérique partagé et normalisé", "Des règles de nommage cohérentes entre services", "La gestion des versions et de l'historique des documents", "La définition des droits d'accès selon la confidentialité", "Les circuits de validation numérique", "L'archivage structuré et la recherche documentaire rapide", "Le suivi des pièces manquantes ou en attente"],
        outcome: "Le résultat attendu est une information plus facile à retrouver, à vérifier et à transmettre — à vos équipes comme à vos partenaires externes (comptable, banque, auditeur).",
      },
      {
        title: "Tableaux de bord automatisés",
        description: "Nous transformons les données déjà disponibles dans votre entreprise en indicateurs lisibles, fiables et actualisés automatiquement.",
        listLabel: "L'intervention comprend généralement :",
        items: ["L'identification des sources de données disponibles (ERP, Excel, CRM, banque)", "La sélection des indicateurs réellement utiles à la décision", "La définition précise des règles de calcul de chaque indicateur", "L'automatisation de la mise à jour des données", "La conception d'une présentation claire et exploitable en réunion", "La vérification de la fiabilité et de la cohérence des données sources"],
        outcome: "Le tableau de bord devient ainsi un véritable outil d'aide à la décision — et non un fichier supplémentaire que personne ne prend le temps de mettre à jour.",
      },
    ],
    method: ["Comprendre — Analyser les flux, les outils existants et les contraintes réelles de votre activité.", "Diagnostiquer — Identifier les principaux blocages et leur impact sur l'activité.", "Prioriser — Sélectionner les améliorations à plus fort retour, en fonction de vos moyens.", "Concevoir et tester — Construire une solution adaptée et la valider avant déploiement complet.", "Déployer progressivement — Mettre en place les changements par étapes, sans rupture d'activité.", "Former et mesurer — Accompagner les utilisateurs et suivre les résultats obtenus."],
    deliverables: ["Cartographie des flux", "Cahier des besoins fonctionnels", "Plan d'automatisation priorisé", "Procédures et circuits de validation", "Tableaux de bord automatisés", "Scénarios de test", "Guides d'utilisation", "Plan de déploiement"],
    ctaTitle: "Besoin de simplifier vos opérations ?",
    ctaText: "Présentez-nous les tâches, fichiers ou outils qui ralentissent votre activité aujourd'hui. Un premier diagnostic permet d'identifier les améliorations les plus utiles pour votre entreprise.",
    ctaLabel: "Demander un diagnostic gratuit",
  },

  "gestion-organisation": {
    heroTitle: "Structurez votre organisation et transformez vos indicateurs en véritables décisions",
    heroDescription: "Quand les responsabilités ne sont pas clairement attribuées, que les procédures existantes ne correspondent plus au fonctionnement réel du terrain, ou que les indicateurs suivis en réunion ne débouchent sur aucune action, l'entreprise perd en efficacité, en visibilité et, à terme, en capacité à se développer sereinement.",
    lead: ["LIDA structure vos processus, clarifie les responsabilités et met en place des outils de pilotage adaptés à votre taille — qu'il s'agisse d'un premier cadrage organisationnel ou d'une préparation à la certification ISO 9001, 14001 ou 45001."],
    sections: [
      {
        title: "Diagnostic organisationnel",
        description: "Nous réalisons un état des lieux objectif du fonctionnement réel de votre entreprise — pas de celui décrit dans l'organigramme, mais de celui observé sur le terrain.",
        listLabel: "Le diagnostic analyse notamment :",
        items: ["Les activités et processus clés de l'entreprise", "Les rôles et responsabilités effectivement exercés", "Les circuits de validation en place", "Les documents utilisés au quotidien", "Les risques opérationnels identifiables", "Les indicateurs déjà disponibles", "Les principaux écarts entre les pratiques réelles et les objectifs affichés"],
        outcome: "Le diagnostic aboutit à une feuille de route hiérarchisée selon l'impact, l'urgence et les ressources réellement disponibles dans votre entreprise — pas un plan d'action générique inapplicable.",
      },
      {
        title: "Processus et responsabilités",
        description: "Nous décrivons les étapes nécessaires à la réalisation de vos activités et clarifions le rôle de chaque intervenant, pour que chacun sache précisément ce qui lui incombe.",
        listLabel: "L'accompagnement peut comprendre :",
        items: ["La cartographie des processus métier", "La définition claire des responsabilités par poste et par étape", "La formalisation des interfaces entre services", "La création de procédures simples, réellement applicables au quotidien", "La définition des points de contrôle", "La mise en place d'une matrice RACI", "L'identification des risques et des points de blocage récurrents"],
        outcome: "L'objectif est de réduire les incompréhensions internes et de rendre l'organisation plus facile à appliquer, à transmettre et à maintenir dans le temps — y compris en cas de départ d'un collaborateur clé.",
      },
      {
        title: "Tableaux de bord et KPI",
        description: "Nous sélectionnons avec vous les indicateurs réellement utiles à la prise de décision — pas une liste exhaustive de chiffres que personne ne consulte.",
        listLabel: "Chaque indicateur retenu doit préciser :",
        items: ["Son objectif", "Sa méthode de calcul", "Sa source de données", "Sa fréquence de mise à jour", "Son responsable désigné", "Son seuil d'alerte", "Les actions à engager en cas d'écart constaté"],
        outcome: "Les tableaux de bord sont accompagnés d'un rituel de pilotage structuré, permettant d'attribuer, de suivre et de vérifier les actions décidées lors de chaque revue — pour que la réunion mensuelle devienne un véritable point de décision, et non un simple commentaire de chiffres.",
      },
      {
        title: "Audit interne et préparation à la certification",
        description: "Nous évaluons le niveau réel d'application de votre système de management et identifions les écarts prioritaires avant l'audit de certification.",
        listLabel: "L'accompagnement peut comprendre :",
        items: ["La préparation du programme d'audit interne", "La vérification des documents et enregistrements", "Les entretiens avec les équipes concernées", "L'identification et la hiérarchisation des écarts", "La rédaction du rapport d'audit", "Le suivi des actions correctives jusqu'à leur clôture", "La préparation méthodique à l'audit de certification"],
      },
      {
        title: "Pilotage ISO et SMQ externalisé",
        description: "Au-delà de la phase de certification, LIDA peut accompagner le fonctionnement régulier de votre système de management, pour qu'il reste un outil de pilotage vivant plutôt qu'un dossier figé après l'audit.",
        listLabel: "Cela peut inclure :",
        items: ["Le suivi du plan d'action qualité, environnement ou sécurité", "La mise à jour documentaire continue", "Le suivi des objectifs et des KPI associés", "La préparation des revues de direction", "Le suivi des non-conformités et de leur traitement", "La coordination des audits internes et externes", "L'accompagnement des responsables qualité/QSE internes", "L'amélioration continue du système de management"],
        outcome: "L'objectif est de maintenir un système réellement utile au pilotage quotidien de l'entreprise — pas uniquement un dispositif réactivé chaque année à l'approche de l'audit.",
      },
    ],
    tracking: { title: "Référentiels accompagnés", items: ["ISO 9001 — Management de la qualité", "ISO 14001 — Management environnemental", "ISO 45001 — Santé et sécurité au travail"] },
    deliverables: ["Rapport de diagnostic organisationnel", "Cartographie des processus", "Matrice des responsabilités (RACI)", "Procédures et documents opérationnels", "Registre des risques", "Tableau de bord et fiches KPI", "Programme et rapport d'audit interne", "Plan d'action priorisé", "Support de revue de direction"],
    notice: { title: "Certification", text: "La décision finale de certification reste exclusivement du ressort de l'organisme certificateur indépendant." },
    ctaTitle: "Besoin de structurer ou d'améliorer votre organisation ?",
    ctaText: "Un premier échange permet d'identifier votre niveau de maturité actuel, vos priorités réelles et le périmètre d'accompagnement adapté à votre entreprise.",
    ctaLabel: "Demander un diagnostic organisationnel",
  },
};
