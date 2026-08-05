import Link from "next/link";
import { ArrowRight, Clock3, Monitor } from "lucide-react";
import type { Formation } from "@/data/formations";

export function CourseCover({formation, className = ""}: {formation: Formation; className?: string}) {
  return <div className={`course-cover ${className}`} role="img" aria-label={`Illustration : ${formation.title}`} style={{backgroundImage: `url('${formation.image}')`, backgroundPosition: formation.imagePosition}}/>;
}

export function CourseCard({formation}: {formation: Formation}) {
  return <article className="course-card"><CourseCover formation={formation}/><div className="course-body"><span className="category-badge">{formation.category}</span><h3>{formation.title}</h3><p>{formation.shortDescription}</p><div className="course-meta"><span><Clock3/>{formation.duration}</span><span><Monitor/>{formation.format}</span></div><Link href={`/formations/${formation.slug}`} className="card-link">Découvrir la formation <ArrowRight/></Link></div></article>;
}
