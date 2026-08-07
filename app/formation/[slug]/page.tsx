import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrainingPage } from "@/app/_components/TrainingPage";
import { trainingBySlug, trainings } from "@/app/_data/trainings";
import { absoluteUrl } from "@/app/_lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return trainings.map((training) => ({ slug: training.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const training = trainingBySlug[slug];
  if (!training) return {};
  const canonical = `/formation/${slug}`;
  return { title: training.seoTitle, description: training.seoDescription, alternates: { canonical }, openGraph: { title: training.seoTitle, description: training.seoDescription, url: absoluteUrl(canonical), images: [{ url: absoluteUrl(training.image), alt: training.imageAlt ?? training.title }] } };
}

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const training = trainingBySlug[slug];
  if (!training) notFound();
  return <TrainingPage training={training} />;
}
