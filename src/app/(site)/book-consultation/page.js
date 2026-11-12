import { Suspense } from 'react';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import ConsultationBooking from '@/components/ui/ConsultationBooking';
import BookingInterestForm from '@/components/book/BookingInterestForm';
import { FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'Book a Free Call',
  description:
    'Book a free call with Katisa Technologies — websites, stock systems, apps and marketing for Sri Lankan businesses. Clear next steps. No pressure.',
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Free call"
        title="Tell us what you need."
        accent="We will map the next step."
        description="About 15–30 minutes. Plain English. Clear LKR range when we can give one."
      />

      <Section tone="soft">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {[
            'Free consultation',
            'Website, stock, app, or marketing',
            'No obligation',
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
            >
              <FiCheck className="mt-0.5 shrink-0 text-[color:var(--brass)]" />
              <span className="text-sm text-[color:var(--ink-muted)]">{item}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Suspense
            fallback={
              <div className="border border-[color:var(--line)] p-8 text-sm text-[color:var(--ink-muted)]">
                Loading form…
              </div>
            }
          >
            <BookingInterestForm />
          </Suspense>
          <ConsultationBooking />
        </div>
      </Section>
    </>
  );
}
