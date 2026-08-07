import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/app/_components/ServicePage";
import { servicePages, servicePaths } from "@/app/_data/services";
import { absoluteUrl } from "@/app/_lib/site";

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return servicePaths.map((path) => ({ slug: path.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const page = servicePages[path];
  if (!page) return {};
  const canonical = `/${page.path}`;
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical },
    openGraph: { title: page.seoTitle, description: page.seoDescription, url: absoluteUrl(canonical), images: [{ url: absoluteUrl(page.image), alt: page.imageAlt }] },
  };
}

export default async function DynamicServicePage({ params }: Props) {
  const { slug } = await params;
  const page = servicePages[slug.join("/")];
  if (!page) notFound();
  return <ServicePage page={page} />;
}
