'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { media } from '@/lib/media';

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
    <section className="relative overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--bg)]">
      <div className="grain-overlay" />

      {/* Clean overlapping rings — soft atmosphere, not cutting the logo */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-[8%] top-[-12%] h-[75%] w-[70%] max-w-3xl text-[color:var(--brass)] opacity-[0.22]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="260" cy="280" r="210" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="360" cy="300" r="175" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="300" cy="220" r="120" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </svg>

      <div className="relative grid min-h-[78vh] lg:min-h-[88vh] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-20 flex flex-col justify-center px-6 py-14 sm:px-10 md:py-20 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-8">
          <motion.p
            {...enter(0)}
            className="font-display text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-[color:var(--ink)]"
          >
            KATISA
          </motion.p>

          <motion.h1
            {...enter(0.08)}
            className="mt-6 max-w-lg font-display text-2xl font-bold leading-[1.15] tracking-tight text-[color:var(--ink)] sm:text-3xl lg:text-[2.15rem]"
          >
            Websites, software and marketing{' '}
            <span className="text-[color:var(--brass)]">for Sri Lankan businesses.</span>
          </motion.h1>

          <motion.p {...enter(0.14)} className="body-muted mt-5 max-w-md text-base md:text-lg">
            Clear LKR prices for shops, salons, clinics, restaurants and tuition centres — so you
            know what you get and what happens next.
          </motion.p>

          <motion.div {...enter(0.2)} className="mt-8 flex flex-wrap gap-3">
            <Button href="/pricing" variant="primary">
              See Pricing
            </Button>
            <Button href="/book-consultation" variant="ghost">
              Book a Free Call
            </Button>
          </motion.div>
        </div>

        <div className="relative min-h-[42vh] lg:min-h-full">
          <div className="absolute inset-0 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]">
            <Image
              src={media.heroHome}
              alt="Engineer working with modern tech tools"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[color:var(--bg)]/35 lg:via-transparent lg:to-transparent" />
            <div className="absolute inset-0 bg-[color:var(--brass)]/10 mix-blend-soft-light" />
          </div>

          <svg
            className="pointer-events-none absolute inset-y-0 -left-px hidden h-full w-[18%] text-[color:var(--bg)] lg:block"
            viewBox="0 0 120 800"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M120 0C70 80 20 160 28 240c10 100 90 140 88 260-2 110-78 160-90 300H0V0h120z"
            />
          </svg>

          <svg
            className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full text-[color:var(--bg)] lg:hidden"
            viewBox="0 0 800 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path fill="currentColor" d="M0 0h800v28c-120 40-240 52-400 40S120 20 0 48V0z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
