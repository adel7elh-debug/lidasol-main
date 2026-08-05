import type { MetadataRoute } from "next";
import { formations } from "@/data/formations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lidasol.com";
  const pages = ["", "/formations", "/inscription", "/a-propos", "/faq", "/contact", "/mentions-legales", "/politique-confidentialite"];
  return [...pages.map((path) => ({url: `${base}${path}`, lastModified: new Date()})), ...formations.map((formation) => ({url: `${base}/formations/${formation.slug}`, lastModified: new Date()}))];
}
