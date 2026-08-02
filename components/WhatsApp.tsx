import { MessageCircle } from "lucide-react";

export function WhatsApp({ course }: { course?: string }) {
  const message = encodeURIComponent(`Bonjour, je souhaite avoir plus d'informations sur la formation${course ? ` ${course}` : " LIDA Formation"}.`);
  return <a className="whatsapp" href={`https://wa.me/212600000000?text=${message}`} target="_blank" rel="noreferrer" aria-label="Contacter LIDA Formation sur WhatsApp"><MessageCircle size={25}/><span>Besoin d&apos;aide ?</span></a>;
}
