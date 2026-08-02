"use client";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

export function Catalog() {
  const [query,setQuery]=useState(""); const [category,setCategory]=useState("Toutes"); const [level,setLevel]=useState("Tous");
  const filtered=useMemo(()=>courses.filter(c=>(category==="Toutes"||c.category===category)&&(level==="Tous"||c.level===level)&&`${c.title} ${c.description}`.toLowerCase().includes(query.toLowerCase())),[query,category,level]);
  const categories=["Toutes",...new Set(courses.map(c=>c.category))];
  return <><div className="catalog-tools"><div className="search-wrap"><Search/><input className="field" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher une formation..." aria-label="Rechercher"/></div><select className="field" value={category} onChange={e=>setCategory(e.target.value)} aria-label="Catégorie">{categories.map(c=><option key={c}>{c}</option>)}</select><select className="field" value={level} onChange={e=>setLevel(e.target.value)} aria-label="Niveau">{["Tous","Débutant","Intermédiaire","Avancé","Tous niveaux"].map(l=><option key={l}>{l}</option>)}</select></div><div className="results-count">{filtered.length} formation{filtered.length!==1?"s":""} disponible{filtered.length!==1?"s":""}</div>{filtered.length?<div className="course-grid">{filtered.map(c=><CourseCard key={c.slug} course={c}/>)}</div>:<div className="dash-card">Aucune formation ne correspond à votre recherche.</div>}</>;
}
