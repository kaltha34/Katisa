import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import FoundingOfferBanner from '@/components/ui/FoundingOfferBanner';
import PackageSection from '@/components/services/PackageSection';
import FaqAccordion from '@/components/home/FaqAccordion';
import { catalog, formatLkr, inqrs, paymentTerms, pricingFaqs, services } from '@/lib/content';

export const metadata = {
  title: 'Build',
  description:
    'Katisa Build: Rise websites from LKR 35,000, Empire inventory & POS, Origin apps from LKR 85,000, Uncharted custom software and Website Care — for Sri Lankan shops, clinics and salons.',
};

const buildSections = [catalog.rise, catalog.care, catalog.empire, catalog.origin, catalog.uncharted];

export default function BuildPage() {
  return (
    <>
      <PageHero
        eyebrow="Build"
        title="Websites and systems"
        accent="that keep the business running"
        description="Rise, Empire, Origin and Uncharted — clear LKR packages. Add Pulse when you are ready for customers to find what you built."
        actions={
          <>
            <Button href="/book-consultation?focus=build" variant="primary">
              Get a Free Audit
            </Button>
            <Button href="/grow" variant="ghost">
              Explore Grow
            </Button>
          </>
        }
      />

      <FoundingOfferBanner />

      <Section tone="soft" className="!py-10 md:!py-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a key={service.id} href={`#${service.id}`} className="card-surface block !p-5">
              <div className="text-xs font-semibold tracking-[0.18em] text-[color:var(--brass)]">
                {service.series}
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)] line-clamp-2">
                {service.plainLabel}
              </p>
              <div className="mt-5 text-lg font-semibold text-[color:var(--brass)]">
                {service.priceLabel}
              </div>
            </a>
          ))}
        </div>
        <a href={`#${catalog.care.id}`} className="card-surface mt-3 block !p-5 md:max-w-md">
          <div className="text-xs font-semibold tracking-[0.18em] text-[color:var(--brass)]">
            {catalog.care.series}
          </div>
          <h2 className="mt-3 font-display text-xl font-semibold">{catalog.care.title}</h2>
          <div className="mt-4 text-lg font-semibold text-[color:var(--brass)]">
            {catalog.care.priceLabel}
          </div>
        </a>
      </Section>

      <div className="container-site">
        {buildSections.map((pkg) => (
          <div key={pkg.id}>
            <PackageSection pkg={pkg} />
            {pkg.id !== 'website-care' && (
              <p className="-mt-8 mb-10 border border-[color:var(--brass)]/30 bg-[color:var(--brass-soft)] px-4 py-3 text-sm text-[color:var(--ink)] md:-mt-10">
                Add{' '}
                <a href="/grow" className="font-semibold text-[color:var(--brass)] underline-offset-2 hover:underline">
                  Pulse
                </a>{' '}
                to get customers to your new site.{' '}
                <a href="/bundles" className="font-semibold hover:underline">
                  See Bundles
                </a>
                .
              </p>
            )}
          </div>
        ))}
      </div>

      <Section tone="soft">
        <div className="mb-6 text-sm text-[color:var(--ink-muted)]">
          <span className="font-semibold text-[color:var(--ink)]">Payment terms: </span>
          {paymentTerms.summary}. Websites from {formatLkr(35000)}.
        </div>
        <div className="card-surface flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="eyebrow mb-3">Separate product</div>
            <h2 className="font-display text-2xl font-semibold">{inqrs.title}</h2>
            <p className="mt-2 max-w-xl text-sm text-[color:var(--ink-muted)]">
              {inqrs.description} Not part of Build package pricing.
            </p>
          </div>
          <Button href={inqrs.url} variant="outline" external>
            Visit InQRS
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow mb-4">Pricing FAQ</div>
            <h2 className="heading-display">Straight answers on cost</h2>
          </div>
          <FaqAccordion items={pricingFaqs} />
        </div>
      </Section>

      <CtaBand title="Ready to build the system your team will actually use?" />
    </>
  );
}
