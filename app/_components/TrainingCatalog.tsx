"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bot, BriefcaseBusiness, Calculator, FileSpreadsheet, ShieldCheck } from "lucide-react";

export type TrainingCardData = {
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
};

const categoryIcons = {
  "Intelligence Artificielle": Bot,
  Excel: FileSpreadsheet,
  VBA: FileSpreadsheet,
  Fiscalité: Calculator,
  Comptabilité: Calculator,
  QHSE: ShieldCheck,
  ISO: ShieldCheck,
} as const;

export function TrainingCatalog({ items, categories }: { items: TrainingCardData[]; categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const visibleItems = activeCategory === "Toutes" ? items : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="filter-bar" aria-label="Filtrer les formations">
        {categories.map((category) => <button className={activeCategory === category ? "active" : ""} type="button" onClick={() => setActiveCategory(category)} key={category}>{category}</button>)}
      </div>
      <div className="training-grid" aria-live="polite">
        {visibleItems.map((item) => {
          const Icon = categoryIcons[item.category as keyof typeof categoryIcons] ?? BriefcaseBusiness;
          return (
            <article className="training-card" key={item.slug}>
              <div className="training-card-top"><span><Icon aria-hidden="true" size={21} /></span><small>{item.category}</small></div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <dl><div><dt>Niveau</dt><dd>{item.level}</dd></div><div><dt>Durée</dt><dd>{item.duration}</dd></div></dl>
              <div className="card-actions"><Link href={`/formation/${item.slug}`}>Voir la formation <ArrowRight aria-hidden="true" size={16} /></Link><Link href={`/formation/inscription?formation=${item.slug}`}>S’inscrire</Link></div>
            </article>
          );
        })}
      </div>
    </>
  );
}
