import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import { team } from '@/lib/site';
import { FiAward, FiGlobe, FiLinkedin, FiInstagram, FiTrendingUp, FiUsers } from 'react-icons/fi';

export const metadata = {
  title: 'About',
  description:
    'Katisa Technologies is a Colombo software company building websites, inventory systems and internal apps for Sri Lankan SMEs — plus InQRS NFC cards.',
};

const values = [
  {
    icon: FiTrendingUp,
    title: 'Outcomes first',
    text: 'We measure success by stock that stays accurate, bookings that stick, and sites that get messages.',
  },
  {
    icon: FiUsers,
    title: 'Plain language',
    text: 'No jargon theatre. You always know scope, price range and what’s shipping next.',
  },
  {
    icon: FiAward,
    title: 'Clean handover',
    text: 'You own the code, accounts and docs. We’re partners — not a black box.',
  },
  {
    icon: FiGlobe,
    title: 'Built for Sri Lanka',
    text: 'WhatsApp-friendly flows, LKR pricing clarity, and support that answers on local time.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Katisa"
        title="A Colombo workshop for"
        accent="business software"
        description="We help salons, clinics, tuition classes and shops replace messy spreadsheets and chat chaos with tools people actually open."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-display">Our story</h2>
            <p className="body-muted mt-4">
              Katisa Technologies started with a simple belief: most businesses don’t need another
              bloated platform — they need software that fits their workflow, ships on time, and is
              easy to run.
            </p>
            <p className="body-muted mt-4">
              Today we build websites, inventory systems, internal apps, and maintain InQRS for teams
              across Sri Lanka and beyond.
            </p>
            <Button href="/join-us" variant="outline" className="mt-8">
              Join the team
            </Button>
          </div>
          <div className="card-surface">
            <div className="grid grid-cols-2 gap-6">
              {[
                ['2020', 'Founded'],
                ['InQRS', 'Product we maintain'],
                ['Colombo', 'Home base'],
                ['Services + product', 'How we work'],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl font-semibold text-[color:var(--brass)]">{value}</div>
                  <div className="mt-1 text-sm text-[color:var(--ink-faint)]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="heading-display">What we value</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="card-surface">
              <div className="mb-4 inline-flex rounded-xl bg-[color:var(--brass-soft)] p-3 text-[color:var(--brass)]">
                <value.icon size={20} />
              </div>
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{value.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow mb-4">Leadership</div>
          <div className="overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] shadow-soft md:flex">
            <div className="relative h-72 w-full shrink-0 md:h-auto md:min-h-[22rem] md:w-72">
              <Image
                src="/images/founder.jpg"
                alt="Kalhara Thabrew"
                fill
                unoptimized
                className="object-cover"
                sizes="288px"
              />
            </div>
            <div className="flex-1 p-8">
              <h2 className="font-display text-2xl font-semibold">Kalhara Thabrew</h2>
              <p className="mt-1 text-sm font-medium text-[color:var(--brass)]">Founder & CEO</p>
              <p className="mt-4 text-[color:var(--ink-muted)]">
                Building Katisa with hands-on software knowledge — and a crew of AI agents that help
                ship product, engineering, QA and marketing work every day.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/kalhara-thabrew-288565258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[color:var(--surface-strong)] p-2.5 hover:bg-[color:var(--brass)] hover:text-[#14110c]"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/kali_x_sa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[color:var(--surface-strong)] p-2.5 hover:bg-[color:var(--brass)] hover:text-[#14110c]"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="eyebrow mb-4 justify-center">Agent Crew</div>
          <h2 className="heading-display">Agents that work with me</h2>
          <p className="body-muted mt-4">
            Not a traditional org chart — specialized AI agents that help run product, engineering,
            QA and marketing alongside the founder.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.id} className="card-surface flex h-full flex-col overflow-hidden !p-0">
              <div className="relative aspect-square w-full overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--bg)]">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
                  Agent
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-[color:var(--ink-muted)]">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-muted)]">{member.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
