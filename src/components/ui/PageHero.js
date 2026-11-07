export default function PageHero({ eyebrow, title, accent, description, actions }) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 hero-grid opacity-35" />
      <div className="absolute inset-y-0 left-[28%] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-site relative z-10 py-20 md:py-24">
        {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title} {accent && <span className="text-gold">{accent}</span>}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
