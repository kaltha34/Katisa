'use client';

import { useEffect } from 'react';
import { FiCalendar, FiCheck } from 'react-icons/fi';
import { site } from '@/lib/site';

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
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-soft backdrop-blur">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 inline-flex rounded-full bg-gold/15 p-4 text-gold">
          <FiCalendar size={28} />
        </div>
        <h2 className="text-3xl font-bold text-white">Schedule a consultation</h2>
        <p className="mt-2 text-white/65">Pick a time that works — calendar invite included.</p>
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
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-white/85"
          >
            <FiCheck className="mt-0.5 shrink-0 text-gold" />
            {item}
          </div>
        ))}
      </div>

      <button type="button" onClick={handleBooking} className="btn-gold w-full md:w-auto">
        Open booking calendar
      </button>

      <p className="mt-4 text-sm text-white/55">
        Prefer email?{' '}
        <a href={`mailto:${site.email}`} className="font-medium text-gold hover:text-white">
          {site.email}
        </a>
      </p>
    </div>
  );
}
