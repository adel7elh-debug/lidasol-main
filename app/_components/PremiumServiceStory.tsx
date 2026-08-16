import { Check, X } from "lucide-react";

export type PremiumMetric = {
  value: string;
  label: string;
};

type PremiumMetricsProps = {
  eyebrow: string;
  metrics: readonly PremiumMetric[];
};

type TransformationComparisonProps = {
  eyebrow: string;
  title: string;
  description: string;
  beforeTitle: string;
  afterTitle: string;
  before: readonly string[];
  after: readonly string[];
};

export function PremiumMetrics({ eyebrow, metrics }: PremiumMetricsProps) {
  return (
    <section className="premium-metrics" aria-label={eyebrow}>
      <div className="container premium-metrics__layout">
        <div className="premium-metrics__heading">
          <span />
          <strong>{eyebrow}</strong>
        </div>
        {metrics.map((metric) => (
          <div className="premium-metrics__item" key={`${metric.value}-${metric.label}`}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TransformationComparison({
  eyebrow,
  title,
  description,
  beforeTitle,
  afterTitle,
  before,
  after,
}: TransformationComparisonProps) {
  return (
    <section className="section transformation-section">
      <div className="container">
        <div className="transformation-heading">
          <p className="eyebrow eyebrow-dark"><span /> {eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="transformation-grid">
          <article className="transformation-card transformation-card--before">
            <header><X aria-hidden="true" /><h3>{beforeTitle}</h3></header>
            <ul>{before.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}</ul>
          </article>
          <article className="transformation-card transformation-card--after">
            <header><Check aria-hidden="true" /><h3>{afterTitle}</h3></header>
            <ul>{after.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  );
}
