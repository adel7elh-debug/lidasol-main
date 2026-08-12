import type { MetadataRoute } from "next";
import { servicePaths } from "@/app/_data/services";
import { trainings } from "@/app/_data/trainings";
import { absoluteUrl } from "@/app/_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "formation", "formation/inscription", "a-propos", "a-propos/adel-el-haddioui", "a-propos/methodologie", "realisations", "contact"];
  const paths = [...staticPaths, ...servicePaths, ...trainings.map((training) => `formation/${training.slug}`)];
  return paths.map((path) => ({ url: absoluteUrl(`/${path}`), lastModified: "2026-08-12", changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.75 : 1 }));
}
