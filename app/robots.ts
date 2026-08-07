import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/app/_lib/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: absoluteUrl("/sitemap.xml") };
}
