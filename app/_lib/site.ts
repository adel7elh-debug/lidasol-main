export const SITE_NAME = "LIDA Solutions & Consulting";
export const SITE_URL = "https://www.lidasol.com";
export const PHONE_DISPLAY = "+212 663 667 848";
export const PHONE_LINK = "+212663667848";
export const WHATSAPP_NUMBER = "212663667848";
export const CONTACT_EMAIL = "contact@lidasol.com";
export const LOCATION = "Marrakech, Maroc";

export const whatsappMessages = {
  general: `Bonjour LIDA Solutions & Consulting,

Je viens de visiter votre site et je souhaite avoir plus d’informations sur vos services.`,
  diagnostic: `Bonjour LIDA Solutions & Consulting,

Je souhaite demander le diagnostic 180° offert pour mon entreprise.`,
  iso: `Bonjour LIDA Solutions & Consulting,

Je souhaite demander un diagnostic ISO.`,
  formation: `Bonjour LIDA Solutions & Consulting,

Je souhaite avoir des informations concernant vos formations professionnelles.`,
  digitalisation: `Bonjour LIDA Solutions & Consulting,

Je souhaite discuter d’un projet de digitalisation de mon entreprise.`,
  organisation: `Bonjour LIDA Solutions & Consulting,

Je souhaite améliorer le pilotage et l’organisation de mon entreprise, notamment sur les volets ISO et QSE.`,
  intra: `Bonjour LIDA Solutions & Consulting,

Je souhaite organiser une formation intra-entreprise pour plusieurs collaborateurs et adapter le programme aux besoins de notre équipe.`,
} as const;

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
