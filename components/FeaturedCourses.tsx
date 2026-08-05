import { CourseCard } from "./CourseCard";
import { formations } from "@/data/formations";

export function FeaturedCourses() {
  return <div className="course-grid">{formations.map((formation) => <CourseCard key={formation.id} formation={formation}/>)}</div>;
}
