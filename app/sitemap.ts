import { getPosts } from '@/lib/posts'
import { site } from '@/lib/site'

export default function sitemap() {
  const today = new Date().toISOString().split('T')[0]
  const routes = ['', '/writing', '/work/cairn'].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: today,
  }))
  const posts = getPosts().map((post) => ({
    url: `${site.url}/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))
  return [...routes, ...posts]
}
