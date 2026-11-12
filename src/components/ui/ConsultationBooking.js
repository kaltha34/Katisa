'use client';

import { useEffect } from 'react';
import { FiCalendar, FiCheck } from 'react-icons/fi';
import { site } from '@/lib/content';

export default function ConsultationBooking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const handleBooking = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: site.calendly });
    } else {
      window.open(site.calendly, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="card-surface md:p-8">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 inline-flex rounded-full bg-[color:var(--brass-soft)] p-4 text-[color:var(--brass)]">
          <FiCalendar size={28} />
        </div>
        <h2 className="font-display text-3xl font-semibold">Schedule a consultation</h2>
        <p className="mt-2 text-[color:var(--ink-muted)]">
          Pick a time that works — calendar invite included.
        </p>
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {[
          'Choose your preferred slot',
          'Automatic calendar invite',
          'Email confirmation',
          'Add to Google / Outlook',
          'Easy rescheduling',
          'No obligation',
        ].map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] p-4 text-sm text-[color:var(--ink-muted)]"
          >
            <FiCheck className="mt-0.5 shrink-0 text-[color:var(--brass)]" />
            {item}
          </div>
        ))}
      </div>

      <button type="button" onClick={handleBooking} className="btn-primary w-full md:w-auto">
        Open booking calendar
      </button>

      <div
        className="calendly-inline-widget mt-8 min-h-[640px] w-full overflow-hidden rounded-2xl border border-[color:var(--line)]"
        data-url={site.calendly}
        style={{ minWidth: '320px', height: '700px' }}
      />

      <p className="mt-4 text-sm text-[color:var(--ink-faint)]">
        Prefer email?{' '}
        <a href={`mailto:${site.email}`} className="text-[color:var(--brass)]">
          {site.email}
        </a>
      </p>
    </div>
  );
}
