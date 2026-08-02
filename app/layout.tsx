import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://formation.lidasol.com"),
  title: { default: "LIDA Formation", template: "%s | LIDA Formation" },
  description: "Plateforme de formations professionnelles pratiques et certifiantes au Maroc.",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://formation.lidasol.com",
    siteName: "LIDA Formation",
    title: "LIDA Formation",
    description: "Des compétences concrètes pour aller plus loin.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LIDA Formation" }],
  },
  twitter: { card: "summary_large_image", title: "LIDA Formation", description: "Des compétences concrètes pour aller plus loin.", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body>{children}</body>
    </html>
  );
}
