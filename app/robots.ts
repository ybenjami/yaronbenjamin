import { site } from '@/lib/site'

export default function robots() {
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${site.url}/sitemap.xml`,
  }
}
