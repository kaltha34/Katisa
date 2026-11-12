export default function ProcessSteps({ title, intro, steps, detailed = false }) {
  return (
    <div>
      {(title || intro) && (
        <div className="mb-8 max-w-2xl">
          {title && <h2 className="heading-display">{title}</h2>}
          {intro && <p className="body-muted mt-3">{intro}</p>}
        </div>
      )}
      <ol className={`grid gap-4 ${detailed ? 'md:grid-cols-1' : 'sm:grid-cols-3'}`}>
        {steps.map((step) => (
          <li
            key={step.step + step.title}
            className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
          >
            <div className="index-num">
              {String(step.step).padStart(2, '0')} · {step.title}
            </div>
            {detailed ? (
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[color:var(--ink)]">What we do</dt>
                  <dd className="mt-1 text-[color:var(--ink-muted)]">{step.weDo}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[color:var(--ink)]">What you receive</dt>
                  <dd className="mt-1 text-[color:var(--ink-muted)]">{step.youReceive}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[color:var(--ink)]">What we need from you</dt>
                  <dd className="mt-1 text-[color:var(--ink-muted)]">{step.weNeed}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[color:var(--ink)]">Typical duration</dt>
                  <dd className="mt-1 text-[color:var(--ink-faint)]">{step.duration}</dd>
                </div>
              </dl>
            ) : (
              <p className="mt-3 text-sm text-[color:var(--ink-muted)]">{step.text || step.weDo}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
