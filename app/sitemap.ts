import type { MetadataRoute } from "next";
import { servicePaths } from "@/app/_data/services";
import { trainings } from "@/app/_data/trainings";
import { trainingAxes } from "@/app/_data/trainingAxes";
import { blogPosts } from "@/app/_data/blog";
import { absoluteUrl } from "@/app/_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "iso", "formation", "formation/inscription", "a-propos", "a-propos/adel-el-haddioui", "a-propos/methodologie", "realisations", "contact"];
  const paths = [...staticPaths, ...servicePaths, ...trainingAxes.map((axis) => `formation/${axis.slug}`), ...trainings.map((training) => `formation/${training.slug}`)];
  const pages = paths.map((path) => ({ url: absoluteUrl(`/${path}`), lastModified: "2026-08-12", changeFrequency: (path ? "monthly" : "weekly") as "monthly" | "weekly", priority: path ? 0.75 : 1 }));
  const blogPages = [
    { url: absoluteUrl("/blog"), lastModified: blogPosts[0].publishedAt, changeFrequency: "weekly" as const, priority: 0.85 },
    ...blogPosts.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: post.publishedAt, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
  return [...pages, ...blogPages];
}
