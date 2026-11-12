export default function CaseStudyCard({ study }) {
  return (
    <article className="flex h-full flex-col border border-dashed border-[color:var(--brass)]/50 bg-[color:var(--surface)] p-5 md:p-6">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brass)]">
        Placeholder · {study.arm === 'grow' ? 'Grow' : 'Build'}
      </div>
      <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{study.client}</h3>
      <p className="mt-1 text-sm text-[color:var(--ink-faint)]">{study.industry}</p>
      <div className="mt-5 space-y-3 text-sm">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-faint)]">
            What we did
          </div>
          <p className="mt-1 text-[color:var(--ink-muted)]">{study.whatWeDid}</p>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-faint)]">
            Result
          </div>
          <p className="mt-1 text-[color:var(--ink-muted)]">{study.result}</p>
        </div>
      </div>
    </article>
  );
}
