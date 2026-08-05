"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { formations } from "@/data/formations";
import { siteConfig } from "@/data/site";

type PreparedRequest = { url: string | null };

export function RegistrationForm({initialFormation = ""}: {initialFormation?: string}) {
  const [prepared, setPrepared] = useState<PreparedRequest | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selected = formations.find((formation) => formation.slug === data.get("formation"));
    const message = [
      "Bonjour LIDA Solutions & Consulting, je souhaite faire une demande d’inscription.",
      `Nom : ${data.get("firstName")} ${data.get("lastName")}`,
      `Téléphone : ${data.get("phone")}`,
      `WhatsApp : ${data.get("whatsapp")}`,
      `Email : ${data.get("email")}`,
      `Ville : ${data.get("city")}`,
      `Formation : ${selected?.title ?? "Non précisée"}`,
      `Situation : ${data.get("situation")}`,
      `Message : ${data.get("message") || "Aucun"}`,
    ].join("\n");
    const url = siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}` : null;
    setPrepared({url});
  }

  if (prepared) return <div className="form-card success-card" role="status"><span className="success-icon">✓</span><h2>Votre demande a bien été préparée.</h2>{prepared.url ? <><p>Cliquez ci-dessous pour l’envoyer à LIDA Solutions &amp; Consulting sur WhatsApp.</p><a className="button whatsapp-button" href={prepared.url} target="_blank" rel="noreferrer"><MessageCircle/> Envoyer sur WhatsApp</a></> : <><p>WhatsApp n’est pas encore configuré. Vous pouvez nous transmettre votre demande par e-mail.</p><a className="button primary" href={`mailto:${siteConfig.email}`}>Écrire à {siteConfig.email}</a></>}<button className="text-button" type="button" onClick={() => setPrepared(null)}>Modifier ma demande</button></div>;

  return <form className="form-card" onSubmit={submit}><h2>Demande d’inscription</h2><p>Renseignez vos informations. Aucun paiement ne vous sera demandé sur ce site.</p><div className="form-grid">
    <label>Prénom<input name="firstName" autoComplete="given-name" required/></label><label>Nom<input name="lastName" autoComplete="family-name" required/></label>
    <label>Téléphone<input name="phone" type="tel" autoComplete="tel" required/></label><label>Numéro WhatsApp<input name="whatsapp" type="tel" required/></label>
    <label>Email<input name="email" type="email" autoComplete="email" required/></label><label>Ville<input name="city" autoComplete="address-level2" required/></label>
    <label className="full">Formation souhaitée<select name="formation" defaultValue={initialFormation} required><option value="">Sélectionner une formation</option>{formations.map((formation) => <option key={formation.id} value={formation.slug}>{formation.title}</option>)}</select></label>
    <label className="full">Situation professionnelle<select name="situation" required><option value="">Sélectionner votre situation</option><option>Salarié(e)</option><option>Entrepreneur(e)</option><option>Étudiant(e)</option><option>En recherche d’emploi</option><option>Autre</option></select></label>
    <label className="full">Message<textarea name="message" rows={5} placeholder="Précisez vos objectifs ou vos disponibilités…"/></label>
    <label className="checkbox full"><input name="consent" type="checkbox" required/><span>J’accepte d’être contacté(e) par LIDA Solutions &amp; Consulting au sujet de cette demande.</span></label>
  </div><button className="button primary" type="submit">Préparer ma demande</button></form>;
}
