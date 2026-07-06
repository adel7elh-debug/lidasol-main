const badges = ["ISO 9001", "ISO 14001", "ISO 45001", "Audit interne", "Formation QHSE", "Diagnostic gratuit"];

export default function ConsultantSection() {
  return (
    <section className="section-shell section-padding consultant-section" id="consultant">
      <article className="consultant-card" data-reveal>
        <div className="consultant-avatar" aria-hidden="true">
          AE
        </div>
        <div>
          <p className="eyebrow">Votre consultant</p>
          <h2>Adel El Haddioui</h2>
          <p>
            Consultant QHSE, auditeur ISO 9001 / ISO 14001 / ISO 45001, formateur professionnel et spécialiste en
            systèmes de management.
          </p>
          <div className="consultant-badges">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
