'use client';

import Link from 'next/link';
import { useState } from 'react';

type Item = { slug?: string; title: string; theme: string; themeLabel: string; date?: string };

export function WritingList({
  items,
  themes,
  upcoming = false,
}: {
  items: Item[];
  themes: readonly { id: string; label: string }[];
  upcoming?: boolean;
}) {
  const [active, setActive] = useState<string>('all');
  const shown = active === 'all' ? items : items.filter((i) => i.theme === active);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex flex-wrap gap-2 font-mono text-[13px]"
        role="group"
        aria-label="Filter by theme"
      >
        {[{ id: 'all', label: 'All' }, ...themes].map((t) => {
          const on = active === t.id;
          return (
            <button
              key={t.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(t.id)}
              className={`min-h-[40px] rounded-full px-3.5 py-2 transition-colors ${
                on ? 'bg-fg text-ink' : 'border-line-strong hover:border-fg border text-[#d4d4d4]'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <ul className="flex flex-col">
        {shown.map((item) => {
          const body = (
            <>
              <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-2">
                <div className="text-accent font-mono text-xs uppercase">{item.themeLabel}</div>
                <div className="text-2xl font-medium tracking-[-0.02em] text-white transition-transform duration-300 group-hover:translate-x-1.5 md:text-[26px]">
                  {item.title}
                </div>
              </div>
              <div className="text-subtle font-mono text-sm">
                {upcoming ? 'Coming soon' : item.date}
              </div>
            </>
          );
          const row =
            'flex flex-wrap items-baseline justify-between gap-3 border-t border-line py-7';
          return (
            <li key={item.title} className="last:border-line last:border-b">
              {item.slug ? (
                <Link href={`/writing/${item.slug}`} className={`${row} group`}>
                  {body}
                </Link>
              ) : (
                <div className={row}>{body}</div>
              )}
            </li>
          );
        })}
        {shown.length === 0 && (
          <li className="border-line text-muted border-y py-7">
            Nothing here yet. Check back soon.
          </li>
        )}
      </ul>
    </div>
  );
}
