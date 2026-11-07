import Button from '@/components/ui/Button';
import { site } from '@/lib/site';

export default function CtaBand({
  title = 'Ready to build software that fits your business?',
  description = 'Book a free discovery call. We’ll outline scope, timeline, and budget with no obligation.',
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="absolute inset-0 hero-grid opacity-25" />
      <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-site relative z-10 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-white/70">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book-consultation" variant="gold">
              Book Discovery Call
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost" external>
              Email Us
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/55">
            <a href={site.phoneHref} className="hover:text-gold">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
