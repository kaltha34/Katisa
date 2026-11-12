'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/ui/Button';
import { bundles, catalog, formatLkr, services, whatsappUrl } from '@/lib/content';

const planChoices = [
  ...catalog.rise.plans.map((p) => ({
    id: p.id,
    label: `Rise ${p.name} — ${p.priceLabel}`,
    priceFrom: p.price,
    series: 'Rise',
    title: p.name,
  })),
  ...catalog.empire.plans.map((p) => ({
    id: p.id,
    label: `Empire ${p.name} — ${p.priceLabel}`,
    priceFrom: p.price + (p.monthly || 0),
    series: 'Empire',
    title: p.name,
  })),
  {
    id: 'origin',
    label: `Origin — ${catalog.origin.priceLabel}`,
    priceFrom: catalog.origin.priceFrom,
    series: 'Origin',
    title: 'Internal Apps',
  },
  ...bundles.map((b) => ({
    id: `bundle-${b.id}`,
    label: `Bundle ${b.name} — ${b.monthlyLabel ? `${b.priceLabel} + ${b.monthlyLabel}` : b.priceLabel}`,
    priceFrom: b.price + (b.monthly || 0),
    series: 'Bundle',
    title: b.name,
  })),
  {
    id: 'uncharted',
    label: `Uncharted — ${catalog.uncharted.priceLabel}`,
    priceFrom: null,
    series: 'Uncharted',
    title: 'Custom',
  },
];

const addOns = [
  { id: 'care-basic', label: 'First month Website Care Basic', amount: 4500 },
  { id: 'care-plus', label: 'First month Website Care Plus', amount: 9000 },
  { id: 'pulse-starter', label: '1 month Pulse Starter', amount: 25000 },
  { id: 'payments', label: 'Payment integration (if not already in plan)', amount: 12000 },
  { id: 'sinhala', label: 'Sinhala / Tamil UI copy', amount: 10000 },
];

export default function QuoteCalculator() {
  const [packageId, setPackageId] = useState(planChoices[1]?.id || planChoices[0].id);
  const [selected, setSelected] = useState([]);

  const base = planChoices.find((s) => s.id === packageId) || planChoices[0];
  const estimate = useMemo(() => {
    if (base.priceFrom == null) return null;
    const extras = addOns.filter((a) => selected.includes(a.id)).reduce((sum, a) => sum + a.amount, 0);
    const low = base.priceFrom + extras;
    const high = Math.round(low * 1.2);
    return { low, high };
  }, [base, selected]);

  const toggle = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const message = estimate
    ? `Hi Katisa, I’m interested in ${base.series} (${base.title}). Estimated range ${formatLkr(estimate.low)}–${formatLkr(estimate.high)}. Add-ons: ${selected.join(', ') || 'none'}.`
    : `Hi Katisa, I’d like a custom Uncharted quote. Discovery fee ${formatLkr(catalog.uncharted.discoveryFee)}.`;

  return (
    <div className="card-surface">
      <h3 className="font-display text-xl font-semibold">Quick quote range</h3>
      <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
        Pick a package and extras. Rough range only — final price after discovery.
      </p>

      <label className="mt-6 block text-sm font-medium">
        Package
        <select
          className="input-field mt-2"
          value={packageId}
          onChange={(e) => setPackageId(e.target.value)}
        >
          {planChoices.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </label>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">Likely extras</legend>
        <div className="mt-3 space-y-2">
          {addOns.map((addon) => (
            <label
              key={addon.id}
              className="flex cursor-pointer items-center justify-between gap-3 border border-[color:var(--line)] px-3 py-2.5 text-sm"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(addon.id)}
                  onChange={() => toggle(addon.id)}
                  className="accent-[color:var(--brass)]"
                />
                {addon.label}
              </span>
              <span className="text-[color:var(--ink-faint)]">+{formatLkr(addon.amount)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 border border-[color:var(--brass)]/30 bg-[color:var(--brass-soft)] p-4">
        {estimate ? (
          <>
            <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--brass)]">
              Estimated range
            </div>
            <div className="mt-1 font-display text-2xl font-semibold">
              {formatLkr(estimate.low)} – {formatLkr(estimate.high)}
            </div>
            <p className="mt-2 text-xs text-[color:var(--ink-faint)]">
              Starting points also listed on Services ({services.map((s) => s.series).join(', ')}).
            </p>
          </>
        ) : (
          <p className="text-sm text-[color:var(--ink-muted)]">
            Uncharted starts with a {formatLkr(catalog.uncharted.discoveryFee)} discovery fee
            (credited to the project). Projects from {formatLkr(catalog.uncharted.priceFrom)}.
          </p>
        )}
      </div>

      <Button href={whatsappUrl(message)} variant="primary" external className="mt-6 w-full">
        Send this estimate on WhatsApp
      </Button>
    </div>
  );
}
