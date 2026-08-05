import type {LucideIcon} from "lucide-react";
import type {Metadata} from "next";
import Link from "next/link";
import {ArrowRight, BriefcaseBusiness, Check, Handshake, Lightbulb, ShieldCheck, Target} from "lucide-react";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {WhatsApp} from "@/components/WhatsApp";

export const metadata: Metadata = {title: "À propos", description: "Découvrez la mission et l’approche multidisciplinaire de LIDA Solutions & Consulting à Marrakech."};

const values: [LucideIcon, string, string][] = [
  [BriefcaseBusiness, "Expertise multidisciplinaire", "Une lecture globale de vos enjeux de gestion, d’organisation, de digitalisation et de conformité."],
  [Handshake, "Approche personnalisée", "Chaque recommandation part de votre réalité, de vos objectifs et de vos ressources."],
  [ShieldCheck, "Solutions professionnelles", "Des méthodes claires, des livrables utiles et un accompagnement structuré."],
  [Target, "Orientation résultats", "Des actions concrètes et suivies pour produire des améliorations durables."],
];

export default function AboutPage() {
  return <><Header/><main>
    <section className="page-hero"><div className="container"><span className="eyebrow">À propos</span><h1>Une expertise globale au service de votre activité.</h1><p>LIDA Solutions &amp; Consulting aide les entreprises et les professionnels à structurer leurs idées, simplifier leur organisation et transformer leurs objectifs en actions concrètes.</p></div></section>
    <section className="section"><div className="container about-page-grid"><div><span className="eyebrow">Notre mission</span><h2>Des solutions concrètes, accessibles et adaptées</h2><p>LIDA Solutions &amp; Consulting est un cabinet marocain spécialisé dans l’accompagnement des entreprises, la gestion, la digitalisation, les systèmes de management ISO et la formation professionnelle.</p><p>Notre rôle est d’apporter la méthode, les outils et le suivi nécessaires pour vous aider à prendre de meilleures décisions et faire progresser durablement votre activité.</p><ul className="check-list"><li><Check/>Écouter avant de recommander</li><li><Check/>Privilégier les solutions applicables</li><li><Check/>Avancer avec une méthode claire</li><li><Check/>Mesurer les progrès réalisés</li></ul></div><div className="mission-card"><Lightbulb/><span>Notre conviction</span><blockquote>Une solution est réellement utile lorsqu’elle est comprise, adaptée et appliquée sur le terrain.</blockquote></div></div></section>
    <section className="section soft"><div className="container"><div className="section-heading"><span className="eyebrow">Nos engagements</span><h2>Une relation de conseil fondée sur la clarté</h2></div><div className="value-grid about-values">{values.map(([Icon, title, text]) => <article key={title}><Icon/><strong>{title}</strong><p>{text}</p></article>)}</div></div></section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow gold">Échangeons</span><h2>Un besoin à structurer ou un projet à accélérer ?</h2><p>Présentez-nous votre situation et identifions ensemble la bonne prochaine étape.</p></div><Link href="/contact?service=Diagnostic" className="button light">Demander un diagnostic <ArrowRight/></Link></div></section>
  </main><Footer/><WhatsApp/></>;
}
