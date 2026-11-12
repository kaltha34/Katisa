import Image from 'next/image';

export default function PageHero({ eyebrow, title, accent, description, actions, image, imageAlt }) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt || ''}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--bg)] via-[color:var(--bg)]/90 to-[color:var(--bg)]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)]/80 via-transparent to-[color:var(--bg)]/30" />
        </>
      )}
      <div className="grain-overlay" />
      {!image && <div className="absolute inset-0 hero-grid opacity-35" />}
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
