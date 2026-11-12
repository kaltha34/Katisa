import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Insights',
  description:
    'Practical notes from Katisa Technologies for Sri Lankan business owners — stock, bookings, websites and ops.',
};

const posts = [
  {
    slug: 'hello-sri-lanka',
    title: 'Why Sri Lankan SMEs outgrow spreadsheets',
    description:
      'Stock, bookings and WhatsApp threads eventually break. When a simple system pays for itself.',
    date: '2026-03-01',
    draft: true,
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes for owners"
        accent="who hate chaos"
        description="MDX-ready structure for SEO content. Drafts stay unpublished until you flip them live."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="card-surface">
              <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--brass)]">
                {post.draft ? 'Draft' : post.date}
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{post.description}</p>
              <p className="mt-4 text-xs text-[color:var(--ink-faint)]">
                Source: <code>src/content/insights/{post.slug}.mdx</code>
              </p>
              {!post.draft && (
                <Link href={`/insights/${post.slug}`} className="mt-4 inline-block text-sm text-[color:var(--brass)]">
                  Read →
                </Link>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
