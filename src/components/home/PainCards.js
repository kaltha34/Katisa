'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { pains } from '@/lib/content';

const photos = {
  stock:
    'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=70',
  bookings:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=70',
  sheets:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=70',
};

const labels = {
  stock: 'Inventory systems',
  bookings: 'Booking apps',
  sheets: 'Internal apps',
};

export default function PainCards() {
  return (
    <div className="space-y-0 border-t border-[color:var(--line)]">
      {pains.map((pain, index) => {
        const flip = index % 2 === 1;
        return (
          <Reveal key={pain.id} delay={index * 0.05}>
            <article
              className={`grid items-stretch border-b border-[color:var(--line)] md:grid-cols-2 ${
                flip ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative min-h-[220px] md:min-h-[280px]">
                <Image
                  src={photos[pain.id]}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute bottom-4 left-4">
                  <span className="index-num text-white/90">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brass)]">
                    {labels[pain.id]}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6 bg-[color:var(--bg)] p-6 md:p-10">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-faint)]">
                    Before
                  </div>
                  <p className="mt-2 text-base text-[color:var(--ink-muted)]">{pain.before}</p>
                </div>
                <div className="rule-h" />
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brass)]">
                    What we build
                  </div>
                  <p className="mt-2 font-display text-xl font-bold tracking-tight text-[color:var(--ink)] md:text-2xl">
                    {pain.after}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
