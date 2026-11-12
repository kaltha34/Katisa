import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import PlanSection from '@/components/ui/PlanSection';
import ProcessSteps from '@/components/ui/ProcessSteps';
import { FoundingOfferBanner } from '@/components/ui/OfferBanner';
import {
  completionReward,
  marketingNeedsFromYou,
  marketingOneOffs,
  marketingPlans,
  marketingProcess,
  marketingWeDoNotPromise,
} from '@/lib/content';
import { FiCheck, FiX } from 'react-icons/fi';

export const metadata = {
  title: 'Marketing',
  description:
    'Social media and video marketing for Sri Lankan businesses — monthly plans from LKR 25,000, plus reels, vehicle videos and event coverage. Honest scope. No guaranteed followers.',
};

export default function MarketingPage() {
  return (
    <>
      <PageHero
        eyebrow="Marketing"
        title="Social media and video"
        accent="that help people find you"
        description="Monthly plans from LKR 6,000 and upwards, plus one-off videos for shops, salons, restaurants, vehicle sellers and events. Clear prices. Honest limits."
        actions={
          <>
            <Button href="/pricing#pricing-marketing" variant="primary">
              See Pricing
            </Button>
            <Button href="/book-consultation?package=marketing" variant="ghost">
              Book a Free Call
            </Button>
          </>
        }
      />

      <FoundingOfferBanner />

      <div className="container-site">
        <PlanSection
          id="monthly"
          title="Monthly plans"
          intro="Social Media & Video Marketing. Volume details are confirmed at kickoff so we do not over-promise."
          plans={marketingPlans}
          productLabel="Marketing"
        />
      </div>

      <Section id="one-offs" tone="soft" className="border-y border-[color:var(--line)]">
        <div className="mb-8 max-w-xl">
          <h2 className="heading-display">One-off videos</h2>
          <p className="body-muted mt-3">When you need a single shoot, not a monthly plan.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {marketingOneOffs.map((item) => (
            <article key={item.id} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
              <h3 className="font-display text-lg font-bold tracking-tight">{item.name}</h3>
              <div className="mt-2 text-lg font-semibold text-[color:var(--brass)]">{item.priceLabel}</div>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                <span className="font-semibold text-[color:var(--ink)]">Best for: </span>
                {item.bestFor}
              </p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                Included
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[color:var(--ink-muted)]">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-2">
                    <FiCheck className="mt-0.5 text-[color:var(--brass)]" /> {line}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                Not included
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[color:var(--ink-faint)]">
                {item.excludes.map((line) => (
                  <li key={line} className="flex gap-2">
                    <FiX className="mt-0.5 opacity-60" /> {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <ProcessSteps
          title="How marketing works"
          intro="Four phases. You always know the plan and what we need from you."
          steps={marketingProcess}
          detailed
        />
      </Section>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="heading-display">What we need from you</h2>
            <ul className="mt-6 space-y-3">
              {marketingNeedsFromYou.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[color:var(--ink-muted)]">
                  <FiCheck className="mt-0.5 text-[color:var(--brass)]" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="heading-display">What we do not promise</h2>
            <ul className="mt-6 space-y-3">
              {marketingWeDoNotPromise.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[color:var(--ink-muted)]">
                  <FiX className="mt-0.5 text-[color:var(--brass)]" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[color:var(--ink-faint)]">
              Completed software or marketing projects include a free InQRS card (
              {completionReward.inqrsLabel}). See Pricing for terms.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand title="Want more customers to find your business?" />
    </>
  );
}
