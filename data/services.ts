export type Service = {
  slug: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "conseil",
    title: "Conseil & accompagnement",
    description: "Accompagnement des entreprises, entrepreneurs et porteurs de projets dans leurs décisions stratégiques, organisationnelles et opérationnelles.",
    points: ["Diagnostic d’entreprise", "Conseil en gestion", "Accompagnement des projets", "Amélioration des performances"],
  },
  {
    slug: "digitalisation",
    title: "Digitalisation des activités",
    description: "Développement de solutions digitales adaptées aux besoins des entreprises afin de simplifier les opérations et améliorer la productivité.",
    points: ["Sites vitrines professionnels", "Applications de gestion", "Automatisation des tâches", "Outils de suivi et tableaux de bord"],
  },
  {
    slug: "gestion",
    title: "Gestion & organisation",
    description: "Structuration des processus administratifs, comptables, financiers et organisationnels pour améliorer le fonctionnement de l’entreprise.",
    points: ["Organisation administrative", "Gestion comptable et financière", "Contrôle de gestion", "Mise en place des procédures"],
  },
  {
    slug: "iso",
    title: "Accompagnement ISO",
    description: "Accompagnement dans la mise en place et l’amélioration des systèmes de management de la qualité, de la santé, de la sécurité et de l’environnement.",
    points: ["ISO 9001 et ISO 45001", "Diagnostic QHSE", "Audit interne", "Documentation et procédures"],
  },
  {
    slug: "formation",
    title: "Formation professionnelle",
    description: "Formations pratiques permettant aux étudiants, salariés, entrepreneurs et chercheurs d’emploi de développer des compétences directement applicables.",
    points: ["Gestion administrative et comptable", "Fiscalité et paie", "QHSE et prévention", "Excel, Sage et outils professionnels"],
  },
];
