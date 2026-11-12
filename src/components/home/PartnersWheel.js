'use client';

import { partners } from '@/lib/content';

export default function PartnersWheel() {
  const loop = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden border-y border-[color:var(--line)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[color:var(--bg)] to-transparent md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[color:var(--bg)] to-transparent md:w-20" />

      <div className="partners-marquee py-5">
        {loop.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex items-center gap-0 px-0 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-muted)]"
          >
            <span className="px-5 md:px-7">{partner.label}</span>
            <span className="text-[color:var(--brass)]" aria-hidden>
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
