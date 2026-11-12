import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import PlanSection from '@/components/ui/PlanSection';
import ProcessSteps from '@/components/ui/ProcessSteps';
import { FoundingOfferBanner } from '@/components/ui/OfferBanner';
import {
  customAppPlan,
  customProjectPlan,
  qualityStandards,
  softwareProcess,
  stockPlans,
  websiteCarePlans,
  websitePlans,
} from '@/lib/content';
import { media } from '@/lib/media';
import { FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'Software',
  description:
    'Business websites from LKR 35,000, stock & sales systems, and custom business apps for Sri Lankan shops, clinics and salons — clear prices and a simple five-step plan.',
};

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Software"
        title="Websites and systems"
        accent="your team will actually use"
        description="Business Website, Stock & Sales System, or a Custom Business App. Plain English. Clear starting prices."
        image={media.heroSoftware}
        imageAlt="Laptop and charts for business software work"
        actions={
          <>
            <Button href="/pricing" variant="primary">
              See Pricing
            </Button>
            <Button href="/book-consultation" variant="ghost">
              Book a Free Call
            </Button>
          </>
        }
      />

      <FoundingOfferBanner />

      <div className="container-site">
        <PlanSection
          id="website"
          title="Business Website"
          intro="Best for shops, clinics, salons, restaurants and tuition centres that need to look credible online and get messages."
          plans={websitePlans}
          productLabel="Website"
        />

        <section className="border-b border-[color:var(--line)] py-10">
          <h3 className="font-display text-xl font-bold tracking-tight">Website Care (monthly)</h3>
          <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
            Keep the site online, backed up, and up to date after launch.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {websiteCarePlans.map((plan) => (
              <div key={plan.id} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-semibold">{plan.name}</h4>
                  <span className="text-sm font-semibold text-[color:var(--brass)]">{plan.priceLabel}</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[color:var(--ink-muted)]">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <FiCheck className="mt-0.5 text-[color:var(--brass)]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <PlanSection
          id="stock"
          title="Stock & Sales System"
          intro="Best for shops that lose money to missing stock or messy sales notes. Setup fee + monthly fee."
          plans={stockPlans}
          productLabel="Stock & Sales"
        />

        <PlanSection
          id="custom"
          title="Custom Business App"
          intro={customAppPlan.bestFor}
          plans={[customAppPlan]}
        />

        <PlanSection
          id="custom-project"
          title="Custom Project"
          intro={customProjectPlan.bestFor}
          plans={[customProjectPlan]}
        />
      </div>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <ProcessSteps
          title="How we deliver software"
          intro="Five phases. You always know what we are doing and what we need from you."
          steps={softwareProcess}
          detailed
        />
      </Section>

      <Section>
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">Quality standards</div>
          <h2 className="heading-display">What we stand behind</h2>
          <ul className="mt-6 space-y-3">
            {qualityStandards.map((item) => (
              <li key={item} className="flex gap-3 text-[color:var(--ink-muted)]">
                <FiCheck className="mt-1 shrink-0 text-[color:var(--brass)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[color:var(--ink-faint)]">
            Want customers to find the new site? See{' '}
            <a href="/marketing" className="text-[color:var(--brass)] hover:underline">
              Marketing
            </a>{' '}
            or bundles on{' '}
            <a href="/pricing#bundles" className="text-[color:var(--brass)] hover:underline">
              Pricing
            </a>
            .
          </p>
        </div>
      </Section>

      <CtaBand title="Not sure which software plan fits?" />
    </>
  );
}
