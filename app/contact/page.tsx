import type { Metadata } from "next";
import { PageHero } from "@/app/_components/PageHero";
import { ContactForm } from "@/app/_components/ContactForm";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";
import { CONTACT_EMAIL, whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Contact et demande de diagnostic",
  description: "Contactez LIDA Solutions & Consulting pour un diagnostic, un devis, un accompagnement ISO, une digitalisation ou une formation.",
  alternates: { canonical: "/contact" },
  other: { email: CONTACT_EMAIL },
  openGraph: { title: "Contacter LIDA Solutions & Consulting", description: "Diagnostic, devis, ISO, digitalisation ou formation : échangez avec LIDA.", url: "/contact", images: [{ url: "/photos/pages/contact.webp", alt: "Contacter LIDA" }] },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Demandez votre Diagnostic 180° offert" description="Présentez votre entreprise et votre besoin en quelques informations. Votre demande sera transmise directement à l’équipe LIDA, qui vous contactera pour cadrer la prochaine étape utile." image="/photos/pages/contact.webp" imageAlt="Échange par téléphone avec LIDA Solutions & Consulting" breadcrumbs={[{ label: "Contact", href: "/contact" }]} primaryLabel="Demander mon Diagnostic 180° offert" primaryHref="#diagnostic-form" whatsappMessage={whatsappMessages.general} showWhatsApp={false} />
      <section className="section contact-page-section" id="contact-form"><div className="container contact-page-layout"><div className="contact-choice-copy"><p className="eyebrow eyebrow-dark"><span /> Option principale</p><h2>Demander un Diagnostic 180° offert</h2><p className="contact-choice-lead">Complétez le formulaire pour permettre à notre équipe de comprendre votre contexte, votre priorité et le service recherché avant de vous recontacter.</p><aside className="contact-whatsapp-option"><small>Option secondaire</small><h3>Besoin d’une réponse rapide ?</h3><p>WhatsApp reste disponible pour un premier échange immédiat avec LIDA.</p><WhatsAppButton message={whatsappMessages.general} label="Discuter sur WhatsApp" className="button button-whatsapp" /></aside></div><ContactForm /></div></section>
    </main>
  );
}
