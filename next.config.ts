import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Content-Security-Policy",
    value: "object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/conseil-accompagnement/diagnostic-entreprise", destination: "/gestion-organisation/diagnostic-organisationnel-iso", permanent: true },
      { source: "/conseil-accompagnement/optimisation-performance", destination: "/gestion-organisation/tableaux-de-bord-kpi", permanent: true },
      { source: "/conseil-accompagnement/accompagnement-managerial", destination: "/gestion-organisation/processus-responsabilites", permanent: true },
      { source: "/digitalisation/digitalisation-processus", destination: "/digitalisation/automatisation-integration-erp", permanent: true },
      { source: "/digitalisation/tableaux-de-bord", destination: "/digitalisation/tableaux-de-bord-automatises", permanent: true },
      { source: "/digitalisation/outils-gestion", destination: "/digitalisation/outils-gestion-management", permanent: true },
      { source: "/gestion-organisation/organisation-processus", destination: "/gestion-organisation/processus-responsabilites", permanent: true },
      { source: "/gestion-organisation/procedures-documentation", destination: "/gestion-organisation/documentation-conformite", permanent: true },
      { source: "/gestion-organisation/pilotage-performance", destination: "/gestion-organisation/tableaux-de-bord-kpi", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
