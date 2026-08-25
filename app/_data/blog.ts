export type BlogSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  introduction: string;
  sections: BlogSection[];
  takeaway: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "digitaliser-pme-sans-complexifier-quotidien",
    title: "Digitaliser une PME sans complexifier son quotidien",
    excerpt: "Une méthode progressive pour remplacer les tâches répétitives et les fichiers dispersés par des outils réellement adoptés par l’équipe.",
    category: "Digitalisation",
    publishedAt: "2026-08-20",
    readingTime: "6 min de lecture",
    image: "/photos/services/digitalisation.webp",
    imageAlt: "Équipe de PME travaillant avec des outils numériques",
    introduction: "La digitalisation devient utile quand elle simplifie le travail réel. Pour une PME, le bon point de départ n’est donc pas le choix d’un logiciel, mais l’identification des tâches qui consomment du temps, créent des erreurs ou rendent le suivi difficile.",
    sections: [
      {
        title: "Commencer par le flux réel, pas par l’outil",
        paragraphs: [
          "Avant d’automatiser, il faut observer comment l’information circule aujourd’hui : qui la reçoit, où elle est enregistrée, qui la valide et comment elle est retrouvée. Cette lecture met souvent en évidence des doubles saisies, des fichiers concurrents ou des validations sans responsable clair.",
          "Un diagnostic court permet de choisir un premier périmètre concret, avec un résultat visible en quelques semaines plutôt qu’un grand chantier difficile à piloter.",
        ],
      },
      {
        title: "Prioriser les améliorations à effet immédiat",
        bullets: [
          "Centraliser les documents utiles dans une arborescence partagée et comprise par tous.",
          "Automatiser les relances et notifications récurrentes.",
          "Relier les données déjà disponibles à un tableau de bord simple.",
          "Définir un responsable et une règle de mise à jour pour chaque information critique.",
        ],
      },
      {
        title: "Mesurer l’adoption, pas seulement l’installation",
        paragraphs: [
          "Un outil installé mais contourné par l’équipe ne produit pas de valeur. Les bons indicateurs sont très concrets : temps économisé, nombre d’erreurs évitées, délai de traitement, taux de documents retrouvés ou régularité de mise à jour.",
          "La formation doit partir des situations quotidiennes et laisser aux utilisateurs une procédure courte, des exemples et un point de contact pour les premières difficultés.",
        ],
      },
    ],
    takeaway: "La digitalisation réussie avance par étapes : comprendre le flux, simplifier la règle, choisir l’outil, accompagner l’équipe puis mesurer le résultat.",
  },
  {
    slug: "iso-9001-erreurs-preparation-certification",
    title: "ISO 9001 : 7 erreurs à éviter avant la certification",
    excerpt: "Documentation trop lourde, responsabilités floues, indicateurs décoratifs : les pièges fréquents et les réflexes qui gardent le système proche du terrain.",
    category: "ISO & QSE",
    publishedAt: "2026-08-14",
    readingTime: "7 min de lecture",
    image: "/photos/services/accompagnement-iso.webp",
    imageAlt: "Équipe préparant une démarche de certification ISO 9001",
    introduction: "Préparer une certification ISO 9001 ne consiste pas à produire le plus grand nombre de procédures. Le système doit surtout rendre les responsabilités, les risques, les contrôles et les décisions plus lisibles pour les équipes.",
    sections: [
      {
        title: "Les erreurs qui fragilisent la démarche",
        bullets: [
          "Copier des procédures génériques qui ne décrivent pas les pratiques réelles.",
          "Confier le système qualité à une seule personne sans impliquer les responsables de processus.",
          "Multiplier les indicateurs sans préciser les décisions qu’ils doivent soutenir.",
          "Attendre l’audit pour traiter les écarts connus.",
          "Former les équipes uniquement sur la norme, sans partir de leurs tâches.",
          "Créer des preuves difficiles à maintenir au quotidien.",
          "Traiter la certification comme une fin plutôt que comme un cycle d’amélioration.",
        ],
      },
      {
        title: "Construire un système proportionné à l’entreprise",
        paragraphs: [
          "Chaque document doit répondre à une utilité : clarifier une règle, sécuriser une étape sensible, transmettre un savoir-faire ou conserver une preuve nécessaire. Si personne ne sait expliquer à quoi sert un fichier, il mérite d’être simplifié ou supprimé.",
          "La démarche devient plus robuste lorsque les responsables de processus participent à la définition des risques, des contrôles et des indicateurs qui concernent leur activité.",
        ],
      },
      {
        title: "Préparer l’audit par des situations concrètes",
        paragraphs: [
          "Un audit interne utile ne cherche pas à réciter les exigences. Il vérifie si les règles sont comprises, appliquées et capables de produire une information fiable. Les constats doivent déboucher sur des actions attribuées, datées et suivies.",
        ],
      },
    ],
    takeaway: "Un système ISO crédible est un système utilisé : il décrit le travail réel, rend les responsabilités visibles et transforme chaque écart en action suivie.",
  },
  {
    slug: "tableau-de-bord-pme-indicateurs-utiles",
    title: "Tableau de bord PME : 5 indicateurs vraiment utiles",
    excerpt: "Comment choisir peu d’indicateurs, les rendre fiables et organiser une revue qui transforme les chiffres en décisions suivies.",
    category: "Pilotage",
    publishedAt: "2026-08-05",
    readingTime: "5 min de lecture",
    image: "/photos/services/pilotage.webp",
    imageAlt: "Analyse d’indicateurs de performance d’une entreprise",
    introduction: "Un bon tableau de bord ne cherche pas à tout montrer. Il rassemble les quelques signaux qui permettent de comprendre la situation, d’anticiper un risque et de décider d’une action.",
    sections: [
      {
        title: "Cinq familles d’indicateurs pour commencer",
        bullets: [
          "Activité : volume de commandes, dossiers ou prestations réalisés.",
          "Délai : temps moyen de traitement et dossiers en retard.",
          "Trésorerie : encaissements attendus, réalisés et factures échues.",
          "Qualité : erreurs, retours, réclamations ou reprises de travail.",
          "Action : décisions ouvertes, responsables désignés et échéances dépassées.",
        ],
      },
      {
        title: "Définir chaque indicateur avant de l’afficher",
        paragraphs: [
          "Pour éviter les discussions interminables sur les chiffres, chaque indicateur doit avoir une définition, une source, une fréquence de mise à jour, un responsable et un seuil d’alerte. Cette fiche simple compte souvent plus que le design du tableau de bord.",
          "Il vaut mieux cinq indicateurs fiables, consultés chaque semaine, que trente chiffres mis à jour de manière irrégulière.",
        ],
      },
      {
        title: "Transformer la revue en plan d’action",
        paragraphs: [
          "La réunion de pilotage doit se concentrer sur les écarts et les décisions. Pour chaque point, l’équipe précise la cause probable, l’action, le responsable, l’échéance et la prochaine date de vérification.",
          "Le tableau de bord devient alors un outil de coordination : il relie l’information à une responsabilité et à un rythme de suivi.",
        ],
      },
    ],
    takeaway: "La valeur d’un tableau de bord ne vient pas du nombre de graphiques, mais de la qualité des décisions qu’il permet de prendre et de suivre.",
  },
];

const blogDateFormatter = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export function formatBlogDate(date: string) {
  return blogDateFormatter.format(new Date(`${date}T12:00:00Z`));
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
