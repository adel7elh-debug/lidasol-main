import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileWarning,
  Goal,
  GraduationCap,
  Leaf,
  Mail,
  Map,
  Network,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  TriangleAlert,
  X,
} from "lucide-react";
import { IsoInteractiveGuide } from "@/app/_components/IsoInteractiveGuide";
import { CONTACT_EMAIL, createWhatsAppUrl, PHONE_DISPLAY, SITE_URL, whatsappMessages } from "@/app/_lib/site";
import styles from "./iso.module.css";

export const metadata: Metadata = {
  title: "Guide sectoriel ISO 9001, ISO 14001 & ISO 45001",
  description: "Explorez les bénéfices des normes ISO pour 23 secteurs et identifiez les premières actions pour structurer votre organisation avec LIDA.",
  alternates: { canonical: "/iso" },
  openGraph: {
    title: "Guide sectoriel ISO 9001, ISO 14001 & ISO 45001 | LIDA",
    description: "Un guide interactif pour comprendre, prioriser et préparer votre démarche ISO selon votre secteur.",
    url: "/iso",
    images: [{ url: "/photos/services/diagnostic-iso.webp", width: 1200, height: 800, alt: "Équipe réunie autour d’un diagnostic ISO" }],
  },
};

const standards = [
  {
    label: "ISO 9001",
    title: "Management de la qualité",
    text: "Satisfaction client, approche processus, réduction des non-conformités et amélioration continue.",
    icon: ClipboardCheck,
  },
  {
    label: "ISO 14001",
    title: "Management environnemental",
    text: "Maîtrise des impacts environnementaux, conformité réglementaire, réduction des déchets et utilisation responsable des ressources.",
    icon: Leaf,
  },
  {
    label: "ISO 45001",
    title: "Santé et sécurité au travail",
    text: "Prévention des accidents, maîtrise des risques professionnels et développement d’une véritable culture de sécurité.",
    icon: ShieldCheck,
  },
  {
    label: "QHSE",
    title: "Système intégré",
    text: "Une structure harmonisée, une documentation commune et un pilotage plus simple de la qualité, de l’environnement et de la sécurité.",
    icon: Network,
  },
] as const;

const roadmap = [
  { number: "01", title: "Diagnostic", text: "État des lieux, analyse de maturité, identification des écarts et définition des priorités.", icon: SearchCheck },
  { number: "02", title: "Construction", text: "Cartographie des processus, analyse des risques, procédures, objectifs et indicateurs KPI.", icon: Route },
  { number: "03", title: "Déploiement", text: "Formation des équipes, application sur le terrain, collecte des preuves et suivi des actions.", icon: GraduationCap },
  { number: "04", title: "Audit et certification", text: "Audit interne, audit blanc, traitement des écarts et préparation à l’audit de certification.", icon: FileCheck2 },
] as const;

const tools = [
  { title: "Politique Qualité", text: "Formalise les engagements client, les objectifs et les axes d’amélioration.", icon: Goal },
  { title: "Politique Environnement", text: "Traduit les engagements de prévention et de maîtrise des impacts.", icon: Leaf },
  { title: "Politique SST", text: "Cadre les engagements de prévention et de protection des travailleurs.", icon: ShieldCheck },
  { title: "Analyse SWOT / PESTEL", text: "Met en évidence les enjeux internes, externes et les parties intéressées.", icon: Sparkles },
  { title: "Registre des risques", text: "Priorise les risques, les opportunités, les responsables et les mesures.", icon: TriangleAlert },
  { title: "Tableau de bord KPI", text: "Relie les objectifs à des indicateurs lisibles et à des décisions suivies.", icon: BarChart3 },
  { title: "Plan d’action", text: "Clarifie les actions, responsables, délais, preuves et statuts.", icon: Target },
  { title: "Programme d’audit", text: "Planifie les audits selon la criticité et la maturité des processus.", icon: ClipboardCheck },
  { title: "Fiche de non-conformité", text: "Structure la correction, l’analyse des causes et l’action corrective.", icon: FileWarning },
  { title: "Cartographie des processus", text: "Donne une vue partagée des flux, interactions et responsabilités.", icon: Map },
] as const;

const currentSituation = [
  "Processus informels",
  "Réclamations peu analysées",
  "Documentation dispersée",
  "Risques mal suivis",
  "Absence d’indicateurs fiables",
];

const improvedSituation = [
  "Processus maîtrisés",
  "Responsabilités clairement définies",
  "Traitement structuré des non-conformités",
  "KPI et tableaux de bord opérationnels",
  "Plan de prévention actif",
  "Image plus crédible auprès des clients et partenaires",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Accompagnement ISO 9001, ISO 14001 et ISO 45001",
  description: "Diagnostic, construction du système de management, déploiement, audit interne et préparation à la certification ISO.",
  provider: {
    "@type": "ProfessionalService",
    name: "LIDA Solutions & Consulting",
    url: SITE_URL,
    areaServed: { "@type": "Country", name: "Maroc" },
  },
  url: `${SITE_URL}/iso`,
  serviceType: ["ISO 9001", "ISO 14001", "ISO 45001", "QHSE"],
};

