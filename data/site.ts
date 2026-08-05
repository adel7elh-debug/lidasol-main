export const siteConfig = {
  name: "LIDA Solutions & Consulting",
  shortName: "LIDA",
  url: "https://lidasol.com",
  email: "contact@lidasol.com",
  location: "Marrakech, Maroc",
  contactHours: "Du lundi au vendredi, de 9h à 18h",
  // À compléter avec les coordonnées officielles, sans espaces ni signe +.
  phoneNumber: null as string | null,
  whatsappNumber: null as string | null,
  socialLinks: [] as {label: string; href: string}[],
};

export const hasWhatsApp = Boolean(siteConfig.whatsappNumber);
