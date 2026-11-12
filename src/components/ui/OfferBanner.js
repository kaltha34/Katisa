import Link from 'next/link';
import Button from '@/components/ui/Button';
import { completionReward, foundingOffer } from '@/lib/pricing';

export function FoundingOfferBanner({ className = '' }) {
  if (!foundingOffer.active) return null;

  return (
    <aside
      className={`border-y border-[color:var(--brass)]/40 bg-[color:var(--brass-soft)] ${className}`}
      aria-label="Founding client offer"
    >
      <div className="container-site flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass)]">
            Founding client offer · {foundingOffer.label}
          </p>
          <p className="mt-1 text-sm text-[color:var(--ink)]">
            {foundingOffer.discountPercent}% off for the first {foundingOffer.totalSpots} clients —
            in exchange for {foundingOffer.requirement}.
          </p>
        </div>
        <Button href="/book-consultation" variant="primary" className="!px-4 !py-2.5 !text-[11px]">
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
          <Link
            href="/pricing#completion-reward"
            className="btn-ghost !text-xs"
          >
            See terms
          </Link>
        </div>
      </div>
    </aside>
  );
}

/** Default export keeps older imports working */
export default FoundingOfferBanner;
