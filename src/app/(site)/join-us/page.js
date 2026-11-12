import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import JoinForm from '@/components/join/JoinForm';
import { FiAward, FiCode, FiEdit3, FiShare2, FiTrendingUp, FiUsers, FiVideo } from 'react-icons/fi';

export const metadata = {
  title: 'Join Us',
  description:
    'Join Katisa Technologies — developers for Build, plus content creators, videographers and social managers for Pulse (Grow). Equity roles on InQRS also open.',
};

const benefits = [
  { icon: FiTrendingUp, title: 'Real client work', text: 'Ship for shops, salons and clinics — Build and Grow.' },
  { icon: FiUsers, title: 'Small team', text: 'Shape how Katisa works across software and content.' },
  { icon: FiCode, title: 'Build arm', text: 'Websites, inventory systems and apps with clear ownership.' },
  { icon: FiAward, title: 'Grow arm', text: 'Pulse content and video with a path to portfolio pieces.' },
];

const buildRoles = [
  { title: 'Full-Stack Developer', skills: ['React', 'Node.js', 'Firebase', 'REST APIs'], note: 'Equity / project — discuss' },
  { title: 'Frontend Developer', skills: ['React', 'Tailwind', 'Responsive UI'], note: 'Equity / project — discuss' },
  { title: 'Backend Developer', skills: ['Node.js', 'Firestore', 'Auth', 'APIs'], note: 'Equity / project — discuss' },
];

const growRoles = [
  {
    title: 'Content Creator',
    skills: ['Captions', 'Content calendars', 'Instagram / Facebook'],
    note: 'Open interest — [PLACEHOLDER: compensation]',
    icon: FiEdit3,
  },
  {
    title: 'Videographer / Editor',
    skills: ['Short-form video', 'Reels', 'Mobile + camera'],
    note: 'Open interest — [PLACEHOLDER: compensation]',
    icon: FiVideo,
  },
  {
    title: 'Social Media Manager',
    skills: ['Scheduling', 'Community reply', 'Simple reporting'],
    note: 'Open interest — [PLACEHOLDER: compensation]',
    icon: FiShare2,
  },
];

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build software."
        accent="Grow visibility."
        description="We’re looking for developers and Pulse creatives who want real Sri Lankan client work — plus early InQRS contributors."
      />

      <Section>
        <div className="mb-10 flex items-center gap-4">
          <Image
            src="/images/inqrs-logo.png"
            alt="InQRS"
            width={72}
            height={72}
            unoptimized
            className="h-16 w-16 object-cover"
          />
          <div>
            <h2 className="font-display text-2xl font-bold">One company, two arms</h2>
            <p className="text-sm text-[color:var(--ink-muted)]">
              Build (software) · Grow / Pulse (content) · InQRS (separate product equity roles)
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="card-surface">
              <item.icon className="text-[color:var(--brass)]" size={20} />
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft" className="border-y border-[color:var(--line)]">
        <div className="mb-8">
          <h2 className="heading-display">Build roles</h2>
          <p className="body-muted mt-3">Software for Rise, Empire, Origin and Uncharted.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {buildRoles.map((role) => (
            <div key={role.title} className="card-surface">
              <div className="text-xs font-semibold tracking-[0.16em] text-[color:var(--brass)]">
                {role.note}
              </div>
              <h3 className="mt-2 text-xl font-semibold">{role.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[color:var(--line)] px-3 py-1 text-xs text-[color:var(--ink-muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="heading-display">Grow / Pulse roles</h2>
          <p className="body-muted mt-3">
            Open interest — tell us what you make. Compensation marked as placeholder until you set
            it.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {growRoles.map((role) => (
            <div key={role.title} className="card-surface">
              <role.icon className="text-[color:var(--brass)]" size={22} />
              <div className="mt-3 text-xs font-semibold tracking-[0.16em] text-[color:var(--brass)]">
                {role.note}
              </div>
              <h3 className="mt-2 text-xl font-semibold">{role.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[color:var(--line)] px-3 py-1 text-xs text-[color:var(--ink-muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="mx-auto max-w-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">Apply / register interest</h2>
          <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
            Name the role in the form (e.g. Videographer / Editor or Frontend Developer).
          </p>
          <div className="mt-6">
            <JoinForm />
          </div>
        </div>
      </Section>
    </>
  );
}
