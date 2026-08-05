"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CourseCard } from "./CourseCard";
import { formations } from "@/data/formations";

const categories = ["Toutes", "Comptabilité", "Fiscalité", "Gestion", "RH", "Logiciels", "HSE"] as const;

export function Catalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Toutes");
  const filtered = useMemo(() => formations.filter((formation) => {
    const matchesCategory = category === "Toutes" || formation.category === category;
    const haystack = `${formation.title} ${formation.shortDescription} ${formation.category}`.toLowerCase();
    return matchesCategory && haystack.includes(query.trim().toLowerCase());
  }), [query, category]);

  return <><div className="catalog-controls"><label className="catalog-search"><Search/><span className="sr-only">Rechercher une formation</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une formation…"/></label><div className="filter-pills" role="group" aria-label="Filtrer par catégorie">{categories.map((item) => <button type="button" key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div></div><p className="result-count">{filtered.length} formation{filtered.length > 1 ? "s" : ""}</p>{filtered.length ? <div className="course-grid">{filtered.map((formation) => <CourseCard key={formation.id} formation={formation}/>)}</div> : <div className="empty-state"><Search/><h2>Aucune formation trouvée</h2><p>Essayez un autre mot-clé ou affichez toutes les catégories.</p></div>}</>;
}
