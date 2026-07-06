import { coverage } from "../data.js";
import Icon from "./Icon.jsx";

export default function CoverageSection() {
  return (
    <section className="section-shell section-padding">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Ce que couvre l'accompagnement</p>
        <h2>Un cadre complet pour passer d'une intention ISO à un système opérationnel.</h2>
      </div>
      <div className="cards-grid four">
        {coverage.map((item) => (
          <article className="feature-card" data-reveal key={item.title}>
            <span className="card-icon">
              <Icon name={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
