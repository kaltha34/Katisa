export default function Badge({ children, tone = 'brass', className = '' }) {
  const tones = {
    brass: 'border-[color:var(--brass)]/40 bg-[color:var(--brass-soft)] text-[color:var(--brass)]',
    muted: 'border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--ink-muted)]',
  };

  return (
    <span
      className={`inline-flex items-center border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${tones[tone] || tones.brass} ${className}`}
    >
      {children}
    </span>
  );
}
