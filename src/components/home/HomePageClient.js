'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import HomeHero from '@/components/home/HomeHero';
import PainCards from '@/components/home/PainCards';
import PartnersWheel from '@/components/home/PartnersWheel';
import ReviewsSection from '@/components/home/ReviewsSection';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/ui/Reveal';
import { process, services, trustItems } from '@/lib/content';

export default function HomePageClient() {
  return (
    <>
      <HomeHero />

      <section className="border-b border-[color:var(--line)] bg-[color:var(--bg-elevated)]">
        <div className="container-site grid gap-6 py-6 md:grid-cols-[1fr_auto] md:items-center md:py-7">
          <p className="text-sm text-[color:var(--ink-muted)]">
            Built for shops, clinics and classes in Sri Lanka
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {trustItems.map((item) => (
              <li
                key={item}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-faint)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section className="!pb-12 md:!pb-16">
        <Reveal>
          <div className="mb-8 grid gap-6 border-b border-[color:var(--line)] pb-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <div className="eyebrow mb-4">Who we build for</div>
              <h2 className="heading-display">Partners across Sri Lanka</h2>
            </div>
            <p className="body-muted md:text-right">
              Salons, clinics, classes, shops and studios — software that fits daily work.
            </p>
          </div>
        </Reveal>
        <PartnersWheel />
      </Section>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <div className="eyebrow mb-4">Services in action</div>
            <h2 className="heading-display">From chaos to a clear system</h2>
            <p className="body-muted mt-4">Three common problems. Three services we build.</p>
          </div>
        </Reveal>
        <PainCards />
      </Section>

      <Section>
        <Reveal>
          <div className="mb-2 flex flex-col gap-6 border-b border-[color:var(--line)] pb-8 md:flex-row md:items-end md:justify-between">
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

        <div className="divide-y divide-[color:var(--line)] border-b border-[color:var(--line)]">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <Link
                href={`/services#${service.id}`}
                className="group grid gap-3 py-6 transition md:grid-cols-[4.5rem_1fr_auto_auto] md:items-center md:gap-8"
              >
                <span className="index-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brass)]">
                    {service.series}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-tight md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--ink-muted)] md:hidden">
                    {service.outcome}
                  </p>
                </div>
                <p className="hidden max-w-sm text-sm text-[color:var(--ink-muted)] md:block">
                  {service.outcome}
                </p>
                <div className="flex items-center justify-between gap-6 md:justify-end">
                  <span className="text-sm font-semibold text-[color:var(--ink)]">
                    {service.priceLabel}
                  </span>
                  <FiArrowUpRight
                    className="text-[color:var(--ink-faint)] transition group-hover:text-[color:var(--brass)]"
                    size={18}
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
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

          <ol className="border-t border-[color:var(--line)]">
            {process.map((item) => (
              <li
                key={item.step}
                className="grid gap-2 border-b border-[color:var(--line)] py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
              >
                <span className="index-num pt-1">{item.step}</span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <ReviewsSection />

      <CtaBand />
    </>
  );
}
