"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

const filters=["Toutes","Finance & Comptabilité","Fiscalité","Gestion","RH","Logiciels","HSE"];
export function Catalog(){const [query,setQuery]=useState("");const [active,setActive]=useState("Toutes");const filtered=useMemo(()=>courses.filter(c=>(active==="Toutes"||c.filterCategory===active)&&`${c.title} ${c.description} ${c.category}`.toLowerCase().includes(query.toLowerCase())),[query,active]);return <><div className="catalog-controls"><div className="catalog-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher une formation" aria-label="Rechercher une formation"/></div><button className="mobile-filter-label" type="button"><SlidersHorizontal/> Filtres</button><div className="filter-pills catalog-pills" role="group" aria-label="Filtrer par domaine">{filters.map(filter=><button type="button" key={filter} className={active===filter?"active":""} onClick={()=>setActive(filter)}>{filter}</button>)}</div></div><div className="catalog-result-line"><span>{filtered.length} formation{filtered.length!==1?"s":""}</span><small>Parcours en ligne avec accompagnement</small></div>{filtered.length?<div className="course-grid catalog-grid">{filtered.map(c=><CourseCard key={c.slug} course={c}/>)}</div>:<div className="empty-state"><Search/><h3>Aucune formation trouvée</h3><p>Essayez un autre mot-clé ou sélectionnez « Toutes ».</p></div>}</>}
