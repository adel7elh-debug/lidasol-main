import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/app/_components/SiteHeader";
import { SiteFooter } from "@/app/_components/SiteFooter";
import { WhatsAppFloatingButton } from "@/app/_components/WhatsAppButton";
import { absoluteUrl, CONTACT_EMAIL, LOCATION, PHONE_LINK, SITE_NAME, SITE_URL } from "@/app/_lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "LIDA Solutions & Consulting", template: "%s | LIDA Solutions & Consulting" },
  description: "Conseil, digitalisation, organisation, accompagnement ISO et formation professionnelle au Maroc.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "fr_MA", siteName: SITE_NAME },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#061b3d" };

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/favicon.svg"),
  telephone: PHONE_LINK,
  email: CONTACT_EMAIL,
  address: { "@type": "PostalAddress", addressLocality: LOCATION.split(",")[0], addressCountry: "MA" },
  areaServed: { "@type": "Country", name: "Maroc" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#main-content">Aller au contenu</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <WhatsAppFloatingButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
