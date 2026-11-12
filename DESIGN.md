# Katisa redesign — Workshop Modern

## Concept (5 lines)

1. **Mood:** Warm charcoal workshop meets brass workshop light — premium, local, approachable.
2. **Palette:** Canvas `#0B0A09`, brass `#C9A227`, sand ink `#F6F0E6` (+ light-mode cream invert). CSS vars in `src/app/globals.css`.
3. **Type:** Syne (display) + Figtree (body) via `next/font` — large, confident headlines.
4. **Layout:** Asymmetric grids, grain, soft depth, rounded surfaces — not purple-startup, not newspaper editorial.
5. **Motion:** Framer scroll reveals, hover lift, hero dashboard animation; `prefers-reduced-motion` respected.

## Assumptions locked in

- Niche: salons, clinics, tuition classes and small shops in Sri Lanka.
- Edge: WhatsApp-friendly delivery, clear LKR pricing, ownership handover, optional Care plans.
- No fake clients, logos, stats or testimonials — placeholders marked clearly.
- Canonical domain for now: `https://katisa.netlify.app` (update `site.domain` when you buy a custom domain).
- InQRS lives at `https://idora.click` as a secondary product.

## Content source of truth

Edit copy, packages, FAQs, projects in `src/lib/content.js` without touching layout.
