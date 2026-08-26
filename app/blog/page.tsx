import type { Metadata } from "next";
import { ArticleCard } from "@/app/_components/ArticleCard";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { CTASection } from "@/app/_components/CTASection";
import { blogPosts } from "@/app/_data/blog";
import { whatsappMessages } from "@/app/_lib/site";

export const metadata: Metadata = {
  title: "Actualités & Conseils pour les PME au Maroc",
  description: "Conseils pratiques sur la digitalisation, le pilotage, l’organisation, l’ISO et la formation pour les TPE et PME au Maroc.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Actualités & Conseils | LIDA Solutions & Consulting",
    description: "Des repères concrets pour structurer, digitaliser et développer votre entreprise.",
    url: "/blog",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LIDA Solutions & Consulting" }],
  },
};

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Actualités & Conseils", href: "/blog" }]} />
          <div className="blog-hero__copy">
            <p className="eyebrow"><span /> Ressources</p>
            <h1>Des idées claires pour améliorer le travail au quotidien</h1>
            <p>Digitalisation, organisation, pilotage, ISO et compétences : des articles ancrés dans les réalités des TPE et PME marocaines.</p>
          </div>
        </div>
      </section>

      <section className="section blog-index-section">
        <div className="container">
          <p className="eyebrow eyebrow-dark"><span /> À la une</p>
          <ArticleCard post={featuredPost} featured />

          <div className="blog-list-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> Dernières publications</p>
              <h2>Conseils, méthodes et actualités</h2>
            </div>
            <p>Des contenus pensés pour être lus rapidement et appliqués concrètement dans votre entreprise.</p>
          </div>
          <div className="article-grid">
            {otherPosts.map((post) => <ArticleCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <CTASection title="Un sujet mérite un échange plus concret ?" text="Présentez-nous votre contexte. Nous vous aiderons à identifier la première action utile pour votre entreprise." primaryLabel="Demander un diagnostic" primaryHref="/contact#diagnostic-form" whatsappMessage={whatsappMessages.diagnostic} />
    </main>
  );
}
