const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Digitalisation", href: "#digitalisation" },
  { label: "Organisation", href: "#organisation" },
  { label: "ISO", href: "#iso" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#contact" },
];

const heroPillars = [
  { icon: "CS", label: "Conseil" },
  { icon: "DG", label: "Digitalisation" },
  { icon: "OR", label: "Organisation" },
  { icon: "ISO", label: "ISO" },
  { icon: "FP", label: "Formation" },
];

const services = [
  {
    icon: "01",
    title: "Conseil & accompagnement",
    text: "Nous accompagnons les entrepreneurs, PME, cabinets, centres de formation et sociétés dans la structuration de leurs projets et le développement de leur activité.",
    points: ["Diagnostic de situation", "Conseil stratégique", "Plan d'action", "Suivi opérationnel"],
  },
  {
    icon: "02",
    title: "Digitalisation des activités",
    text: "Nous aidons les entreprises à passer d'une gestion manuelle à des outils digitaux simples, efficaces et adaptés à leur activité.",
    points: ["Sites web professionnels", "Applications de gestion", "Tableaux de bord", "Automatisation des tâches"],
  },
  {
    icon: "03",
    title: "Gestion & organisation",
    text: "Nous mettons en place des méthodes de gestion claires pour améliorer l'organisation interne, la productivité et la maîtrise des activités.",
    points: ["Procédures internes", "Organisation administrative", "Suivi des indicateurs", "Gestion documentaire"],
  },
  {
    icon: "04",
    title: "Accompagnement ISO",
    text: "Nous accompagnons les organisations dans la mise en place des systèmes de management ISO 9001, ISO 14001 et ISO 45001.",
    points: ["Diagnostic ISO", "Documentation", "Formation", "Audit interne"],
  },
  {
    icon: "05",
    title: "Formation professionnelle",
    text: "Nous proposons des formations pratiques adaptées aux besoins du marché et aux objectifs des particuliers et des entreprises.",
    points: ["Formations en gestion", "QHSE", "Comptabilité", "Digitalisation et outils professionnels"],
  },
];

const reasons = [
  "Approche simple et pratique",
  "Solutions adaptées à votre activité",
  "Accompagnement orienté résultats",
  "Vision globale : conseil, digitalisation, organisation, ISO et formation",
];

const digitalCards = [
  "Site web vitrine professionnel",
  "Application de gestion",
  "Dashboard & reporting",
  "Automatisation Excel / web",
  "Gestion des clients, ventes et documents",
];

const before = [
  "Informations dispersées",
  "Suivi manuel",
  "Absence d'indicateurs",
  "Difficulté à prendre des décisions",
  "Organisation non formalisée",
];

const after = [
  "Processus clairs",
  "Tableaux de bord",
  "Documents organisés",
  "Suivi des actions",
  "Décisions basées sur des données",
];

const isoCards = [
  {
    title: "ISO 9001",
    text: "Qualité, satisfaction client, processus et amélioration continue.",
  },
  {
    title: "ISO 14001",
    text: "Environnement, conformité, déchets, énergie et réduction des impacts.",
  },
  {
    title: "ISO 45001",
    text: "Santé et sécurité au travail, prévention des accidents et maîtrise des risques professionnels.",
  },
];

const trainingCards = [
  "Gestion administrative",
  "Comptabilité & fiscalité",
  "QHSE",
  "ISO",
  "Digitalisation",
  "Excel & outils de gestion",
];

