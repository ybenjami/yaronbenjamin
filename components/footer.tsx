import fs from 'fs';
import path from 'path';
import { site } from '@/lib/site';
import { Subscribe } from './subscribe';
import { Container } from './ui';

const links = [
  { href: site.links.aionic, label: 'Aionic Digital' },
  { href: site.links.linkedin, label: 'LinkedIn' },
  { href: site.links.github, label: 'GitHub' },
  { href: '/rss', label: 'RSS' },
];

// The Résumé link appears once public/resume.pdf exists.
if (fs.existsSync(path.join(process.cwd(), 'public', 'resume.pdf'))) {
  links.push({ href: site.links.resume, label: 'Résumé' });
}

export function Footer() {
  return (
    <footer>
      <Container className="pt-8">
        <Subscribe label="Get new posts by email." />
      </Container>
      <Container className="text-subtle flex flex-wrap justify-between gap-4 pt-8 pb-12 text-sm">
        <div>© {new Date().getFullYear()} Yaron Benjamin · Built with Next.js on Vercel</div>
        <div className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
