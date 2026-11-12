'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { catalog } from '@/lib/pricing';

const builds = [
  {
    index: '01',
    title: 'Websites for shops & salons',
    price: catalog.rise.priceLabel,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=75',
    href: '/services#websites',
  },
  {
    index: '02',
    title: 'Inventory & POS',
    price: catalog.empire.priceLabel,
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=75',
    href: '/services#inventory',
  },
  {
    index: '03',
    title: 'Booking & clinic apps',
    price: catalog.origin.priceLabel,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=75',
    href: '/services#apps',
  },
];

export default function HeroDashboard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="relative"
    >
      <div className="mb-3 flex items-baseline justify-between gap-4 border-b border-[color:var(--line)] pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass)]">
          What we build
        </span>
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-muted)] transition hover:text-[color:var(--brass)]"
        >
          All services <FiArrowUpRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
        {builds.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.href}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.16 + i * 0.06 }}
            className="group relative block bg-[color:var(--bg-elevated)]"
          >
            <div className="relative aspect-[3/4] min-h-[180px] sm:min-h-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, 280px"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="index-num">{item.index}</div>
                <div className="mt-2 font-display text-lg font-bold leading-tight text-white">
                  {item.title}
                </div>
                <div className="mt-1 text-xs text-white/60">{item.price}</div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
