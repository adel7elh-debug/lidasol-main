import type { Metadata } from "next";
import "./globals.css";

const description = "Développez des compétences utiles en entreprise avec les formations pratiques LIDA Formation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://formation.lidasol.com"),
  title: { default: "LIDA Formation", template: "%s | LIDA Formation" },
  description,
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://formation.lidasol.com",
    siteName: "LIDA Formation",
    title: "LIDA Formation",
    description,
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "LIDA Formation — Développez des compétences qui font la différence." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIDA Formation",
    description,
    images: ["/og-v2.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body>{children}</body>
    </html>
  );
}
