'use client';

import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { testimonials } from '@/lib/content';

export default function ReviewsSection() {
  if (!testimonials.length) return null;

  return (
    <Section id="reviews">
      <Reveal>
        <div className="mb-12 grid gap-4 border-b border-[color:var(--line)] pb-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <div className="eyebrow mb-4">Customer reviews</div>
            <h2 className="heading-display">After we ship</h2>
          </div>
          <p className="body-muted md:text-right">
            Feedback from projects we have permission to share.
          </p>
        </div>
      </Reveal>

      <div className="space-y-8">
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <figure className="grid gap-8 border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:grid-cols-[auto_1fr] md:gap-12 md:p-10">
              <div className="index-num">“</div>
              <div>
                <blockquote className="font-display text-xl font-bold leading-snug tracking-tight text-[color:var(--ink)] md:text-2xl lg:text-3xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-[color:var(--line)] pt-5">
                  <span className="font-semibold text-[color:var(--ink)]">{item.name}</span>
                  <span className="text-sm text-[color:var(--ink-faint)]">{item.business}</span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
