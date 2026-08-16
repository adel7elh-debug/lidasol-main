import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "script-src-attr 'none'",
  "connect-src 'self'",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
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
