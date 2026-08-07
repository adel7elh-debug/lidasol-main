"use client";

import { FormEvent, useState } from "react";
import { createWhatsAppUrl } from "@/app/_lib/site";

const phonePattern = /^[+\d][\d\s().-]{7,18}$/;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", company: "", subject: "Diagnostic", message: "", consent: false, website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function update(key: keyof typeof values, value: string | boolean) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!values.name.trim()) nextErrors.name = "Indiquez votre nom.";
    if (!phonePattern.test(values.phone.trim())) nextErrors.phone = "Indiquez un numéro valide.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Indiquez un email valide.";
    if (!values.message.trim()) nextErrors.message = "Décrivez brièvement votre besoin.";
    if (!values.consent) nextErrors.consent = "Votre accord est nécessaire.";
    setErrors(nextErrors);
    if (values.website || Object.keys(nextErrors).length) { setStatus("error"); return; }
    setStatus("loading");
    const message = `Bonjour LIDA Solutions & Consulting,\n\nJe souhaite vous contacter.\n\nNom : ${values.name}\nTéléphone : ${values.phone}\nEmail : ${values.email || "Non renseigné"}\nEntreprise : ${values.company || "Non renseignée"}\nObjet : ${values.subject}\nBesoin : ${values.message}`;
    setWhatsappUrl(createWhatsAppUrl(message));
    window.setTimeout(() => setStatus("success"), 350);
  }

  return (
    <form className="lead-form" id="contact-form" onSubmit={submit} noValidate>
      <div className="honeypot" aria-hidden="true"><label>Votre site<input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} /></label></div>
      <div className="form-grid">
        <label className="field"><span>Nom complet *</span><input value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />{errors.name ? <small className="field-error">{errors.name}</small> : null}</label>
        <label className="field"><span>Téléphone *</span><input value={values.phone} onChange={(event) => update("phone", event.target.value)} inputMode="tel" autoComplete="tel" />{errors.phone ? <small className="field-error">{errors.phone}</small> : null}</label>
        <label className="field"><span>Email</span><input type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" />{errors.email ? <small className="field-error">{errors.email}</small> : null}</label>
        <label className="field"><span>Entreprise</span><input value={values.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" /></label>
        <label className="field wide"><span>Objet</span><select value={values.subject} onChange={(event) => update("subject", event.target.value)}><option>Diagnostic</option><option>Demande de devis</option><option>Être rappelé</option><option>Accompagnement ISO</option><option>Formation</option><option>Digitalisation</option></select></label>
        <label className="field wide"><span>Votre besoin *</span><textarea rows={6} value={values.message} onChange={(event) => update("message", event.target.value)} />{errors.message ? <small className="field-error">{errors.message}</small> : null}</label>
      </div>
      <label className="consent"><input type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} /><span>J’accepte que LIDA Solutions & Consulting me contacte concernant cette demande. *</span></label>
      {errors.consent ? <p className="field-error">{errors.consent}</p> : null}
      <div className="form-submit"><button className="button button-blue" type="submit" disabled={status === "loading"}>{status === "loading" ? "Validation…" : "Préparer ma demande"}</button><small>La demande n’est transmise qu’après votre validation dans WhatsApp.</small></div>
      {status === "error" && Object.keys(errors).length ? <p className="form-message error" role="alert">Vérifiez les champs signalés. Vos informations sont conservées.</p> : null}
      {status === "success" ? <div className="form-message success" role="status"><strong>Votre demande est prête.</strong><p>Transmettez-la à l’équipe LIDA pour être recontacté.</p><a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Envoyer sur WhatsApp</a></div> : null}
    </form>
  );
}
