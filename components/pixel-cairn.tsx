// An original 8-bit mark: three stacked stones, the top one in the accent color.
const rows: [x: number, y: number, w: number, tone: 'top' | 'mid' | 'base'][] = [
  [5, 0, 4, 'top'], [4, 1, 6, 'top'], [5, 2, 4, 'top'],
  [3, 4, 8, 'mid'], [2, 5, 10, 'mid'], [3, 6, 8, 'mid'],
  [1, 8, 12, 'base'], [0, 9, 14, 'base'], [1, 10, 12, 'base'],
]

const fills = {
  top: 'var(--color-accent)',
  mid: '#d4d4d4',
  base: '#737373',
}

export function PixelCairn({ width = 28, className }: { width?: number; className?: string }) {
  return (
    <svg
      width={width}
      height={Math.round((width * 11) / 14)}
      viewBox="0 0 14 11"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      {rows.map(([x, y, w, tone]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} fill={fills[tone]} />
      ))}
    </svg>
  )
}
