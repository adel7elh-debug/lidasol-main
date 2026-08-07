"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createWhatsAppUrl, whatsappMessages } from "@/app/_lib/site";

const expertiseLinks = [
  ["Conseil & accompagnement", "/conseil-accompagnement"],
  ["Digitalisation", "/digitalisation"],
  ["Gestion & organisation", "/gestion-organisation"],
] as const;

const isoLinks = [
  ["Accompagnement ISO", "/accompagnement-iso"],
  ["ISO 9001", "/accompagnement-iso/iso-9001"],
  ["ISO 14001", "/accompagnement-iso/iso-14001"],
  ["ISO 45001", "/accompagnement-iso/iso-45001"],
] as const;

const trainingLinks = [
  ["Toutes les formations", "/formation"],
  ["Gestion administrative & comptable", "/formation/gestion-administrative-comptable"],
  ["Optimisation fiscale", "/formation/optimisation-fiscale"],
  ["Intelligence Artificielle", "/formation/gestion-intelligence-artificielle"],
  ["Excel", "/formation/excel"],
  ["Excel VBA", "/formation/excel-vba"],
  ["Management", "/formation/management"],
  ["QHSE", "/formation/qhse"],
  ["Formations ISO", "/formation#iso"],
] as const;

type DropdownName = "Expertises" | "ISO" | "Formations";

function NavDropdown({ label, links, isOpen, onOpen, onClose, onScheduleClose, onCancelClose }: {
  label: DropdownName;
  links: ReadonlyArray<readonly [string, string]>;
  isOpen: boolean;
  onOpen: (name: DropdownName) => void;
  onClose: () => void;
  onScheduleClose: () => void;
  onCancelClose: () => void;
}) {
  return (
    <details
      className="nav-dropdown"
      open={isOpen}
      onMouseEnter={() => onOpen(label)}
      onMouseLeave={onScheduleClose}
      onFocusCapture={() => onOpen(label)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) onScheduleClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
    >
      <summary
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={(event) => {
          event.preventDefault();
          onOpen(label);
        }}
      >
        {label}<span aria-hidden="true">⌄</span>
      </summary>
      <div className="dropdown-panel">
        {links.map(([name, href]) => <Link href={href} key={href} onClick={onClose} onMouseEnter={onCancelClose}>{name}</Link>)}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);
  const closeTimer = useRef<number | null>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  function cancelClose() {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openDropdown(name: DropdownName) {
    cancelClose();
    setActiveDropdown(name);
  }

  function closeDropdown() {
    cancelClose();
    setActiveDropdown(null);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimer.current = null;
    }, 150);
  }

  function closeMobileMenu() {
    mobileMenuRef.current?.removeAttribute("open");
  }

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="LIDA Solutions & Consulting — Accueil">
          <span className="brand-mark" aria-hidden="true">L</span>
          <span className="brand-name"><strong>LIDA</strong><small>Solutions & Consulting</small></span>
        </Link>

        <details
          className="mobile-menu"
          ref={mobileMenuRef}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMobileMenu();
          }}
        >
          <summary aria-label="Ouvrir le menu"><span /> Menu</summary>
          <nav aria-label="Navigation mobile">
            <Link href="/" onClick={closeMobileMenu}>Accueil</Link>
            <Link href="/conseil-accompagnement" onClick={closeMobileMenu}>Conseil</Link>
            <Link href="/digitalisation" onClick={closeMobileMenu}>Digitalisation</Link>
            <Link href="/gestion-organisation" onClick={closeMobileMenu}>Organisation</Link>
            <Link href="/accompagnement-iso" onClick={closeMobileMenu}>ISO</Link>
            <Link href="/formation" onClick={closeMobileMenu}>Formations</Link>
            <Link href="/realisations" onClick={closeMobileMenu}>Réalisations</Link>
            <Link href="/a-propos" onClick={closeMobileMenu}>À propos</Link>
            <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
          </nav>
        </details>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link href="/">Accueil</Link>
          <NavDropdown label="Expertises" links={expertiseLinks} isOpen={activeDropdown === "Expertises"} onOpen={openDropdown} onClose={closeDropdown} onScheduleClose={scheduleClose} onCancelClose={cancelClose} />
          <NavDropdown label="ISO" links={isoLinks} isOpen={activeDropdown === "ISO"} onOpen={openDropdown} onClose={closeDropdown} onScheduleClose={scheduleClose} onCancelClose={cancelClose} />
          <NavDropdown label="Formations" links={trainingLinks} isOpen={activeDropdown === "Formations"} onOpen={openDropdown} onClose={closeDropdown} onScheduleClose={scheduleClose} onCancelClose={cancelClose} />
          <Link href="/realisations">Réalisations</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a className="button button-gold header-cta" href={createWhatsAppUrl(whatsappMessages.diagnostic)} target="_blank" rel="noreferrer">
          Demander un diagnostic
        </a>
      </div>
    </header>
  );
}
