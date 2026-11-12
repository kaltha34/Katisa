'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import HomeHero from '@/components/home/HomeHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import FoundingOfferBanner from '@/components/ui/FoundingOfferBanner';
import Reveal from '@/components/ui/Reveal';
import ReviewsSection from '@/components/home/ReviewsSection';
import {
  bundles,
  industries,
  journeySteps,
  services,
} from '@/lib/content';

export default function HomePageClient() {
  return (
    <>
      <HomeHero />
      <FoundingOfferBanner />

      <section className="border-b border-[color:var(--line)] bg-[color:var(--bg-elevated)]">
        <div className="container-site py-8 md:py-10">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass)]">
            Build + Grow journey
          </p>
          <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, index) => (
              <li
                key={step.id}
                className="border border-[color:var(--line)] bg-[color:var(--bg)] p-5 sm:-ml-px sm:first:ml-0"
              >
                <div className="index-num">
                  {String(index + 1).padStart(2, '0')} · {step.label}
                </div>
                <p className="mt-3 text-sm text-[color:var(--ink-muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="mb-8 grid gap-4 border-b border-[color:var(--line)] pb-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="eyebrow mb-4">Build</div>
              <h2 className="heading-display">Systems that keep the business running</h2>
              <p className="body-muted mt-4 max-w-xl">
                Websites, inventory & POS, internal apps and custom software — then add Pulse so
                people actually find you.
              </p>
            </div>
            <Button href="/build" variant="outline">
              Explore Build
            </Button>
          </div>
        </Reveal>
        <div className="divide-y divide-[color:var(--line)] border-b border-[color:var(--line)]">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <Link
                href={`/build#${service.id}`}
                className="group grid gap-3 py-5 transition md:grid-cols-[4.5rem_1fr_auto] md:items-center md:gap-8"
              >
                <span className="index-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brass)]">
                    {service.series}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--ink-muted)]">{service.plainLabel}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold">{service.priceLabel}</span>
                  <FiArrowUpRight className="text-[color:var(--ink-faint)] group-hover:text-[color:var(--brass)]" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-[color:var(--ink-muted)]">
          Grow with{' '}
          <Link href="/grow" className="font-semibold text-[color:var(--brass)] hover:underline">
            Pulse
          </Link>{' '}
          — content and video that send customers to what you just built.
        </p>
      </Section>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow mb-4">Bundles</div>
              <h2 className="heading-display">Build + Grow, priced together</h2>
              <p className="body-muted mt-4 max-w-xl">
                Save versus buying separately. Full details on the Bundles page.
              </p>
            </div>
            <Button href="/bundles" variant="ghost">
              See Bundles
            </Button>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {bundles.map((bundle) => (
            <Link
              key={bundle.id}
              href={bundle.href}
              className="card-surface block !p-5 transition hover:border-[color:var(--brass)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brass)]">
                {bundle.name}
              </div>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
                {bundle.plainLabel}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--ink-muted)]">{bundle.forWho}</p>
              <div className="mt-5 text-lg font-semibold text-[color:var(--brass)]">
                {bundle.priceLabel}
                {bundle.monthlyLabel ? ` + ${bundle.monthlyLabel}` : ''}
              </div>
              <p className="mt-2 text-xs text-[color:var(--ink-faint)]">{bundle.savingsLabel}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="mb-8 max-w-xl">
            <div className="eyebrow mb-4">Industries</div>
            <h2 className="heading-display">Built for how you sell</h2>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5 transition hover:border-[color:var(--brass)]"
            >
              <div className="font-display text-lg font-bold tracking-tight">{item.label}</div>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{item.benefit}</p>
            </Link>
          ))}
        </div>
      </Section>

      <section
        id="free-audit"
        className="border-y border-[color:var(--line)] bg-[color:var(--bg-invert)] text-[color:var(--bg)]"
      >
        <div className="container-site grid gap-8 py-14 md:grid-cols-[1.3fr_0.7fr] md:items-center md:py-20">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass-deep)]">
              Free Business Audit
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Website + social media check — no charge
            </h2>
            <p className="mt-4 max-w-xl text-base opacity-70 md:text-lg">
              We review your site (or lack of one) and your Instagram / Facebook presence, then
              send plain-language notes on what to fix first. No obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href="/book-consultation?package=free-audit" variant="primary">
              Get a Free Audit
            </Button>
            <Button
              href="/book-consultation"
              variant="ghost"
              className="!border-[color:var(--bg)]/25 !text-[color:var(--bg)] hover:!border-[color:var(--brass)] hover:!text-[color:var(--brass-deep)]"
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <CtaBand
        title="Not sure whether to Build, Grow, or both?"
        description="Book a free call. We’ll map the gap and suggest a clear next step."
      />
    </>
  );
}
