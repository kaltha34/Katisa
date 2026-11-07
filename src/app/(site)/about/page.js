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
    'Learn about Katisa Technologies — a Sri Lankan software company building practical tools and InQRS NFC products.',
};

const values = [
  { icon: FiTrendingUp, title: 'Innovation', text: 'We push for better products without unnecessary complexity.' },
  { icon: FiUsers, title: 'Quality', text: 'Detail-minded delivery, from UX polish to reliable infrastructure.' },
  { icon: FiAward, title: 'Excellence', text: 'We treat every client project like a product launch.' },
  { icon: FiGlobe, title: 'Local impact', text: 'Showcasing Sri Lankan talent while solving real business problems.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Katisa"
        title="A Sri Lankan software company building"
        accent="useful tools"
        description="Founded to help businesses grow with websites, operational tools, and products like InQRS — without enterprise bloat."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-display">Our story</h2>
            <p className="body-muted mt-4">
              Katisa Technologies started with a simple belief: most businesses don’t need another bloated platform —
              they need software that fits their workflow, ships on time, and is easy to run.
            </p>
            <p className="body-muted mt-4">
              Today we build websites, inventory systems, internal apps, and maintain InQRS for teams across Sri Lanka
              and beyond.
            </p>
            <Button href="/join-us" variant="outline" className="mt-8">
              Join the team
            </Button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                ['2020', 'Founded'],
                ['InQRS', 'Product we maintain'],
                ['Colombo', 'Home base'],
                ['Services + product', 'How we work'],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-gold">{value}</div>
                  <div className="mt-1 text-sm text-white/55">{label}</div>
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
              <div className="mb-4 inline-flex rounded-xl bg-gold/15 p-3 text-gold">
                <value.icon size={20} />
              </div>
              <h3 className="font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm text-white/65">{value.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow mb-4">Leadership</div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-soft md:flex">
            <div className="relative h-72 w-full md:h-auto md:w-72">
              <Image
                src="/images/kalhara-thabrew.jpeg"
                alt="Kalhara Thabrew"
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
            <div className="flex-1 p-8">
              <h2 className="text-2xl font-bold text-white">Kalhara Thabrew</h2>
              <p className="mt-1 text-sm font-medium text-gold">Founder & CEO</p>
              <p className="mt-4 text-white/65">
                Building Katisa with hands-on software knowledge — and a crew of AI agents that help ship product,
                engineering, QA, and marketing work every day.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/kalhara-thabrew-288565258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 text-white hover:bg-gold hover:text-black"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/kali_x_sa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 text-white hover:bg-gold hover:text-black"
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
            Not a traditional org chart — specialized AI agents that help run product, engineering, QA, and marketing
            alongside the founder.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.id} className="card-surface flex h-full flex-col overflow-hidden p-0">
              <div className="relative aspect-square w-full overflow-hidden border-b border-white/10 bg-black">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Agent</div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-white/70">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{member.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
