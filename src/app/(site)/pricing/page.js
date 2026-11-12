import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import PlanSection from '@/components/ui/PlanSection';
import FaqAccordion from '@/components/home/FaqAccordion';
import { FoundingOfferBanner } from '@/components/ui/OfferBanner';
import Badge from '@/components/ui/Badge';
import {
  bundles,
  completionReward,
  customAppPlan,
  customProjectPlan,
  formatLkr,
  foundingOffer,
  marketingOneOffs,
  paymentTerms,
  pricingFaqs,
  pricingMarketingBlock,
  pricingSoftwareBlocks,
  websiteCarePlans,
} from '@/lib/content';
import { FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'Pricing',
  description:
    'Clear LKR prices: Business Website from 35,000, Stock & Sales from 40,000 setup, Custom Business App from 85,000, Social Media & Video Marketing from 25,000/month — plus free InQRS card on completion.',
};

const anchors = [
  { href: '#pricing-websites', label: 'Websites' },
  { href: '#pricing-stock', label: 'Stock & Sales' },
  { href: '#pricing-marketing', label: 'Marketing' },
  { href: '#add-ons', label: 'Add-ons' },
  { href: '#bundles', label: 'Bundles' },
  { href: '#completion-reward', label: 'Free InQRS card' },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear prices in LKR."
        accent="No mystery quotes."
        description={`Payment terms: ${paymentTerms.summary}. Every completed project includes a free InQRS card (${completionReward.inqrsLabel}).`}
        actions={
          <>
            <Button href="/book-consultation" variant="primary">
              Book a Free Call
            </Button>
            <Button href="/software" variant="ghost">
              See Software
            </Button>
          </>
        }
      />

      <FoundingOfferBanner />

      <nav
        className="border-b border-[color:var(--line)] bg-[color:var(--bg-elevated)]"
        aria-label="Pricing sections"
      >
        <div className="container-site flex flex-wrap gap-x-5 gap-y-2 py-4 text-sm">
          {anchors.map((a) => (
            <a key={a.href} href={a.href} className="text-[color:var(--ink-muted)] hover:text-[color:var(--brass)]">
              {a.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-site">
        {pricingSoftwareBlocks.map((block) => (
          <PlanSection
            key={block.id}
            id={block.id}
            title={block.title}
            intro={block.intro}
            plans={block.plans}
            productLabel={block.title.includes('Website') ? 'Website' : 'Stock & Sales'}
          />
        ))}

        <PlanSection
          id={pricingMarketingBlock.id}
          title={pricingMarketingBlock.title}
          intro={pricingMarketingBlock.intro}
          plans={pricingMarketingBlock.plans}
          productLabel="Marketing"
        />
      </div>

      <Section id="add-ons" tone="soft" className="border-y border-[color:var(--line)]">
        <h2 className="heading-display">Add-ons</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold">Website Care</h3>
            <div className="mt-4 space-y-3">
              {websiteCarePlans.map((p) => (
                <div key={p.id} className="flex items-baseline justify-between gap-3 border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3 text-sm">
                  <span>{p.name}</span>
                  <span className="font-semibold text-[color:var(--brass)]">{p.priceLabel}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold">Custom work & one-offs</h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--ink-muted)]">
              <li className="flex justify-between gap-3 border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3">
                <span>{customAppPlan.name}</span>
                <span className="font-semibold text-[color:var(--brass)]">{customAppPlan.priceLabel}</span>
              </li>
              <li className="flex justify-between gap-3 border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3">
                <span>{customProjectPlan.name}</span>
                <span className="font-semibold text-[color:var(--brass)] text-right">{customProjectPlan.priceLabel}</span>
              </li>
              {marketingOneOffs.map((o) => (
                <li
                  key={o.id}
                  className="flex justify-between gap-3 border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3"
                >
                  <span>{o.name}</span>
                  <span className="font-semibold text-[color:var(--brass)]">{o.priceLabel}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="bundles">
        <h2 className="heading-display">Bundles</h2>
        <p className="body-muted mt-3 max-w-xl">Save versus buying each piece alone.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {bundles.map((b) => (
            <article key={b.id} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight">{b.name}</h3>
                {completionReward.enabled && <Badge>{completionReward.badgeLabel}</Badge>}
              </div>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{b.forWho}</p>
              <div className="mt-4 text-lg font-semibold text-[color:var(--brass)]">
                {b.priceLabel}
                {b.monthlyLabel ? ` + ${b.monthlyLabel}` : ''}
              </div>
              <p className="mt-2 text-xs text-[color:var(--ink-faint)]">{b.savingsLabel}</p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-muted)]">
                {b.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <FiCheck className="mt-0.5 text-[color:var(--brass)]" /> {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="completion-reward" tone="soft" className="border-y border-[color:var(--line)]">
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">Completion reward</div>
          <h2 className="heading-display">{completionReward.bannerTitle}</h2>
          <p className="body-muted mt-4">{completionReward.bannerBody}</p>
          <ul className="mt-6 space-y-2 text-sm text-[color:var(--ink-muted)]">
            {completionReward.terms.map((t) => (
              <li key={t} className="flex gap-2">
                <FiCheck className="mt-0.5 text-[color:var(--brass)]" /> {t}
              </li>
            ))}
          </ul>
          <Button href={completionReward.inqrsUrl} variant="outline" external className="mt-6">
            Visit InQRS
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading-display">Founding Client Offer</h2>
            <p className="body-muted mt-4">
              {foundingOffer.discountPercent}% off for the first {foundingOffer.totalSpots} clients —
              in exchange for {foundingOffer.requirement}. <strong>{foundingOffer.label}</strong>.
            </p>
            <p className="mt-4 text-sm text-[color:var(--ink-faint)]">
              Payment terms: {paymentTerms.summary}.
            </p>
          </div>
          <div className="border border-[color:var(--brass)]/40 bg-[color:var(--brass-soft)] p-6">
            <h3 className="font-display text-xl font-bold tracking-tight">Not sure which plan?</h3>
            <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
              Book a free 15-minute call. We will point you to Software, Marketing, or a bundle —
              starting from {formatLkr(35000)} for a website.
            </p>
            <Button href="/book-consultation" variant="primary" className="mt-5">
              Book a Free Call
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="heading-display">Straight answers</h2>
          </div>
          <FaqAccordion items={pricingFaqs} />
        </div>
      </Section>

      <CtaBand title="Ready for a clear next step?" />
    </>
  );
}
