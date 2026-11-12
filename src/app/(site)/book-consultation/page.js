import { Suspense } from 'react';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import ConsultationBooking from '@/components/ui/ConsultationBooking';
import BookingInterestForm from '@/components/book/BookingInterestForm';
import { FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'Book a Call',
  description:
    'Get a free business audit or book a discovery call with Katisa — Build (websites & systems) and Grow (Pulse content) for Sri Lankan shops, clinics and salons.',
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Discovery Call"
        title="Free audit for your shop,"
        accent="clinic or salon"
        description="Tell us Build, Grow or Both — plus package, industry and budget — then pick a time. Clear next steps, no pressure."
      />

      <Section tone="soft">
        <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            'Free 30-minute consultation',
            'Package + budget captured up front',
            'Practical fit for your industry',
            'Rough timeline and LKR range',
            'No obligation',
            'Written next steps',
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
              <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-8 text-sm text-[color:var(--ink-muted)]">
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
