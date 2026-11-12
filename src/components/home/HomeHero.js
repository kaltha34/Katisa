'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import HeroDashboard from '@/components/home/HeroDashboard';

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

      <div className="container-site relative z-10 py-8 md:py-10 lg:py-12">
        <motion.p
          {...enter(0)}
          className="font-display text-[clamp(2.75rem,12vw,8.5rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-[color:var(--ink)]"
        >
          KATISA
        </motion.p>

        <div className="mt-8 grid items-end gap-10 lg:mt-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="max-w-xl border-t border-[color:var(--line)] pt-6">
            <motion.h1
              {...enter(0.06)}
              className="font-display text-2xl font-bold leading-[1.12] tracking-tight text-[color:var(--ink)] sm:text-3xl lg:text-[2.15rem]"
            >
              Never lose a booking, a stock count, or a customer chat again.
            </motion.h1>

            <motion.p {...enter(0.12)} className="body-muted mt-5 text-base md:text-lg">
              Websites, inventory systems and internal apps for shops, clinics and classes across
              Sri Lanka — clear LKR prices, WhatsApp-friendly delivery.
            </motion.p>

            <motion.div {...enter(0.18)} className="mt-8 flex flex-wrap gap-3">
              <Button href="/book-consultation" variant="primary">
                Book a free call
              </Button>
              <Button href="/work" variant="ghost">
                See our work
              </Button>
            </motion.div>

            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
              Free discovery · No jargon · You own the code
            </p>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
