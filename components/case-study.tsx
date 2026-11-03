// Building blocks for case studies written in MDX.
import { Reveal } from './reveal';

export function Decisions({ children }: { children: React.ReactNode }) {
  return <div className="not-prose my-8 grid gap-6 md:grid-cols-3">{children}</div>;
}

export function Decision({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal
      delay={(Number(n) - 1) * 90 || 0}
      className="border-line bg-surface hover:border-line-strong flex flex-col gap-3.5 rounded-3xl border p-9"
    >
      <div className="font-pixel text-accent text-sm">{n}</div>
      <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">{title}</h3>
      <div className="text-muted text-base leading-relaxed">{children}</div>
    </Reveal>
  );
}

export function Stats({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="not-prose border-line my-8 grid gap-8 border-y py-10 sm:grid-cols-3">
      {children}
    </Reveal>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[44px] leading-none font-semibold tracking-[-0.04em] text-white">
        {value}
      </div>
      <div className="text-muted text-[15px]">{label}</div>
    </div>
  );
}
