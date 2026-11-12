'use client';

/** Instant visual for before/after — simple scenes, not stock-photo fluff. */
export function PainVisual({ type, side }) {
  if (type === 'stock' && side === 'before') {
    return (
      <svg viewBox="0 0 320 140" className="h-auto w-full" aria-hidden="true">
        <rect width="320" height="140" rx="12" fill="#1a1714" />
        <rect x="24" y="28" width="70" height="90" rx="4" fill="#2a2620" stroke="#5c5346" strokeWidth="1.5" transform="rotate(-8 59 73)" />
        <rect x="70" y="22" width="70" height="90" rx="4" fill="#322c24" stroke="#6b6254" strokeWidth="1.5" transform="rotate(6 105 67)" />
        <path d="M48 50h30M48 65h24M48 80h28" stroke="#8a7f6e" strokeWidth="2" />
        <path d="M90 45h28M90 60h22M90 75h26" stroke="#8a7f6e" strokeWidth="2" />
        <circle cx="220" cy="55" r="28" fill="#2a2620" stroke="#5c5346" strokeWidth="2" />
        <text x="208" y="62" fill="#8a7f6e" fontSize="20" fontFamily="system-ui">?</text>
        <text x="180" y="110" fill="#6b6254" fontSize="11" fontFamily="system-ui">
          “Do we have any left?”
        </text>
      </svg>
    );
  }

  if (type === 'stock' && side === 'after') {
    return (
      <svg viewBox="0 0 320 140" className="h-auto w-full" aria-hidden="true">
        <rect width="320" height="140" rx="12" fill="#141210" />
        <rect x="20" y="20" width="280" height="100" rx="10" fill="#1c1915" stroke="#3d3428" />
        <text x="36" y="48" fill="#c9a227" fontSize="10" fontFamily="system-ui" letterSpacing="1">
          STOCK
        </text>
        <rect x="36" y="58" width="160" height="10" rx="5" fill="#2a2620" />
        <rect x="36" y="58" width="120" height="10" rx="5" fill="#c9a227" />
        <rect x="36" y="78" width="160" height="10" rx="5" fill="#2a2620" />
        <rect x="36" y="78" width="40" height="10" rx="5" fill="#e08a6a" />
        <rect x="36" y="98" width="160" height="10" rx="5" fill="#2a2620" />
        <rect x="36" y="98" width="90" height="10" rx="5" fill="#6fbf8b" />
        <rect x="220" y="55" width="60" height="40" rx="8" fill="#c9a227" />
        <text x="232" y="80" fill="#14110c" fontSize="12" fontFamily="system-ui" fontWeight="700">
          ALERT
        </text>
      </svg>
    );
  }

  if (type === 'bookings' && side === 'before') {
    return (
      <svg viewBox="0 0 320 140" className="h-auto w-full" aria-hidden="true">
        <rect width="320" height="140" rx="12" fill="#1a1714" />
        <rect x="30" y="25" width="120" height="50" rx="12" fill="#2a2620" />
        <text x="42" y="55" fill="#8a7f6e" fontSize="11" fontFamily="system-ui">
          free at 3?
        </text>
        <rect x="170" y="40" width="120" height="50" rx="12" fill="#322c24" />
        <text x="182" y="70" fill="#8a7f6e" fontSize="11" fontFamily="system-ui">
          wait which day
        </text>
        <rect x="50" y="85" width="140" height="40" rx="12" fill="#2a2620" />
        <text x="62" y="110" fill="#e08a6a" fontSize="11" fontFamily="system-ui">
          missed call ×2
        </text>
      </svg>
    );
  }

  if (type === 'bookings' && side === 'after') {
    return (
      <svg viewBox="0 0 320 140" className="h-auto w-full" aria-hidden="true">
        <rect width="320" height="140" rx="12" fill="#141210" />
        <rect x="20" y="18" width="280" height="104" rx="10" fill="#1c1915" stroke="#3d3428" />
        <text x="36" y="42" fill="#c9a227" fontSize="10" fontFamily="system-ui" letterSpacing="1">
          TODAY
        </text>
        <rect x="36" y="52" width="248" height="28" rx="6" fill="#242018" />
        <circle cx="52" cy="66" r="5" fill="#6fbf8b" />
        <text x="66" y="70" fill="#f6f0e6" fontSize="11" fontFamily="system-ui">
          10:30 Colour — confirmed
        </text>
        <rect x="36" y="88" width="248" height="28" rx="6" fill="#242018" />
        <circle cx="52" cy="102" r="5" fill="#c9a227" />
        <text x="66" y="106" fill="#f6f0e6" fontSize="11" fontFamily="system-ui">
          14:00 Cut — reminder sent
        </text>
      </svg>
    );
  }

  if (type === 'sheets' && side === 'before') {
    return (
      <svg viewBox="0 0 320 140" className="h-auto w-full" aria-hidden="true">
        <rect width="320" height="140" rx="12" fill="#1a1714" />
        <rect x="40" y="20" width="100" height="80" rx="4" fill="#2a2620" transform="rotate(-6 90 60)" />
        <rect x="110" y="28" width="100" height="80" rx="4" fill="#322c24" transform="rotate(4 160 68)" />
        <rect x="175" y="22" width="100" height="80" rx="4" fill="#2a2620" transform="rotate(-3 225 62)" />
        <path d="M55 45h50M55 58h40M55 71h45" stroke="#5c5346" strokeWidth="2" />
        <path d="M125 50h50M125 63h35" stroke="#5c5346" strokeWidth="2" />
        <text x="100" y="125" fill="#e08a6a" fontSize="11" fontFamily="system-ui">
          final_v3_REAL.xlsx
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 140" className="h-auto w-full" aria-hidden="true">
      <rect width="320" height="140" rx="12" fill="#141210" />
      <rect x="95" y="18" width="70" height="110" rx="12" fill="#1c1915" stroke="#c9a227" strokeWidth="2" />
      <rect x="105" y="36" width="50" height="70" rx="4" fill="#242018" />
      <rect x="110" y="42" width="40" height="6" rx="2" fill="#c9a227" />
      <rect x="110" y="54" width="28" height="4" rx="2" fill="#6fbf8b" />
      <rect x="110" y="64" width="34" height="4" rx="2" fill="#6fbf8b" />
      <circle cx="130" cy="115" r="4" fill="#3d3428" />
      <text x="185" y="70" fill="#f6f0e6" fontSize="12" fontFamily="system-ui">
        One phone.
      </text>
      <text x="185" y="90" fill="#c9a227" fontSize="12" fontFamily="system-ui">
        Same numbers.
      </text>
    </svg>
  );
}
