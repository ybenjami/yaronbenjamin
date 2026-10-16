import Link from 'next/link'
import { PixelCairn } from './pixel-cairn'
import { Container } from './ui'

const links = [
  { href: '/writing', label: 'Writing' },
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
]

export function Nav() {
  return (
    <header>
      <Container className="flex flex-wrap items-center justify-between gap-4 py-7">
        <Link href="/" className="flex items-center gap-3 text-fg">
          <PixelCairn />
          <span className="font-pixel text-base tracking-[0.04em]">YARON BENJAMIN</span>
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-6 text-[15px] sm:gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-fg px-5 py-3 font-medium text-ink transition-colors hover:bg-accent"
          >
            Get in touch
          </Link>
        </nav>
      </Container>
    </header>
  )
}
