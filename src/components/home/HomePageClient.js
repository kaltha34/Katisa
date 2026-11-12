'use client';

import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/home/HomeHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import GoalCard from '@/components/ui/GoalCard';
import ProcessSteps from '@/components/ui/ProcessSteps';
import ReviewsSection from '@/components/home/ReviewsSection';
import { CompletionRewardBanner, FoundingOfferBanner } from '@/components/ui/OfferBanner';
import {
  featuredWork,
  goalCards,
  homeHowItWorks,
  partners,
  pricingPreview,
} from '@/lib/content';
import { media } from '@/lib/media';
import { FiArrowUpRight } from 'react-icons/fi';

const partnerImages = {
  salons: media.salon,
  clinics: media.salon,
  tuition: media.website,
  shops: media.shop,
  restaurants: media.restaurant,
  vehicles: media.vehicle,
};

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
            <GoalCard
              key={card.id}
              title={card.title}
              text={card.text}
              href={card.href}
              image={card.image}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </Section>

      <section className="border-y border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="container-site py-10 md:py-12">
          <div className="mb-6 max-w-xl">
            <div className="eyebrow mb-3">Built for</div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Shops, salons, clinics and more
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p.id}
                className="group relative aspect-[4/5] overflow-hidden border border-[color:var(--line)]"
              >
                <Image
                  src={partnerImages[p.id] || media.shop}
                  alt={p.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-invert)]/85 via-[color:var(--bg-invert)]/20 to-transparent" />
                <span className="absolute bottom-3 left-3 font-display text-sm font-bold tracking-tight text-[color:var(--bg)]">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <p className="body-muted mt-3">
              From these amounts and upwards, depending on what you need. Full plans on Pricing.
            </p>
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
          <div className="eyebrow mb-4">Work</div>
          <h2 className="heading-display">Who we help</h2>
          <p className="body-muted mt-3">
            Real project work and the businesses we build for every week.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredWork.map((item) => {
            const external = item.href?.startsWith('http');
            const Comp = external ? 'a' : Link;
            const linkProps = external
              ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: item.href };
            return (
              <Comp
                key={item.id}
                {...linkProps}
                className="group overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] transition hover:border-[color:var(--brass)]"
              >
                {item.image && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[color:var(--line)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
                    {item.industry}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-tight">{item.label}</h3>
                  <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{item.detail}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--brass)]">
                    View <FiArrowUpRight />
                  </span>
                </div>
              </Comp>
            );
          })}
        </div>
      </Section>

      <ReviewsSection />

      <section className="relative overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--bg-invert)] text-[color:var(--bg)]">
        <Image
          src={media.phoneWhatsapp}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[color:var(--bg-invert)]/75" />
        <div className="container-site relative z-10 flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-20">
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
