import Link from 'next/link';

/**
 * Text wordmark only — no image box, no yellow circle.
 * Katisa = company name.
 */
export default function Logo({ className = '', href = '/', size = 'md' }) {
  const scale = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
  }[size] || 'text-2xl md:text-3xl';

  const mark = (
    <span
      className={`font-display font-extrabold tracking-[0.08em] text-[color:var(--ink)] ${scale} ${className}`}
    >
      KATISA
    </span>
  );

  if (!href) return mark;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center transition hover:opacity-90"
      aria-label="Katisa Technologies"
    >
      {mark}
    </Link>
  );
}
