import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/app/_components/ArticleCard";
import { blogPosts } from "@/app/_data/blog";

export function LatestArticles() {
  return (
    <section className="section latest-articles-section">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow eyebrow-dark"><span /> Blog & actualités</p>
            <h2>Des repères utiles pour passer à l’action</h2>
          </div>
          <div className="latest-articles-heading-copy">
            <p>Conseils pratiques, méthodes et points de vigilance pour mieux digitaliser, organiser et piloter votre entreprise.</p>
            <Link className="text-link text-link-blue" href="/blog">Voir tous les articles <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
        <div className="article-grid article-grid--home">
          {blogPosts.map((post) => <ArticleCard key={post.slug} post={post} />)}
        </div>
      </div>
    </section>
  );
}
