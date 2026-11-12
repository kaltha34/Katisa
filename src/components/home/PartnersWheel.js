'use client';

import {
  FiBookOpen,
  FiBriefcase,
  FiCamera,
  FiCoffee,
  FiHeart,
  FiHome,
  FiShoppingBag,
  FiSmile,
} from 'react-icons/fi';
import { partners } from '@/lib/content';

const icons = {
  salons: FiSmile,
  clinics: FiHeart,
  tuition: FiBookOpen,
  shops: FiShoppingBag,
  artists: FiCamera,
  cafes: FiCoffee,
  services: FiBriefcase,
  studios: FiHome,
};

export default function PartnersWheel() {
  const loop = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--bg)] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--bg)] to-transparent md:w-24" />

      <div className="partners-marquee">
        {loop.map((partner, index) => {
          const Icon = icons[partner.id] || FiBriefcase;
          return (
            <div
              key={`${partner.id}-${index}`}
              className="flex h-16 min-w-[160px] items-center justify-center gap-2.5 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-5 text-sm font-semibold tracking-wide text-[color:var(--ink-muted)]"
            >
              <Icon className="text-[color:var(--brass)]" size={16} />
              {partner.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
