import Image from 'next/image';
import Button from '@/components/ui/Button';
import { site, whatsappUrl } from '@/lib/content';
import { media } from '@/lib/media';

export default function CtaBand({
  title = 'Ready for a clear next step?',
  description = 'Book a free call. We will talk scope, timeline and budget in plain language — no pressure.',
  image = media.cta,
}) {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--bg-invert)] text-[color:var(--bg)]"
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-[color:var(--bg-invert)]/80" />
        </>
      )}
      <div className="grain-overlay opacity-[0.08]" />
      <div className="container-site relative z-10 grid gap-10 py-16 md:grid-cols-[1.4fr_0.6fr] md:items-end md:py-24">
        <div>
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brass-deep)]">
            Next step
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed opacity-70 md:text-lg">{description}</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href="/book-consultation" variant="primary">
              Book a Free Call
            </Button>
            <Button
              href={whatsappUrl()}
              variant="ghost"
              external
              className="!border-[color:var(--bg)]/25 !text-[color:var(--bg)] hover:!border-[color:var(--brass)] hover:!text-[color:var(--brass-deep)]"
            >
              WhatsApp us
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-55 md:justify-end">
            <a href={site.phoneHref} className="hover:opacity-100">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:opacity-100">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
