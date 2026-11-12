import Link from 'next/link';
import Button from '@/components/ui/Button';
import { completionReward, foundingOffer } from '@/lib/pricing';

export function FoundingOfferBanner({ className = '' }) {
  if (!foundingOffer.active) return null;

  return (
    <aside
      className={`relative overflow-hidden border-y-2 border-[color:var(--brass)] bg-[color:var(--brass)] text-[#0c0b0a] ${className}`}
      aria-label="Founding client offer"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 hero-grid" />
      <div className="container-site relative z-10 flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:py-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0c0b0a]/90">
              Founding client offer
            </p>
            <span className="inline-flex items-center border-2 border-[#0c0b0a] bg-[#0c0b0a] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--brass)]">
              {foundingOffer.label}
            </span>
          </div>
          <p className="mt-2 text-base font-semibold leading-snug text-[#0c0b0a] md:text-lg">
            {foundingOffer.discountPercent}% off for the first {foundingOffer.totalSpots} clients —
            in exchange for {foundingOffer.requirement}.
          </p>
        </div>
        <Button
          href="/book-consultation"
          variant="ghost"
          className="!shrink-0 !border-2 !border-[#0c0b0a] !bg-[#0c0b0a] !px-5 !py-3 !text-[11px] !text-[color:var(--brass)] hover:!bg-transparent hover:!text-[#0c0b0a]"
        >
          Book a Free Call
        </Button>
      </div>
    </aside>
  );
}

export function CompletionRewardBanner({ className = '' }) {
  if (!completionReward.enabled) return null;

  return (
    <aside
      className={`border-y border-[color:var(--line)] bg-[color:var(--bg-elevated)] ${className}`}
      aria-label="Free InQRS card on completion"
    >
      <div className="container-site flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass)]">
            Completion reward
          </p>
          <h2 className="mt-2 font-display text-xl font-bold tracking-tight md:text-2xl">
            {completionReward.bannerTitle}
          </h2>
          <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{completionReward.bannerBody}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={completionReward.inqrsUrl} variant="outline" external>
            About InQRS
          </Button>
          <Link href="/pricing#completion-reward" className="btn-ghost !text-xs">
            See terms
          </Link>
        </div>
      </div>
    </aside>
  );
}

/** Default export keeps older imports working */
export default FoundingOfferBanner;
