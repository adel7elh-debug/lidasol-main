import Link from "next/link";
import type { LinkItem } from "@/app/_data/services";
import { absoluteUrl } from "@/app/_lib/site";

export function Breadcrumbs({ items }: { items: LinkItem[] }) {
  const allItems = [{ label: "Accueil", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: absoluteUrl(item.href) })),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Fil d’Ariane">
        {allItems.map((item, index) => <span key={item.href}>{index ? <i aria-hidden="true">/</i> : null}<Link href={item.href}>{item.label}</Link></span>)}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
