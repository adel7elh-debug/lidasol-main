import { standards } from "../data.js";

export default function StandardsSection() {
  return (
    <section className="section-band" id="normes">
      <div className="section-shell section-padding">
        <div className="section-heading center" data-reveal>
          <p className="eyebrow">Normes ISO</p>
          <h2>Trois référentiels pour piloter la performance, la conformité et la prévention.</h2>
        </div>

        <div className="standards-grid">
          {standards.map((standard) => (
            <article className="standard-card" data-reveal key={standard.number}>
              <span className="standard-number">{standard.number}</span>
              <h3>{standard.title}</h3>
              <p>{standard.text}</p>
              <ul>
                {standard.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="integrated-card" data-reveal>
          <div>
            <p className="eyebrow">Système intégré QHSE</p>
            <h3>Une seule logique de pilotage pour maîtriser qualité, environnement et sécurité.</h3>
          </div>
          <p>
            Une approche intégrée réduit les doublons documentaires, clarifie les responsabilités et aide la direction à
            suivre les risques, les actions et les résultats dans un même système.
          </p>
        </article>
      </div>
    </section>
  );
}
