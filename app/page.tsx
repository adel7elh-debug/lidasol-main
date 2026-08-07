const services = [
  {
    number: "01",
    title: "Conseil & accompagnement",
    description:
      "Des décisions plus claires, une feuille de route réaliste et un suivi de proximité pour faire avancer vos projets.",
    tags: ["Diagnostic", "Stratégie", "Pilotage"],
  },
  {
    number: "02",
    title: "Digitalisation des activités",
    description:
      "Nous transformons les tâches répétitives en processus simples, connectés et mesurables.",
    tags: ["Processus", "Automatisation", "Tableaux de bord"],
  },
  {
    number: "03",
    title: "Gestion & organisation",
    description:
      "Une organisation lisible, des responsabilités définies et des indicateurs qui facilitent le pilotage.",
    tags: ["Organisation", "KPI", "Performance"],
  },
  {
    number: "04",
    title: "Accompagnement ISO",
    description:
      "De l'état des lieux à la certification, nous structurons votre système de management avec vos équipes.",
    tags: ["ISO 9001", "ISO 14001", "ISO 45001"],
  },
  {
    number: "05",
    title: "Formation professionnelle",
    description:
      "Des formations pratiques, adaptées à votre secteur et directement applicables sur le terrain.",
    tags: ["QHSE", "Management", "Sur mesure"],
  },
];

const serviceDetails = [
  {
    id: "conseil",
    number: "01",
    mark: "◎",
    shortTitle: "Conseil",
    image: "/photos/conseil.jpg",
    title: "Conseil & accompagnement",
    headline: "Transformez vos ambitions en décisions concrètes.",
    description:
      "Nous prenons le temps de comprendre votre activité, puis nous construisons avec vous une trajectoire claire, réaliste et adaptée à vos moyens.",
    benefits: [
      "Diagnostic stratégique et opérationnel",
      "Priorisation des projets et plans d’action",
      "Accompagnement du dirigeant et des équipes",
      "Suivi des décisions et des résultats",
    ],
    deliverables: ["Diagnostic", "Feuille de route", "Plan d’action", "Comité de suivi"],
    result: "Une vision claire et des priorités partagées.",
  },
  {
    id: "digitalisation",
    number: "02",
    mark: "⌘",
    shortTitle: "Digital",
    image: "/photos/digitalisation.jpg",
    title: "Digitalisation des activités",
    headline: "Passez moins de temps à gérer. Plus de temps à développer.",
    description:
      "Nous simplifions vos opérations avant de les digitaliser, afin que la technologie serve réellement vos équipes et votre performance.",
    benefits: [
      "Analyse des processus et des tâches répétitives",
      "Automatisation des circuits de travail",
      "Tableaux de bord et suivi en temps réel",
      "Choix des outils et accompagnement à l’adoption",
    ],
    deliverables: ["Audit digital", "Workflows", "Dashboard", "Guide utilisateur"],
    result: "Moins d’erreurs, plus de fluidité et de visibilité.",
  },
  {
    id: "organisation",
    number: "03",
    mark: "▦",
    shortTitle: "Gestion",
    image: "/photos/organisation.jpg",
    title: "Gestion & organisation",
    headline: "Une organisation qui avance sans dépendre de l’improvisation.",
    description:
      "Nous clarifions qui fait quoi, comment et avec quels indicateurs pour créer une organisation plus autonome, lisible et performante.",
    benefits: [
      "Organisation, rôles et responsabilités",
      "Cartographie et optimisation des processus",
      "Procédures, outils de gestion et routines",
      "Indicateurs de performance et pilotage",
    ],
    deliverables: ["Organigramme", "Processus", "Procédures", "KPI"],
    result: "Des équipes alignées et une activité mieux maîtrisée.",
  },
  {
    id: "iso",
    number: "04",
    mark: "ISO",
    shortTitle: "ISO",
    image: "/photos/iso.jpg",
    title: "Accompagnement ISO",
    headline: "Faites de la certification un vrai levier de performance.",
    description:
      "De l’état des lieux à l’audit de certification, nous construisons un système de management utile, compris et appliqué sur le terrain.",
    benefits: [
      "Diagnostic et analyse des écarts",
      "Construction du système documentaire",
      "Formation, déploiement et audit interne",
      "Audit blanc et préparation à la certification",
    ],
    deliverables: ["ISO 9001", "ISO 14001", "ISO 45001", "Audit blanc"],
    result: "Une certification préparée avec méthode et sérénité.",
  },
  {
    id: "formation",
    number: "05",
    mark: "△",
    shortTitle: "Formation",
    image: "/photos/formation.jpg",
    title: "Formation professionnelle",
    headline: "Développez des compétences qui s’appliquent dès demain.",
    description:
      "Nos formations sont conçues autour de vos réalités métier, avec des cas pratiques, des outils réutilisables et une pédagogie participative.",
    benefits: [
      "Programmes personnalisés selon vos objectifs",
      "Formation QHSE, management et organisation",
      "Ateliers pratiques et mises en situation",
      "Évaluation des acquis et plan de progrès",
    ],
    deliverables: ["Sur mesure", "Présentiel", "Ateliers", "Évaluation"],
    result: "Des équipes plus compétentes, autonomes et engagées.",
  },
];

