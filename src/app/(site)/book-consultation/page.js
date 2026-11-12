import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import ConsultationBooking from '@/components/ui/ConsultationBooking';
import { FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'Book a Call',
  description:
    'Book a free discovery call with Katisa Technologies in Colombo — scope, timeline and LKR estimate with no obligation.',
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Discovery Call"
        title="Book a free call"
        accent="— no pressure"
        description="Thirty minutes. We map the problem, talk packages, and leave you with a clear next step."
      />

      <Section tone="soft">
        <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            'Free 30-minute consultation',
            'Discuss what is broken today',
            'Practical package fit',
            'Rough timeline and LKR range',
            'No obligation',
            'Written next steps',
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-soft"
            >
              <FiCheck className="mt-0.5 shrink-0 text-[color:var(--brass)]" />
              <span className="text-sm text-[color:var(--ink-muted)]">{item}</span>
            </div>
          ))}
        </div>
        <ConsultationBooking />
      </Section>
    </>
  );
}
