'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { pains } from '@/lib/content';

const photos = {
  stock:
    'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=70',
  bookings:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=70',
  sheets:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70',
};

const labels = {
  stock: 'Inventory systems',
  bookings: 'Booking apps',
  sheets: 'Internal apps',
};

export default function PainCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {pains.map((pain, index) => (
        <Reveal key={pain.id} delay={index * 0.05}>
          <article className="overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)]">
            <div className="relative h-44">
              <Image
                src={photos[pain.id]}
                alt=""
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
                  {labels[pain.id]}
                </div>
              </div>
            </div>

            <div className="space-y-3 p-5">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-faint)]">
                  Before
                </div>
                <p className="mt-1 text-sm text-[color:var(--ink-muted)]">{pain.before}</p>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brass)]">
                  What we build
                </div>
                <p className="mt-1 text-base font-semibold text-[color:var(--ink)]">{pain.after}</p>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
