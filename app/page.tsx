import Link from 'next/link'
import { PixelCairn } from '@/components/pixel-cairn'
import { Reveal } from '@/components/reveal'
import { Container, MonoLabel, PillLink, PixelLabel, Placeholder, SectionHeading, Tag } from '@/components/ui'
import { WritingList } from '@/components/writing-list'
import { formatDate, getPosts } from '@/lib/posts'
import { experience, site, themeLabel, themes, upcoming } from '@/lib/site'

const glance = [
  { value: '20 years', label: 'Building content-driven web' },
  { value: '2 CMS adapters', label: 'Contentful and Contentstack' },
  { value: 'Built on Eve', label: 'AI concierge in production build' },
  { value: 'AWS SA', label: 'Certified Solutions Architect' },
]

const otherWork = [
  {
    kicker: 'Open source · MIT',
    title: 'CMS publishing agent',
    text: 'An Eve agent that turns plain-language requests into draft entries in Contentful, from Slack or a terminal. It can\'t publish: a person always makes that call.',
    href: 'https://github.com/ybenjami/cms-publishing-agent',
    cta: 'View on GitHub ↗',
  },
  {
    kicker: 'authentic digital agency',
    title: 'Brand platforms at scale',
    text: 'Nine years leading technical delivery of CMS-driven brand sites for clients including Moen, Dice and SPE.',
    href: '#',
    cta: '[Case study link]',
  },
  {
    kicker: 'Localization',
    title: 'Automated translation in the CMS',
    text: 'Translation service integrations that publish [number] languages without manual hand-offs.',
    href: '#',
    cta: '[Case study link]',
  },
]

