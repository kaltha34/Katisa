import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import FoundingOfferBanner from '@/components/ui/FoundingOfferBanner';
import PackageSection from '@/components/services/PackageSection';
import { catalog, formatLkr, inqrs, pulseProcess } from '@/lib/content';

export const metadata = {
  title: 'Grow · Pulse',
  description:
    'Pulse by Katisa: monthly content plans from LKR 25,000, reels and vehicle videos from LKR 15,000, event coverage from LKR 30,000 — for Sri Lankan shops, salons, restaurants and sellers.',
};

export default function GrowPage() {
  const pulse = catalog.pulse;

  return (
    <>
      <PageHero
        eyebrow="Grow · Pulse"
        title="Content and video"
        accent="that help customers find you"
        description="Monthly plans for steady posting, plus one-off reels, vehicle showcases and event coverage. Separate from InQRS."
        actions={
          <>
            <Button href="/book-consultation?focus=grow" variant="primary">
              Get a Free Audit
            </Button>
            <Button href="/bundles" variant="ghost">
              See Bundles
            </Button>
          </>
        }
      />

      <FoundingOfferBanner />

      <div className="container-site">
        <PackageSection pkg={pulse} />
      </div>

      <Section id="one-offs" tone="soft" className="border-y border-[color:var(--line)]">
        <div className="mb-8 max-w-xl">
          <div className="eyebrow mb-4">One-off videos</div>
          <h2 className="heading-display">When you need a single shoot</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pulse.oneOffs.map((item) => (
            <div key={item.id} className="card-surface">
              <h3 className="font-display text-xl font-bold tracking-tight">{item.name}</h3>
              <div className="mt-2 text-lg font-semibold text-[color:var(--brass)]">
                {item.priceLabel}
              </div>
              <p className="mt-3 text-sm text-[color:var(--ink-muted)]">{item.forWho}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[color:var(--ink-faint)]">
          Not included unless agreed: paid ads management, stock music licenses beyond what we
          supply, travel outside the agreed area, and major brand redesigns.
        </p>
      </Section>

      <Section>
        <div className="mb-8 max-w-xl">
          <div className="eyebrow mb-4">How Pulse works</div>
          <h2 className="heading-display">Plan → Film → Edit → Post & Report</h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pulseProcess.map((step) => (
            <li key={step.step} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
              <div className="index-num">{step.step}</div>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <div className="card-surface flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="eyebrow mb-3">Optional add-on</div>
            <h2 className="font-display text-2xl font-semibold">InQRS NFC card brand kit</h2>
            <p className="mt-2 max-w-xl text-sm text-[color:var(--ink-muted)]">
              Pair Pulse content with an InQRS NFC smart card so people can tap and save your
              profile. InQRS is a separate product — pricing lives on the InQRS site.
            </p>
          </div>
          <Button href={inqrs.url} variant="outline" external>
            Visit InQRS
          </Button>
        </div>
        <p className="mt-6 text-sm text-[color:var(--ink-muted)]">
          Monthly plans from {formatLkr(25000)}. Pair with Build packages on{' '}
          <a href="/bundles" className="text-[color:var(--brass)] hover:underline">
            Bundles
          </a>
          .
        </p>
      </Section>

      <CtaBand
        title="Want more eyes on your shop or salon?"
        description="Start with a free website + social audit, or book a call about Pulse."
      />
    </>
  );
}
