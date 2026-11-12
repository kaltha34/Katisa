export default function Section({ children, className = '', tone = 'default', id }) {
  const tones = {
    default: 'bg-[color:var(--bg)]',
    soft: 'bg-[color:var(--bg-soft)]',
    elevated: 'bg-[color:var(--bg-elevated)]',
    black: 'bg-[color:var(--bg)]',
    white: 'bg-[color:var(--bg)]',
    navy: 'bg-[color:var(--bg-elevated)]',
    deep: 'bg-[color:var(--bg-elevated)]',
  };

  return (
    <section id={id} className={`section-pad relative ${tones[tone] || tones.default} ${className}`}>
      <div className="container-site relative z-10">{children}</div>
    </section>
  );
}
