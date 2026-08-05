import type {LucideIcon} from "lucide-react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Gauge,
  GraduationCap,
  Handshake,
  Laptop,
  LayoutDashboard,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  MonitorCog,
  Network,
  PieChart,
  Route,
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

const method = [
  ["Analyse de votre besoin", "Comprendre votre activité, vos difficultés et vos objectifs."],
  ["Diagnostic de la situation", "Identifier les écarts, les risques et les opportunités d’amélioration."],
  ["Proposition adaptée", "Construire une solution réaliste, claire et adaptée à vos moyens."],
  ["Mise en œuvre et suivi", "Vous accompagner dans l’application des actions et mesurer les résultats."],
];

const digitalSolutions: [string, LucideIcon][] = [
  ["Création de sites vitrines", Laptop],
  ["Applications de gestion", LayoutDashboard],
  ["Digitalisation des documents", FileCheck2],
  ["Automatisation des processus", Workflow],
  ["Tableaux de bord", BarChart3],
  ["Solutions personnalisées pour PME", MonitorCog],
];

const trainingDomains = ["Gestion administrative", "Comptabilité et fiscalité", "Paie et gestion sociale", "Contrôle de gestion", "QHSE", "Normes ISO", "Excel et Sage"];
const trainingBenefits = ["Formation 100 % en ligne", "Séances en direct", "Enregistrements disponibles", "Cas pratiques", "Supports pédagogiques", "Attestation de formation"];
const reasons = ["Accompagnement personnalisé", "Approche pratique et opérationnelle", "Solutions adaptées à chaque entreprise", "Expertise multidisciplinaire", "Suivi avant, pendant et après la mission", "Interventions à distance et sur site"];

