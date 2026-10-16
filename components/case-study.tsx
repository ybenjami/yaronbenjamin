// Building blocks for case studies written in MDX.
import { Reveal } from './reveal'

export function Decisions({ children }: { children: React.ReactNode }) {
  return <div className="not-prose my-8 grid gap-6 md:grid-cols-3">{children}</div>
}

export function Decision({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal
      delay={(Number(n) - 1) * 90 || 0}
      className="flex flex-col gap-3.5 rounded-3xl border border-line bg-surface p-9 hover:border-line-strong"
    >
      <div className="font-pixel text-sm text-accent">{n}</div>
      <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">{title}</h3>
      <div className="text-base leading-relaxed text-muted">{children}</div>
    </Reveal>
  )
}

export function Stats({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="not-prose my-8 grid gap-8 border-y border-line py-10 sm:grid-cols-3">{children}</Reveal>
  )
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[44px] font-semibold leading-none tracking-[-0.04em] text-white">{value}</div>
      <div className="text-[15px] text-muted">{label}</div>
    </div>
  )
}
