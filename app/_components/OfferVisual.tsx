import { BarChart3, CalendarDays, CheckCircle2, GitBranch, ListChecks, Rows3 } from "lucide-react";
import type { ServiceOfferDetail } from "@/app/_data/serviceOffers";

const icons = {
  workflow: GitBranch,
  checklist: ListChecks,
  dashboard: BarChart3,
  calendar: CalendarDays,
  matrix: Rows3,
} as const;

export function OfferVisual({ visual }: { visual: ServiceOfferDetail["visual"] }) {
  const Icon = icons[visual.kind];
  return (
    <aside className={`offer-visual offer-visual--${visual.kind}`} aria-label={`${visual.kicker} : ${visual.title}`}>
      <div className="offer-visual__heading"><span><Icon aria-hidden="true" size={22} /></span><div><small>{visual.kicker}</small><h2>{visual.title}</h2></div></div>
      <div className="offer-visual__rows">
        {visual.items.map((item, index) => (
          <div key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.label}</strong><small>{item.value}</small><CheckCircle2 aria-hidden="true" size={16} /></div>
        ))}
      </div>
      <p>Données fictives et neutres, uniquement destinées à visualiser le type de support proposé.</p>
    </aside>
  );
}
