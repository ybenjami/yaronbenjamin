import { ImageResponse } from 'next/og';

// Social share image: /og?title=Your+title
export function GET(request: Request) {
  const title = new URL(request.url).searchParams.get('title') || 'Yaron Benjamin';
  const rows: [number, number, number, string][] = [
    [5, 0, 4, '#c8f169'],
    [4, 1, 6, '#c8f169'],
    [5, 2, 4, '#c8f169'],
    [3, 4, 8, '#d4d4d4'],
    [2, 5, 10, '#d4d4d4'],
    [3, 6, 8, '#d4d4d4'],
    [1, 8, 12, '#737373'],
    [0, 9, 14, '#737373'],
    [1, 10, 12, '#737373'],
  ];
  const px = 8;

  return new ImageResponse(
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
            style={{
              position: 'absolute',
              left: x * px,
              top: y * px,
              width: w * px,
              height: px,
              background: c,
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 72,
          fontWeight: 600,
          letterSpacing: -3,
          lineHeight: 1.05,
          maxWidth: 1000,
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', fontSize: 28, color: '#a1a1a1' }}>
        Yaron Benjamin · Software architect · Founder, Aionic Digital
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
