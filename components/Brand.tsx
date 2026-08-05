import Link from "next/link";

type BrandProps = {
  className?: string;
  onClick?: () => void;
};

export function Brand({className = "", onClick}: BrandProps) {
  return (
    <Link href="/" className={`brand ${className}`.trim()} aria-label="LIDA Solutions & Consulting — Accueil" onClick={onClick}>
      <span className="brand-mark" aria-hidden="true">L</span>
      <span className="brand-copy">
        <strong>LIDA</strong>
        <small>Solutions &amp; Consulting</small>
      </span>
    </Link>
  );
}
