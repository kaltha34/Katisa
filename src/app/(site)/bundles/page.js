import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import FoundingOfferBanner from '@/components/ui/FoundingOfferBanner';
import { FiCheck } from 'react-icons/fi';
import { bundles, formatLkr, foundingOffer } from '@/lib/content';

export const metadata = {
  title: 'Bundles',
  description:
    'Katisa Build + Grow bundles: Presence from LKR 85,000, Shop from LKR 70,000 setup, Growth from LKR 185,000 — save versus buying separately.',
};

export default function BundlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Bundles"
        title="Build + Grow,"
        accent="priced together"
        description="Three clear packages that combine a website or stock system with Pulse content — with savings versus buying each piece alone."
        actions={
          <>
            <Button href="/book-consultation?package=bundle-presence" variant="primary">
              Get a Free Audit
            </Button>
            <Button href="/pricing" variant="ghost">
              Full price list
            </Button>
          </>
        }
      />

      <FoundingOfferBanner />

      <Section>
        <div className="space-y-8">
          {bundles.map((bundle) => (
            <article
              key={bundle.id}
              id={bundle.id}
              className="scroll-mt-24 grid gap-8 border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:grid-cols-[1fr_1fr] md:p-10"
            >
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass)]">
                  {bundle.name}
                </div>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
                  {bundle.plainLabel}
                </h2>
                <p className="mt-4 text-sm text-[color:var(--ink-muted)]">
                  <span className="font-semibold text-[color:var(--ink)]">For: </span>
                  {bundle.forWho}
                </p>
                <div className="mt-6 font-display text-2xl font-bold text-[color:var(--brass)]">
                  {bundle.priceLabel}
                  {bundle.monthlyLabel ? (
                    <span className="mt-1 block text-base font-semibold">
                      + {bundle.monthlyLabel}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-[color:var(--ink-faint)]">{bundle.savingsLabel}</p>
                <p className="mt-2 text-xs text-[color:var(--ink-faint)]">
                  Delivery: {bundle.delivery}
                </p>
                <Button
                  href={`/book-consultation?package=bundle-${bundle.id}`}
                  variant="primary"
                  className="mt-6"
                >
                  Book a Free Call
                </Button>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                  Included
                </p>
                <ul className="mt-3 space-y-3">
                  {bundle.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[color:var(--ink-muted)]">
                      <FiCheck className="mt-0.5 shrink-0 text-[color:var(--brass)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">Founding Client Offer</div>
          <h2 className="heading-display">
            {foundingOffer.discountPercent}% off for the first {foundingOffer.totalSpots} clients
          </h2>
          <p className="body-muted mt-4">
            In exchange for {foundingOffer.requirement}. {foundingOffer.label}.
          </p>
          <p className="mt-4 text-sm text-[color:var(--ink-faint)]">
            Presence starts at {formatLkr(85000)}. Domain and third-party fees are not included
            unless agreed in writing.
          </p>
        </div>
      </Section>

      <CtaBand title="Want help picking a bundle?" />
    </>
  );
}
