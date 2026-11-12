import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import WebinarsClient from '@/components/webinars/WebinarsClient';

export const metadata = {
  title: 'Webinars',
  description: 'Free Katisa webinars and workshops on AI, product, and software building.',
};

export default function WebinarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn with Katisa"
        title="Webinars &"
        accent="workshops"
        description="Free online sessions on AI, technology, and building products — join from anywhere."
      />
      <WebinarsClient />
      <Section tone="soft">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-display">Why join</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ['Practical skills', 'Learn real workflows from people shipping products.'],
              ['100% free', 'Every session is free to attend.'],
              ['Certificates', 'Completion certificates for attended sessions.'],
            ].map(([title, text]) => (
              <div key={title} className="card-surface text-left">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
