import { ImageResponse } from 'next/og';

// Home-screen icon: the pixel cairn on near-black.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

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

export default function AppleIcon() {
  const px = 9;
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
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
    </div>,
    size,
  );
}
