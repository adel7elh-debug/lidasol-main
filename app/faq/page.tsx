import type {Metadata} from "next";
import Link from "next/link";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {WhatsApp} from "@/components/WhatsApp";

export const metadata: Metadata = {title: "Questions fréquentes"};
const faqs = [
  ["Comment se déroule un premier échange ?", "Nous commençons par comprendre votre activité, votre besoin et vos objectifs. Cet échange permet d’identifier la nature de l’accompagnement le plus utile."],
  ["Intervenez-vous uniquement à Marrakech ?", "Nous pouvons intervenir à Marrakech, ailleurs au Maroc ou à distance selon la nature de la mission."],
  ["Proposez-vous des solutions personnalisées ?", "Oui. Chaque proposition tient compte de votre organisation, de vos contraintes, de vos priorités et de vos ressources."],
  ["Les formations sont-elles disponibles en ligne ?", "Les programmes sont conçus pour être suivis en ligne avec des séances en direct, des cas pratiques, des supports et des enregistrements disponibles selon la formation."],
  ["Accompagnez-vous les démarches ISO ?", "Oui. L’accompagnement ISO fait partie de nos domaines d’intervention, aux côtés du conseil, de la gestion, de la digitalisation et de la formation."],
  ["Comment demander un diagnostic ?", "Utilisez le formulaire de contact en sélectionnant “Diagnostic”. Nous vous répondrons avec une première orientation."],
];

export default function FAQPage() {
  return <><Header/><main><section className="page-hero compact"><div className="container"><span className="eyebrow">FAQ</span><h1>Questions fréquentes</h1><p>Les réponses essentielles sur nos services et notre manière de vous accompagner.</p></div></section><section className="section"><div className="container faq-wrap">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}<div className="faq-contact"><h2>Vous avez une autre question ?</h2><p>Présentez-nous votre besoin et nous vous répondrons directement.</p><Link href="/contact" className="button primary">Nous contacter</Link></div></div></section></main><Footer/><WhatsApp/></>;
}
