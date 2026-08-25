import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { formatBlogDate } from "@/app/_data/blog";
import type { BlogPost } from "@/app/_data/blog";

export function ArticleCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`article-card${featured ? " article-card--featured" : ""}`}>
      <Link className="article-card__image" href={`/blog/${post.slug}`} aria-label={`Lire : ${post.title}`}>
        <Image src={post.image} alt={post.imageAlt} fill sizes={featured ? "(max-width: 930px) 100vw, 56vw" : "(max-width: 700px) 100vw, 33vw"} />
      </Link>
      <div className="article-card__body">
        <div className="article-card__meta">
          <span>{post.category}</span>
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <small><Clock3 aria-hidden="true" size={14} /> {post.readingTime}</small>
        </div>
        <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link className="article-card__link" href={`/blog/${post.slug}`}>Lire l’article <ArrowRight aria-hidden="true" size={16} /></Link>
      </div>
    </article>
  );
}
