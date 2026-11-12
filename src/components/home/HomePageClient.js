'use client';

import Link from 'next/link';
import HomeHero from '@/components/home/HomeHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import GoalCard from '@/components/ui/GoalCard';
import ProcessSteps from '@/components/ui/ProcessSteps';
import { CompletionRewardBanner, FoundingOfferBanner } from '@/components/ui/OfferBanner';
import {
  goalCards,
  homeHowItWorks,
  pricingPreview,
  proofPlaceholders,
} from '@/lib/content';

export default function HomePageClient() {
  return (
    <>
      <HomeHero />
      <FoundingOfferBanner />

      <Section>
        <div className="mb-8 max-w-xl">
          <div className="eyebrow mb-4">Start here</div>
          <h2 className="heading-display">What do you need?</h2>
          <p className="body-muted mt-3">Pick the closest match. You can change your mind on the call.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {goalCards.map((card) => (
            <GoalCard key={card.id} title={card.title} text={card.text} href={card.href} />
          ))}
        </div>
      </Section>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <ProcessSteps
          title="How it works"
          intro="Three simple steps. Full detail is on the Software and Marketing pages."
          steps={homeHowItWorks}
        />
      </Section>

      <CompletionRewardBanner />

      <Section>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow mb-4">Pricing</div>
            <h2 className="heading-display">Starting prices</h2>
            <p className="body-muted mt-3">Clear LKR numbers. Full plans on the Pricing page.</p>
          </div>
          <Button href="/pricing" variant="outline">
            See Pricing
          </Button>
        </div>
        <div className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {pricingPreview.map((row) => (
            <Link
              key={row.label}
              href={row.href}
              className="flex flex-col gap-1 py-5 transition hover:text-[color:var(--brass)] sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-display text-lg font-bold tracking-tight">{row.label}</span>
              <span className="text-sm font-semibold text-[color:var(--brass)]">{row.priceLabel}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <div className="mb-8 max-w-xl">
          <div className="eyebrow mb-4">Proof</div>
          <h2 className="heading-display">Work we can show</h2>
          <p className="body-muted mt-3">
            Placeholders only until you approve real projects. We will not invent clients or results.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {proofPlaceholders.map((item) => (
            <div
              key={item.id}
              className="border border-dashed border-[color:var(--brass)]/50 bg-[color:var(--surface)] p-5"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
                Placeholder
              </div>
              <h3 className="mt-3 font-semibold">{item.label}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-[color:var(--line)] bg-[color:var(--bg-invert)] text-[color:var(--bg)]">
        <div className="container-site flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Ready to talk?
            </h2>
            <p className="mt-3 max-w-lg text-base opacity-70">
              Book a free call. We will map what you need and what it should cost — in plain English.
            </p>
          </div>
          <Button href="/book-consultation" variant="primary">
            Book a Free Call
          </Button>
        </div>
      </section>
    </>
  );
}
