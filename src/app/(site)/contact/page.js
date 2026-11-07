import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/contact/ContactForm';
import { site } from '@/lib/site';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export const metadata = {
  title: 'Contact',
  description: 'Contact Katisa Technologies for websites, InQRS, inventory systems, and custom software.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about"
        accent="your project"
        description="Tell us what you’re building. We usually reply within one business day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {[
              { icon: FiMapPin, label: 'Location', value: site.location, href: site.mapUrl },
              { icon: FiPhone, label: 'Phone', value: site.phone, href: site.phoneHref },
              { icon: FiMail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-soft transition hover:border-gold/40"
              >
                <div className="rounded-xl bg-gold/15 p-3 text-gold">
                  <item.icon />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                    {item.label}
                  </div>
                  <div className="mt-1 font-medium text-white">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-soft md:p-8">
            <h2 className="text-2xl font-bold text-white">Send a message</h2>
            <p className="mt-2 text-sm text-white/65">
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
