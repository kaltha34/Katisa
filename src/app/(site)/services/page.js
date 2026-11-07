import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import { services } from '@/lib/site';
import { FiCheckCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Services',
  description:
    'Business websites, inventory systems, internal apps, and custom software from Katisa Technologies — priced from LKR 29,000.',
};

const packagedServices = services.filter((service) => service.series);
const productServices = services.filter((service) => !service.series);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Solutions built for"
        accent="real operations"
        description="Stop wrestling with tools that almost fit. We design and ship software that matches how your business actually works."
        actions={
          <>
            <Button href="/book-consultation" variant="gold">
              Book a Free Discovery Call
            </Button>
            <Button href="/contact" variant="ghost">
              Talk to us
            </Button>
          </>
        }
      />

      <Section tone="soft">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="eyebrow mb-4 justify-center">The Series</div>
          <h2 className="heading-display">Packages with a clear starting point</h2>
          <p className="body-muted mt-4">
            Each package has a movie-title name and a starting price in LKR. Final price varies with
            features and scope.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {packagedServices.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-soft transition hover:border-gold/50 hover:bg-white/[0.07] hover:shadow-glow"
            >
              <div className="text-xs font-semibold tracking-[0.18em] text-gold">
                SERIES · {service.series.toUpperCase()}
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">{service.title}</h3>
              <div className="mt-5 text-2xl font-bold tracking-tight text-gold">
                {service.priceLabel}
              </div>
              <p className="mt-2 text-xs text-white/50">{service.priceNote}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="heading-display">What we deliver</h2>
          <p className="body-muted mt-4">
            Clear scope, practical features, and support after launch — for businesses across Sri Lanka.
          </p>
        </div>

        <div className="space-y-6">
          {packagedServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10"
            >
              <div>
                <div className="mb-3 text-xs font-semibold tracking-[0.18em] text-gold">
                  SERIES · {service.series.toUpperCase()}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-white/65">{service.description}</p>
                <div className="mt-6 rounded-2xl border border-gold/25 bg-black px-5 py-4 text-white">
                  <div className="text-xs uppercase tracking-[0.16em] text-gold/80">Starting at</div>
                  <div className="mt-1 text-2xl font-bold text-gold">{service.priceLabel}</div>
                  <p className="mt-1 text-xs text-white/60">{service.priceNote}</p>
                </div>
                <Button href="/book-consultation" variant="outline" className="mt-6">
                  Discuss this →
                </Button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/85"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {productServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10"
            >
              <div>
                <div className="mb-3 text-xs font-semibold tracking-[0.18em] text-gold">
                  PRODUCT BY KATISA
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-white/65">{service.description}</p>
                {service.external ? (
                  <Button href={service.external} variant="outline" className="mt-6" external>
                    Open product →
                  </Button>
                ) : null}
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/85"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="eyebrow mb-4">Engagement model</div>
            <h2 className="heading-display">Built with you, not just for you</h2>
            <p className="body-muted mt-4">
              We start with discovery, ship in visible increments, and leave your team confident after launch.
              Package prices are starting points — final pricing depends on the features you need.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Discovery first', 'Process mapping before architecture'],
              ['Visible progress', 'Demos every sprint'],
              ['Clean handover', 'Docs, training, access'],
              ['Stay supported', 'Retainers and enhancements'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="font-semibold text-white">{title}</div>
                <p className="mt-2 text-sm text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand title="Need a custom app for your business?" />
    </>
  );
}
