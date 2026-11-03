import { getPosts } from '@/lib/posts';
import { site } from '@/lib/site';

const escape = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const items = getPosts()
    .map(
      (post) => `    <item>
      <title>${escape(post.metadata.title)}</title>
      <link>${site.url}/writing/${post.slug}</link>
      <guid>${site.url}/writing/${post.slug}</guid>
      <description>${escape(post.metadata.summary)}</description>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
    </item>`,
    )
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${site.url}</link>
    <description>${escape(site.description)}</description>
${items}
  </channel>
</rss>`;

  return new Response(feed, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
