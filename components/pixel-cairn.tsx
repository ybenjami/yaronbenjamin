// An original 8-bit mark: three stacked stones, the top one in the accent color.
const stones = [
  {
    tone: 'base',
    fill: '#737373',
    delay: 0,
    rows: [
      [1, 8, 12],
      [0, 9, 14],
      [1, 10, 12],
    ],
  },
  {
    tone: 'mid',
    fill: '#d4d4d4',
    delay: 160,
    rows: [
      [3, 4, 8],
      [2, 5, 10],
      [3, 6, 8],
    ],
  },
  {
    tone: 'top',
    fill: 'var(--color-accent)',
    delay: 320,
    rows: [
      [5, 0, 4],
      [4, 1, 6],
      [5, 2, 4],
    ],
  },
] as const;

export function PixelCairn({
  width = 28,
  className,
  animate = false,
  startDelay = 0,
}: {
  width?: number;
  className?: string;
  // Stack the stones one by one on load.
  animate?: boolean;
  startDelay?: number;
}) {
  return (
    <svg
      width={width}
      height={Math.round((width * 11) / 14)}
      viewBox="0 0 14 11"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      {stones.map((s) => (
        <g
          key={s.tone}
          className={animate ? 'stone motion-safe:animate-stone' : undefined}
          style={animate ? { animationDelay: `${startDelay + s.delay}ms` } : undefined}
        >
          {s.rows.map(([x, y, w]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} fill={s.fill} />
          ))}
        </g>
      ))}
    </svg>
  );
}
