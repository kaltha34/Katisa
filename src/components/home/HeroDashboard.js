'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const builds = [
  {
    title: 'Inventory systems',
    price: 'From LKR 62,000',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=75',
    href: '/services#inventory',
  },
  {
    title: 'Booking apps',
    price: 'From LKR 29,000',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=75',
    href: '/services#apps',
  },
  {
    title: 'Business websites',
    price: 'From LKR 58,000',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=75',
    href: '/services#websites',
  },
];

export default function HeroDashboard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.12 }}
      className="relative"
    >
      <div className="overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] shadow-soft">
        <div className="flex items-end justify-between gap-3 px-5 pb-3 pt-5">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
              What we can build for you
            </div>
            <p className="mt-1 text-sm text-[color:var(--ink-muted)]">
              Real software services — clear starting prices in LKR.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden shrink-0 text-xs font-semibold text-[color:var(--brass)] sm:inline-flex sm:items-center sm:gap-1"
          >
            All services <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-3 p-4 pt-1 sm:grid-cols-3">
          {builds.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + i * 0.07 }}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/5] min-h-[160px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brass)]">
                    Service
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">{item.title}</div>
                  <div className="mt-0.5 text-xs text-white/65">{item.price}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-[color:var(--line)] px-4 py-3">
          <Link href="/book-consultation" className="btn-primary !py-2.5 !text-xs">
            Book a free call
          </Link>
          <Link href="/services" className="btn-ghost !py-2.5 !text-xs sm:hidden">
            All services
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
