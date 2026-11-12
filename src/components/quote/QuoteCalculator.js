'use client';

import Button from '@/components/ui/Button';
import { formatLkr, pricingPreview, whatsappUrl } from '@/lib/content';

/** Lightweight helper — full plans live on /pricing */
export default function QuoteCalculator() {
  const message = `Hi Katisa, I want a free call about pricing. I saw starting prices from ${pricingPreview[0]?.priceLabel || formatLkr(35000)}.`;

  return (
    <div className="card-surface">
      <h3 className="font-display text-xl font-semibold">Need a quick pointer?</h3>
      <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
        Starting prices are listed below. For a written quote, book a free call.
      </p>
      <ul className="mt-6 space-y-3 text-sm">
        {pricingPreview.map((row) => (
          <li key={row.label} className="flex justify-between gap-3 border-b border-[color:var(--line)] pb-2">
            <span>{row.label}</span>
            <span className="font-semibold text-[color:var(--brass)]">{row.priceLabel}</span>
          </li>
        ))}
      </ul>
      <Button href="/book-consultation" variant="primary" className="mt-6 w-full">
        Book a Free Call
      </Button>
      <Button href={whatsappUrl(message)} variant="ghost" external className="mt-3 w-full">
        WhatsApp us
      </Button>
    </div>
  );
}
