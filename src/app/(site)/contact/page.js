import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/contact/ContactForm';
import { site, whatsappUrl } from '@/lib/content';
import { FiMail, FiMapPin, FiPhone, FiMessageCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Katisa Technologies in Colombo for websites, stock systems, custom apps and marketing.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send a short message."
        accent="We reply in plain English."
        description="Website, stock, custom app, or marketing — tell us what you need. We usually reply within one business day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {[
              { icon: FiMapPin, label: 'Location', value: site.location, href: site.mapUrl },
              { icon: FiPhone, label: 'Phone', value: site.phone, href: site.phoneHref },
              { icon: FiMail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
              {
                icon: FiMessageCircle,
                label: 'WhatsApp',
                value: 'Chat with us',
                href: whatsappUrl(),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-soft transition hover:border-[color:var(--brass)]"
              >
                <div className="rounded-xl bg-[color:var(--brass-soft)] p-3 text-[color:var(--brass)]">
                  <item.icon />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                    {item.label}
                  </div>
                  <div className="mt-1 font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="card-surface md:p-8">
            <h2 className="font-display text-2xl font-semibold">Send a message</h2>
            <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
              Share a short brief and we’ll follow up with next steps.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
