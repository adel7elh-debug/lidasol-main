import type {LucideIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Handshake,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  MonitorCog,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import {ContactForm} from "@/components/ContactForm";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {ScrollReveal} from "@/components/ScrollReveal";
import {WhatsApp} from "@/components/WhatsApp";
import {services} from "@/data/services";
import {siteConfig} from "@/data/site";

const serviceIcons: LucideIcon[] = [Handshake, MonitorCog, Workflow, ShieldCheck, GraduationCap];

const expertiseDomains: [string, LucideIcon][] = [
  ["Conseil", Handshake],
  ["Digitalisation", MonitorCog],
  ["Gestion", BriefcaseBusiness],
  ["ISO", ShieldCheck],
  ["Formation", GraduationCap],
];

const trustItems: [LucideIcon, string, string][] = [
  [Network, "Expertise multidisciplinaire", "Une vision globale de votre activité"],
  [Target, "Solutions personnalisées", "Des réponses adaptées à vos priorités"],
  [Workflow, "Accompagnement opérationnel", "Des actions concrètes et applicables"],
  [MapPin, "Maroc & à distance", "Une intervention souple selon vos besoins"],
];

const reasons = [
  "Accompagnement personnalisé",
  "Approche pratique et opérationnelle",
  "Solutions adaptées à chaque entreprise",
  "Expertise multidisciplinaire",
  "Suivi pendant la mission",
  "Intervention à distance et sur site",
];

const method: [string, string, string, LucideIcon][] = [
  ["01", "Diagnostic", "Analyse de l’activité, des besoins, des difficultés et des priorités.", Target],
  ["02", "Construction", "Définition des solutions, procédures, outils et plan d’action.", Workflow],
  ["03", "Mise en œuvre", "Application des actions, accompagnement et formation des équipes.", Handshake],
  ["04", "Suivi", "Mesure des résultats, corrections et amélioration continue.", BarChart3],
];

const digitalSolutions: [string, LucideIcon][] = [
  ["Sites vitrines professionnels", Laptop],
  ["Applications de gestion", MonitorCog],
  ["Automatisation des tâches", Workflow],
  ["Digitalisation des documents", FileCheck2],
  ["Tableaux de bord", BarChart3],
  ["Solutions personnalisées", Sparkles],
];

const trainingDomains = ["Gestion administrative et comptable", "Comptabilité et fiscalité", "Paie et gestion sociale", "Contrôle de gestion", "QHSE", "ISO 9001 et ISO 45001", "Excel et Sage"];
const trainingBenefits = ["Séances en direct", "Formation en ligne", "Enregistrements", "Cas pratiques", "Supports pédagogiques", "Attestation"];

export default function HomePage() {
  return (
    <>
      <Header/>
      <ScrollReveal/>
      <main>
        <section className="hero" id="accueil">
          <div className="hero-glow hero-glow-one" aria-hidden="true"/>
          <div className="hero-glow hero-glow-two" aria-hidden="true"/>
          <div className="hero-grid-lines" aria-hidden="true"/>
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <span className="eyebrow eyebrow-gold"><Sparkles/> Conseil • Gestion • Digitalisation • Formation</span>
              <h1>Des <span>solutions intelligentes</span> pour développer votre activité</h1>
              <p>LIDA Solutions &amp; Consulting accompagne les entreprises, les entrepreneurs et les professionnels dans l’organisation, la digitalisation, la conformité et le développement de leurs activités.</p>
              <div className="hero-actions">
                <Link className="button gold-button" href="/contact?service=Diagnostic">Demander un diagnostic gratuit <ArrowRight/></Link>
                <Link className="button ghost-button" href="#services">Découvrir nos services</Link>
              </div>
              <div className="hero-trust" aria-label="Nos engagements">
                {["Accompagnement personnalisé", "Solutions adaptées", "Approche orientée résultats"].map((label) => <span key={label}><CheckCircle2/>{label}</span>)}
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="hero-photo-frame">
                <Image src="/images/lida-hero-meeting.jpg" alt="Réunion professionnelle autour d’un projet d’entreprise" width={1800} height={1200} priority unoptimized sizes="(max-width: 900px) 92vw, 46vw"/>
                <div className="hero-photo-shade" aria-hidden="true"/>
                <div className="hero-photo-caption"><span className="caption-line"/><small>Une vision globale</small><strong>Un partenaire pour chaque étape</strong></div>
              </div>
              <div className="expertise-panel" aria-label="Domaines d’expertise LIDA">
                <span className="expertise-panel-label">Nos domaines</span>
                <div className="expertise-chips">{expertiseDomains.map(([label, Icon]) => <span key={label}><Icon/>{label}</span>)}</div>
              </div>
              <span className="hero-gold-corner" aria-hidden="true"/>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Les engagements LIDA">
          <div className="container trust-strip-grid">{trustItems.map(([Icon, title, text]) => <article key={title}><Icon/><span><strong>{title}</strong><small>{text}</small></span></article>)}</div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading section-heading-left" data-reveal>
              <span className="eyebrow eyebrow-gold">Nos domaines d’intervention</span>
              <h2>Des expertises complémentaires pour votre entreprise</h2>
              <p>Un accompagnement cohérent pour structurer, moderniser et développer votre activité.</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article className={`service-card ${index === 0 ? "service-card-featured" : ""}`} id={service.slug} key={service.slug} data-reveal style={{"--delay": `${index * 70}ms`} as React.CSSProperties}>
                    <div className="service-card-heading"><span className="service-icon"><Icon/></span><span className="service-label">Expertise LIDA</span></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>{service.points.slice(0, 3).map((point) => <li key={point}><Check/>{point}</li>)}</ul>
                    <Link className="service-link" href={`/contact?service=${encodeURIComponent(service.title)}`}>Découvrir <ArrowRight/></Link>
                    <span className="service-card-glow" aria-hidden="true"/>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container why-layout">
            <figure className="why-photo" data-reveal>
              <Image src="/images/lida-consulting.jpg" alt="Équipe analysant des données dans le cadre d’une mission de conseil" width={1600} height={900} unoptimized sizes="(max-width: 900px) 90vw, 44vw"/>
              <span className="photo-gold-line" aria-hidden="true"/>
              <figcaption><BriefcaseBusiness/><span><small>Conseil de proximité</small><strong>Des décisions éclairées par votre réalité</strong></span></figcaption>
            </figure>
            <div className="why-copy" data-reveal>
              <span className="eyebrow">Pourquoi LIDA ?</span>
              <h2>Un accompagnement simple, efficace et orienté résultats</h2>
              <p>Nous analysons les besoins réels de chaque client avant de proposer une solution adaptée à son activité, ses objectifs et ses ressources.</p>
              <div className="reason-grid">{reasons.map((reason) => <span key={reason}><CheckCircle2/>{reason}</span>)}</div>
              <blockquote>« Une vision claire, des actions concrètes et des résultats mesurables. »</blockquote>
            </div>
          </div>
        </section>

        <section className="section method-section">
          <div className="method-halo" aria-hidden="true"/>
          <div className="container">
            <div className="section-heading section-heading-left section-heading-light" data-reveal>
              <span className="eyebrow eyebrow-gold">Méthode d’accompagnement</span>
              <h2>Une méthode claire, de l’analyse aux résultats</h2>
              <p>Chaque mission avance selon un parcours lisible, avec des étapes utiles et des décisions partagées.</p>
            </div>
            <div className="method-roadmap" data-reveal>
              {method.map(([number, title, text, Icon]) => <article key={number}><span className="method-number">{number}</span><span className="method-icon"><Icon/></span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section digital-section" id="digital">
          <div className="container digital-layout">
            <div className="digital-copy" data-reveal>
              <span className="eyebrow eyebrow-gold">Solutions digitales</span>
              <h2>Des solutions digitales adaptées à votre activité</h2>
              <p>Nous concevons des outils simples et personnalisés pour faciliter la gestion, améliorer votre image et réduire les tâches répétitives.</p>
              <div className="digital-list">{digitalSolutions.map(([label, Icon]) => <span key={label}><Icon/>{label}</span>)}</div>
              <Link className="button gold-button" href="/contact?service=Digitalisation">Parler de votre besoin digital <ArrowRight/></Link>
            </div>
            <div className="digital-stage" data-reveal aria-label="Exemples de supports digitaux professionnels" role="img">
              <div className="device-laptop">
                <div className="device-bar"><i/><i/><i/><small>Votre activité, mieux structurée</small></div>
                <div className="device-page"><span className="device-logo">L</span><div><small>Une présence claire</small><strong>Des outils au service de votre organisation</strong><span className="device-line wide"/><span className="device-line"/></div></div>
                <div className="device-cards"><span><Laptop/>Site professionnel</span><span><Workflow/>Processus simplifiés</span></div>
              </div>
              <div className="device-tablet"><span className="device-tablet-title">Documents &amp; suivi</span>{["Centraliser", "Automatiser", "Piloter"].map((item, index) => <span key={item}><i>{index + 1}</i>{item}<Check/></span>)}</div>
              <span className="digital-orbit" aria-hidden="true"/>
            </div>
          </div>
        </section>

        <section className="section training-section" id="formations">
          <div className="container training-layout">
            <div className="training-copy" data-reveal>
              <span className="eyebrow eyebrow-gold">Formation professionnelle</span>
              <h2>Développez des compétences directement applicables</h2>
              <p>Des programmes conçus pour transformer les connaissances en gestes professionnels, grâce à la pratique et à l’accompagnement.</p>
              <div className="domain-pills">{trainingDomains.map((domain) => <span key={domain}>{domain}</span>)}</div>
              <Link className="button primary" href="/formations">Découvrir les formations <ArrowRight/></Link>
            </div>
            <div className="training-visual" data-reveal>
              <div className="training-photo"><Image src="/images/lida-training.jpg" alt="Formatrice présentant des données à un groupe de professionnels" width={1600} height={900} unoptimized sizes="(max-width: 900px) 90vw, 44vw"/></div>
              <div className="training-benefits-card"><span className="training-benefits-title"><BookOpenCheck/>Une expérience complète</span><div>{trainingBenefits.map((benefit) => <span key={benefit}><Check/>{benefit}</span>)}</div></div>
              <span className="training-badge"><GraduationCap/><span><strong>Apprendre</strong><small>Pratiquer • Appliquer</small></span></span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="a-propos">
          <div className="container about-layout">
            <div className="about-copy" data-reveal>
              <span className="eyebrow eyebrow-gold">À propos de LIDA</span>
              <h2>Votre partenaire pour structurer, moderniser et développer votre activité</h2>
              <p>LIDA Solutions &amp; Consulting est un cabinet marocain spécialisé dans l’accompagnement des entreprises, la gestion, la digitalisation, les systèmes de management ISO et la formation professionnelle.</p>
              <p>Notre mission est de proposer des solutions concrètes, accessibles et adaptées aux besoins réels de chaque client.</p>
              <Link href="/a-propos" className="button ghost-button">Découvrir notre approche <ArrowRight/></Link>
            </div>
            <div className="about-panel" data-reveal>
              <span className="about-panel-mark">L</span>
              <div><small>Solutions &amp; Consulting</small><strong>Une expertise transversale au service de vos priorités.</strong></div>
              <span className="about-panel-line"/>
              <div className="about-values">{[[Building2, "Entreprise"], [Handshake, "Proximité"], [ShieldCheck, "Rigueur"], [Target, "Résultats"]].map(([Icon, label]) => {const ValueIcon = Icon as LucideIcon; return <span key={label as string}><ValueIcon/>{label as string}</span>;})}</div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-halo" aria-hidden="true"/>
          <div className="container cta-inner" data-reveal>
            <div><span className="eyebrow eyebrow-gold">Diagnostic offert</span><h2>Parlons de votre activité et de vos objectifs</h2><p>Présentez-nous votre besoin afin d’identifier les premières actions à mettre en place.</p></div>
            <div className="cta-actions"><Link href="/contact?service=Diagnostic" className="button gold-button">Demander un diagnostic gratuit <ArrowRight/></Link>{siteConfig.whatsappNumber ? <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Bonjour, je souhaite obtenir plus d’informations sur les services de LIDA Solutions & Consulting.")}`} target="_blank" rel="noreferrer" className="button ghost-button"><MessageCircle/>Contacter sur WhatsApp</a> : <a href={`mailto:${siteConfig.email}`} className="button ghost-button"><Mail/>Nous contacter par e-mail</a>}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal><span className="eyebrow eyebrow-gold">Contact</span><h2>Présentez-nous votre projet</h2><p>Un premier échange nous permettra de comprendre votre besoin et de vous orienter vers le bon accompagnement.</p><div className="contact-points"><span><MapPin/><span><small>Localisation</small><strong>{siteConfig.location}</strong></span></span><a href={`mailto:${siteConfig.email}`}><Mail/><span><small>E-mail</small><strong>{siteConfig.email}</strong></span></a><span><Building2/><span><small>Intervention</small><strong>Au Maroc et à distance</strong></span></span></div></div>
            <div data-reveal><ContactForm/></div>
          </div>
        </section>
      </main>
      <Footer/>
      <WhatsApp/>
    </>
  );
}
