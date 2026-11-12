import Link from 'next/link';
import { foundingOffer } from '@/lib/pricing';

export default function FoundingOfferBanner({ className = '' }) {
  if (!foundingOffer.active) return null;

  return (
    <aside
      className={`border-y border-[color:var(--brass)]/40 bg-[color:var(--brass-soft)] ${className}`}
      aria-label="Founding client offer"
    >
      <div className="container-site flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass)]">
            Founding client offer · {foundingOffer.label}
          </p>
          <p className="mt-1 text-sm text-[color:var(--ink)] md:text-base">
            {foundingOffer.discountPercent}% off for the first {foundingOffer.totalSpots} clients —
            in exchange for {foundingOffer.requirement}.
          </p>
        </div>
        <Link
          href="/book-consultation"
          className="btn-primary shrink-0 !px-4 !py-2.5 !text-[11px] whitespace-nowrap"
        >
          Get a Free Quote
        </Link>
      </div>
    </aside>
  );
}