export default function Home() {
  const posts = getPosts()
  const items = posts.length
    ? posts.slice(0, 5).map((p) => ({
        slug: p.slug,
        title: p.metadata.title,
        theme: p.metadata.theme ?? '',
        themeLabel: themeLabel(p.metadata.theme),
        date: formatDate(p.metadata.publishedAt),
      }))
    : upcoming.map((u) => ({ title: u.title, theme: u.theme, themeLabel: themeLabel(u.theme) }))

  return (
    <>
      {/* Hero */}
      <Container className="flex flex-wrap items-center gap-16 pb-28 pt-16 md:pt-24">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
          <div className="motion-safe:animate-rise">
            <PixelLabel accent>CEO · Aionic Digital</PixelLabel>
          </div>
          <h1 className="title text-[clamp(44px,6vw,84px)] font-semibold leading-[1.02] tracking-[-0.045em] text-white motion-safe:animate-rise [animation-delay:90ms]">
            Ideas on building web platforms, and the AI that runs on them.
          </h1>
          <p className="max-w-[620px] text-xl leading-relaxed text-muted motion-safe:animate-rise [animation-delay:180ms]">
            I&apos;m Yaron, CEO of Aionic Digital and creator of Cairn. Twenty years building for the web, from
            early CMS platforms to headless architecture and AI agents, and what I&apos;ve learned along the way.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 motion-safe:animate-rise [animation-delay:270ms]">
            <PillLink href="#writing">Read the writing</PillLink>
            <PillLink href="/work/cairn" variant="secondary">
              How I built Cairn
            </PillLink>
          </div>
        </div>
        <div className="flex flex-[1_1_300px] flex-col items-center gap-5 motion-safe:animate-rise [animation-delay:240ms]">
          {/* Replace with: <Image src="/headshot.jpg" alt="Yaron Benjamin" width={300} height={360} className="rounded-[28px] grayscale" /> */}
          <Placeholder label="Your headshot, black and white" className="h-[360px] w-[300px]" />
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-muted">
            <span aria-hidden="true" className="h-2 w-2 bg-accent motion-safe:animate-blink" />
            Writing about web platforms and AI
          </div>
        </div>
      </Container>

      {/* At a glance */}
      <section aria-label="At a glance" className="border-y border-line">
        <Container className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 py-10">
          {glance.map((g, i) => (
            <Reveal key={g.value} delay={i * 80} className="flex flex-col gap-2">
              <div className="text-4xl font-semibold tracking-[-0.03em] text-white">{g.value}</div>
              <div className="text-[15px] text-muted">{g.label}</div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Writing */}
      <section id="writing" className="scroll-mt-8">
        <Container className="flex flex-col gap-10 pb-10 pt-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              label="01 / Writing"
              title="Point of view"
              intro="Four themes I keep coming back to, from the work itself."
            />
            {posts.length > 0 && (
              <Link href="/writing" className="text-[15px] font-medium text-white hover:text-accent">
                All writing →
              </Link>
            )}
          </Reveal>
          <Reveal delay={100}>
            <WritingList items={items} themes={themes} upcoming={posts.length === 0} />
          </Reveal>
        </Container>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-8">
        <Container className="flex flex-col gap-10 pb-10 pt-28">
          <Reveal>
            <SectionHeading label="02 / Work" title="Work" />
          </Reveal>

          <Reveal delay={100}>
          <Link
            href="/work/cairn"
            className="group flex flex-wrap overflow-hidden rounded-[28px] border border-line bg-surface transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong"
          >
            <div className="flex min-w-0 flex-[999_1_520px] flex-col justify-between gap-6 p-8 md:p-12">
              <div className="flex flex-col gap-4">
                <MonoLabel accent>My creation · Aionic Digital</MonoLabel>
                <h3 className="title text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-[40px]">
                  Cairn. Built once, stacked for every venue.
                </h3>
                <p className="text-lg leading-relaxed text-muted">
                  I created Cairn, the flagship platform of Aionic Digital: a Next.js website, an AI concierge and one
                  commerce connection for zoos, aquariums and attractions, deployed as each venue&apos;s own instance.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Eve', 'Contentful', 'Contentstack', 'Vercel'].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="font-medium text-white">
                Read the case study <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
            <div className="flex min-h-[320px] flex-[1_1_380px] items-center justify-center border-line bg-ink max-[979px]:border-t min-[980px]:border-l">
              <PixelCairn width={224} className="transition-transform duration-500 group-hover:-translate-y-1" />
            </div>
          </Link>
          </Reveal>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {otherWork.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 90}
                className="flex flex-col gap-3.5 rounded-3xl border border-line bg-surface p-9 hover:border-line-strong"
              >
                <MonoLabel>{w.kicker}</MonoLabel>
                <h3 className="text-[26px] font-semibold tracking-[-0.03em] text-white">{w.title}</h3>
                <p className="text-base leading-relaxed text-muted">{w.text}</p>
                <a href={w.href} className="text-[15px] font-medium text-fg hover:text-white">
                  {w.cta}
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-8">
        <Container className="flex flex-wrap gap-16 pb-10 pt-28">
          <Reveal className="flex flex-[1_1_280px] flex-col gap-3">
            <PixelLabel>03 / About</PixelLabel>
            <h2 className="title text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Two decades, one craft.
            </h2>
            <p className="text-[17px] leading-relaxed text-muted">
              From engineer to architect to agency director to founder, always close to the code.
            </p>
          </Reveal>
          <Reveal delay={100} className="min-w-0 flex-[999_1_560px]">
          <ul className="flex flex-col">
            {experience.map((e) => (
              <li
                key={e.role}
                className="flex flex-wrap justify-between gap-2 border-t border-line py-6 last:border-b"
              >
                <div className="flex flex-col gap-1">
                  <div className="text-[19px] font-medium text-white">{e.role}</div>
                  <div className="text-[15px] text-muted">
                    {e.href ? (
                      <a href={e.href} className="underline decoration-line-strong underline-offset-4 hover:text-white">
                        {e.org}
                      </a>
                    ) : (
                      e.org
                    )}
                  </div>
                </div>
                <div className="font-mono text-sm text-subtle">{e.years}</div>
              </li>
            ))}
          </ul>
          </Reveal>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-8">
        <Container className="pb-20 pt-28">
          <Reveal className="flex flex-wrap items-center justify-between gap-8 rounded-[32px] border border-line bg-surface px-8 py-14 md:px-12 md:py-16">
            <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-4">
              <PixelLabel accent>Let&apos;s talk</PixelLabel>
              <h2 className="title text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                Want to trade ideas, or build something together?
              </h2>
            </div>
            <PillLink href={`mailto:${site.email}`}>{site.email}</PillLink>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
