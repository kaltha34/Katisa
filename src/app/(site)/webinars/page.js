import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import WebinarsClient from '@/components/webinars/WebinarsClient';

export const metadata = {
  title: 'Webinars',
  description:
    'Free Katisa webinars on software for small business plus marketing topics — Instagram and Facebook, short video for shops, and getting found on Google.',
};

const topicTracks = [
  {
    title: 'Build / software',
    items: [
      'Choosing a website package without wasting money',
      'Stock tracking basics for small shops',
      'AI and tools that help (not overwhelm) SMEs',
    ],
  },
  {
    title: 'Grow / marketing',
    items: [
      'Instagram and Facebook for small business',
      'Short video for shops and salons',
      'Getting found on Google (simple SEO)',
    ],
  },
];

export default function WebinarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn with Katisa"
        title="Webinars for"
        accent="builders and sellers"
        description="Free sessions on software and marketing — practical ideas for shops, clinics, salons and restaurants in Sri Lanka."
      />

      <Section>
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          {topicTracks.map((track) => (
            <div key={track.title} className="card-surface">
              <h2 className="font-display text-xl font-bold tracking-tight">{track.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-muted)]">
                {track.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <WebinarsClient />

      <Section tone="soft">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-display">Why join</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ['Practical skills', 'Workflows you can use the same week.'],
              ['100% free', 'Every listed session is free to attend.'],
              ['Build + Grow', 'Software topics and marketing topics in one place.'],
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
