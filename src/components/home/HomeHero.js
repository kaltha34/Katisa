'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';

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

      <div className="container-site relative z-10 py-12 md:py-16 lg:py-20">
        <motion.p
          {...enter(0)}
          className="font-display text-[clamp(2.5rem,10vw,6.5rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-[color:var(--ink)]"
        >
          KATISA
        </motion.p>

        <div className="mt-8 max-w-2xl border-t border-[color:var(--line)] pt-6">
          <motion.h1
            {...enter(0.06)}
            className="font-display text-2xl font-bold leading-[1.15] tracking-tight text-[color:var(--ink)] sm:text-3xl lg:text-4xl"
          >
            Websites, software and marketing for Sri Lankan businesses.
          </motion.h1>
          <motion.p {...enter(0.12)} className="body-muted mt-5 text-base md:text-lg">
            Clear LKR prices for shops, salons, clinics, restaurants and tuition centres — so you
            know what you get and what happens next.
          </motion.p>
          <motion.div {...enter(0.18)} className="mt-8 flex flex-wrap gap-3">
            <Button href="/pricing" variant="primary">
              See Pricing
            </Button>
            <Button href="/book-consultation" variant="ghost">
              Book a Free Call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
