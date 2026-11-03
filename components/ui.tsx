import Link from 'next/link';

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>{children}</div>;
}

export function PixelLabel({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`font-pixel text-[13px] tracking-[0.08em] uppercase ${accent ? 'text-accent' : 'text-subtle'}`}
    >
      {children}
    </div>
  );
}

export function MonoLabel({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={`font-mono text-[13px] uppercase ${accent ? 'text-accent' : 'text-subtle'}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <PixelLabel>{label}</PixelLabel>
      <h2 className="title text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
        {title}
      </h2>
      {intro && <p className="text-muted max-w-[620px] text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

const pillBase =
  'inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-medium transition-colors';

export function PillLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const style =
    variant === 'primary'
      ? 'bg-white text-ink hover:bg-accent'
      : 'border border-line-strong text-fg hover:border-fg hover:text-white';
  const external = href.startsWith('http') || href.startsWith('mailto:');
  if (external) {
    return (
      <a href={href} className={`${pillBase} ${style}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${pillBase} ${style}`}>
      {children}
    </Link>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-line-strong rounded-full border px-3 py-1.5 font-mono text-[13px] text-[#d4d4d4]">
      {children}
    </span>
  );
}

// A labelled stand-in for images or facts you still need to add.
export function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`border-line bg-raised text-subtle flex items-center justify-center rounded-[28px] border p-6 text-center font-mono text-sm ${className}`}
    >
      [{label}]
    </div>
  );
}

// Marks a fact still to be filled in. Shows in `npm run dev`, renders nothing in production.
export function Todo({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === 'production') return null;
  return (
    <span className="border-accent text-accent mt-2 block rounded-lg border border-dashed px-3 py-2 font-mono text-xs">
      [TODO: {children}]
    </span>
  );
}
