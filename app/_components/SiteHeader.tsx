"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createWhatsAppUrl, whatsappMessages } from "@/app/_lib/site";

const serviceLinks = [
  ["Digitalisation & automatisation", "/digitalisation"],
  ["Conseil & accompagnement", "/conseil-accompagnement"],
  ["Pilotage & organisation", "/gestion-organisation"],
  ["Accompagnement ISO", "/iso"],
  ["Formations professionnelles", "/formation"],
] as const;

const aboutLinks = [
  ["À propos de LIDA", "/a-propos"],
  ["Notre méthodologie", "/a-propos/methodologie"],
  ["Adel El Haddioui", "/a-propos/adel-el-haddioui"],
] as const;

type DropdownName = "Services";
type MobileSectionName = "Services" | "À propos";

function MobileNavSection({ id, label, links, isOpen, onToggle, onLinkClick }: {
  id: string;
  label: MobileSectionName;
  links: ReadonlyArray<readonly [string, string]>;
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}) {
  return (
    <div className="mobile-nav-section">
      <button
        type="button"
        className="mobile-submenu-trigger"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
      >
        <span>{label}</span>
        <span className="mobile-submenu-icon" aria-hidden="true">+</span>
      </button>
      <div className="mobile-submenu" id={id} hidden={!isOpen}>
        {links.map(([name, href]) => (
          <Link href={href} key={href} onClick={onLinkClick}>{name}</Link>
        ))}
      </div>
    </div>
  );
}

function NavDropdown({ label, links, isOpen, onOpen, onClose, onScheduleClose, onCancelClose, currentPath }: {
  label: DropdownName;
  links: ReadonlyArray<readonly [string, string]>;
  isOpen: boolean;
  onOpen: (name: DropdownName) => void;
  onClose: () => void;
  onScheduleClose: () => void;
  onCancelClose: () => void;
  currentPath: string;
}) {
  return (
    <details
      className={`nav-dropdown ${links.some(([, href]) => currentPath === href || currentPath.startsWith(`${href}/`)) ? "is-active" : ""}`}
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
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);
  const [activeMobileSection, setActiveMobileSection] = useState<MobileSectionName | null>(null);
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
    setActiveMobileSection(null);
    mobileMenuRef.current?.removeAttribute("open");
  }

  function toggleMobileSection(name: MobileSectionName) {
    setActiveMobileSection((current) => current === name ? null : name);
  }

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="LIDA Solutions & Consulting — Accueil">
          <Image
            className="brand-logo"
            src="/logo-lida.png"
            alt=""
            width={900}
            height={648}
            priority
          />
        </Link>

        <details
          className="mobile-menu"
          ref={mobileMenuRef}
          onToggle={(event) => {
            if (!event.currentTarget.open) setActiveMobileSection(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMobileMenu();
          }}
        >
          <summary aria-label="Ouvrir le menu"><span /> Menu</summary>
          <nav aria-label="Navigation mobile">
            <Link href="/" onClick={closeMobileMenu}>Accueil</Link>
            <MobileNavSection id="mobile-services" label="Services" links={serviceLinks} isOpen={activeMobileSection === "Services"} onToggle={() => toggleMobileSection("Services")} onLinkClick={closeMobileMenu} />
            <Link href="/realisations" onClick={closeMobileMenu}>Réalisations</Link>
            <MobileNavSection id="mobile-about" label="À propos" links={aboutLinks} isOpen={activeMobileSection === "À propos"} onToggle={() => toggleMobileSection("À propos")} onLinkClick={closeMobileMenu} />
            <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
          </nav>
        </details>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link className={pathname === "/" ? "is-active" : undefined} href="/">Accueil</Link>
          <NavDropdown label="Services" links={serviceLinks} isOpen={activeDropdown === "Services"} onOpen={openDropdown} onClose={closeDropdown} onScheduleClose={scheduleClose} onCancelClose={cancelClose} currentPath={pathname} />
          <Link className={pathname.startsWith("/realisations") ? "is-active" : undefined} href="/realisations">Réalisations</Link>
          <Link className={pathname.startsWith("/a-propos") ? "is-active" : undefined} href="/a-propos">À propos</Link>
          <Link className={pathname.startsWith("/contact") ? "is-active" : undefined} href="/contact">Contact</Link>
        </nav>

        <a className="button button-gold header-cta" href={createWhatsAppUrl(whatsappMessages.diagnostic)} target="_blank" rel="noreferrer">
          Diagnostic 180° offert
        </a>
      </div>
    </header>
  );
}
