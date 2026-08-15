"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleAlert,
  ClipboardCheck,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { isoSectors, isoSlides } from "@/app/_data/isoGuide";
import { createWhatsAppUrl } from "@/app/_lib/site";
import styles from "@/app/iso/iso.module.css";

const groupIcons = {
  Santé: HeartPulse,
  Éducation: GraduationCap,
  "BTP & ingénierie": HardHat,
  Industrie: Factory,
  "Transport & logistique": Truck,
  Services: Sparkles,
} as const;

const sectorMap = new Map(isoSectors.map((item) => [item.slug, item]));
const groupedSectors = Object.entries(groupIcons).map(([group, Icon]) => ({
  group,
  Icon,
  sectors: isoSectors.filter((item) => item.group === group),
}));

const standardBlocks = [
  { key: "iso9001", label: "ISO 9001", title: "Qualité", icon: ClipboardCheck },
  { key: "iso14001", label: "ISO 14001", title: "Environnement", icon: Leaf },
  { key: "iso45001", label: "ISO 45001", title: "Santé & sécurité", icon: ShieldCheck },
] as const;

export function IsoInteractiveGuide({ children }: { children: ReactNode }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeSectorSlug, setActiveSectorSlug] = useState(isoSectors[0].slug);
  const touchStart = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const activeSector = sectorMap.get(activeSectorSlug) ?? isoSectors[0];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(media.matches);
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % isoSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + isoSlides.length) % isoSlides.length);
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % isoSlides.length);
  }

  function selectSector(slug: string) {
    setActiveSectorSlug(slug);
    window.requestAnimationFrame(() => {
      if (window.innerWidth < 760) detailRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    });
  }

  function discoverSector(slug: string) {
    setActiveSectorSlug(slug);
    document.getElementById("guide-sectoriel")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  }

  const sectorMessage = `Bonjour LIDA Solutions & Consulting,\n\nJe souhaite évaluer le potentiel d’une démarche ISO pour notre secteur : ${activeSector.name}.`;

  return (
    <>
      <section className={styles.sectorCarouselSection} aria-labelledby="iso-sectors-title">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Applications sectorielles</p>
            <h2 id="iso-sectors-title">Une démarche ISO adaptée à votre réalité métier</h2>
            <p>Explorez cinq contextes concrets. Les normes restent les mêmes, mais les risques, les priorités et les preuves utiles changent selon l’activité.</p>
          </div>

          <div
            className={styles.carousel}
            ref={carouselRef}
            role="region"
            aria-roledescription="carrousel"
            aria-label="Exemples d’application ISO par secteur"
            tabIndex={0}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                showPreviousSlide();
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                showNextSlide();
              }
            }}
            onTouchStart={(event) => {
              touchStart.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStart.current === null) return;
              const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
              if (Math.abs(distance) > 45) {
                if (distance > 0) showPreviousSlide();
                else showNextSlide();
              }
              touchStart.current = null;
            }}
          >
            <div className={styles.slideViewport} aria-live="polite">
              {isoSlides.map((slide, index) => (
                <article
                  key={slide.eyebrow}
                  className={`${styles.slide} ${index === activeSlide ? styles.slideActive : ""}`}
                  aria-hidden={index !== activeSlide}
                >
                  <Image src={slide.image} alt={index === activeSlide ? slide.alt : ""} fill sizes="(max-width: 900px) 100vw, 1160px" />
                  <div className={styles.slideShade} />
                  <div className={styles.slideCopy}>
                    <p>{slide.eyebrow}</p>
                    <h3>{slide.title}</h3>
                    <span>{slide.text}</span>
                    <ul className={styles.slideBenefits}>
                      {slide.benefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" />{benefit}</li>)}
                    </ul>
                    <button className={styles.slideLink} type="button" onClick={() => discoverSector(slide.sectorSlug)} tabIndex={index === activeSlide ? 0 : -1}>
                      Découvrir ce secteur <ArrowRight aria-hidden="true" />
                    </button>
                    <small>{slide.sectors}</small>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.carouselControls}>
              <button type="button" onClick={showPreviousSlide} aria-label="Afficher le secteur précédent"><ArrowLeft aria-hidden="true" /></button>
              <div className={styles.carouselDots} aria-label="Choisir une diapositive">
                {isoSlides.map((slide, index) => (
                  <button
                    key={slide.eyebrow}
                    type="button"
                    className={index === activeSlide ? styles.dotActive : ""}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Afficher ${slide.eyebrow}`}
                    aria-current={index === activeSlide ? "true" : undefined}
                  />
                ))}
              </div>
              <button type="button" onClick={showNextSlide} aria-label="Afficher le secteur suivant"><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className={styles.guideSection} id="guide-sectoriel" aria-labelledby="guide-sectoriel-title">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Guide interactif</p>
            <h2 id="guide-sectoriel-title">Sélectionnez votre secteur</h2>
            <p>Découvrez les enjeux à traiter, l’apport possible de chaque référentiel et les premières actions recommandées.</p>
          </div>

          <div className={styles.guideLayout}>
            <nav className={styles.sectorNav} aria-label="Les 23 secteurs d’activité">
              {groupedSectors.map(({ group, Icon, sectors }) => (
                  <div className={styles.sectorGroup} key={group}>
                    <h3><Icon aria-hidden="true" />{group}</h3>
                    <div>
                      {sectors.map((item) => (
                        <button
                          type="button"
                          key={item.slug}
                          onClick={() => selectSector(item.slug)}
                          className={item.slug === activeSector.slug ? styles.sectorButtonActive : ""}
                          aria-pressed={item.slug === activeSector.slug}
                          aria-controls="sector-detail"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
              ))}
            </nav>

            <div className={styles.sectorDetail} id="sector-detail" ref={detailRef} aria-live="polite">
              <div className={styles.detailHeading}>
                <span>{activeSector.group}</span>
                <h3>{activeSector.name}</h3>
                <p>{activeSector.summary}</p>
              </div>

              <div className={styles.challenges}>
                <h4><CircleAlert aria-hidden="true" /> Défis fréquents</h4>
                <ul>{activeSector.challenges.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>

              <div className={styles.benefitGrid}>
                {standardBlocks.map(({ key, label, title, icon: Icon }) => (
                  <article key={key}>
                    <div><Icon aria-hidden="true" /><span><small>{label}</small><strong>{title}</strong></span></div>
                    <ul>{activeSector.benefits[key].map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                  </article>
                ))}
              </div>

              <div className={styles.actionBox}>
                <div>
                  <h4>Premières actions recommandées</h4>
                  <ol>{activeSector.actions.map((item) => <li key={item}>{item}</li>)}</ol>
                </div>
                <a className={styles.goldButton} href={createWhatsAppUrl(sectorMessage)} target="_blank" rel="noreferrer">
                  Évaluer mon potentiel ISO <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