const roadmap = [
  "Écoute du besoin",
  "Diagnostic de la situation",
  "Proposition de solution",
  "Mise en place opérationnelle",
  "Suivi et amélioration",
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Accueil LIDA Solutions & Consulting">
        <span className="brand-mark">L</span>
        <span>
          <strong>LIDA Solutions & Consulting</strong>
          <small>Conseil • Digitalisation • Organisation</small>
        </span>
      </a>
      <nav aria-label="Navigation principale">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">Diagnostic gratuit</a>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustration corporate LIDA">
      <div className="curve curve-blue" />
      <div className="curve curve-gold" />
      <div className="city-card">
        <div className="city-skyline" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="growth-line" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="visual-caption">
          <strong>Business growth</strong>
          <span>Marrakech, Maroc</span>
        </div>
      </div>
      <div className="floating-icons">
        {heroPillars.map((pillar) => (
          <span key={pillar.label}>
            <b>{pillar.icon}</b>
            <small>{pillar.label}</small>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-anchor" id="accueil">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">LIDA Solutions & Consulting</p>
          <h1>Des solutions intelligentes pour développer votre activité</h1>
          <p className="hero-lead">
            LIDA Solutions & Consulting accompagne les entreprises, porteurs de projets et professionnels dans la
            structuration, la digitalisation, l'organisation et l'amélioration de leurs activités.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#contact">Demander un diagnostic gratuit</a>
            <a className="btn btn-secondary" href="#services">Découvrir nos services</a>
          </div>
          <p className="hero-note">Un accompagnement simple, efficace et orienté résultats.</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section section-anchor" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Services principaux</p>
          <h2>Nos domaines d'intervention</h2>
          <p>Une vision globale pour passer de l'idée à l'organisation, puis de l'organisation à la performance.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="round-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Pourquoi LIDA</p>
          <h2>Pourquoi choisir LIDA Solutions & Consulting ?</h2>
        </div>
        <div className="reason-grid">
          {reasons.map((reason, index) => (
            <article className="reason-card" key={reason}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalSection() {
  return (
    <section className="section split-section section-anchor" id="digitalisation">
      <div className="container split-grid">
        <div>
          <p className="eyebrow">Digitalisation</p>
          <h2>Digitaliser votre activité sans complexité</h2>
          <p className="section-lead">
            Nous transformons vos besoins métiers en outils simples : site web, plateforme, application de gestion,
            tableaux de bord ou automatisation.
          </p>
          <a className="btn btn-primary" href="#contact">Discuter de mon projet digital</a>
        </div>
        <div className="mini-card-grid">
          {digitalCards.map((card) => (
            <article className="mini-card" key={card}>
              <span className="dot-icon" />
              <h3>{card}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrganisationSection() {
  return (
    <section className="section section-anchor" id="organisation">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Gestion & organisation</p>
          <h2>Structurer votre activité pour mieux piloter</h2>
        </div>
        <div className="comparison-grid">
          <article className="comparison-card">
            <h3>Avant</h3>
            <ul>
              {before.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="comparison-card highlight">
            <h3>Après LIDA</h3>
            <ul>
              {after.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function IsoSection() {
  return (
    <section className="section iso-section section-anchor" id="iso">
      <div className="container iso-grid">
        <div>
          <p className="eyebrow">Accompagnement ISO</p>
          <h2>Accompagnement ISO 9001, ISO 14001 & ISO 45001</h2>
          <p className="section-lead">
            L'ISO n'est pas seulement une certification. C'est un outil pour structurer l'entreprise, maîtriser les
            risques et améliorer la performance.
          </p>
          <a className="btn btn-secondary light" href="#contact">Faire un diagnostic ISO</a>
        </div>
        <div className="iso-card-grid">
          {isoCards.map((card) => (
            <article className="iso-card" key={card.title}>
              <span className="round-icon small">{card.title.replace("ISO ", "")}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <section className="section section-anchor" id="formation">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Formation professionnelle</p>
          <h2>Des formations pratiques pour développer les compétences</h2>
          <p>Nos formations sont orientées terrain, avec des cas pratiques, outils simples et supports exploitables.</p>
        </div>
        <div className="training-grid">
          {trainingCards.map((card) => (
            <article className="training-card" key={card}>
              <span className="dot-icon" />
              <h3>{card}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section className="section method-section">
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Méthode LIDA</p>
          <h2>Notre méthode d'accompagnement</h2>
        </div>
        <div className="roadmap">
          {roadmap.map((step, index) => (
            <article className="roadmap-card" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="cta-section section-anchor" id="contact">
      <div className="container cta-card">
        <p className="eyebrow">Diagnostic gratuit</p>
        <h2>Vous voulez développer votre activité avec une solution claire ?</h2>
        <p>
          Contactez LIDA Solutions & Consulting pour un premier diagnostic et une feuille de route adaptée à votre
          situation.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="https://wa.me/212663667848" target="_blank" rel="noreferrer">
            WhatsApp : +212 663 667 848
          </a>
          <a className="btn btn-secondary light" href="mailto:contact@lidasol.com">
            Demander un accompagnement
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>LIDA Solutions & Consulting</strong>
          <p>Conseil • Digitalisation • Organisation • ISO • Formation</p>
        </div>
        <div>
          <p>Marrakech, Maroc</p>
          <p>© 2026 LIDA Solutions & Consulting</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <WhySection />
        <DigitalSection />
        <OrganisationSection />
        <IsoSection />
        <TrainingSection />
        <MethodSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
