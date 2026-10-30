import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { Container, MonoLabel, PillLink, PixelLabel, SectionHeading, Tag, Todo } from '@/components/ui'
import { WritingList } from '@/components/writing-list'
import { formatDate, getPosts } from '@/lib/posts'
import { experience, site, themeLabel, themes, upcoming } from '@/lib/site'

const glance = [
  { value: '20 years', label: 'Enterprise, commerce, loyalty and content platforms' },
  { value: 'Composable', label: 'Headless CMS, commerce, search and event-driven backends' },
  { value: 'Hands-on', label: 'Building open-source AI agents today' },
]

type WorkCard = {
  kicker: string
  title: string
  text: React.ReactNode
  links?: { href: string; label: string }[]
  todo?: string
  hidden?: boolean // keeps a card in the code but off the page until it's ready
}

const otherWork: WorkCard[] = [
  {
    kicker: 'Open source · MIT',
    title: 'CMS publishing agent',
    text: (
      <>
        An agent that turns plain-language requests into draft entries in Contentful, from Slack or a terminal. Built
        on{' '}
        <a href="https://eve.dev" className="underline decoration-line-strong underline-offset-4 hover:text-white">
          eve
        </a>
        , Vercel&apos;s open-source framework for building AI agents. It can&apos;t publish: a person always makes that
        call.
      </>
    ),
    links: [
      { href: '/writing/cms-publishing-agent-eve', label: 'Read the post →' },
      { href: 'https://github.com/ybenjami/cms-publishing-agent', label: 'View on GitHub ↗' },
    ],
  },
  {
    kicker: 'Composable architecture',
    title: 'Composable commerce at scale',
    text: 'Architected composable builds for global retail, entertainment and manufacturing brands on commercetools, Contentful, Sanity and Bloomreach, with Algolia, Elasticsearch, Bynder and Widen. Designed and built the event-driven backends and middle tiers that tie them together.',
    todo: 'one scale metric for these builds, such as peak traffic, orders or transactions',
  },
  {
    kicker: 'Loyalty platform',
    title: 'Loyalty replatform for a global coffee company',
    text: 'Architect for the replatforming of a global coffee company\'s loyalty program on Cheetah, Azure and Airship, including an event-driven backend.',
    todo: 'loyalty program member count',
  },
  {
    // Hidden until Yaron says it's ready.
    kicker: 'Reference architecture',
    title: 'Vercel + Salesforce Commerce Cloud reference storefront',
    text: 'TODO: description, stack and status.',
    todo: 'write this card, add a link, then remove hidden: true',
    hidden: true,
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
            <PixelLabel accent>Architect · Builder</PixelLabel>
          </div>
          <h1 className="title text-[clamp(44px,6vw,84px)] font-semibold leading-[1.02] tracking-[-0.045em] text-white motion-safe:animate-rise [animation-delay:90ms]">
            I design and build platforms, and write about the decisions behind them.
          </h1>
          <p className="max-w-[620px] text-xl leading-relaxed text-muted motion-safe:animate-rise [animation-delay:180ms]">
            I&apos;m Yaron Benjamin, a software architect with twenty years across enterprise, commerce, loyalty and
            content platforms. I&apos;m also founder and CEO of Aionic Digital, where I put that thinking into practice,
            most recently in Cairn and in AI agents that work inside real systems.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 motion-safe:animate-rise [animation-delay:270ms]">
            <PillLink href="#writing">Read the writing</PillLink>
            <PillLink href="#work" variant="secondary">
              See the work
            </PillLink>
          </div>
        </div>
        <div className="flex flex-[1_1_300px] flex-col items-center gap-5 motion-safe:animate-rise [animation-delay:240ms]">
          <Image
            src="/headshot.jpg"
            alt="Yaron Benjamin"
            width={300}
            height={360}
            priority
            className="h-[360px] w-[300px] rounded-[28px] border border-line object-cover grayscale"
          />
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-muted">
            <span aria-hidden="true" className="h-2 w-2 bg-accent motion-safe:animate-blink" />
            Writing about architecture, platforms and AI-native software
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
              intro="Engineering decisions, tradeoffs and lessons from real builds."
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
          <div className="group flex flex-wrap overflow-hidden rounded-[28px] border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
            <div className="flex min-w-0 flex-[999_1_520px] flex-col justify-between gap-6 p-8 md:p-12">
              <div className="flex flex-col gap-4">
                <MonoLabel accent>Platform · Aionic Digital</MonoLabel>
                <h3 className="title text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-[40px]">
                  Cairn. Built once, stacked for every venue.
                </h3>
                <p className="text-lg leading-relaxed text-muted">
                  A platform I created for zoos, aquariums and attractions: the website, the commerce connection and
                  an AI concierge, configured per venue instead of rebuilt for each one. It grew out of client work.
                  Flux, the Next.js website layer, packages code that already runs on sites Aionic has shipped. Scout,
                  the concierge, is built on Eve.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Eve', 'Contentful', 'Contentstack', 'Vercel'].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="flex items-center gap-2.5 font-mono text-[13px] text-muted">
                  <span aria-hidden="true" className="h-2 w-2 bg-accent" />
                  Now working with founding venues
                </span>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent('Cairn founding venue')}`}
                  className="font-medium text-white hover:text-accent"
                >
                  Become a founding venue <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
            <figure className="flex flex-[1_1_380px] flex-col items-center justify-center gap-4 border-line bg-ink p-6 max-[979px]:border-t min-[980px]:border-l md:p-8">
              <Image
                src="/cairn/laprade-scout.jpg"
                alt="Laprade Zoo, a demo venue, with Scout open as WildGuide, offering a guest a Kids Zoo Admission ticket"
                width={1500}
                height={1573}
                sizes="(min-width: 980px) 460px, 100vw"
                className="h-auto w-full max-w-[520px] transition-transform duration-500 group-hover:-translate-y-1"
              />
              <figcaption className="text-center font-mono text-xs text-subtle">
                Laprade Zoo, a demo venue, with Scout branded as WildGuide
              </figcaption>
            </figure>
          </div>
          </Reveal>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {otherWork.filter((w) => !w.hidden).map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 90}
                className="flex flex-col gap-3.5 rounded-3xl border border-line bg-surface p-9 hover:border-line-strong"
              >
                <MonoLabel>{w.kicker}</MonoLabel>
                <h3 className="text-[26px] font-semibold tracking-[-0.03em] text-white">{w.title}</h3>
                <p className="text-base leading-relaxed text-muted">{w.text}</p>
                {w.todo && <Todo>{w.todo}</Todo>}
                {w.links && (
                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    {w.links.map((l) => (
                      <a key={l.href} href={l.href} className="text-[15px] font-medium text-fg hover:text-accent">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
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
                  <p className="mt-1.5 max-w-[560px] text-[15px] leading-relaxed text-subtle">{e.note}</p>
                  {e.todo?.map((t) => <Todo key={t}>{t}</Todo>)}
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
            <div className="flex flex-col items-start gap-3">
              <PillLink href={`mailto:${site.email}`}>{site.email}</PillLink>
              <a href={site.links.aionic} className="px-1 text-[15px] text-muted hover:text-white">
                Project work? Aionic Digital ↗
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
