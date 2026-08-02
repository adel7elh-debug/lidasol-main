import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsApp({course}:{course?:string}) { const message=encodeURIComponent(`Bonjour, je souhaite avoir plus d'informations sur ${course?`la formation ${course}`:"les formations LIDA Formation"}.`); return <a className="whatsapp" href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Contacter LIDA Formation sur WhatsApp"><MessageCircle/><span><small>Une question ?</small><strong>Besoin d&apos;aide ?</strong></span></a>; }
