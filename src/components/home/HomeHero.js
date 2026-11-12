'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { positioningLine } from '@/lib/pricing';

export default function HomeHero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay = 0) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div className="grain-overlay" />
      <div className="absolute inset-0 hero-grid opacity-40" />

      <div className="container-site relative z-10 py-10 md:py-14 lg:py-16">
        <motion.p
          {...enter(0)}
          className="font-display text-[clamp(2.75rem,12vw,8.5rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-[color:var(--ink)]"
        >
          KATISA
        </motion.p>

        <div className="mt-8 max-w-3xl border-t border-[color:var(--line)] pt-6">
          <motion.p
            {...enter(0.04)}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass)]"
          >
            Build · Grow
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            className="mt-3 font-display text-2xl font-bold leading-[1.12] tracking-tight text-[color:var(--ink)] sm:text-3xl lg:text-4xl"
          >
            {positioningLine}
          </motion.h1>
          <motion.p {...enter(0.12)} className="body-muted mt-5 max-w-2xl text-base md:text-lg">
            One team for shops, salons, clinics, restaurants and vehicle sellers — websites and
            systems under Build, content and video under Pulse (Grow).
          </motion.p>
          <motion.div {...enter(0.18)} className="mt-8 flex flex-wrap gap-3">
            <Button href="/build" variant="primary">
              Explore Build
            </Button>
            <Button href="/grow" variant="ghost">
              Explore Grow
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
