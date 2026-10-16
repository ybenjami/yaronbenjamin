import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { CustomMDX } from '@/components/mdx'
import { Container, PillLink, PixelLabel, Placeholder } from '@/components/ui'
import { parseFrontmatter } from '@/lib/posts'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Cairn case study',
  description: 'How I created Cairn, the flagship platform of Aionic Digital, for zoos, aquariums and attractions.',
  openGraph: { images: [{ url: `/og?title=${encodeURIComponent('Cairn: built once, stacked for every venue')}` }] },
}

const details = [
  { label: 'Role', value: 'Creator and lead engineer, Aionic Digital' },
  { label: 'Stack', value: 'Next.js, Eve, Contentful, Contentstack, Vercel' },
  { label: 'Status', value: 'Laprade Zoo reference build; first venue deployments underway' },
]

export default function CairnPage() {
  const file = fs.readFileSync(path.join(process.cwd(), 'content', 'work', 'cairn.mdx'), 'utf-8')
  const { content } = parseFrontmatter(file)

  return (
    <>
      <Container className="flex flex-col gap-7 pb-14 pt-12 md:pt-20">
        <Link href="/#work" className="text-[15px] text-muted hover:text-white">
          ← All work
        </Link>
        <PixelLabel accent>Case study · Aionic Digital</PixelLabel>
        <h1 className="title max-w-[980px] text-[clamp(44px,6vw,84px)] font-semibold leading-[1.02] tracking-[-0.045em] text-white">
          Cairn: built once, stacked for every venue.
        </h1>
        <p className="max-w-[720px] text-xl leading-relaxed text-muted md:text-[21px]">
          Zoos, aquariums and gardens each rebuild the same website, ticketing links and visitor help from scratch. I
          created Cairn so they wouldn&apos;t have to: one platform, configured per venue, and now the flagship of Aionic
          Digital.
        </p>
      </Container>

      <Container>
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 border-y border-line py-8">
          {details.map((d) => (
            <div key={d.label} className="flex flex-col gap-2">
              <dt className="font-mono text-xs uppercase text-subtle">{d.label}</dt>
              <dd className="text-[17px] text-white">{d.value}</dd>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <dt className="font-mono text-xs uppercase text-subtle">Links</dt>
            <dd className="text-[17px]">
              <a href="#" className="text-white underline decoration-line-strong underline-offset-4 hover:decoration-accent">
                [Live demo] ↗
              </a>
            </dd>
          </div>
        </dl>
      </Container>

      <Container className="py-14">
        {/* Replace with a real screenshot: <Image src="/cairn/laprade.png" ... /> */}
        <Placeholder label="Laprade Zoo homepage screenshot, desktop and phone" className="h-[clamp(280px,45vw,620px)]" />
      </Container>

      <Container className="pb-16">
        <div className="prose mx-auto max-w-[860px]">
          <CustomMDX source={content} />
        </div>
      </Container>

      <Container className="pb-20">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[32px] border border-line bg-surface px-8 py-14 md:px-12 md:py-16">
          <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-4">
            <PixelLabel accent>Next</PixelLabel>
            <h2 className="title text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
              The first venue deployments are underway. More are next.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <PillLink href="#">See the live demo</PillLink>
            <PillLink href={site.links.aionic} variant="secondary">
              Visit Aionic Digital
            </PillLink>
          </div>
        </div>
      </Container>
    </>
  )
}
