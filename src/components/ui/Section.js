export default function Section({
  children,
  className = '',
  tone = 'black',
  id,
}) {
  const tones = {
    white: 'bg-black text-white',
    soft: 'bg-[#0a0a0a] text-white',
    black: 'bg-black text-white',
    navy: 'bg-navy text-white',
    deep: 'bg-navy-deep text-white',
  };

  return (
    <section id={id} className={`section-pad ${tones[tone] || tones.black} ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}