export default function IsoPage() {
  return (
    <main className={styles.isoPage}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />

      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/photos/services/diagnostic-iso.webp"
          alt="Équipe en atelier autour d’un diagnostic ISO"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroLayout}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroLabel}>Guide interactif ISO</p>
            <h1>Guide sectoriel ISO 9001, ISO 14001 &amp; ISO 45001</h1>
            <p>Choisissez votre secteur, découvrez les bénéfices des normes ISO et identifiez les premières actions à mettre en place pour structurer durablement votre organisation.</p>
            <div className={styles.heroActions}>
              <a className={styles.goldButton} href={createWhatsAppUrl(whatsappMessages.iso)} target="_blank" rel="noreferrer">Demander un diagnostic gratuit <ArrowRight aria-hidden="true" /></a>
              <a className={styles.ghostButton} href="#guide-sectoriel">Explorer les secteurs</a>
            </div>
          </div>

          <aside className={styles.heroStats} aria-label="Ce que couvre le guide">
            <p>Ce que couvre le guide</p>
            <div>
              <span><strong>23</strong><small>Secteurs d’activité</small></span>
              <span><strong>100+</strong><small>Bénéfices identifiés</small></span>
              <span><strong>200+</strong><small>KPI documentés</small></span>
              <span><strong>5</strong><small>Parties complémentaires</small></span>
            </div>
          </aside>
        </div>
      </section>

      <IsoInteractiveGuide>

      <section className={styles.standardsSection} aria-labelledby="standards-title">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Comprendre les normes</p>
            <h2 id="standards-title">Des systèmes de management au service de votre performance</h2>
            <p>Chaque référentiel répond à un enjeu précis. Leur structure commune permet aussi de les piloter dans un seul système cohérent.</p>
          </div>
          <div className={styles.standardGrid}>
            {standards.map(({ label, title, text, icon: Icon }) => (
              <article key={label}>
                <span><Icon aria-hidden="true" /></span>
                <small>{label}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </IsoInteractiveGuide>

      <section className={styles.comparisonSection} aria-labelledby="comparison-title">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Avant / après ISO</p>
            <h2 id="comparison-title">Passer d’une organisation réactive à un pilotage maîtrisé</h2>
          </div>
          <div className={styles.comparisonGrid}>
            <article className={styles.beforeCard}>
              <div><X aria-hidden="true" /><h3>Situation actuelle</h3></div>
              <ul>{currentSituation.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}</ul>
            </article>
            <article className={styles.afterCard}>
              <div><Check aria-hidden="true" /><h3>Après l’accompagnement ISO</h3></div>
              <ul>{improvedSituation.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.roadmapSection} aria-labelledby="roadmap-title">
        <div className="container">
          <div className={`${styles.sectionIntro} ${styles.lightIntro}`}>
            <p className={styles.eyebrow}>Accompagnement</p>
            <h2 id="roadmap-title">Notre roadmap de mise en place ISO</h2>
            <p>Une progression lisible, depuis l’état des lieux jusqu’à la préparation de l’audit de certification.</p>
          </div>
          <ol className={styles.roadmap}>
            {roadmap.map(({ number, title, text, icon: Icon }) => (
              <li key={number}>
                <span className={styles.roadmapIcon}><Icon aria-hidden="true" /></span>
                <small>{number}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.toolsSection} aria-labelledby="tools-title">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Boîte à outils</p>
            <h2 id="tools-title">Des outils professionnels inclus</h2>
            <p>Les livrables sont adaptés à votre taille, à vos risques et aux pratiques que vos équipes devront réellement appliquer.</p>
          </div>
          <div className={styles.toolsGrid}>
            {tools.map(({ title, text, icon: Icon }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.consultantSection} aria-labelledby="consultant-title">
        <div className={`container ${styles.consultantLayout}`}>
          <div className={styles.consultantImage}>
            <Image src="/photos/pages/consultant.webp" alt="Atelier professionnel animé autour d’outils de management" fill sizes="(max-width: 900px) 100vw, 44vw" />
          </div>
          <div className={styles.consultantCopy}>
            <p className={styles.eyebrow}>Votre consultant</p>
            <h2 id="consultant-title">Adel El Haddioui</h2>
            <p>Consultant Senior QHSE, Auditeur ISO 9001, ISO 14001 et ISO 45001, formateur professionnel et expert en systèmes de management.</p>
            <div className={styles.badges}>
              {["ISO 9001", "ISO 14001", "ISO 45001", "Audit interne", "Formation QHSE", "Diagnostic gratuit"].map((badge) => <span key={badge}><Check aria-hidden="true" />{badge}</span>)}
            </div>
            <Link className={styles.textLink} href="/a-propos/adel-el-haddioui">Découvrir votre interlocuteur <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <Activity className={styles.ctaDecoration} aria-hidden="true" />
        <div className="container">
          <p>Diagnostic offert</p>
          <h2>Identifiez vos écarts ISO en 30 minutes</h2>
          <span>Échangeons sur votre organisation afin d’identifier vos priorités et de construire une première feuille de route d’amélioration.</span>
          <div>
            <a className={styles.goldButton} href={createWhatsAppUrl(whatsappMessages.iso)} target="_blank" rel="noreferrer">WhatsApp : {PHONE_DISPLAY} <ArrowRight aria-hidden="true" /></a>
            <a className={styles.ghostButton} href={`mailto:${CONTACT_EMAIL}`}><Mail aria-hidden="true" /> Envoyer un email</a>
          </div>
        </div>
      </section>
    </main>
  );
}
