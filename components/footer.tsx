import { site } from '@/lib/site'
import { Container } from './ui'

const links = [
  { href: site.links.aionic, label: 'Aionic Digital' },
  { href: site.links.linkedin, label: 'LinkedIn' },
  { href: site.links.github, label: 'GitHub' },
  { href: '/rss', label: 'RSS' },
  { href: site.links.resume, label: 'Résumé' },
]

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-wrap justify-between gap-4 pb-12 pt-8 text-sm text-subtle">
        <div>© {new Date().getFullYear()} Yaron Benjamin · Built with Next.js on Vercel</div>
        <div className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-muted transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
