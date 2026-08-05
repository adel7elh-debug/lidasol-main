"use client";

import {FormEvent, useState} from "react";
import {ArrowUpRight, Mail, MessageCircle} from "lucide-react";
import {siteConfig} from "@/data/site";

type ContactFormProps = {
  initialService?: string;
};

export function ContactForm({initialService = ""}: ContactFormProps) {
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Bonjour LIDA Solutions & Consulting, je souhaite vous présenter mon besoin.",
      "",
      `Nom : ${data.get("name")}`,
      `Entreprise : ${data.get("company") || "Non précisée"}`,
      `Téléphone : ${data.get("phone")}`,
      `E-mail : ${data.get("email")}`,
      `Service souhaité : ${data.get("service")}`,
      `Message : ${data.get("message")}`,
    ].join("\n");

    if (siteConfig.whatsappNumber) {
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setNotice("Votre message est prêt. Finalisez son envoi dans l’onglet WhatsApp qui vient de s’ouvrir.");
      return;
    }

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Demande de diagnostic — LIDA Solutions & Consulting")}&body=${encodeURIComponent(message)}`;
    setNotice("Le numéro WhatsApp officiel n’est pas encore configuré. Votre messagerie a été ouverte pour envoyer la demande par e-mail.");
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-heading"><span className="eyebrow">Votre projet</span><h2>Parlons de votre besoin</h2><p>Décrivez votre situation en quelques lignes. Nous vous répondrons avec une première orientation.</p></div>
      <div className="form-grid">
        <label>Nom complet<input name="name" autoComplete="name" minLength={2} required/></label>
        <label>Entreprise<input name="company" autoComplete="organization"/></label>
        <label>Téléphone<input name="phone" type="tel" autoComplete="tel" inputMode="tel" minLength={8} required/></label>
        <label>E-mail<input name="email" type="email" autoComplete="email" required/></label>
        <label className="full">Service souhaité<select name="service" defaultValue={initialService} required><option value="">Sélectionnez un service</option><option>Conseil &amp; accompagnement</option><option>Digitalisation</option><option>Gestion &amp; organisation</option><option>Accompagnement ISO</option><option>Formation professionnelle</option><option>Diagnostic</option><option>Autre demande</option></select></label>
        <label className="full">Message<textarea name="message" rows={5} minLength={10} placeholder="Présentez brièvement votre activité, votre besoin et votre objectif…" required/></label>
        <label className="checkbox full"><input name="consent" type="checkbox" required/><span>J’accepte d’être contacté(e) par LIDA Solutions &amp; Consulting au sujet de cette demande.</span></label>
      </div>
      <button className={`button ${siteConfig.whatsappNumber ? "whatsapp-button" : "primary"} full-button`} type="submit">
        {siteConfig.whatsappNumber ? <><MessageCircle/>Préparer sur WhatsApp</> : <><Mail/>Préparer par e-mail</>}<ArrowUpRight/>
      </button>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
