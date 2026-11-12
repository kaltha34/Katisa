'use client';

import { useMemo, useState } from 'react';
import CaseStudyCard from '@/components/work/CaseStudyCard';
import { caseStudies } from '@/lib/content';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'build', label: 'Software' },
  { id: 'grow', label: 'Marketing' },
];

export default function OurWorkClient() {
  const [tab, setTab] = useState('all');

  const items = useMemo(() => {
    if (tab === 'all') return caseStudies;
    return caseStudies.filter((item) => item.arm === tab);
  }, [tab]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2 border-b border-[color:var(--line)] pb-4">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition ${
              tab === item.id
                ? 'bg-[color:var(--brass)] text-[#0c0b0a]'
                : 'border border-[color:var(--line)] text-[color:var(--ink-muted)] hover:border-[color:var(--brass)]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-[color:var(--ink-muted)]">
          More case studies will appear here as we publish approved projects.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      )}
    </div>
  );
}
