# Katisa Technologies

Next.js marketing site for Katisa Technologies (Colombo) — websites, inventory systems, internal apps, custom software, and InQRS NFC cards.

## Design

See [DESIGN.md](./DESIGN.md) for the **Workshop Modern** concept (charcoal + brass, Syne + Figtree).

Content lives in `src/lib/content.js`. Checklist: [CONTENT-CHECKLIST.md](./CONTENT-CHECKLIST.md).

## Stack

- Next.js 15 (App Router)
- Tailwind CSS + CSS variables (light/dark)
- Framer Motion
- Netlify (`@netlify/plugin-nextjs`)
- Calendly (booking), FormSubmit (contact), Firebase/EmailJS (webinars)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy (Netlify)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import** the repo.
3. Build command: `npm run build`
4. Publish directory: leave blank / `.next` (plugin handles Next.js) — ensure `@netlify/plugin-nextjs` is in the project (already in `devDependencies`) and `netlify.toml` exists.
5. Set env vars if used (Firebase, EmailJS, analytics).
6. Domain: either keep `*.netlify.app` or attach a custom domain, then update `site.domain` in `src/lib/content.js`.
7. Enable form/spam protection if you switch contact forms to Netlify Forms.

### netlify.toml (create if missing)

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Post-launch improvements (suggested)

1. **Custom domain + Search Console** — lock local SEO for Colombo / Sri Lanka keywords once the domain is final.
2. **Real case-study metrics + industry filter** — turn Work into a filterable proof library.
3. **Insights (MDX) + Sinhala/Tamil toggle** — publish SEO posts from `src/content/insights` and wire `src/lib/i18n.js` into the navbar.
