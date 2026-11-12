'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import BrowserFrame from '@/components/ui/BrowserFrame';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { projects } from '@/lib/content';

function ProjectCard({ project }) {
  const [active, setActive] = useState(0);
  const shots = project.shots;
  const shot = shots[active] || shots[0];
  const pageUrl = shot.url || project.url;

  useEffect(() => {
    if (shots.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % shots.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [shots.length]);

  return (
    <article className="space-y-6">
      <div className="mx-auto w-full max-w-2xl">
        <BrowserFrame url={pageUrl}>
          <div className="relative aspect-[16/10] w-full bg-[#1a1814]">
            {shots.map((item, i) => (
              <Image
                key={item.id}
                src={item.src}
                alt={`${project.title} — ${item.label}`}
                fill
                unoptimized
                className={`object-contain object-top transition-opacity duration-700 ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(max-width: 768px) 100vw, 672px"
                priority={i === 0}
              />
            ))}
          </div>
        </BrowserFrame>
      </div>

      <div className="grid gap-6 rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brass)]">
            {project.industry}
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{project.title}</h3>
          <p className="mt-1 text-sm text-[color:var(--ink-faint)]">{project.client}</p>
          <p className="mt-3 text-sm text-[color:var(--ink-muted)] md:text-base">{shot.caption}</p>
          {project.quote && (
            <blockquote className="mt-4 border-l-2 border-[color:var(--brass)] pl-4 text-sm italic text-[color:var(--ink-muted)]">
              “{project.quote}”
            </blockquote>
          )}
          <div className="mt-6">
            <Button href={project.url} variant="primary" external>
              Visit live site
            </Button>
          </div>
        </div>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-[color:var(--ink)]">Problem</dt>
            <dd className="mt-1 text-[color:var(--ink-muted)]">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[color:var(--ink)]">Solution</dt>
            <dd className="mt-1 text-[color:var(--ink-muted)]">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[color:var(--ink)]">Result</dt>
            <dd className="mt-1 text-[color:var(--ink-muted)]">{project.result}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function WorkShowcase({ showIntro = true }) {
  return (
    <Section id="work" tone={showIntro ? 'soft' : 'default'} className={showIntro ? '' : '!pt-0'}>
      {showIntro && (
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-4">Selected work</div>
            <h2 className="heading-display">Nipuni Studio and more to come</h2>
            <p className="body-muted mt-4">
              A compact live preview that cycles through Home, Gallery and About.
            </p>
          </div>
        </Reveal>
      )}

      <div className="space-y-14">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
