import { FiCheck, FiX } from 'react-icons/fi';
import Button from '@/components/ui/Button';

function PlanCard({ plan, series }) {
  return (
    <article
      className={`flex h-full flex-col border p-5 md:p-6 ${
        plan.popular
          ? 'border-[color:var(--brass)] bg-[color:var(--brass-soft)]'
          : 'border-[color:var(--line)] bg-[color:var(--surface)]'
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold tracking-tight">
          {series} {plan.name}
        </h4>
        {plan.popular && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
            Most Popular
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{plan.forWho}</p>
      <div className="mt-4 font-display text-2xl font-bold text-[color:var(--brass)]">
        {plan.priceLabel}
      </div>
      <p className="mt-1 text-xs text-[color:var(--ink-faint)]">Delivery: {plan.delivery}</p>

      <div className="mt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
          Included
        </p>
        <ul className="mt-2 space-y-2">
          {plan.includes.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-[color:var(--ink-muted)]">
              <FiCheck className="mt-0.5 shrink-0 text-[color:var(--brass)]" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {plan.excludes?.length > 0 && (
        <div className="mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
            Not included
          </p>
          <ul className="mt-2 space-y-2">
            {plan.excludes.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-[color:var(--ink-faint)]">
                <FiX className="mt-0.5 shrink-0 opacity-60" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-6">
        <Button
          href={`/book-consultation?package=${encodeURIComponent(plan.id)}`}
          variant={plan.popular ? 'primary' : 'outline'}
          className="w-full"
        >
          Book a Free Call
        </Button>
      </div>
    </article>
  );
}

export default function PackageSection({ pkg }) {
  const cols =
    pkg.plans.length >= 3
      ? 'md:grid-cols-3'
      : pkg.plans.length === 2
        ? 'md:grid-cols-2'
        : 'md:grid-cols-1 md:max-w-xl';

  return (
    <section id={pkg.id} className="scroll-mt-24 border-b border-[color:var(--line)] py-12 md:py-16">
      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-end">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brass)]">
            {pkg.series}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {pkg.title}
          </h2>
          <p className="mt-3 text-lg font-medium text-[color:var(--ink)]">{pkg.plainLabel}</p>
        </div>
        <div>
          <p className="text-sm text-[color:var(--ink-muted)]">
            <span className="font-semibold text-[color:var(--ink)]">For: </span>
            {pkg.audience}
          </p>
          <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{pkg.description}</p>
          <p className="mt-3 text-sm font-semibold text-[color:var(--brass)]">
            {pkg.priceLabel}
            {pkg.priceNote ? ` · ${pkg.priceNote}` : ''}
          </p>
        </div>
      </div>

      <div className={`grid gap-4 ${cols}`}>
        {pkg.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} series={pkg.series} />
        ))}
      </div>

      {pkg.oneOffs?.length > 0 && (
        <div className="mt-8 border border-[color:var(--line)] bg-[color:var(--surface)] p-5 md:p-6">
          <h3 className="font-display text-xl font-bold tracking-tight">One-off videos</h3>
          <p className="mt-1 text-sm text-[color:var(--ink-muted)]">
            Single shoots when you do not need a monthly plan.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {pkg.oneOffs.map((item) => (
              <div key={item.id} className="border border-[color:var(--line)] bg-[color:var(--bg)] p-4">
                <div className="font-semibold">{item.name}</div>
                <div className="mt-1 text-sm text-[color:var(--brass)]">{item.priceLabel}</div>
                <p className="mt-2 text-xs text-[color:var(--ink-faint)]">{item.forWho}</p>
              </div>
            ))}
          </div>
          <Button href="/book-consultation?package=pulse-oneoff" variant="outline" className="mt-5">
            Book a Free Call
          </Button>
        </div>
      )}
    </section>
  );
}
