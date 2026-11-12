import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import { site } from '@/lib/content';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Katisa Technologies collects and uses contact and booking information.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Plain-language notes on what we collect when you contact us or book a call."
      />
      <Section>
        <div className="prose-katisa mx-auto max-w-3xl space-y-6 text-[color:var(--ink-muted)]">
          <p>Last updated: [DATE]</p>
          <p>
            Katisa Technologies (“we”) collects information you send through our contact forms,
            booking tools, WhatsApp, email and phone — typically your name, business name, contact
            details and project notes.
          </p>
          <p>
            We use that information to reply, prepare quotes, deliver projects and improve our
            services. We do not sell your data.
          </p>
          <p>
            Forms may be processed by Netlify, Calendly/Cal.com, analytics providers, or email
            infrastructure. Those providers process data under their own policies.
          </p>
          <p>
            To request access or deletion, email{' '}
            <a className="text-[color:var(--brass)]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <p>
            Replace this page with counsel-reviewed text before treating it as final legal advice.
          </p>
        </div>
      </Section>
    </>
  );
}
