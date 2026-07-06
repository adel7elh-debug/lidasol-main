import { stats } from "../data.js";
import Icon from "./Icon.jsx";

export default function Hero() {
  return (
    <section className="hero section-shell" id="accueil">
      <div className="hero-content" data-reveal>
        <p className="eyebrow">Conseil, audit et formation QHSE au Maroc</p>
        <h1>ISO 9001, ISO 14001 & ISO 45001 pour structurer, sécuriser et développer votre entreprise</h1>
        <p className="hero-lead">
          LIDA Solutions & Consulting accompagne les entreprises marocaines dans la mise en place de systèmes de
          management qualité, environnement, santé et sécurité au travail.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Demander un diagnostic gratuit
            <Icon name="arrow" size={18} />
          </a>
          <a className="button button-secondary" href="#secteurs">
            Découvrir les secteurs
          </a>
        </div>
      </div>

      <div className="hero-panel" data-reveal>
        <div className="hero-panel-top">
          <span className="panel-kicker">QHSE intégré</span>
          <span className="status-pill">Marrakech, Maroc</span>
        </div>
        <div className="iso-orbit" aria-hidden="true">
          <span>9001</span>
          <span>14001</span>
          <span>45001</span>
        </div>
        <div className="panel-list">
          <p>Diagnostic des écarts ISO</p>
          <p>Feuille de route priorisée</p>
          <p>Préparation audit interne</p>
        </div>
      </div>

      <div className="stats-grid" data-reveal>
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
