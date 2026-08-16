import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const consultantHighlights = [
  "Manager et Responsable de Site au sein d’une entreprise européenne",
  "Directeur Administratif et Financier (DAF)",
  "Formateur professionnel à l’OFPPT et à l’IIPM",
  "Professeur universitaire à la FIEP (France)",
  "Auditeur ISO 9001, ISO 14001 et ISO 45001",
  "Ingénieur en Management Environnemental",
] as const;

export function SiteConsultant() {
  return (
    <section className="site-consultant" aria-labelledby="site-consultant-title">
      <div className="container site-consultant__layout">
        <div className="site-consultant__image">
          <Image
            src="/photos/pages/adel-el-haddioui.webp"
            alt="Portrait professionnel d’Adel El Haddioui"
            width={1079}
            height={1538}
            sizes="(max-width: 930px) calc(100vw - 48px), 44vw"
          />
        </div>

        <div className="site-consultant__content">
          <p className="eyebrow eyebrow-dark"><span /> Votre consultant</p>
          <h2 id="site-consultant-title">Adel El Haddioui</h2>
          <p>Professionnel de la comptabilité, de la finance, de la gestion administrative et du management, disposant de <strong>plus de 10 ans d’expérience</strong> dans la formation professionnelle.</p>
          <ul className="site-consultant__highlights">
            {consultantHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <Link className="text-link text-link-blue site-consultant__link" href="/a-propos/adel-el-haddioui">
            Découvrir votre interlocuteur <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
