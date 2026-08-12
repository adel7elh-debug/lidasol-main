"use client";

import { FormEvent, useState } from "react";
import { createWhatsAppUrl } from "@/app/_lib/site";

type Option = { value: string; label: string };
type FormValues = {
  name: string; phone: string; whatsapp: string; email: string; city: string; company: string; role: string;
  training: string; level: string; mode: string; participants: string; message: string; consent: boolean; website: string;
};

const initialValues: FormValues = { name: "", phone: "", whatsapp: "", email: "", city: "", company: "", role: "", training: "", level: "", mode: "Présentiel", participants: "1", message: "", consent: false, website: "" };
const phonePattern = /^[+\d][\d\s().-]{7,18}$/;

export function RegistrationForm({ options, defaultTraining = "" }: { options: Option[]; defaultTraining?: string }) {
  const [values, setValues] = useState<FormValues>({ ...initialValues, training: defaultTraining });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!values.name.trim()) nextErrors.name = "Indiquez votre nom complet.";
    if (!phonePattern.test(values.phone.trim())) nextErrors.phone = "Indiquez un numéro de téléphone valide.";
    if (!phonePattern.test(values.whatsapp.trim())) nextErrors.whatsapp = "Indiquez un numéro WhatsApp valide.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Indiquez une adresse email valide.";
    if (!values.training) nextErrors.training = "Choisissez une formation.";
    if (!values.consent) nextErrors.consent = "Votre accord est nécessaire pour être contacté.";
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (values.website || Object.keys(nextErrors).length) return;
    const selected = options.find((option) => option.value === values.training)?.label ?? values.training;
    const message = `Bonjour LIDA Solutions & Consulting,\n\nJe souhaite m’inscrire à une formation.\n\nNom : ${values.name}\nTéléphone : ${values.phone}\nWhatsApp : ${values.whatsapp}\nEmail : ${values.email || "Non renseigné"}\nVille : ${values.city || "Non renseignée"}\nEntreprise : ${values.company || "Non renseignée"}\nFonction : ${values.role || "Non renseignée"}\nFormation : ${selected}\nNiveau actuel : ${values.level || "Non renseigné"}\nMode souhaité : ${values.mode}\nNombre de participants : ${values.participants}\nMessage : ${values.message || "Aucun message complémentaire"}\n\nMerci de me contacter pour confirmer mon inscription.`;
    window.location.assign(createWhatsAppUrl(message));
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate aria-describedby="registration-form-help">
      <p className="form-helper" id="registration-form-help">Le formulaire prépare une demande d’inscription. WhatsApp s’ouvre ensuite avec un message prérempli ; vous restez libre de le relire et de l’envoyer.</p>
      <div className="honeypot" aria-hidden="true"><label>Votre site<input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} /></label></div>
      <div className="form-grid">
        <Field label="Nom complet" required error={errors.name} errorId="registration-name-error"><input value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "registration-name-error" : undefined} /></Field>
        <Field label="Téléphone" required error={errors.phone} errorId="registration-phone-error"><input type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} inputMode="tel" autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "registration-phone-error" : undefined} /></Field>
        <Field label="WhatsApp" required error={errors.whatsapp} errorId="registration-whatsapp-error"><input type="tel" value={values.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} inputMode="tel" autoComplete="tel" required aria-invalid={Boolean(errors.whatsapp)} aria-describedby={errors.whatsapp ? "registration-whatsapp-error" : undefined} /></Field>
        <Field label="Email" error={errors.email} errorId="registration-email-error"><input type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "registration-email-error" : undefined} /></Field>
        <Field label="Ville"><input value={values.city} onChange={(event) => update("city", event.target.value)} autoComplete="address-level2" /></Field>
        <Field label="Entreprise"><input value={values.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" /></Field>
        <Field label="Fonction"><input value={values.role} onChange={(event) => update("role", event.target.value)} autoComplete="organization-title" /></Field>
        <Field label="Formation souhaitée" required error={errors.training} errorId="registration-training-error"><select value={values.training} onChange={(event) => update("training", event.target.value)} required aria-invalid={Boolean(errors.training)} aria-describedby={errors.training ? "registration-training-error" : undefined}><option value="">Choisir une formation</option>{options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></Field>
        <Field label="Niveau actuel"><input value={values.level} onChange={(event) => update("level", event.target.value)} placeholder="Débutant, intermédiaire…" /></Field>
        <Field label="Mode souhaité"><select value={values.mode} onChange={(event) => update("mode", event.target.value)}><option>Présentiel</option><option>À distance</option><option>Intra-entreprise</option></select></Field>
        <Field label="Nombre de participants"><input type="number" min="1" max="250" value={values.participants} onChange={(event) => update("participants", event.target.value)} /></Field>
        <Field label="Message / besoin particulier" wide><textarea rows={5} value={values.message} onChange={(event) => update("message", event.target.value)} /></Field>
      </div>
      <label className="consent"><input type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} required aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "registration-consent-error" : undefined} /> <span>J’accepte que LIDA Solutions & Consulting me contacte concernant cette demande. <strong aria-hidden="true">*</strong></span></label>
      {errors.consent ? <p className="field-error" id="registration-consent-error">{errors.consent}</p> : null}
      <div className="form-submit"><button className="button button-whatsapp" type="submit">Préparer dans WhatsApp</button><small>Aucune donnée n’est envoyée par ce site. L’envoi a lieu uniquement si vous le confirmez ensuite dans WhatsApp.</small></div>
      {Object.keys(errors).length ? <p className="form-message error" role="alert">Vérifiez les champs signalés. Vos informations sont conservées.</p> : null}
    </form>
  );
}

function Field({ label, required, error, errorId, wide, children }: { label: string; required?: boolean; error?: string; errorId?: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={wide ? "field wide" : "field"}><span>{label}{required ? " *" : ""}</span>{children}{error ? <small className="field-error" id={errorId}>{error}</small> : null}</label>;
}
