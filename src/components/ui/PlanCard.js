import { FiCheck, FiX } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { completionReward } from '@/lib/pricing';

export default function PlanCard({
  plan,
  productLabel = '',
  ctaHref = '/book-consultation',
  ctaLabel = 'Book a Free Call',
  showRewardBadge = true,
}) {
  const title = productLabel ? `${productLabel} · ${plan.name}` : plan.name;

  return (
    <article
      className={`flex h-full flex-col border p-5 md:p-6 ${
        plan.popular
          ? 'border-[color:var(--brass)] bg-[color:var(--brass-soft)]'
          : 'border-[color:var(--line)] bg-[color:var(--surface)]'
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-display text-lg font-bold tracking-tight">{title}</h3>
        {plan.popular && <Badge>Most Popular</Badge>}
      </div>

      {plan.bestFor && (
        <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
          <span className="font-semibold text-[color:var(--ink)]">Best for: </span>
          {plan.bestFor}
        </p>
      )}

      <div className="mt-4 font-display text-2xl font-bold text-[color:var(--brass)]">
        {plan.priceLabel}
      </div>
      {plan.delivery && (
        <p className="mt-1 text-xs text-[color:var(--ink-faint)]">Typical delivery: {plan.delivery}</p>
      )}

      {showRewardBadge && completionReward.enabled && (
        <div className="mt-3">
          <Badge>{completionReward.badgeLabel}</Badge>
        </div>
      )}

      <div className="mt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
          Included
        </p>
        <ul className="mt-2 space-y-2">
          {(plan.includes || []).map((item) => (
            <li key={item} className="flex gap-2 text-sm text-[color:var(--ink-muted)]">
              <FiCheck className="mt-0.5 shrink-0 text-[color:var(--brass)]" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {(plan.excludes || []).length > 0 && (
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
          href={`${ctaHref}${ctaHref.includes('?') ? '&' : '?'}package=${encodeURIComponent(plan.id)}`}
          variant={plan.popular ? 'primary' : 'outline'}
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
