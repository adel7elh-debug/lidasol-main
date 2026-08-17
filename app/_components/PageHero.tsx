import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LinkItem } from "@/app/_data/services";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppButton } from "@/app/_components/WhatsAppButton";

export function PageHero({ eyebrow, title, description, image, imageAlt, breadcrumbs, primaryLabel, primaryHref = "/contact", whatsappMessage, showWhatsApp = true }: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbs: LinkItem[];
  primaryLabel: string;
  primaryHref?: string;
  whatsappMessage: string;
  showWhatsApp?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        <div className="page-hero-layout">
          <div>
            <p className="eyebrow"><span /> {eyebrow}</p>
            <h1>{title}</h1>
            <p className="hero-lead">{description}</p>
            <div className="hero-actions">
              <Link className="button button-gold" href={primaryHref}>{primaryLabel}<ArrowRight aria-hidden="true" size={17} /></Link>
              {showWhatsApp ? <WhatsAppButton message={whatsappMessage} label="Discuter sur WhatsApp" /> : null}
            </div>
          </div>
          <div className="page-hero-image">
            <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 900px) 100vw, 42vw" />
            <div><span>LIDA</span><strong>Conseil · Terrain · Résultats</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
