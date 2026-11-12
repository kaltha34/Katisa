/**
 * Safari / macOS-style window chrome with the three traffic-light dots.
 */
export default function BrowserFrame({
  children,
  url = '',
  className = '',
}) {
  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[#1c1c1e] shadow-soft ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#2c2c2e] px-3 py-2.5 md:px-4">
        <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mx-auto flex max-w-md items-center justify-center rounded-lg bg-black/35 px-3 py-1.5 text-[11px] text-white/70 md:text-xs">
            <span className="truncate">{displayUrl || 'preview'}</span>
          </div>
        </div>
        <div className="hidden w-10 shrink-0 sm:block" aria-hidden="true" />
      </div>
      <div className="bg-[color:var(--bg-soft)]">{children}</div>
    </div>
  );
}
