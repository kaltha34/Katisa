import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import { site } from '@/lib/content';

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the Katisa Technologies website and requesting services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Basic rules for using this website and requesting work from Katisa."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-[color:var(--ink-muted)]">
          <p>Last updated: [DATE]</p>
          <p>
            This website is operated by {site.legalName}, based in {site.location}. By using the
            site you agree to these terms.
          </p>
          <p>
            Package prices shown are starting points in LKR (websites from LKR 35,000). Typical
            project payment terms are 50% upfront, 30% midpoint, 20% on launch. Final scope, timeline and fees are
            confirmed in writing before paid work begins. Ownership of deliverables is defined in
            the project agreement — typically you own the delivered code and accounts after full
            payment.
          </p>
          <p>
            Website content is provided as-is for information. We are not liable for decisions made
            solely from marketing copy on this site.
          </p>
          <p>
            Questions:{' '}
            <a className="text-[color:var(--brass)]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . Have a lawyer review before relying on this as final legal text.
          </p>
        </div>
      </Section>
    </>
  );
}
