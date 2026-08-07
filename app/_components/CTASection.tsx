import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";

export function CTASection({ title, text, primaryLabel, primaryHref, whatsappMessage }: { title: string; text: string; primaryLabel: string; primaryHref: string; whatsappMessage: string }) {
  return (
    <section className="cta-section">
      <div className="container cta-layout">
        <div><p className="eyebrow"><span /> Prochaine étape</p><h2>{title}</h2><p>{text}</p></div>
        <div className="cta-actions"><Link className="button button-gold" href={primaryHref}>{primaryLabel}<ArrowRight aria-hidden="true" size={17} /></Link><WhatsAppButton message={whatsappMessage} label="Discuter sur WhatsApp" /></div>
      </div>
    </section>
  );
}
