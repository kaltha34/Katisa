'use client';

import HomeHero from '@/components/home/HomeHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/ui/Reveal';
import { services, site } from '@/lib/site';
import {
  FiCloud,
  FiCpu,
  FiLayers,
  FiPackage,
  FiShield,
  FiZap,
  FiCheckCircle,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FiCloud,
    title: 'Practical by design',
    description: 'We build tools your team will actually use — not bloated platforms nobody opens.',
  },
  {
    icon: FiCpu,
    title: 'Product-led thinking',
    description: 'We ship websites, systems, and apps with clear outcomes — not endless feature lists.',
  },
  {
    icon: FiLayers,
    title: 'Tailored workflows',
    description: 'Every feature maps to how your business works today and how you want to scale.',
  },
  {
    icon: FiShield,
    title: 'Secure foundations',
    description: 'Access control, backups, and sensible security defaults from day one.',
  },
  {
    icon: FiZap,
    title: 'Fast delivery',
    description: 'Short feedback loops so you see working software early, not after months of silence.',
  },
  {
    icon: FiPackage,
    title: 'Local partnership',
    description: 'Sri Lanka–based team with direct communication, training, and ongoing support.',
  },
];

const process = [
  { step: '01', title: 'Discovery', text: 'We map your process, pain points, and goals before writing code.' },
  { step: '02', title: 'Design', text: 'Clear architecture, screens, and scope you can review and approve.' },
  { step: '03', title: 'Build', text: 'Sprint-based delivery with demos so you stay in control.' },
  { step: '04', title: 'Launch', text: 'Deploy, train your team, and hand over documentation.' },
  { step: '05', title: 'Support', text: 'Iterate as your business grows — retainers available.' },
];

export default function HomePageClient() {
  return (
    <>
      <HomeHero />

      <Section tone="soft">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="eyebrow mb-4">Services</div>
              <h2 className="heading-display">What we build</h2>
              <p className="body-muted mt-4">
                Practical software with clear starting prices — Origin, Rise, Empire, and Uncharted.
                Final price varies with features and scope.
              </p>
            </div>
            <Button href="/services" variant="outline">
              View all services
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services
            .filter((service) => service.series)
            .map((service, index) => (
              <Reveal key={service.id} delay={index * 0.06}>
                <motion.a
                  href={`/services#${service.id}`}
                  whileHover={{ y: -6 }}
                  className="card-surface block h-full hover:shadow-glow"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="text-xs font-semibold tracking-[0.18em] text-gold">
                      SERIES · {service.series.toUpperCase()}
                    </div>
                    <div className="text-sm font-bold text-gold">{service.priceLabel}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{service.description}</p>
                  <p className="mt-2 text-xs text-white/45">{service.priceNote}</p>
                  <ul className="mt-5 space-y-2">
                    {service.features.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.a>
              </Reveal>
            ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="eyebrow mb-4">Also from Katisa</div>
                <h2 className="heading-display">InQRS — a product we maintain</h2>
                <p className="body-muted mt-4 max-w-xl">
                  Alongside client work, we maintain InQRS, our NFC smart card product for instant
                  digital profiles. Useful for networking, sales teams, and events.
                </p>
              </div>
              <Button href={site.inqrsUrl} variant="outline" external>
                Visit InQRS
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="eyebrow mb-4 justify-center">Why Katisa</div>
            <h2 className="heading-display">Software that works for you, not against you</h2>
            <p className="body-muted mt-4">
              We help Sri Lankan businesses replace spreadsheets, friction, and off-the-shelf misfits
              with tools that fit.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="card-surface h-full">
                <div className="mb-4 inline-flex rounded-xl bg-gold/15 p-3 text-gold">
                  <feature.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{feature.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <div className="eyebrow mb-4">How we work</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                From discovery to deployment
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Transparent delivery with clear milestones — so you always know what’s shipping next.
              </p>
            </div>
          </Reveal>
          <div className="space-y-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold/35"
                >
                  <div className="mb-1 text-xs font-semibold tracking-[0.18em] text-gold">
                    {item.step}
                  </div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <p className="mt-1 text-sm text-white/65">{item.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
