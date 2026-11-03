// Everything you are likely to change lives here.

export const site = {
  name: 'Yaron Benjamin',
  title: 'Yaron Benjamin — Architecture, platforms and AI-native software',
  description:
    'Yaron Benjamin is a software architect who designs and builds platforms, and writes about the decisions behind them. Founder and CEO of Aionic Digital.',
  url: 'https://yaronbenjamin.com',
  email: 'ybenjami@gmail.com',
  links: {
    aionic: 'https://aionicdigital.com',
    linkedin: 'https://www.linkedin.com/in/ybenjami',
    github: 'https://github.com/ybenjami',
    resume: '/resume.pdf',
  },
}

export const themes = [
  { id: 'architecture', label: 'Architecture & Engineering' },
  { id: 'ai-native', label: 'AI-Native Software' },
  { id: 'platforms', label: 'Building & Operating Platforms' },
] as const

export type ThemeId = (typeof themes)[number]['id']

export function themeLabel(id?: string) {
  return themes.find((t) => t.id === id)?.label ?? 'Notes'
}

// Shown on the home page until your first posts are published.
// Delete an entry once the real post exists.
export const upcoming: { title: string; theme: ThemeId }[] = [
  { title: 'Building a CMS publishing agent with Eve and Contentful', theme: 'ai-native' },
  { title: 'Why I stopped building websites and started building platforms', theme: 'platforms' },
  { title: 'Content vs. context: what twenty years of CMS migrations taught me about content models', theme: 'architecture' },
]

export const experience: { role: string; org: string; href?: string; years: string; note: string; todo?: string[] }[] = [
  {
    role: 'Founder & CEO, creator of Cairn',
    org: 'Aionic Digital',
    href: site.links.aionic,
    years: '2024 – Now',
    note: 'Architecting client platforms on Contentful and Next.js, building Cairn and AI agents, and leading the 21-person company through the shift to AI.',
  },
  {
    role: 'Senior Architect → Director of Technical Services',
    org: 'Authentic Digital',
    years: '2015 – 2024',
    note: 'Architected composable commerce, CMS and loyalty platforms for global brands, including event-driven backends and middle tiers. Promoted to lead technical services, a team of 60+ across projects for 20+ client brands, while staying architect on the largest. Led technical services through the company\'s acquisition by Concord (an H.I.G. Capital portfolio company) in 2023.',
  },
  {
    role: 'Sr. IT Analyst',
    org: 'Genworth Financial',
    years: '2011 – 2015',
    note: 'Enterprise architecture and application development in financial services.',
  },
  {
    role: 'Java Developer (contract)',
    org: 'Insurance company, through Apex Systems',
    years: '2011',
    note: 'Developed and helped architect a custom underwriting platform.',
  },
  {
    role: 'Software Engineer → Senior Software Engineer',
    org: 'ManTech, then the Department of Defense',
    years: '2006 – 2011',
    note: 'Built web applications and CMS-driven sites for the Defense Commissary Agency, first as a ManTech contractor, then hired on directly.',
  },
]
