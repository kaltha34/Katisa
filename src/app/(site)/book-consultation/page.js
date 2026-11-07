import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import ConsultationBooking from '@/components/ui/ConsultationBooking';
import { FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'Book a Consultation',
  description: 'Schedule a free consultation with Katisa Technologies.',
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Discovery Call"
        title="Let’s discuss"
        accent="your project"
        description="Free 30-minute consultation — requirements, approach, and a rough estimate with no pressure."
      />

      <Section tone="soft">
        <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            'Free 30-minute consultation',
            'Discuss project requirements',
            'Practical technical advice',
            'Rough timeline and estimate',
            'No obligation',
            'Clear next steps',
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-soft"
            >
              <FiCheck className="mt-0.5 shrink-0 text-gold" />
              <span className="text-sm text-white/85">{item}</span>
            </div>
          ))}
        </div>
        <ConsultationBooking />
      </Section>
    </>
  );
}
