'use client';

import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { testimonials } from '@/lib/content';

export default function ReviewsSection() {
  if (!testimonials.length) return null;

  return (
    <Section id="reviews">
      <Reveal>
        <div className="mb-10 max-w-xl">
          <div className="eyebrow mb-4">Client words</div>
          <h2 className="heading-display">After we ship</h2>
        </div>
      </Reveal>

      <div className="space-y-6">
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <figure className="border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:p-10">
              <blockquote className="font-display text-xl font-bold leading-snug tracking-tight md:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-[color:var(--line)] pt-5 text-sm">
                <span className="font-semibold text-[color:var(--ink)]">{item.name}</span>
                <span className="mt-1 block text-[color:var(--ink-faint)]">{item.business}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
