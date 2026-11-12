import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import { site } from '@/lib/content';

export const metadata = {
  title: 'About',
  description:
    'Katisa Technologies helps Sri Lankan shops, salons, clinics and restaurants with websites, software and marketing — clear LKR prices and one team to talk to.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="One team for websites,"
        accent="software and marketing"
        description="We help small businesses in Sri Lanka get online systems that work — and content that helps customers find them."
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="heading-display">Our story</h2>
          <p className="body-muted mt-4">
            Katisa Technologies is based in Colombo. We build business websites, stock and sales
            systems, and custom apps. We also create social media and video content so the work
            you launch actually gets seen.
          </p>
          <p className="body-muted mt-4">
            InQRS NFC smart cards are our sister product (
            <a href={site.inqrsUrl} className="text-[color:var(--brass)] hover:underline" target="_blank" rel="noopener noreferrer">
              idora.click
            </a>
            ). Successfully completed projects include one free InQRS card — see Pricing for terms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/software" variant="outline">
              See Software
            </Button>
            <Button href="/marketing" variant="ghost">
              See Marketing
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">How we work</div>
          <h2 className="heading-display">Simple on purpose</h2>
          <ul className="mt-8 space-y-5 text-sm text-[color:var(--ink-muted)]">
            <li className="border-b border-[color:var(--line)] pb-5">
              <span className="font-semibold text-[color:var(--ink)]">One conversation</span>
              <p className="mt-1">You talk to Katisa — software and marketing stay coordinated.</p>
            </li>
            <li className="border-b border-[color:var(--line)] pb-5">
              <span className="font-semibold text-[color:var(--ink)]">Written scope before heavy work</span>
              <p className="mt-1">You know what is included, what is not, and the LKR range.</p>
            </li>
            <li>
              <span className="font-semibold text-[color:var(--ink)]">You own the work</span>
              <p className="mt-1">Access and handover notes are yours when we finish.</p>
            </li>
          </ul>
        </div>
      </Section>

      <CtaBand title="Want to work with a team that speaks plain English?" />
    </>
  );
}
