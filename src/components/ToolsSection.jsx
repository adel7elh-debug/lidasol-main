import { tools } from "../data.js";

export default function ToolsSection() {
  return (
    <section className="section-band" id="outils">
      <div className="section-shell section-padding tools-layout">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Outils professionnels inclus</p>
          <h2>Les livrables essentiels pour piloter, prouver et améliorer.</h2>
        </div>
        <div className="tool-badges" data-reveal>
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
