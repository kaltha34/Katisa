import { FiCheck } from 'react-icons/fi';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import FoundingOfferBanner from '@/components/ui/FoundingOfferBanner';
import FaqAccordion from '@/components/home/FaqAccordion';
import QuoteCalculator from '@/components/quote/QuoteCalculator';
import {
  bundles,
  catalog,
  formatLkr,
  paymentTerms,
  pricingFaqs,
  services,
  supportPlans,
} from '@/lib/content';

export const metadata = {
  title: 'Pricing',
  description:
    'Clear LKR prices: Rise websites from 35,000, Empire inventory from 40,000 setup, Origin apps from 85,000, Pulse content, Website Care from 4,500/month, and a Rise + Pulse bundle at 85,000.',
};

const tableRows = [
  ...catalog.rise.plans.map((p) => ({
    package: `Rise ${p.name}`,
    title: 'Website',
    bestFor: p.forWho,
    from: p.priceLabel,
    delivery: p.delivery,
    popular: p.popular,
  })),
  ...catalog.care.plans.map((p) => ({
    package: `Care ${p.name}`,
    title: 'Website Care',
    bestFor: p.forWho,
    from: p.priceLabel,
    delivery: p.delivery,
    popular: false,
  })),
  ...catalog.empire.plans.map((p) => ({
    package: `Empire ${p.name}`,
    title: 'Inventory & POS',
    bestFor: p.forWho,
    from: p.priceLabel,
    delivery: p.delivery,
    popular: p.popular,
  })),
  {
    package: 'Origin',
    title: 'Internal Apps',
    bestFor: catalog.origin.audience,
    from: catalog.origin.priceLabel,
    delivery: catalog.origin.delivery,
    popular: false,
  },
  {
    package: 'Uncharted',
    title: 'Custom',
    bestFor: catalog.uncharted.audience,
    from: catalog.uncharted.priceLabel,
    delivery: catalog.uncharted.delivery,
    popular: false,
  },
  ...catalog.pulse.plans.map((p) => ({
    package: `Pulse ${p.name}`,
    title: 'Content (monthly)',
    bestFor: p.forWho,
    from: p.priceLabel,
    delivery: p.delivery,
    popular: p.popular,
  })),
  ...bundles.map((b) => ({
    package: `Bundle · ${b.name}`,
    title: b.plainLabel,
    bestFor: b.forWho,
    from: b.monthlyLabel ? `${b.priceLabel} + ${b.monthlyLabel}` : b.priceLabel,
    delivery: b.delivery,
    popular: false,
  })),
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear LKR prices for shops,"
        accent="clinics and salons"
        description={`Compare packages side by side. Payment terms: ${paymentTerms.summary}. Final scope confirmed in writing after discovery.`}
        actions={
          <>
            <Button href="/book-consultation?package=free-audit" variant="primary">
              Get a Free Audit
            </Button>
            <Button href="/build" variant="ghost">
              Explore Build
            </Button>
          </>
        }
      />

      <FoundingOfferBanner />

      <Section>
        <div className="overflow-x-auto border border-[color:var(--line)]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[color:var(--bg-elevated)] text-[color:var(--ink-muted)]">
              <tr>
                <th className="px-4 py-4 font-medium">Package</th>
                <th className="px-4 py-4 font-medium">Best for</th>
                <th className="px-4 py-4 font-medium">Price</th>
                <th className="px-4 py-4 font-medium">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={`${row.package}-${row.from}`} className="border-t border-[color:var(--line)]">
                  <td className="px-4 py-4 font-semibold">
                    {row.package}
                    {row.popular && (
                      <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brass)]">
                        Most Popular
                      </span>
                    )}
                    <span className="mt-0.5 block text-xs font-normal text-[color:var(--ink-faint)]">
                      {row.title}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[color:var(--ink-muted)]">{row.bestFor}</td>
                  <td className="px-4 py-4 font-semibold text-[color:var(--brass)]">{row.from}</td>
                  <td className="px-4 py-4 text-[color:var(--ink-muted)]">{row.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-[color:var(--ink-faint)]">
          Pulse one-offs: Reel {formatLkr(15000)} · Vehicle showcase from {formatLkr(15000)} · Event
          coverage from {formatLkr(30000)}. Domain and third-party fees not included.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {supportPlans.map((plan) => (
            <div key={plan.name} className="card-surface">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-xl font-semibold">{plan.name}</h2>
                <span className="text-sm font-semibold text-[color:var(--brass)]">{plan.price}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--ink-muted)]">
                    <FiCheck className="mt-0.5 text-[color:var(--brass)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 border border-[color:var(--line)] bg-[color:var(--surface)] p-5 text-sm text-[color:var(--ink-muted)]">
          <span className="font-semibold text-[color:var(--ink)]">Quick start packages: </span>
          {services
            .map((s) => `${s.series} ${s.priceLabel}`)
            .join(' · ')}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="eyebrow mb-4">Estimate</div>
            <h2 className="heading-display">Rough price before the call</h2>
            <p className="body-muted mt-4">
              Ballpark only. We’ll confirm a written quote after discovery.
            </p>
          </div>
          <QuoteCalculator />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="heading-display">Straight answers</h2>
            <p className="body-muted mt-4">
              Cost drivers, payment terms ({paymentTerms.summary}), care plans and ownership.
            </p>
          </div>
          <FaqAccordion items={pricingFaqs} />
        </div>
      </Section>

      <CtaBand title="Ready for a written quote?" />
    </>
  );
}