export default function HomePage() {
  return (
    <>
      <Header/>
      <ScrollReveal/>
      <main>
        <section className="hero" id="accueil">
          <div className="hero-orb hero-orb-one" aria-hidden="true"/>
          <div className="hero-orb hero-orb-two" aria-hidden="true"/>
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <span className="eyebrow"><Sparkles/> Conseil • Gestion • Digitalisation • Formation</span>
              <h1>Des <span>solutions intelligentes</span> pour développer votre activité</h1>
              <p>LIDA Solutions &amp; Consulting accompagne les entreprises, les entrepreneurs et les professionnels dans l’organisation, la digitalisation, la conformité et le développement de leurs activités.</p>
              <div className="hero-actions">
                <Link className="button primary" href="#services">Découvrir nos services <ArrowRight/></Link>
                <Link className="button secondary" href="/contact?service=Diagnostic">Demander un diagnostic gratuit</Link>
              </div>
              <div className="hero-trust" aria-label="Nos engagements">
                {[[Handshake, "Accompagnement personnalisé"], [Lightbulb, "Solutions adaptées"], [Target, "Approche orientée résultats"]].map(([Icon, label]) => {
                  const TrustIcon = Icon as LucideIcon;
                  return <span key={label as string}><TrustIcon/>{label as string}</span>;
                })}
              </div>
            </div>
            <div className="hero-visual" data-reveal aria-label="Illustration d’un tableau de bord de performance d’entreprise" role="img">
              <div className="hero-curve" aria-hidden="true"/>
              <div className="performance-panel">
                <div className="panel-top"><span><span className="status-dot"/>Performance globale</span><span>Vue d’ensemble</span></div>
                <div className="panel-metrics">
                  <div><small>Organisation</small><strong>Structurée</strong><span className="metric-up"><ChartNoAxesCombined/> Progression</span></div>
                  <div><small>Priorités</small><strong>Alignées</strong><span className="metric-up"><Target/> Objectifs</span></div>
                </div>
                <div className="chart-card">
                  <div className="chart-title"><span>Trajectoire de croissance</span><strong>Stratégie &amp; actions</strong></div>
                  <div className="chart-grid" aria-hidden="true"><i/><i/><i/><i/></div>
                  <div className="chart-line" aria-hidden="true"><span/><span/><span/><span/><span/></div>
                </div>
                <div className="panel-bottom"><span><CheckCircle2/> Diagnostic</span><span><Route/> Feuille de route</span><span><Gauge/> Suivi</span></div>
              </div>
              <div className="floating-card floating-card-one"><PieChart/><span><small>Décisions</small><strong>Pilotées par les données</strong></span></div>
              <div className="floating-card floating-card-two"><Building2/><span><small>Entreprise</small><strong>Plus agile</strong></span></div>
            </div>
          </div>
          <div className="hero-transition" aria-hidden="true"/>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading" data-reveal><span className="eyebrow">Notre expertise</span><h2>Nos domaines d’intervention</h2><p>Des solutions complémentaires pour structurer, moderniser et développer votre activité.</p></div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article className="service-card" id={service.slug} key={service.slug} data-reveal style={{"--delay": `${index * 70}ms`} as React.CSSProperties}>
                    <div className="service-card-top"><span className="service-icon"><Icon/></span><span className="service-number">0{index + 1}</span></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>{service.points.map((point) => <li key={point}><Check/>{point}</li>)}</ul>
                    <Link className="card-link" href={`/contact?service=${encodeURIComponent(service.title)}`}>En savoir plus <ArrowRight/></Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container why-layout">
            <div className="why-visual" data-reveal aria-label="Illustration de la méthode d’accompagnement LIDA" role="img">
              <div className="why-visual-main"><BriefcaseBusiness/><span>Une vision claire</span><strong>Des actions qui comptent</strong></div>
              <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
              <div className="mini-result mini-result-one"><CheckCircle2/><span><strong>Sur mesure</strong><small>Selon vos priorités</small></span></div>
              <div className="mini-result mini-result-two"><ChartNoAxesCombined/><span><strong>Mesurable</strong><small>Des résultats suivis</small></span></div>
              <div className="mini-result mini-result-three"><Network/><span><strong>Transversal</strong><small>Une expertise globale</small></span></div>
            </div>
            <div className="why-copy" data-reveal>
              <span className="eyebrow">Pourquoi nous choisir ?</span>
              <h2>Un accompagnement simple, efficace et orienté résultats</h2>
              <p>Nous analysons les besoins réels de chaque client avant de proposer une solution adaptée à son activité, ses objectifs et ses ressources.</p>
              <div className="reason-grid">{reasons.map((reason) => <span key={reason}><CheckCircle2/>{reason}</span>)}</div>
              <Link className="button primary" href="/contact">Parler de votre projet <ArrowRight/></Link>
            </div>
          </div>
        </section>

        <section className="section method-section">
          <div className="container">
            <div className="section-heading section-heading-left" data-reveal><span className="eyebrow">Une démarche structurée</span><h2>Notre méthode d’accompagnement</h2><p>De la compréhension de votre besoin à la mesure des résultats, chaque étape reste claire et utile.</p></div>
            <div className="method-line" data-reveal>
              {method.map(([title, description], index) => <article key={title}><span className="method-number">{String(index + 1).padStart(2, "0")}</span><div className="method-dot"/><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section digital-section" id="digital">
          <div className="container digital-layout">
            <div className="digital-copy" data-reveal>
              <span className="eyebrow light-blue">Solutions digitales</span>
              <h2>Digitalisez votre activité avec des outils adaptés</h2>
              <p>Nous concevons des solutions digitales simples et personnalisées pour faciliter la gestion, améliorer l’image de votre entreprise et automatiser les tâches répétitives.</p>
              <div className="digital-list">{digitalSolutions.map(([label, Icon]) => <span key={label}><Icon/>{label}</span>)}</div>
              <Link className="button light" href="/contact?service=Digitalisation">Découvrir nos solutions digitales <ArrowRight/></Link>
            </div>
            <div className="dashboard-mockup" data-reveal aria-label="Maquette d’un tableau de bord de gestion" role="img">
              <div className="mockup-window"><div className="mockup-bar"><span/><span/><span/><small>Tableau de bord</small></div><div className="mockup-body"><aside><strong>L</strong><i/><i/><i/><i/></aside><div className="mockup-content"><div className="mockup-head"><span><small>Bonjour,</small><strong>Votre activité en un regard</strong></span><span className="mockup-report" aria-hidden="true">Rapport</span></div><div className="mockup-kpis"><span><small>Projets</small><strong>Actifs</strong><em>Suivi en direct</em></span><span><small>Processus</small><strong>Optimisés</strong><em>Gain de temps</em></span><span><small>Documents</small><strong>Centralisés</strong><em>Accès rapide</em></span></div><div className="mockup-chart"><div><small>Évolution de l’activité</small><strong>Indicateurs clés</strong></div><div className="mock-bars"><i/><i/><i/><i/><i/><i/><i/></div></div></div></div></div>
              <div className="mockup-chip"><Clock3/><span><strong>Automatisation</strong><small>Plus de temps pour l’essentiel</small></span></div>
            </div>
          </div>
        </section>

        <section className="section training-section" id="formations">
          <div className="container training-layout">
            <div className="training-copy" data-reveal>
              <span className="eyebrow">Formation professionnelle</span>
              <h2>Des formations professionnelles orientées vers la pratique</h2>
              <p>Nos programmes combinent apprentissage, études de cas, outils professionnels et accompagnement afin de faciliter l’application des compétences dans le monde du travail.</p>
              <div className="domain-pills">{trainingDomains.map((domain) => <span key={domain}>{domain}</span>)}</div>
              <Link className="button primary" href="/formations">Découvrir les formations <ArrowRight/></Link>
            </div>
            <div className="training-card" data-reveal>
              <div className="training-card-icon"><BookOpenCheck/></div>
              <span className="eyebrow">Une expérience complète</span>
              <h3>Apprendre, pratiquer, appliquer</h3>
              <div className="training-benefits">{trainingBenefits.map((benefit) => <span key={benefit}><Check/>{benefit}</span>)}</div>
              <div className="training-note"><GraduationCap/><span><strong>Des compétences concrètes</strong><small>pour progresser dans le monde professionnel</small></span></div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="a-propos">
          <div className="container about-layout">
            <div className="about-copy" data-reveal><span className="eyebrow">À propos</span><h2>À propos de LIDA Solutions &amp; Consulting</h2><p>LIDA Solutions &amp; Consulting est un cabinet marocain spécialisé dans l’accompagnement des entreprises, la gestion, la digitalisation, les systèmes de management ISO et la formation professionnelle.</p><p>Notre mission est de proposer des solutions concrètes, accessibles et adaptées aux besoins réels des entreprises, des entrepreneurs et des professionnels.</p><Link href="/a-propos" className="text-link">Découvrir notre approche <ArrowRight/></Link></div>
            <div className="value-grid" data-reveal>{[[BriefcaseBusiness, "Expertise multidisciplinaire"], [Handshake, "Approche personnalisée"], [ShieldCheck, "Solutions professionnelles"], [Target, "Accompagnement orienté résultats"]].map(([Icon, label]) => { const ValueIcon = Icon as LucideIcon; return <article key={label as string}><ValueIcon/><strong>{label as string}</strong></article>; })}</div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-shape" aria-hidden="true"/>
          <div className="container cta-inner" data-reveal>
            <div><span className="eyebrow gold">Votre prochaine étape</span><h2>Vous avez un projet ou une difficulté à résoudre ?</h2><p>Échangeons sur vos besoins et identifions ensemble la solution la plus adaptée à votre activité.</p></div>
            <div className="cta-actions"><Link href="/contact?service=Diagnostic" className="button light">Demander un diagnostic gratuit <ArrowRight/></Link>{siteConfig.whatsappNumber ? <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Bonjour, je souhaite obtenir plus d’informations sur les services de LIDA Solutions & Consulting.")}`} target="_blank" rel="noreferrer" className="button gold-button"><MessageCircle/>Nous contacter sur WhatsApp</a> : <a href={`mailto:${siteConfig.email}`} className="button gold-button"><Mail/>Nous contacter par e-mail</a>}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal><span className="eyebrow">Contact</span><h2>Présentez-nous votre projet</h2><p>Un premier échange nous permettra de comprendre votre besoin et de vous orienter vers le bon accompagnement.</p><div className="contact-points"><span><MapPin/><span><small>Localisation</small><strong>{siteConfig.location}</strong></span></span><a href={`mailto:${siteConfig.email}`}><Mail/><span><small>E-mail</small><strong>{siteConfig.email}</strong></span></a><span><Clock3/><span><small>Horaires de contact</small><strong>{siteConfig.contactHours}</strong></span></span></div></div>
            <div data-reveal><ContactForm/></div>
          </div>
        </section>
      </main>
      <Footer/>
      <WhatsApp/>
    </>
  );
}
