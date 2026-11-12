import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import { team } from '@/lib/site';
import { positioningLine, site } from '@/lib/content';
import { FiGlobe, FiLinkedin, FiInstagram, FiTrendingUp, FiUsers, FiEye } from 'react-icons/fi';

export const metadata = {
  title: 'About',
  description:
    'Katisa Technologies is one Colombo team that builds business systems and helps them get seen — Build (software) and Grow (Pulse), plus InQRS as a separate product.',
};

const values = [
  {
    icon: FiTrendingUp,
    title: 'Outcomes first',
    text: 'Success means stock that stays accurate, bookings that stick, and posts that bring inquiries.',
  },
  {
    icon: FiUsers,
    title: 'Plain language',
    text: 'No jargon. You always know scope, price range and what ships next.',
  },
  {
    icon: FiEye,
    title: 'Built and seen',
    text: 'A site or app only helps if customers find it — that is why Build and Grow sit together.',
  },
  {
    icon: FiGlobe,
    title: 'Built for Sri Lanka',
    text: 'WhatsApp-friendly flows, clear LKR pricing, and support on local time.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Katisa"
        title="One team that builds"
        accent="and helps it get seen"
        description={positioningLine}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-display">Our story</h2>
            <p className="body-muted mt-4">
              Katisa started by building software for Sri Lankan shops, clinics and salons — sites,
              stock systems and simple apps people actually open.
            </p>
            <p className="body-muted mt-4">
              We learned the hard part often comes after launch: nobody finds the new site. That is
              why we added Pulse (Grow) — content and video from the same team that built your
              system, not a separate agency you have to brief from scratch.
            </p>
            <p className="body-muted mt-4">
              InQRS NFC smart cards remain a separate product we maintain. Linked when useful — not
              mixed into Build or Pulse package prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/build" variant="outline">
                Explore Build
              </Button>
              <Button href="/grow" variant="ghost">
                Explore Grow
              </Button>
            </div>
          </div>
          <div className="card-surface">
            <div className="grid grid-cols-2 gap-6">
              {[
                ['Build', 'Websites & systems'],
                ['Grow', 'Pulse content'],
                ['Colombo', 'Home base'],
                ['InQRS', 'Separate product'],
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

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">How we work</div>
          <h2 className="heading-display">One onboarding. One report. One contact.</h2>
          <ul className="mt-8 space-y-5 text-[color:var(--ink-muted)]">
            <li className="border-b border-[color:var(--line)] pb-5">
              <span className="font-semibold text-[color:var(--ink)]">One onboarding form</span>
              <p className="mt-1 text-sm">
                Brand basics, goals and access — collected once whether you start with Build, Grow,
                or a bundle.
              </p>
            </li>
            <li className="border-b border-[color:var(--line)] pb-5">
              <span className="font-semibold text-[color:var(--ink)]">One monthly report</span>
              <p className="mt-1 text-sm">
                Website health and social activity in plain language when you are on Care and/or
                Pulse — not two agencies sending two PDFs.
              </p>
            </li>
            <li>
              <span className="font-semibold text-[color:var(--ink)]">One point of contact</span>
              <p className="mt-1 text-sm">
                You talk to Katisa. We coordinate build and content so nothing falls between teams.
              </p>
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <div className="eyebrow mb-4">Values</div>
          <h2 className="heading-display">How we show up</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((item) => (
            <div key={item.title} className="card-surface">
              <item.icon className="text-[color:var(--brass)]" size={22} />
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="mb-8">
          <div className="eyebrow mb-4">Team</div>
          <h2 className="heading-display">Agents who ship</h2>
          <p className="body-muted mt-3">
            [PLACEHOLDER: Replace agent characters with real people photos and bios when ready.]
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.id} className="card-surface !p-0 overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={member.image} alt="" fill unoptimized className="object-cover" />
              </div>
              <div className="p-5">
                <div className="font-semibold">{member.name}</div>
                <div className="text-sm text-[color:var(--brass)]">{member.role}</div>
                <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{member.focus}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm text-[color:var(--ink-muted)]">
          <a
            href={site.socials.linkedin}
            className="inline-flex items-center gap-2 hover:text-[color:var(--brass)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href={site.socials.instagram}
            className="inline-flex items-center gap-2 hover:text-[color:var(--brass)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram /> Instagram
          </a>
        </div>
      </Section>

      <CtaBand title="Want to work with one team for systems and visibility?" />
    </>
  );
}
