import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import JoinForm from '@/components/join/JoinForm';
import { FiAward, FiCode, FiTrendingUp, FiUsers } from 'react-icons/fi';

export const metadata = {
  title: 'Join Us',
  description: 'Join Katisa Technologies as an early contributor on InQRS and earn equity.',
};

const benefits = [
  { icon: FiTrendingUp, title: 'Equity ownership', text: 'Own a piece of InQRS and share in future success.' },
  { icon: FiUsers, title: 'Early team member', text: 'Shape product, culture, and direction from day one.' },
  { icon: FiCode, title: 'Real impact', text: 'Ship features that customers use immediately.' },
  { icon: FiAward, title: 'Portfolio growth', text: 'Build real software-company experience with production work.' },
];

const roles = [
  { title: 'Full-Stack Developer', skills: ['React', 'Node.js', 'Firebase', 'REST APIs'], equity: '3–8%' },
  { title: 'Frontend Developer', skills: ['React', 'Tailwind', 'Responsive UI'], equity: '2–5%' },
  { title: 'Backend Developer', skills: ['Node.js', 'Firestore', 'Auth', 'APIs'], equity: '2–5%' },
];

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers / Equity"
        title="Help build"
        accent="InQRS"
        description="We’re looking for early contributors who want ownership, responsibility, and real product work — not busywork."
      />

      <Section>
        <div className="mb-10 flex items-center gap-4">
          <Image
            src="/images/inqrs-logo.png"
            alt="InQRS"
            width={72}
            height={72}
            unoptimized
            className="h-16 w-16 rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">Join as an early contributor</h2>
            <p className="text-white/65">Equity roles for builders who want to ship.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="card-surface">
              <div className="mb-4 inline-flex rounded-xl bg-gold/15 p-3 text-gold">
                <item.icon size={20} />
              </div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="mb-8">
          <h2 className="heading-display">Open roles</h2>
          <p className="body-muted mt-3">Equity ranges depend on contribution, commitment, and stage.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-soft"
            >
              <div className="text-xs font-semibold tracking-[0.16em] text-gold">EQUITY {role.equity}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{role.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white/80"
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
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-soft md:p-8">
          <h2 className="text-2xl font-bold text-white">Apply now</h2>
          <p className="mt-2 text-sm text-white/65">
            Tell us what you want to work on and share links to your work.
          </p>
          <div className="mt-6">
            <JoinForm />
          </div>
        </div>
      </Section>
    </>
  );
}
