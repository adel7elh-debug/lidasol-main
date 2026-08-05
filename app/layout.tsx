import type {Metadata, Viewport} from "next";
import {siteConfig} from "@/data/site";
import "./globals.css";

const description = "LIDA Solutions & Consulting accompagne les entreprises en conseil, gestion, digitalisation, ISO, QHSE et formation professionnelle à Marrakech et au Maroc.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {default: "LIDA Solutions & Consulting | Conseil, Gestion, ISO et Digitalisation", template: "%s | LIDA Solutions & Consulting"},
  description,
  alternates: {canonical: "/"},
  keywords: ["conseil entreprise Marrakech", "digitalisation PME Maroc", "gestion entreprise", "accompagnement ISO", "formation professionnelle Maroc", "QHSE"],
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "LIDA Solutions & Consulting | Des solutions intelligentes pour votre activité",
    description,
    images: [{url: "/og.png", width: 1536, height: 1024, alt: "LIDA Solutions & Consulting — Conseil, gestion, digitalisation, ISO et formation"}],
  },
  twitter: {card: "summary_large_image", title: "LIDA Solutions & Consulting", description, images: ["/og.png"]},
  icons: {icon: "/favicon.svg"},
};

export const viewport: Viewport = {width: "device-width", initialScale: 1, themeColor: "#061B3A"};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description,
  address: {"@type": "PostalAddress", addressLocality: "Marrakech", addressCountry: "MA"},
  areaServed: {"@type": "Country", name: "Morocco"},
  serviceType: ["Conseil aux entreprises", "Digitalisation", "Gestion et organisation", "Accompagnement ISO", "Formation professionnelle"],
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="fr"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/></body></html>;
}
