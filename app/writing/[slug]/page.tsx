import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx';
import { Subscribe } from '@/components/subscribe';
import { Container } from '@/components/ui';
import { formatDate, getPosts } from '@/lib/posts';
import { site, themeLabel } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return {};
  const { title, summary, publishedAt } = post.metadata;
  return {
    title,
    description: summary,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: publishedAt,
      url: `/writing/${slug}`,
    },
    twitter: { card: 'summary_large_image', title, description: summary },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) notFound();
  const { title, summary, publishedAt, theme, draft } = post.metadata;

  return (
    <Container className="pt-12 pb-24 md:pt-20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description: summary,
            datePublished: publishedAt,
            url: `${site.url}/writing/${slug}`,
            image: `${site.url}/writing/${slug}/opengraph-image`,
            author: { '@type': 'Person', name: site.name, url: site.url },
          }),
        }}
      />
      <article className="mx-auto max-w-180">
        <Link href="/writing" className="text-muted text-[15px] hover:text-white">
          ← All writing
        </Link>
        <header className="mt-10 mb-12 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[13px] uppercase">
            <span className="text-accent">{themeLabel(theme)}</span>
            <span className="text-subtle">{formatDate(publishedAt)}</span>
            {draft && <span className="bg-accent text-ink rounded-full px-2 py-0.5">Draft</span>}
          </div>
          <h1 className="title text-[clamp(36px,5vw,56px)] leading-[1.05] font-semibold tracking-[-0.04em] text-white">
            {title}
          </h1>
          {summary && <p className="text-muted text-xl leading-relaxed">{summary}</p>}
        </header>
        <div className="prose">
          <CustomMDX source={post.content} />
        </div>
        <div className="mt-16">
          <Subscribe label="Enjoyed this? Get new posts by email." />
        </div>
      </article>
    </Container>
  );
}
