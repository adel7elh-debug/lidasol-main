import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/app/_lib/site";

export function WhatsAppButton({ message = whatsappMessages.general, label = "WhatsApp", className = "" }: { message?: string; label?: string; className?: string }) {
  return (
    <a className={`whatsapp-link ${className}`.trim()} href={createWhatsAppUrl(message)} target="_blank" rel="noreferrer">
      <MessageCircle aria-hidden="true" size={18} /> {label}
    </a>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <a className="whatsapp-float" href={createWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noreferrer" aria-label="Contacter LIDA sur WhatsApp">
      <MessageCircle aria-hidden="true" size={22} /><span>WhatsApp</span>
    </a>
  );
}
