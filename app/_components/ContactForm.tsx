"use client";

import { FormEvent, useState } from "react";
import { createWhatsAppUrl } from "@/app/_lib/site";

const phonePattern = /^[+\d][\d\s().-]{7,18}$/;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", company: "", subject: "Diagnostic 180° offert", message: "", consent: false, website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    if (values.website || Object.keys(nextErrors).length) return;
    const message = `Bonjour LIDA Solutions & Consulting,\n\nJe souhaite vous contacter.\n\nNom : ${values.name}\nTéléphone : ${values.phone}\nEmail : ${values.email || "Non renseigné"}\nEntreprise : ${values.company || "Non renseignée"}\nObjet : ${values.subject}\nBesoin : ${values.message}`;
    window.location.assign(createWhatsAppUrl(message));
  }

  return (
    <form className="lead-form" id="contact-form" onSubmit={submit} noValidate aria-describedby="contact-form-help">
      <p className="form-helper" id="contact-form-help">Ce formulaire prépare votre message. Après validation des champs, WhatsApp s’ouvre avec le texte prérempli ; vous décidez ensuite de l’envoyer ou non.</p>
      <div className="honeypot" aria-hidden="true"><label>Votre site<input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} /></label></div>
      <div className="form-grid">
        <label className="field"><span>Nom complet *</span><input id="contact-name" value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />{errors.name ? <small className="field-error" id="contact-name-error">{errors.name}</small> : null}</label>
        <label className="field"><span>Téléphone *</span><input id="contact-phone" type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} inputMode="tel" autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "contact-phone-error" : undefined} />{errors.phone ? <small className="field-error" id="contact-phone-error">{errors.phone}</small> : null}</label>
        <label className="field"><span>Email</span><input id="contact-email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />{errors.email ? <small className="field-error" id="contact-email-error">{errors.email}</small> : null}</label>
        <label className="field"><span>Entreprise</span><input value={values.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" /></label>
        <label className="field wide"><span>Objet</span><select value={values.subject} onChange={(event) => update("subject", event.target.value)}><option>Diagnostic 180° offert</option><option>Digitalisation & automatisation</option><option>Conseil comptable, fiscal ou juridique</option><option>Pilotage & organisation</option><option>Accompagnement ISO</option><option>Formation professionnelle</option><option>Demande de devis</option><option>Être rappelé</option></select></label>
        <label className="field wide"><span>Votre besoin *</span><textarea id="contact-message" rows={6} value={values.message} onChange={(event) => update("message", event.target.value)} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />{errors.message ? <small className="field-error" id="contact-message-error">{errors.message}</small> : null}</label>
      </div>
      <label className="consent"><input id="contact-consent" type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} required aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "contact-consent-error" : undefined} /><span>J’accepte que LIDA Solutions & Consulting me contacte concernant cette demande. *</span></label>
      {errors.consent ? <p className="field-error" id="contact-consent-error">{errors.consent}</p> : null}
      <div className="form-submit"><button className="button button-whatsapp" type="submit">Préparer dans WhatsApp</button><small>Aucune donnée n’est envoyée par ce site. L’envoi a lieu uniquement si vous le confirmez ensuite dans WhatsApp.</small></div>
      {Object.keys(errors).length ? <p className="form-message error" role="alert">Vérifiez les champs signalés. Vos informations sont conservées.</p> : null}
    </form>
  );
}
