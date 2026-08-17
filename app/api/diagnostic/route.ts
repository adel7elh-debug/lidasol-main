import { CONTACT_EMAIL } from "@/app/_lib/site";

type DiagnosticRequest = {
  name?: unknown;
  company?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
};

type FieldName = "name" | "company" | "phone" | "email" | "service" | "message";

const phonePattern = /^[+\d][\d\s().-]{7,18}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  })[character] || character);
}

export async function POST(request: Request) {
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin && requestOrigin !== new URL(request.url).origin) {
    return Response.json({ error: "Requête non autorisée." }, { status: 403 });
  }

  let body: DiagnosticRequest;
  try {
    body = await request.json() as DiagnosticRequest;
  } catch {
    return Response.json({ error: "La demande envoyée est invalide." }, { status: 400 });
  }

  const values = {
    name: text(body.name, 100),
    company: text(body.company, 150),
    phone: text(body.phone, 30),
    email: text(body.email, 254).toLowerCase(),
    service: text(body.service, 160),
    message: text(body.message, 3000),
  };
  const fields: Partial<Record<FieldName, string>> = {};

  if (!values.name) fields.name = "Indiquez votre nom et prénom.";
  if (!values.company) fields.company = "Indiquez votre entreprise.";
  if (!phonePattern.test(values.phone)) fields.phone = "Indiquez un numéro de téléphone valide.";
  if (!emailPattern.test(values.email)) fields.email = "Indiquez un email professionnel valide.";
  if (!values.service) fields.service = "Sélectionnez le service recherché.";

  if (Object.keys(fields).length) {
    return Response.json({ error: "Vérifiez les champs signalés.", fields }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Diagnostic email delivery is not configured: RESEND_API_KEY is missing.");
    return Response.json({ error: "Le service d’envoi est temporairement indisponible. Vous pouvez réessayer ou utiliser WhatsApp." }, { status: 503 });
  }

  const from = process.env.CONTACT_FORM_FROM?.trim() || "LIDA Solutions & Consulting <diagnostic@lidasol.com>";
  const rows = [
    ["Nom et prénom", values.name],
    ["Entreprise", values.company],
    ["Téléphone / WhatsApp", values.phone],
    ["Email professionnel", values.email],
    ["Service recherché / besoin", values.service],
    ["Message ou précision", values.message || "Aucune précision complémentaire"],
  ] as const;
  const plainText = [
    "Nouvelle demande de Diagnostic 180° offert",
    "",
    ...rows.map(([label, value]) => `${label} : ${value}`),
  ].join("\n");
  const htmlRows = rows.map(([label, value]) => `<tr><th style="padding:12px 16px;text-align:left;vertical-align:top;color:#0b2b55;background:#f4f7fb;border-bottom:1px solid #dfe6ef;font-size:13px;width:34%">${escapeHtml(label)}</th><td style="padding:12px 16px;color:#24364d;border-bottom:1px solid #dfe6ef;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("");

  let providerResponse: Response;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `diagnostic-${crypto.randomUUID()}`,
      },
      body: JSON.stringify({
        from,
        to: [CONTACT_EMAIL],
        reply_to: values.email,
        subject: `[Diagnostic 180°] ${values.company} — ${values.name}`,
        text: plainText,
        html: `<div style="margin:0;padding:32px;background:#f4f7fb;font-family:Arial,sans-serif"><div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #dfe6ef"><div style="padding:24px 28px;background:#071a3a;border-top:4px solid #d6a632"><p style="margin:0 0 7px;color:#e8c55d;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">LIDA Solutions & Consulting</p><h1 style="margin:0;color:#ffffff;font-size:24px">Nouvelle demande de Diagnostic 180° offert</h1></div><table role="presentation" style="width:100%;border-collapse:collapse">${htmlRows}</table><p style="margin:0;padding:20px 28px;color:#68768a;font-size:12px;line-height:1.6">Cette demande a été envoyée depuis le formulaire sécurisé de www.lidasol.com. Répondez directement à cet email pour contacter ${escapeHtml(values.name)}.</p></div></div>`,
        tags: [{ name: "source", value: "site-diagnostic" }],
      }),
      signal: AbortSignal.timeout(12000),
    });
  } catch {
    console.error("Diagnostic email delivery failed before receiving a provider response.");
    return Response.json({ error: "L’envoi n’a pas pu aboutir. Réessayez dans quelques instants ou contactez-nous sur WhatsApp." }, { status: 502 });
  }

  if (!providerResponse.ok) {
    console.error("Diagnostic email provider returned an error.", { status: providerResponse.status });
    return Response.json({ error: "L’envoi n’a pas pu aboutir. Réessayez dans quelques instants ou contactez-nous sur WhatsApp." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
