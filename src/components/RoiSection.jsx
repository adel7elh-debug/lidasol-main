import { beforeAfter } from "../data.js";

export default function RoiSection() {
  return (
    <section className="section-band light">
      <div className="section-shell section-padding">
        <div className="section-heading center" data-reveal>
          <p className="eyebrow">Avant ISO / Après ISO</p>
          <h2>Une démarche visible dans l'organisation, la preuve et la confiance client.</h2>
        </div>
        <div className="comparison-grid">
          <article className="comparison-card before" data-reveal>
            <h3>Avant ISO</h3>
            <ul>
              {beforeAfter.before.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="comparison-card after" data-reveal>
            <h3>Après ISO</h3>
            <ul>
              {beforeAfter.after.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
