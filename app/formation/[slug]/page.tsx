import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrainingPage } from "@/app/_components/TrainingPage";
import { TrainingAxisPage } from "@/app/_components/TrainingAxes";
import { trainingBySlug, trainings } from "@/app/_data/trainings";
import { trainingAxes, trainingAxisBySlug } from "@/app/_data/trainingAxes";
import { absoluteUrl } from "@/app/_lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...trainings.map((training) => ({ slug: training.slug })), ...trainingAxes.map((axis) => ({ slug: axis.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const axis = trainingAxisBySlug[slug];
  if (axis) {
    const canonical = `/formation/${slug}`;
    return { title: axis.seoTitle, description: axis.seoDescription, alternates: { canonical }, openGraph: { title: axis.seoTitle, description: axis.seoDescription, url: absoluteUrl(canonical), images: [{ url: absoluteUrl(axis.image), alt: axis.imageAlt }] } };
  }
  const training = trainingBySlug[slug];
  if (!training) return {};
  const canonical = `/formation/${slug}`;
  return { title: training.seoTitle, description: training.seoDescription, alternates: { canonical }, openGraph: { title: training.seoTitle, description: training.seoDescription, url: absoluteUrl(canonical), images: [{ url: absoluteUrl(training.image), alt: training.imageAlt ?? training.title }] } };
}

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const axis = trainingAxisBySlug[slug];
  if (axis) {
    const axisTrainings = axis.trainingSlugs.map((trainingSlug) => trainingBySlug[trainingSlug]).filter(Boolean);
    return <TrainingAxisPage axis={axis} trainings={axisTrainings} />;
  }
  const training = trainingBySlug[slug];
  if (!training) notFound();
  return <TrainingPage training={training} />;
}
