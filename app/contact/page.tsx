import type {Metadata} from "next";
import {Clock3, Mail, MapPin, MessageCircle, Phone} from "lucide-react";
import {ContactForm} from "@/components/ContactForm";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {WhatsApp} from "@/components/WhatsApp";
import {siteConfig} from "@/data/site";

export const metadata: Metadata = {title: "Contact", description: "Présentez votre projet à LIDA Solutions & Consulting et demandez un premier diagnostic."};

const acceptedServices = ["Conseil & accompagnement", "Digitalisation", "Gestion & organisation", "Accompagnement ISO", "Formation professionnelle", "Diagnostic", "Autre demande"];

export default async function ContactPage({searchParams}: {searchParams: Promise<{service?: string}>}) {
  const {service = ""} = await searchParams;
  const initialService = acceptedServices.includes(service) ? service : service.startsWith("Digitalisation") ? "Digitalisation" : "";

  return (
    <><Header/><main>
      <section className="page-hero compact"><div className="container"><span className="eyebrow">Contact</span><h1>Parlons de votre projet.</h1><p>Expliquez-nous votre besoin. Nous vous répondrons avec une première orientation claire et adaptée à votre activité.</p></div></section>
      <section className="section"><div className="container contact-layout">
        <aside className="contact-copy"><span className="eyebrow">Nos coordonnées</span><h2>Restons en contact</h2><p>Nous intervenons à Marrakech, partout au Maroc et à distance selon la nature de la mission.</p><div className="contact-points"><span><MapPin/><span><small>Localisation</small><strong>{siteConfig.location}</strong></span></span><a href={`mailto:${siteConfig.email}`}><Mail/><span><small>E-mail</small><strong>{siteConfig.email}</strong></span></a>{siteConfig.phoneNumber && <a href={`tel:${siteConfig.phoneNumber}`}><Phone/><span><small>Téléphone</small><strong>{siteConfig.phoneNumber}</strong></span></a>}{siteConfig.whatsappNumber && <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle/><span><small>WhatsApp</small><strong>{siteConfig.whatsappNumber}</strong></span></a>}<span><Clock3/><span><small>Horaires</small><strong>{siteConfig.contactHours}</strong></span></span></div>{!siteConfig.whatsappNumber && <p className="config-note">Le numéro WhatsApp officiel sera affiché dès qu’il sera renseigné dans la configuration du site.</p>}</aside>
        <ContactForm initialService={initialService}/>
      </div></section>
    </main><Footer/><WhatsApp/></>
  );
}
