'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const KEY = 'katisa-cookie-ok';

export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-24 z-40 mx-auto max-w-xl rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-4 shadow-soft md:bottom-6 md:left-auto md:right-24">
      <p className="text-sm text-[color:var(--ink-muted)]">
        We use essential cookies for theme preference and may use analytics to understand visits.
        See our{' '}
        <Link href="/privacy" className="text-[color:var(--brass)] underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="button"
        className="btn-primary mt-3 !py-2 !text-xs"
        onClick={() => {
          window.localStorage.setItem(KEY, '1');
          setShow(false);
        }}
      >
        Got it
      </button>
    </div>
  );
}
