import { roadmap } from "../data.js";
import Icon from "./Icon.jsx";

export default function RoadmapSection() {
  return (
    <section className="section-shell section-padding" id="methode">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Méthode LIDA</p>
        <h2>Une roadmap en 5 étapes pour avancer sans complexifier votre quotidien.</h2>
      </div>
      <div className="roadmap">
        {roadmap.map((step, index) => (
          <article className="roadmap-card" data-reveal key={step.title}>
            <span className="roadmap-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="card-icon">
              <Icon name={step.icon} />
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
