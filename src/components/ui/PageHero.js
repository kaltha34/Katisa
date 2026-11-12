export default function PageHero({ eyebrow, title, accent, description, actions }) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div className="grain-overlay" />
      <div className="absolute inset-0 hero-grid opacity-35" />
      <div className="container-site relative z-10 py-14 md:py-16 lg:py-20">
        {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title} {accent && <span className="text-[color:var(--brass)]">{accent}</span>}
        </h1>
        {description && <p className="body-muted mt-5 max-w-2xl">{description}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
