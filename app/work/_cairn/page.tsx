import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { CustomMDX } from '@/components/mdx';
import { Container, PillLink, PixelLabel, Placeholder } from '@/components/ui';
import { parseFrontmatter } from '@/lib/posts';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Cairn case study',
  description:
    'How I created Cairn, a platform from Aionic Digital for zoos, aquariums and attractions.',
  openGraph: {
    images: [
      { url: `/og?title=${encodeURIComponent('Cairn: built once, stacked for every venue')}` },
    ],
  },
};

const details = [
  { label: 'Role', value: 'Creator and lead engineer, Aionic Digital' },
  { label: 'Stack', value: 'Next.js, Eve, Contentful, Contentstack, Vercel' },
  { label: 'Status', value: 'Working with founding venues' },
];

export default function CairnPage() {
  const file = fs.readFileSync(path.join(process.cwd(), 'content', 'work', 'cairn.mdx'), 'utf-8');
  const { content } = parseFrontmatter(file);

  return (
    <>
      <Container className="flex flex-col gap-7 pt-12 pb-14 md:pt-20">
        <Link href="/#work" className="text-muted text-[15px] hover:text-white">
          ← All work
        </Link>
        <PixelLabel accent>Case study · Aionic Digital</PixelLabel>
        <h1 className="title max-w-[980px] text-[clamp(44px,6vw,84px)] leading-[1.02] font-semibold tracking-[-0.045em] text-white">
          Cairn: built once, stacked for every venue.
        </h1>
        <p className="text-muted max-w-[720px] text-xl leading-relaxed md:text-[21px]">
          Zoos, aquariums and gardens each rebuild the same website, ticketing links and visitor
          help from scratch. I created Cairn so they wouldn&apos;t have to: one platform, configured
          per venue.
        </p>
      </Container>

      <Container>
        <dl className="border-line grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 border-y py-8">
          {details.map((d) => (
            <div key={d.label} className="flex flex-col gap-2">
              <dt className="text-subtle font-mono text-xs uppercase">{d.label}</dt>
              <dd className="text-[17px] text-white">{d.value}</dd>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <dt className="text-subtle font-mono text-xs uppercase">Links</dt>
            <dd className="text-[17px]">
              <a
                href="#"
                className="decoration-line-strong hover:decoration-accent text-white underline underline-offset-4"
              >
                [Live demo] ↗
              </a>
            </dd>
          </div>
        </dl>
      </Container>

      <Container className="py-14">
        {/* Replace with a real screenshot: <Image src="/cairn/laprade.png" ... /> */}
        <Placeholder
          label="Laprade Zoo homepage screenshot, desktop and phone"
          className="h-[clamp(280px,45vw,620px)]"
        />
      </Container>

      <Container className="pb-16">
        <div className="prose mx-auto max-w-[860px]">
          <CustomMDX source={content} />
        </div>
      </Container>

      <Container className="pb-20">
        <div className="border-line bg-surface flex flex-wrap items-center justify-between gap-8 rounded-[32px] border px-8 py-14 md:px-12 md:py-16">
          <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-4">
            <PixelLabel accent>Next</PixelLabel>
            <h2 className="title text-[clamp(32px,4vw,48px)] leading-[1.08] font-semibold tracking-[-0.04em] text-white">
              Now working with founding venues.
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
  );
}
