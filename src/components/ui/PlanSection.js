import PlanCard from '@/components/ui/PlanCard';

export default function PlanSection({
  id,
  title,
  intro,
  plans,
  productLabel,
  columns,
  ctaHref,
  ctaLabel,
  showRewardBadge = true,
}) {
  const cols =
    columns ||
    (plans.length >= 4
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : plans.length >= 3
        ? 'md:grid-cols-3'
        : plans.length === 2
          ? 'md:grid-cols-2'
          : 'md:grid-cols-1 md:max-w-xl');

  return (
    <section id={id} className="scroll-mt-24 border-b border-[color:var(--line)] py-12 md:py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="heading-display">{title}</h2>
        {intro && <p className="body-muted mt-3">{intro}</p>}
      </div>
      <div className={`grid gap-4 ${cols}`}>
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            productLabel={productLabel}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            showRewardBadge={showRewardBadge}
          />
        ))}
      </div>
    </section>
  );
}
