import Link from "next/link";
import { ArrowRight, BarChart3, Clock3, Layers3 } from "lucide-react";
import { Course, formatPrice } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return <article className="course-card">
    <div className="course-visual"><span>{course.icon}</span><small>{course.category}</small></div>
    <div className="course-body">
      <div className="course-meta"><span><Clock3 size={15}/>{course.duration}</span><span><BarChart3 size={15}/>{course.level}</span></div>
      <h3>{course.title}</h3><p>{course.description}</p>
      <div className="course-foot"><span><Layers3 size={16}/>{course.modules} modules</span><strong>{formatPrice(course.price)}</strong></div>
      <Link href={`/formations/${course.slug}`} className="card-link">Voir la formation <ArrowRight size={17}/></Link>
    </div>
  </article>;
}
