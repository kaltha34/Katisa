import Button from '@/components/ui/Button';
import { site, whatsappUrl } from '@/lib/content';

export default function CtaBand({
  title = 'Ready for software that fits how you actually work?',
  description = 'Book a free call. We’ll talk scope, timeline and budget in plain language — no pressure.',
}) {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--bg-elevated)]"
    >
      <div className="grain-overlay" />
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-[color:var(--brass)]/15 blur-3xl" />
      <div className="container-site relative z-10 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="heading-display">{title}</h2>
          <p className="body-muted mt-4">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book-consultation" variant="primary">
              Book a free call
            </Button>
            <Button href={whatsappUrl()} variant="ghost" external>
              WhatsApp us
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-[color:var(--ink-faint)]">
            <a href={site.phoneHref} className="hover:text-[color:var(--brass)]">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-[color:var(--brass)]">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
