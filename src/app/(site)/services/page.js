import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import { inqrs, services } from '@/lib/content';
import { FiCheckCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Services',
  description:
    'Business websites, inventory systems, internal apps and custom software from Katisa Technologies in Colombo — priced from LKR 29,000.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software with a clear starting price"
        accent="in LKR"
        description="Four packages for Sri Lankan shops, clinics, classes and teams. You see who it’s for, what you get, and when it ships."
        actions={
          <>
            <Button href="/book-consultation" variant="primary">
              Book a free call
            </Button>
            <Button href="/pricing" variant="ghost">
              Compare pricing
            </Button>
          </>
        }
      />

      <Section tone="soft">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="card-surface block !p-5 hover:shadow-glow"
            >
              <div className="text-xs font-semibold tracking-[0.18em] text-[color:var(--brass)]">
                {service.series}
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold">{service.title}</h2>
              <div className="mt-5 text-2xl font-semibold text-[color:var(--brass)]">
                {service.priceLabel}
              </div>
              <p className="mt-2 text-xs text-[color:var(--ink-faint)]">{service.delivery}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="grid gap-8 rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] p-8 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10"
            >
              <div>
                <div className="mb-3 text-xs font-semibold tracking-[0.18em] text-[color:var(--brass)]">
                  {service.series}
                </div>
                <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-[color:var(--ink-muted)]">{service.description}</p>
                <p className="mt-4 text-sm text-[color:var(--ink)]">
                  <span className="font-semibold">For: </span>
                  {service.audience}
                </p>
                <p className="mt-2 text-sm font-medium text-[color:var(--ink)]">{service.outcome}</p>
                <div className="mt-6 rounded-2xl border border-[color:var(--brass)]/30 bg-[color:var(--bg-elevated)] px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--brass)]">
                    Starting at
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-[color:var(--brass)]">
                    {service.priceLabel}
                  </div>
                  <p className="mt-1 text-xs text-[color:var(--ink-faint)]">
                    {service.priceNote} · {service.delivery}
                  </p>
                </div>
                <Button href="/book-consultation" variant="outline" className="mt-6">
                  Discuss this package
                </Button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => {
                  const title = typeof feature === 'string' ? feature : feature.title;
                  const detail = typeof feature === 'string' ? null : feature.detail;
                  return (
                    <li
                      key={title}
                      className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-[color:var(--brass)]" />
                        <div>
                          <div className="text-sm font-semibold text-[color:var(--ink)]">{title}</div>
                          {detail && (
                            <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                              {detail}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="card-surface flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="eyebrow mb-3">Also from Katisa</div>
            <h2 className="font-display text-2xl font-semibold">{inqrs.title}</h2>
            <p className="mt-2 max-w-xl text-sm text-[color:var(--ink-muted)]">{inqrs.description}</p>
          </div>
          <Button href={inqrs.url} variant="primary" external>
            Visit InQRS
          </Button>
        </div>
      </Section>

      <CtaBand title="Not sure which package fits?" />
    </>
  );
}
