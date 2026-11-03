import { Reveal } from './reveal';

// Cairn's three layers, stacked like the stones they are named after.
const layers = [
  {
    kicker: 'The experience',
    name: 'Flux',
    text: "The venue's website, in Next.js",
    width: 'max-w-[460px]',
    tone: 'bg-fg text-ink',
    sub: 'text-[#404040]',
    kick: 'text-[#525252]',
  },
  {
    kicker: 'The guide',
    name: 'Scout',
    text: 'An AI concierge built on Eve',
    width: 'max-w-[580px]',
    tone: 'bg-[#a3a3a3] text-ink',
    sub: 'text-[#171717]',
    kick: 'text-[#262626]',
  },
  {
    kicker: 'The connection',
    name: 'Conduit',
    text: 'One link to ticketing, membership, donations and food',
    width: 'max-w-[700px]',
    tone: 'bg-[#525252] text-white',
    sub: 'text-[#f5f5f5]',
    kick: 'text-[#e5e5e5]',
  },
];

const systems = ['Ticketing', 'Membership', 'Contentful / Contentstack', 'Point of sale'];

export function Architecture() {
  return (
    <figure
      className="not-prose border-line bg-surface my-10 flex flex-col items-center gap-3.5 rounded-[32px] border px-4 py-14"
      aria-label="Cairn architecture: guests, members and staff use Flux, Scout and Conduit, which connect to the venue's ticketing, membership, CMS and point-of-sale systems."
    >
      <div className="bg-accent text-ink rounded-full px-4 py-2 font-mono text-[13px]">
        GUESTS · MEMBERS · STAFF
      </div>
      <div className="bg-line-strong h-5 w-0.5" aria-hidden="true" />
      {layers.map((l, i) => (
        <Reveal
          key={l.name}
          delay={(layers.length - 1 - i) * 140}
          className={`flex w-full ${l.width} flex-col gap-1 rounded-full px-7 py-6 text-center ${l.tone}`}
        >
          <div className={`font-mono text-xs uppercase ${l.kick}`}>{l.kicker}</div>
          <div className="text-[26px] font-semibold tracking-[-0.02em]">{l.name}</div>
          <div className={`text-[15px] ${l.sub}`}>{l.text}</div>
        </Reveal>
      ))}
      <div className="bg-line-strong h-5 w-0.5" aria-hidden="true" />
      <div className="flex flex-wrap justify-center gap-2.5 font-mono text-[13px] text-[#d4d4d4]">
        {systems.map((s) => (
          <span key={s} className="rounded-lg border border-dashed border-[#404040] px-3.5 py-2">
            {s}
          </span>
        ))}
      </div>
    </figure>
  );
}
