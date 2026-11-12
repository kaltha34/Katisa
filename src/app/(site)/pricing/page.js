import { FiCheck } from 'react-icons/fi';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import FaqAccordion from '@/components/home/FaqAccordion';
import QuoteCalculator from '@/components/quote/QuoteCalculator';
import { services, supportPlans } from '@/lib/content';

export const metadata = {
  title: 'Pricing',
  description:
    'Clear LKR starting prices for Katisa packages — Origin, Rise, Empire and Uncharted — plus monthly Care plans.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear starting prices."
        accent="No surprise packages."
        description="Compare packages side by side. Final price depends on features — confirmed in writing after discovery."
        actions={
          <>
            <Button href="/book-consultation" variant="primary">
              Get a written quote
            </Button>
            <Button href="/services" variant="ghost">
              Package details
            </Button>
          </>
        }
      />

      <Section>
        <div className="overflow-x-auto rounded-3xl border border-[color:var(--line)]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[color:var(--bg-elevated)] text-[color:var(--ink-muted)]">
              <tr>
                <th className="px-4 py-4 font-medium">Package</th>
                <th className="px-4 py-4 font-medium">Best for</th>
                <th className="px-4 py-4 font-medium">From</th>
                <th className="px-4 py-4 font-medium">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-t border-[color:var(--line)]">
                  <td className="px-4 py-4 font-semibold">
                    {service.series}
                    <span className="mt-0.5 block text-xs font-normal text-[color:var(--ink-faint)]">
                      {service.title}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[color:var(--ink-muted)]">{service.audience}</td>
                  <td className="px-4 py-4 font-semibold text-[color:var(--brass)]">
                    {service.priceLabel}
                  </td>
                  <td className="px-4 py-4 text-[color:var(--ink-muted)]">{service.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
              Price, timeline, payments, support and ownership.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </Section>

      <CtaBand title="Ready for a written quote?" />
    </>
  );
}
