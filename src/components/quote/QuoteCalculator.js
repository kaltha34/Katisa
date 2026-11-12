'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/ui/Button';
import { services, whatsappUrl } from '@/lib/content';

const addOns = [
  { id: 'whatsapp', label: 'WhatsApp notifications', amount: 8000 },
  { id: 'payments', label: 'PayHere / LankaQR payments', amount: 12000 },
  { id: 'sinhala', label: 'Sinhala / Tamil UI copy', amount: 10000 },
  { id: 'admin', label: 'Admin dashboard', amount: 15000 },
  { id: 'support', label: 'First month Care Lite', amount: 8000 },
];

function formatLkr(n) {
  return `LKR ${n.toLocaleString('en-LK')}`;
}

export default function QuoteCalculator() {
  const [packageId, setPackageId] = useState(services[0].id);
  const [selected, setSelected] = useState([]);

  const base = services.find((s) => s.id === packageId) || services[0];
  const estimate = useMemo(() => {
    if (base.priceFrom == null) return null;
    const extras = addOns.filter((a) => selected.includes(a.id)).reduce((sum, a) => sum + a.amount, 0);
    const low = base.priceFrom + extras;
    const high = Math.round(low * 1.35);
    return { low, high };
  }, [base, selected]);

  const toggle = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const message = estimate
    ? `Hi Katisa, I’m interested in ${base.series} (${base.title}). Estimated range ${formatLkr(estimate.low)}–${formatLkr(estimate.high)}. Add-ons: ${selected.join(', ') || 'none'}.`
    : `Hi Katisa, I’d like a custom Uncharted quote.`;

  return (
    <div className="card-surface">
      <h3 className="font-display text-xl font-semibold">Quick quote range</h3>
      <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
        Pick a package and extras. This is a rough range — final price after discovery.
      </p>

      <label className="mt-6 block text-sm font-medium">
        Package
        <select
          className="input-field mt-2"
          value={packageId}
          onChange={(e) => setPackageId(e.target.value)}
        >
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.series} — {s.title} ({s.priceLabel})
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
              className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-[color:var(--line)] px-3 py-2.5 text-sm"
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

      <div className="mt-6 rounded-2xl border border-[color:var(--brass)]/30 bg-[color:var(--brass-soft)] p-4">
        {estimate ? (
          <>
            <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--brass)]">
              Estimated range
            </div>
            <div className="mt-1 font-display text-2xl font-semibold">
              {formatLkr(estimate.low)} – {formatLkr(estimate.high)}
            </div>
          </>
        ) : (
          <p className="text-sm text-[color:var(--ink-muted)]">
            Uncharted is scoped on a discovery call — no public starting price.
          </p>
        )}
      </div>

      <Button href={whatsappUrl(message)} variant="primary" external className="mt-6 w-full">
        Send this estimate on WhatsApp
      </Button>
    </div>
  );
}
