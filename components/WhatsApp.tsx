import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsApp({course}: {course?: string}) {
  if (!siteConfig.whatsappNumber) return null;
  const text = encodeURIComponent(course ? `Bonjour, je souhaite obtenir plus d’informations sur la formation « ${course} » de LIDA Solutions & Consulting.` : "Bonjour, je souhaite obtenir plus d’informations sur les services de LIDA Solutions & Consulting.");
  return <a className="whatsapp" href={`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`} target="_blank" rel="noreferrer" aria-label="Contacter LIDA Solutions & Consulting sur WhatsApp"><MessageCircle/><span><small>Besoin d’aide ?</small><strong>Discutons sur WhatsApp</strong></span></a>;
}
