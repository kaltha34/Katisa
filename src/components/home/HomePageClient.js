'use client';

import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiBox,
  FiCalendar,
  FiClipboard,
  FiCode,
  FiCompass,
  FiGlobe,
  FiLayers,
  FiPhone,
  FiRocket,
  FiSearch,
  FiShield,
} from 'react-icons/fi';
import HomeHero from '@/components/home/HomeHero';
import PainCards from '@/components/home/PainCards';
import PartnersWheel from '@/components/home/PartnersWheel';
import ReviewsSection from '@/components/home/ReviewsSection';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/ui/Reveal';
import { process, services, trustItems } from '@/lib/content';

const serviceVisual = {
  apps: { icon: FiLayers, blurb: 'Internal tools staff open every day' },
  websites: { icon: FiGlobe, blurb: 'Sites that bring calls and WhatsApp' },
  inventory: { icon: FiBox, blurb: 'Stock levels you can trust' },
  custom: { icon: FiCode, blurb: 'Built around your unique process' },
};

const processIcons = {
  '01': FiSearch,
  '02': FiCompass,
  '03': FiClipboard,
  '04': FiRocket,
  '05': FiShield,
};

export default function HomePageClient() {
  return (
    <>
      <HomeHero />

      <section className="border-y border-[color:var(--line)] bg-[color:var(--bg-elevated)]">
        <div className="container-site flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between">
          <p className="text-sm font-medium text-[color:var(--ink-muted)]">
            Built for shops, clinics and classes in Sri Lanka
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1.5 text-xs font-medium text-[color:var(--ink-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="eyebrow mb-4 justify-center">Who we build for</div>
            <h2 className="heading-display">Partners across Sri Lanka</h2>
            <p className="body-muted mt-4">
              Salons, clinics, classes, shops and studios — software that fits daily work.
            </p>
          </div>
        </Reveal>
        <PartnersWheel />
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="eyebrow mb-4 justify-center">Services in action</div>
            <h2 className="heading-display">From chaos to a clear system</h2>
            <p className="body-muted mt-4">Three common problems. Three services we build.</p>
          </div>
        </Reveal>
        <PainCards />
      </Section>

      <Section>
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="eyebrow mb-4">Packages</div>
              <h2 className="heading-display">Four clear starting points</h2>
              <p className="body-muted mt-4">
                Pick the outcome you need. Full details on Services. Prices on Pricing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/services" variant="outline">
                Services
              </Button>
              <Button href="/pricing" variant="ghost">
                Pricing
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const visual = serviceVisual[service.id] || { icon: FiLayers, blurb: service.outcome };
            const Icon = visual.icon;
            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <motion.a
                  href={`/services#${service.id}`}
                  whileHover={{ y: -3 }}
                  className="card-surface block h-full !p-5"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[color:var(--brass-soft)] p-3 text-[color:var(--brass)]">
                    <Icon size={22} />
                  </div>
                  <div className="text-xs font-semibold tracking-[0.16em] text-[color:var(--brass)]">
                    {service.series}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{visual.blurb}</p>
                  <p className="mt-4 text-sm font-semibold text-[color:var(--brass)]">
                    {service.priceLabel}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs text-[color:var(--ink-muted)]">
                    Details <FiArrowRight />
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <div className="eyebrow mb-4">How we work</div>
              <h2 className="heading-display">Five steps. No mystery months.</h2>
              <p className="body-muted mt-4">
                Discovery → Design → Build → Launch → Support. Scope in writing before heavy build.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/work" variant="outline">
                  See our work
                </Button>
                <Button href="/book-consultation" variant="primary">
                  Book a free call
                </Button>
              </div>
            </div>
          </Reveal>
          <ol className="space-y-3">
            {process.map((item) => {
              const Icon = processIcons[item.step] || FiPhone;
              return (
                <li
                  key={item.step}
                  className="flex gap-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brass-soft)] text-[color:var(--brass)]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[color:var(--brass)]">{item.step}</span>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-[color:var(--ink-muted)]">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      <ReviewsSection />

      <CtaBand />
    </>
  );
}
