import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { Container } from '@/components/ui'
import { formatDate, getPosts } from '@/lib/posts'
import { site, themeLabel } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPosts().find((p) => p.slug === slug)
  if (!post) return {}
  const { title, summary, publishedAt, image } = post.metadata
  const ogImage = image ?? `/og?title=${encodeURIComponent(title)}`
  return {
    title,
    description: summary,
    openGraph: { title, description: summary, type: 'article', publishedTime: publishedAt, url: `${site.url}/writing/${slug}`, images: [{ url: ogImage }] },
    twitter: { card: 'summary_large_image', title, description: summary, images: [ogImage] },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPosts().find((p) => p.slug === slug)
  if (!post) notFound()
  const { title, summary, publishedAt, theme, draft } = post.metadata

  return (
    <Container className="pb-24 pt-12 md:pt-20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            datePublished: publishedAt,
            description: summary,
            url: `${site.url}/writing/${slug}`,
            author: { '@type': 'Person', name: site.name },
          }),
        }}
      />
      <article className="mx-auto max-w-[720px]">
        <Link href="/writing" className="text-[15px] text-muted hover:text-white">
          ← All writing
        </Link>
        <header className="mb-12 mt-10 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[13px] uppercase">
            <span className="text-accent">{themeLabel(theme)}</span>
            <span className="text-subtle">{formatDate(publishedAt)}</span>
            {draft && <span className="rounded-full bg-accent px-2 py-0.5 text-ink">Draft</span>}
          </div>
          <h1 className="title text-[clamp(36px,5vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
            {title}
          </h1>
          {summary && <p className="text-xl leading-relaxed text-muted">{summary}</p>}
        </header>
        <div className="prose">
          <CustomMDX source={post.content} />
        </div>
      </article>
    </Container>
  )
}
