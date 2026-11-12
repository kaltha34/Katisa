export default function PageHero({ eyebrow, title, accent, description, actions }) {
  return (
    <section className="relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[color:var(--brass)]/12 blur-3xl" />
      <div className="container-site relative z-10 py-16 md:py-20">
        {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title} {accent && <span className="text-[color:var(--brass)]">{accent}</span>}
        </h1>
        {description && <p className="body-muted mt-5 max-w-2xl">{description}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
