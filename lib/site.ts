// Everything you are likely to change lives here.

export const site = {
  name: 'Yaron Benjamin',
  title: 'Yaron Benjamin — Web platforms and the AI that runs on them',
  description:
    'Ideas on building web platforms, and the AI that runs on them, from Yaron Benjamin, CEO of Aionic Digital and creator of Cairn.',
  // Change this when you move to your permanent domain.
  url: 'https://youreonyaron.com',
  email: 'ybenjami@gmail.com',
  links: {
    aionic: 'https://aionicdigital.com',
    linkedin: 'https://www.linkedin.com/in/ybenjami',
    github: 'https://github.com/ybenjami',
    resume: '/resume.pdf',
  },
}

export const themes = [
  { id: 'content-platforms', label: 'Content platforms' },
  { id: 'ai-agents', label: 'AI agents in production' },
  { id: 'platforms-over-projects', label: 'Platforms over projects' },
  { id: 'leading-teams', label: 'Leading technical teams' },
] as const

export type ThemeId = (typeof themes)[number]['id']

export function themeLabel(id?: string) {
  return themes.find((t) => t.id === id)?.label ?? 'Notes'
}

// Shown on the home page until your first posts are published.
// Delete an entry once the real post exists.
export const upcoming: { title: string; theme: ThemeId }[] = [
  { title: 'Building a CMS publishing agent with Eve and Contentful', theme: 'ai-agents' },
  { title: 'Why I stopped building websites and started building platforms', theme: 'platforms-over-projects' },
  { title: 'What twenty years of CMS migrations taught me about content models', theme: 'content-platforms' },
]

export const experience: { role: string; org: string; href?: string; years: string; note: string }[] = [
  {
    role: 'Founder & CEO, creator of Cairn',
    org: 'Aionic Digital',
    href: site.links.aionic,
    years: '2024 – Now',
    note: 'Leading the company and building Cairn, its platform for zoos, aquariums and attractions.',
  },
  {
    role: 'Senior Architect → Director of Technical Services',
    org: 'authentic digital agency',
    years: '2015 – 2024',
    note: 'Promoted to lead technical services across every client project, while staying hands-on as architect on the largest ones.',
  },
  {
    role: 'Sr. IT Analyst',
    org: 'Genworth Financial',
    years: '2011 – 2015',
    note: 'Architecture and application development in financial services.',
  },
  {
    role: 'Software Engineer → Senior Software Engineer',
    org: 'ManTech, then the Department of Defense',
    years: '2006 – 2011',
    note: 'Built web applications for the Defense Commissary Agency, first as a ManTech contractor, then hired on directly.',
  },
]
