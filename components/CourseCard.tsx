import Link from "next/link";
import { ArrowUpRight, BarChart3, Clock3, Layers3, MonitorPlay } from "lucide-react";
import type { Course } from "@/data/courses";

export function CourseCover({index,className=""}:{index:number,className?:string}) {
  const col=index%4; const row=Math.floor(index/4);
  return <div className={`course-cover ${className}`} role="img" aria-label="Illustration de la formation" style={{backgroundImage:"url('/images/course-covers-sprite-v2.png')",backgroundPosition:`${col*33.333}% ${row*100}%`}}/>;
}

export function CourseCard({course}:{course:Course}) {
  return <article className="course-card"><div className="course-image"><CourseCover index={course.coverIndex}/><span className="category-badge">{course.category}</span></div><div className="course-body">
    <div className="course-meta"><span><Clock3/>{course.duration}</span><span><BarChart3/>{course.level}</span></div>
    <h3>{course.title}</h3><p>{course.description}</p>
    <div className="course-specs"><span><MonitorPlay/>{course.format}</span><span><Layers3/>{course.modules} modules</span></div>
    <Link href={`/formations/${course.slug}`} className="card-link">Voir la formation <ArrowUpRight/></Link>
  </div></article>;
}
