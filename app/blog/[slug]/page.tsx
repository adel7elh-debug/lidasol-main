import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { ArticleCard } from "@/app/_components/ArticleCard";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { CTASection } from "@/app/_components/CTASection";
import { blogPosts, formatBlogDate, getBlogPost } from "@/app/_data/blog";
import { absoluteUrl, SITE_NAME, whatsappMessages } from "@/app/_lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const canonical = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: absoluteUrl(canonical),
      publishedTime: post.publishedAt,
      images: [{ url: absoluteUrl(post.image), alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [absoluteUrl(post.image)] },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: absoluteUrl(post.image),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.svg") } },
  };

  return (
    <main>
      <article>
        <header className="article-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Actualités & Conseils", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
            <div className="article-hero__layout">
              <div className="article-hero__copy">
                <span className="article-category">{post.category}</span>
                <h1>{post.title}</h1>
                <p>{post.excerpt}</p>
                <div className="article-meta">
                  <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                  <span><Clock3 aria-hidden="true" size={15} /> {post.readingTime}</span>
                </div>
              </div>
              <div className="article-hero__image">
                <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 930px) 100vw, 45vw" />
              </div>
            </div>
          </div>
        </header>

        <div className="container article-layout">
          <aside className="article-aside">
            <Link href="/blog"><ArrowLeft aria-hidden="true" size={16} /> Tous les articles</Link>
            <div>
              <small>Dans cet article</small>
              {post.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, "0")} — {section.title}</a>)}
            </div>
          </aside>

          <div className="article-content">
            <p className="article-intro">{post.introduction}</p>
            {post.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <span className="article-section-number">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}><CheckCircle2 aria-hidden="true" size={19} /><span>{bullet}</span></li>)}</ul> : null}
              </section>
            ))}
            <div className="article-takeaway">
              <small>À retenir</small>
              <p>{post.takeaway}</p>
            </div>
          </div>
        </div>
      </article>

      <section className="section related-articles-section">
        <div className="container">
          <div className="blog-list-heading">
            <div><p className="eyebrow eyebrow-dark"><span /> À lire aussi</p><h2>Continuer la lecture</h2></div>
            <Link className="text-link text-link-blue" href="/blog">Voir tous les articles <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
          <div className="article-grid article-grid--two">{relatedPosts.map((item) => <ArticleCard key={item.slug} post={item} />)}</div>
        </div>
      </section>

      <CTASection title="Vous souhaitez appliquer ces conseils à votre entreprise ?" text="Un premier échange permet de situer votre besoin et de définir la prochaine étape utile." primaryLabel="Demander un diagnostic" primaryHref="/contact#diagnostic-form" whatsappMessage={whatsappMessages.general} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  );
}
