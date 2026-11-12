import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function GoalCard({ title, text, href }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition hover:border-[color:var(--brass)]"
    >
      <h3 className="font-display text-xl font-bold tracking-tight text-[color:var(--ink)] md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm text-[color:var(--ink-muted)] md:text-base">{text}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--brass)]">
        Continue <FiArrowUpRight className="transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
