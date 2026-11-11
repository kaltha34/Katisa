'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import HeroDashboard from '@/components/home/HeroDashboard';
import { services } from '@/lib/site';

const chips = services
  .filter((service) => service.series)
  .map((service) => ({
    label: service.title,
    href: `/services#${service.id}`,
  }));

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="container-site relative z-10 grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            Sri Lankan Software Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Software services that help your business{' '}
            <span className="text-gold">grow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg"
          >
            Katisa Technologies builds websites, inventory systems, internal apps, and custom
            software for teams that need tools that actually fit — not off-the-shelf clutter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/services" variant="gold">
              Explore Services
            </Button>
            <Button href="/book-consultation" variant="ghost">
              Book a Free Call
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {chips.map((chip) => (
              <Link
                key={chip.href}
                href={chip.href}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/85 transition hover:border-gold/50 hover:text-gold"
              >
                {chip.label}
              </Link>
            ))}
          </motion.div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
