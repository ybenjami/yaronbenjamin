import { Container, SectionHeading } from '@/components/ui'
import { WritingList } from '@/components/writing-list'
import { formatDate, getPosts } from '@/lib/posts'
import { themeLabel, themes, upcoming } from '@/lib/site'

export const metadata = {
  title: 'Writing',
  description: 'Essays on architecture and engineering, AI-native software, and building and operating platforms.',
}

export default function WritingIndex() {
  const posts = getPosts()
  const items = posts.length
    ? posts.map((p) => ({
        slug: p.slug,
        title: p.metadata.title,
        theme: p.metadata.theme ?? '',
        themeLabel: themeLabel(p.metadata.theme),
        date: formatDate(p.metadata.publishedAt),
      }))
    : upcoming.map((u) => ({ title: u.title, theme: u.theme, themeLabel: themeLabel(u.theme) }))

  return (
    <Container className="flex flex-col gap-12 pb-24 pt-16 md:pt-24">
      <SectionHeading
        label="Writing"
        title="Ideas from the build"
        intro="Engineering decisions, tradeoffs and lessons from real builds, across architecture, AI-native software and platforms."
      />
      <WritingList items={items} themes={themes} upcoming={posts.length === 0} />
    </Container>
  )
}
