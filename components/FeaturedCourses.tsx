"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

const filters=["Toutes","Finance & Comptabilité","Fiscalité","Gestion","RH","Logiciels","HSE"] as const;

export function FeaturedCourses(){const [active,setActive]=useState<string>("Toutes");const visible=active==="Toutes"?courses:courses.filter(c=>c.filterCategory===active);return <><div className="filter-pills" role="group" aria-label="Filtrer les formations">{filters.map(filter=><button key={filter} type="button" className={active===filter?"active":""} onClick={()=>setActive(filter)}>{filter}</button>)}</div><div className="course-grid">{visible.map(course=><CourseCard course={course} key={course.slug}/>)}</div><div className="section-action"><Link href="/formations" className="button secondary-blue">Voir toutes les formations <ArrowRight/></Link></div></>}
