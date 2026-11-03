import fs from 'fs';
import path from 'path';

export type PostMeta = {
  title: string;
  publishedAt: string;
  summary: string;
  theme?: string;
  image?: string;
  draft?: boolean;
};

export type Post = { slug: string; metadata: PostMeta; content: string };

const POSTS_DIR = path.join(process.cwd(), 'content', 'writing');

export function parseFrontmatter(file: string) {
  const match = /^---\s*([\s\S]*?)\s*---/.exec(file);
  const meta: Record<string, unknown> = {};
  if (match) {
    for (const line of match[1].trim().split('\n')) {
      const [key, ...rest] = line.split(': ');
      if (!key) continue;
      let value: string | boolean = rest
        .join(': ')
        .trim()
        .replace(/^['"](.*)['"]$/, '$1');
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      meta[key.trim()] = value;
    }
  }
  const content = match ? file.slice(match[0].length).trim() : file.trim();
  return { metadata: meta, content };
}

// Drafts show while running `npm run dev` and are hidden on the live site.
export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const showDrafts = process.env.NODE_ENV !== 'production';
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const { metadata, content } = parseFrontmatter(
        fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8'),
      );
      return { slug: file.replace(/\.mdx$/, ''), metadata: metadata as PostMeta, content };
    })
    .filter((p) => showDrafts || !p.metadata.draft)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime() ||
        a.slug.localeCompare(b.slug),
    );
}

export function formatDate(date: string) {
  if (!date) return '';
  const d = new Date(date.includes('T') ? date : `${date}T00:00:00`);
  return d.toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' });
}
