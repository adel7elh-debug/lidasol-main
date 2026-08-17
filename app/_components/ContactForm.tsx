"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";
import { whatsappMessages } from "@/app/_lib/site";

type FormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FieldName = keyof FormValues;
type FormStatus = "idle" | "loading" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "Diagnostic 180° offert",
  message: "",
};

const phonePattern = /^[+\d][\d\s().-]{7,18}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submissionError, setSubmissionError] = useState("");

  function update(key: FieldName, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
    if (status === "error") {
      setStatus("idle");
      setSubmissionError("");
    }
  }

  function validate() {
    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Indiquez votre nom et prénom.";
    if (!values.company.trim()) nextErrors.company = "Indiquez votre entreprise.";
    if (!phonePattern.test(values.phone.trim())) nextErrors.phone = "Indiquez un numéro de téléphone valide.";
    if (!emailPattern.test(values.email.trim())) nextErrors.email = "Indiquez un email professionnel valide.";
    if (!values.service.trim()) nextErrors.service = "Sélectionnez le service recherché.";
    return nextErrors;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmissionError("");

    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setSubmissionError("Vérifiez les champs signalés avant d’envoyer votre demande.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => null) as { error?: string; fields?: Partial<Record<FieldName, string>> } | null;

      if (!response.ok) {
        if (result?.fields) setErrors(result.fields);
        throw new Error(result?.error || "L’envoi n’a pas pu aboutir. Réessayez dans quelques instants.");
      }

      setValues(initialValues);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setSubmissionError(error instanceof Error ? error.message : "L’envoi n’a pas pu aboutir. Réessayez dans quelques instants.");
    }
  }

  if (status === "success") {
    return (
      <div className="lead-form diagnostic-success" id="diagnostic-form" role="status" aria-live="polite">
        <CheckCircle2 aria-hidden="true" size={34} />
        <h2>Demande bien reçue</h2>
        <p>Merci ! Votre demande de Diagnostic 180° a bien été reçue. Notre équipe vous contactera prochainement.</p>
        <WhatsAppButton message={whatsappMessages.diagnostic} label="Échanger maintenant sur WhatsApp" className="button button-whatsapp" />
      </div>
    );
  }

  return (
    <form className="lead-form" id="diagnostic-form" onSubmit={submit} noValidate aria-busy={status === "loading"}>
      <div className="form-grid">
        <label className="field"><span>Nom et prénom *</span><input id="diagnostic-name" value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "diagnostic-name-error" : undefined} />{errors.name ? <small className="field-error" id="diagnostic-name-error">{errors.name}</small> : null}</label>
        <label className="field"><span>Entreprise *</span><input id="diagnostic-company" value={values.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" required aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "diagnostic-company-error" : undefined} />{errors.company ? <small className="field-error" id="diagnostic-company-error">{errors.company}</small> : null}</label>
        <label className="field"><span>Téléphone / WhatsApp *</span><input id="diagnostic-phone" type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} inputMode="tel" autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "diagnostic-phone-error" : undefined} />{errors.phone ? <small className="field-error" id="diagnostic-phone-error">{errors.phone}</small> : null}</label>
        <label className="field"><span>Email professionnel *</span><input id="diagnostic-email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "diagnostic-email-error" : undefined} />{errors.email ? <small className="field-error" id="diagnostic-email-error">{errors.email}</small> : null}</label>
        <label className="field wide"><span>Service recherché / besoin *</span><select id="diagnostic-service" value={values.service} onChange={(event) => update("service", event.target.value)} required aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "diagnostic-service-error" : undefined}><option>Diagnostic 180° offert</option><option>Digitalisation & automatisation</option><option>Conseil & accompagnement</option><option>Pilotage & organisation</option><option>Accompagnement ISO</option><option>Formation professionnelle</option><option>Autre besoin</option></select>{errors.service ? <small className="field-error" id="diagnostic-service-error">{errors.service}</small> : null}</label>
        <label className="field wide"><span>Message ou précision (optionnel)</span><textarea id="diagnostic-message" rows={5} placeholder="Ajoutez, si nécessaire, quelques éléments utiles sur votre situation ou vos priorités." value={values.message} onChange={(event) => update("message", event.target.value)} /></label>
      </div>
      <div className="form-submit diagnostic-form-submit"><button className="button button-gold diagnostic-submit" type="submit" disabled={status === "loading"}>{status === "loading" ? <><span className="button-spinner" aria-hidden="true" /> Envoi en cours…</> : "Demander mon Diagnostic 180° offert"}</button><small>Vos informations sont envoyées de manière sécurisée à l’équipe LIDA pour traiter uniquement cette demande.</small></div>
      {status === "error" ? <p className="form-message error" role="alert">{submissionError}</p> : null}
    </form>
  );
}
