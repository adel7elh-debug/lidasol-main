import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RegistrationForm } from "@/components/RegistrationForm";
import { WhatsApp } from "@/components/WhatsApp";

export const metadata: Metadata = {title: "Inscription", description: "Préparez votre demande d’inscription à une formation LIDA Solutions & Consulting."};

export default async function RegistrationPage({searchParams}: {searchParams: Promise<{formation?: string}>}) {
  const {formation = ""} = await searchParams;
  return <><Header/><main><section className="page-hero compact"><div className="container"><span className="eyebrow">Inscription</span><h1>Parlez-nous de votre projet de formation.</h1><p>Complétez le formulaire. Nous vous recontacterons pour confirmer les modalités et les disponibilités.</p></div></section><section className="section"><div className="container form-layout"><aside><h2>Une demande simple, sans engagement</h2><p>Nous vérifions avec vous que la formation choisie correspond à votre objectif.</p><ul className="check-list"><li><Check/>Réponse personnalisée</li><li><Check/>Aucun paiement en ligne</li><li><Check/>Coordonnées utilisées uniquement pour vous répondre</li></ul></aside><RegistrationForm initialFormation={formation}/></div></section></main><Footer/><WhatsApp/></>;
}
