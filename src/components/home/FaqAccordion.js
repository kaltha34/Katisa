'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { faqs } from '@/lib/content';

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="font-medium text-[color:var(--ink)]">{item.q}</span>
              <FiChevronDown
                className={`shrink-0 text-[color:var(--brass)] transition ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-[color:var(--line)] px-5 py-4 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
