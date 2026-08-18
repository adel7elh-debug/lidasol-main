import Image from "next/image";

const clientReferences: ReadonlyArray<{ name: string; logo: string; wide?: boolean }> = [
  { name: "Dalal Luxury Car", logo: "/references/dalal-luxury-car.png" },
  { name: "Easywave", logo: "/references/easywave.png" },
  { name: "Electropro Services", logo: "/references/electropro-services.png" },
  { name: "Elghrari Multi Traveaux", logo: "/references/elghrari-multi-traveaux.jpeg", wide: true },
  { name: "FZ Concept", logo: "/references/fz-concept.png" },
  { name: "KM Consulting & Digital Agency", logo: "/references/km-consulting.png" },
  { name: "Let’s go12 Car Rental", logo: "/references/letsgo12-car-rental.png" },
  { name: "ZT Style", logo: "/references/zt-style.webp" },
];

export function ClientReferences() {
  return (
    <section className="section client-references" aria-labelledby="client-references-title">
      <div className="container">
        <div className="section-heading client-references-heading">
          <p className="eyebrow eyebrow-dark"><span /> Références clients</p>
          <h2 id="client-references-title">Ils nous font confiance</h2>
          <p>Des entreprises et organisations nous font confiance pour leurs projets de digitalisation, de conseil, d’accompagnement, de pilotage et de formation.</p>
        </div>

        <ul className="client-reference-grid" aria-label="Entreprises et organisations accompagnées par LIDA">
          {clientReferences.map(({ name, logo, wide }) => (
            <li key={logo}>
              <div className={`client-reference-logo${wide ? " client-reference-logo--wide" : ""}`}>
                <Image
                  src={logo}
                  alt={name}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 44vw, (max-width: 930px) 30vw, 220px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
