import Icon from "./Icon.jsx";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell">
        <article className="contact-card" data-reveal>
          <p className="eyebrow">Diagnostic gratuit</p>
          <h2>Identifiez vos écarts ISO en 30 minutes</h2>
          <p>
            Recevez une première analyse de votre situation et une feuille de route claire pour structurer votre système
            QHSE.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/212663667848" target="_blank" rel="noreferrer">
              <Icon name="phone" size={18} />
              WhatsApp : +212 663 667 848
            </a>
            <a className="button button-secondary light" href="mailto:contact@lidasol.com">
              <Icon name="mail" size={18} />
              Envoyer un email
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
