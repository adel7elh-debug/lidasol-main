import type { FaqItem } from "@/app/_data/services";

export function FAQ({ items, title = "Questions fréquentes" }: { items: FaqItem[]; title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };
  return (
    <section className="section faq-section">
      <div className="container narrow">
        <p className="eyebrow eyebrow-dark"><span /> FAQ</p>
        <h2>{title}</h2>
        <div className="faq-list">
          {items.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
