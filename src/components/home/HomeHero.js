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
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[color:var(--brass)]/15 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[color:var(--brass)]/8 blur-3xl" />

      <div className="container-site relative z-10 grid items-center gap-10 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-8">
        <div>
          <motion.h1
            {...enter(0)}
            className="max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--ink)] sm:text-5xl lg:text-6xl"
          >
            Never lose a booking, a stock count, or a customer chat again.
          </motion.h1>

          <motion.p {...enter(0.08)} className="body-muted mt-5 max-w-lg">
            Katisa builds websites, inventory systems and internal apps for salons, clinics, tuition
            classes and shops across Sri Lanka — clear LKR prices, WhatsApp-friendly delivery.
          </motion.p>

          <motion.div {...enter(0.14)} className="mt-7 flex flex-wrap gap-3">
            <Button href="/book-consultation" variant="primary">
              Book a free call
            </Button>
            <Button href="/work" variant="ghost">
              See our work
            </Button>
          </motion.div>

          <p className="mt-5 text-sm text-[color:var(--ink-faint)]">
            Free discovery call · No jargon · You own the code
          </p>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
