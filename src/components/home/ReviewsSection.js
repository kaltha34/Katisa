'use client';

import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { testimonials } from '@/lib/content';

export default function ReviewsSection() {
  if (!testimonials.length) return null;

  return (
    <Section id="reviews">
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <div className="eyebrow mb-4">Customer reviews</div>
          <h2 className="heading-display">What people say after we ship</h2>
          <p className="body-muted mt-4">
            Feedback from projects we have permission to share.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:max-w-3xl">
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <figure className="card-surface flex h-full flex-col">
              <blockquote className="flex-1 text-base leading-relaxed text-[color:var(--ink-muted)]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[color:var(--line)] pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brass-soft)] text-sm font-semibold text-[color:var(--brass)]">
                  {item.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.photo} alt="" className="h-full w-full rounded-full object-cover" />
                  ) : (
                    item.name.charAt(0)
                  )}
                </div>
                <div>
                  <div className="font-semibold text-[color:var(--ink)]">{item.name}</div>
                  <div className="text-sm text-[color:var(--ink-faint)]">{item.business}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
