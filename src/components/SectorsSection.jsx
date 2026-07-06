import { useMemo, useState } from "react";
import { sectorDetails, sectors } from "../data.js";

const detailRows = [
  ["Défis du secteur", "challenges"],
  ["Apports ISO 9001", "iso9001"],
  ["Apports ISO 14001", "iso14001"],
  ["Apports ISO 45001", "iso45001"],
  ["Premières actions", "actions"],
];

export default function SectorsSection() {
  const [activeSector, setActiveSector] = useState(sectors[0]);
  const activeDetails = useMemo(() => sectorDetails[activeSector], [activeSector]);

  return (
    <section className="section-shell section-padding sectors-section" id="secteurs">
      <div className="section-heading wide" data-reveal>
        <p className="eyebrow">Secteurs accompagnés</p>
        <h2>Des exigences ISO traduites dans le langage de votre métier.</h2>
        <p>
          Sélectionnez un secteur pour voir les principaux défis, les apports des normes et les premières actions à
          engager.
        </p>
      </div>

      <div className="sectors-layout" data-reveal>
        <div className="sector-buttons" role="tablist" aria-label="Secteurs">
          {sectors.map((sector) => (
            <button
              className={sector === activeSector ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={sector === activeSector}
              onClick={() => setActiveSector(sector)}
              key={sector}
            >
              {sector}
            </button>
          ))}
        </div>

        <article className="sector-detail" role="tabpanel">
          <div className="sector-detail-header">
            <span>Analyse sectorielle</span>
            <h3>{activeSector}</h3>
          </div>
          <div className="detail-table">
            {detailRows.map(([label, key]) => (
              <div className="detail-row" key={key}>
                <strong>{label}</strong>
                <p>{activeDetails[key]}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
