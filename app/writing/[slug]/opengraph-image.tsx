import { ImageResponse } from 'next/og'
import { getPosts } from '@/lib/posts'
import { themeLabel } from '@/lib/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

const rows: [number, number, number, string][] = [
  [5, 0, 4, '#c8f169'], [4, 1, 6, '#c8f169'], [5, 2, 4, '#c8f169'],
  [3, 4, 8, '#d4d4d4'], [2, 5, 10, '#d4d4d4'], [3, 6, 8, '#d4d4d4'],
  [1, 8, 12, '#737373'], [0, 9, 14, '#737373'], [1, 10, 12, '#737373'],
]
const px = 8

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getPosts().find((p) => p.slug === slug)
  const title = post?.metadata.title ?? 'Yaron Benjamin'
  const theme = themeLabel(post?.metadata.theme)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          padding: 80,
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', position: 'relative', width: 14 * px, height: 11 * px }}>
          {rows.map(([x, y, w, c]) => (
            <div
              key={`${x}-${y}`}
              style={{ position: 'absolute', left: x * px, top: y * px, width: w * px, height: px, background: c }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1000 }}>
          <div style={{ display: 'flex', fontSize: 20, fontWeight: 500, color: '#c8f169', letterSpacing: 2 }}>
            {theme.toUpperCase()}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#a1a1a1' }}>Yaron Benjamin</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