const whatsappUrl =
  "https://wa.me/212663667848?text=Bonjour%20LIDA%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20besoin%20d%27accompagnement.";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navigation principale">
        <div className="container nav-main">
          <a className="brand" href="#accueil" aria-label="LIDA — Accueil">
            <span className="brand-mark" aria-hidden="true">L</span>
            <span className="brand-name">
              <strong>LIDA</strong>
              <small>Solutions & Consulting</small>
            </span>
          </a>

          <div className="nav-actions">
            <a href="#methode">Méthode</a>
            <a href="#contact">Contact</a>
            <a className="button button-small button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
              Parlons de votre projet
            </a>
          </div>
        </div>

        <div className="service-tabs-wrap">
          <div className="container service-tabs" aria-label="Nos cinq services">
            {serviceDetails.map((service) => (
              <a href={`#solution-${service.id}`} key={service.id}>
                <span>{service.number}</span>
                <strong>{service.shortTitle}</strong>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="hero" id="accueil">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Conseil · Organisation · Digitalisation · ISO</p>
            <h1>
              Des solutions <em>intelligentes</em> pour développer votre activité.
            </h1>
            <p className="hero-lead">
              LIDA accompagne les entreprises marocaines pour structurer leur organisation,
              digitaliser leurs opérations et obtenir des résultats durables.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
                Demander un diagnostic <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#expertises">
                Découvrir nos solutions <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="trust-row" aria-label="Nos engagements">
              <span><i aria-hidden="true">✓</i> Approche sur mesure</span>
              <span><i aria-hidden="true">✓</i> Solutions concrètes</span>
              <span><i aria-hidden="true">✓</i> Suivi de proximité</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Aperçu de l'accompagnement LIDA">
            {/* Direct asset URL avoids an unavailable runtime image-optimization route. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-main-photo" src="/photos/conseil.jpg" alt="" aria-hidden="true" />
            <div className="orbital orbital-one" aria-hidden="true" />
            <div className="orbital orbital-two" aria-hidden="true" />
            <div className="insight-card">
              <div className="insight-top">
                <span className="status-dot" />
                <span>Votre trajectoire de croissance</span>
                <strong>2026</strong>
              </div>
              <div className="metric-block">
                <span>Progression ciblée</span>
                <strong>+42%</strong>
                <small>exemple d’indicateur projet</small>
              </div>
              <div className="chart" aria-hidden="true">
                <div className="chart-line" />
                <span className="point point-a" />
                <span className="point point-b" />
                <span className="point point-c" />
                <span className="point point-d" />
              </div>
              <div className="progress-list">
                <div><span>Organisation</span><b><i style={{ width: "88%" }} /></b><strong>88%</strong></div>
                <div><span>Digitalisation</span><b><i style={{ width: "74%" }} /></b><strong>74%</strong></div>
                <div><span>Qualité</span><b><i style={{ width: "92%" }} /></b><strong>92%</strong></div>
              </div>
            </div>
            <div className="floating-note note-top">
              <span aria-hidden="true">◎</span>
              <div><strong>Diagnostic clair</strong><small>Priorités identifiées</small></div>
            </div>
            <div className="floating-note note-bottom">
              <span aria-hidden="true">↗</span>
              <div><strong>Résultats suivis</strong><small>Indicateurs utiles</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Chiffres clés">
        <div className="container signal-grid">
          <div><strong>5</strong><span>pôles d’expertise</span></div>
          <div><strong>23</strong><span>secteurs accompagnables</span></div>
          <div><strong>3</strong><span>référentiels ISO majeurs</span></div>
          <div><strong>1</strong><span>interlocuteur engagé</span></div>
        </div>
      </section>

      <section className="section services-section" id="expertises">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> Nos expertises</p>
              <h2>Un seul partenaire.<br /><em>Cinq leviers de performance.</em></h2>
            </div>
            <p>
              Nous combinons conseil, méthodes et outils pour répondre à vos enjeux réels — sans complexité inutile.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>
                <a className="service-arrow" href={`#solution-${serviceDetails[Number(service.number) - 1].id}`} aria-label={`Découvrir ${service.title}`}>↘</a>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="solutions-detail" aria-label="Détail de nos cinq solutions">
        {serviceDetails.map((service, index) => (
          <section
            className={`solution-section ${index % 2 === 1 ? "solution-section-alt" : ""}`}
            id={`solution-${service.id}`}
            key={service.id}
          >
            <div className="container solution-layout">
              <div className="solution-visual" aria-hidden="true">
                {/* Direct asset URL avoids an unavailable runtime image-optimization route. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="solution-photo"
                  src={service.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="solution-visual-grid" />
                <div className="solution-visual-top"><span>LIDA</span><strong>{service.number} / 05</strong></div>
                <div className="solution-mark">{service.mark}</div>
                <div className="solution-result"><small>Résultat recherché</small><strong>{service.result}</strong></div>
                <div className="solution-orbit" />
              </div>

              <div className="solution-copy">
                <p className="eyebrow eyebrow-dark"><span /> Solution {service.number}</p>
                <h2>{service.headline}</h2>
                <p className="solution-intro">{service.description}</p>
                <h3>{service.title}</h3>
                <ul className="solution-benefits">
                  {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                </ul>
                <div className="solution-deliverables">
                  {service.deliverables.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="text-link text-link-blue" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Échanger sur cette solution <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="section method-section" id="methode">
        <div className="container method-layout">
          <div className="method-intro">
            <p className="eyebrow eyebrow-dark"><span /> Notre méthode</p>
            <h2>De l’idée au résultat,<br /><em>sans perdre le terrain.</em></h2>
            <p>
              Une démarche courte, collaborative et orientée action. Vous gardez une vision claire de l’avancement à chaque étape.
            </p>
            <a className="button button-blue" href={whatsappUrl} target="_blank" rel="noreferrer">
              Évaluer mon besoin <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="steps-list">
            <li>
              <span>01</span>
              <div><small>Comprendre</small><h3>Diagnostic ciblé</h3><p>Nous clarifions vos enjeux, vos contraintes et les résultats attendus.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><small>Prioriser</small><h3>Feuille de route</h3><p>Nous transformons le diagnostic en actions réalistes, ordonnées et chiffrables.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><small>Déployer</small><h3>Mise en œuvre</h3><p>Nous construisons les outils avec vos équipes et accompagnons leur adoption.</p></div>
            </li>
            <li>
              <span>04</span>
              <div><small>Améliorer</small><h3>Mesure & ajustement</h3><p>Les indicateurs montrent les progrès et guident les décisions suivantes.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="outcomes-section">
        <div className="container outcomes-grid">
          <div className="outcome-title">
            <p className="eyebrow"><span /> Ce qui change</p>
            <h2>Moins de désordre.<br />Plus de maîtrise.</h2>
          </div>
          <div className="before-after before">
            <small>Avant</small>
            <ul>
              <li>Processus informels</li>
              <li>Informations dispersées</li>
              <li>Décisions sans indicateurs</li>
              <li>Responsabilités peu claires</li>
            </ul>
          </div>
          <div className="before-after after">
            <small>Avec LIDA</small>
            <ul>
              <li>Processus structurés</li>
              <li>Outils simples et partagés</li>
              <li>KPI utiles au pilotage</li>
              <li>Équipes alignées</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sectors-section">
        <div className="container sectors-inner">
          <p>Une approche adaptée à votre secteur</p>
          <div className="sectors-list" aria-label="Secteurs d'activité accompagnés">
            <span>Santé</span><i />
            <span>BTP</span><i />
            <span>Industrie</span><i />
            <span>Formation</span><i />
            <span>Transport</span><i />
            <span>Services</span>
          </div>
        </div>
      </section>

      <section className="section consultant-section">
        <div className="container consultant-card">
          <div className="consultant-monogram" aria-hidden="true">
            <span>AE</span>
            <small>QHSE</small>
          </div>
          <div className="consultant-copy">
            <p className="eyebrow eyebrow-dark"><span /> Votre consultant</p>
            <h2>Adel El Haddioui</h2>
            <p>
              Consultant senior QHSE, auditeur ISO 9001, ISO 14001 et ISO 45001, formateur professionnel et expert en systèmes de management.
            </p>
            <div className="credentials">
              <span>Audit interne</span><span>Formation QHSE</span><span>Management</span><span>Amélioration continue</span>
            </div>
          </div>
          <blockquote>
            « Un accompagnement simple, efficace et orienté résultats. »
          </blockquote>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-pattern" aria-hidden="true" />
        <div className="container contact-layout">
          <div>
            <p className="eyebrow"><span /> Premier échange offert</p>
            <h2>Parlons de votre prochain <em>cap.</em></h2>
            <p>30 minutes pour comprendre votre besoin et identifier les premières actions utiles.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
              Échanger sur WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="tel:+212663667848" className="phone-link">
              <small>Ou appelez directement</small>
              <strong>+212 663 667 848</strong>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <a className="brand footer-brand" href="#accueil" aria-label="LIDA — Retour en haut">
            <span className="brand-mark" aria-hidden="true">L</span>
            <span className="brand-name"><strong>LIDA</strong><small>Solutions & Consulting</small></span>
          </a>
          <p>Conseil · Digitalisation · Organisation · ISO · Formation</p>
          <div className="footer-links"><a href="#expertises">Expertises</a><a href="#methode">Méthode</a><a href="#contact">Contact</a></div>
          <small>© 2026 LIDA Solutions & Consulting · Marrakech, Maroc</small>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contacter LIDA sur WhatsApp">
        <span aria-hidden="true">✦</span><strong>WhatsApp</strong>
      </a>
    </main>
  );
}
