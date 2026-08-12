import type { Metadata } from "next";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/app/_components/PageHero";
import { ContactForm } from "@/app/_components/ContactForm";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";
import { CONTACT_EMAIL, LOCATION, PHONE_DISPLAY, PHONE_LINK, whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Contact et demande de diagnostic",
  description: "Contactez LIDA Solutions & Consulting pour un diagnostic, un devis, un accompagnement ISO, une digitalisation ou une formation.",
  alternates: { canonical: "/contact" },
  other: { email: CONTACT_EMAIL },
  openGraph: { title: "Contacter LIDA Solutions & Consulting", description: "Diagnostic, devis, ISO, digitalisation ou formation : échangez avec LIDA.", url: "/contact", images: [{ url: "/photos/conseil.jpg", alt: "Contacter LIDA" }] },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Un premier échange pour clarifier votre besoin." description="Conseil, organisation, digitalisation, ISO ou formation : présentez votre situation et identifions ensemble la prochaine étape utile." image="/photos/conseil.jpg" imageAlt="Prendre contact avec LIDA Solutions & Consulting" breadcrumbs={[{ label: "Contact", href: "/contact" }]} primaryLabel="Remplir le formulaire" primaryHref="#contact-form" whatsappMessage={whatsappMessages.general} />
      <section className="section contact-page-section"><div className="container contact-page-layout"><div><p className="eyebrow eyebrow-dark"><span /> Contact rapide</p><h2>Choisissez le canal le plus simple.</h2><div className="contact-cards"><a href={`tel:${PHONE_LINK}`}><Phone aria-hidden="true" /><span><small>Téléphone</small><strong>{PHONE_DISPLAY}</strong></span></a><WhatsAppButton message={whatsappMessages.general} label="Écrire sur WhatsApp" /><div><MapPin aria-hidden="true" /><span><small>Localisation</small><strong>{LOCATION}</strong></span></div><div><Clock3 aria-hidden="true" /><span><small>Rendez-vous</small><strong>Sur confirmation</strong></span></div><a className="placeholder-contact" href={`mailto:${CONTACT_EMAIL}`}><MessageCircle aria-hidden="true" /><span><small>Email</small><strong>{CONTACT_EMAIL}</strong></span></a></div><div className="quick-intents"><WhatsAppButton message={whatsappMessages.diagnostic} label="Diagnostic 180° offert" /><WhatsAppButton message={"Bonjour LIDA Solutions & Consulting,\n\nJe souhaite demander un devis pour un accompagnement."} label="Demander un devis" /><WhatsAppButton message={"Bonjour LIDA Solutions & Consulting,\n\nJe souhaite être rappelé concernant mon besoin."} label="Être rappelé" /></div></div><ContactForm /></div></section>
    </main>
  );
}
