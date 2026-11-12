# Project structure

```
src/
  app/
    layout.js                 # Root: fonts, theme, OG, Organization JSON-LD
    globals.css               # Workshop Modern tokens (light + dark)
    sitemap.js / robots.js
    not-found.js / loading.js
    (site)/
      layout.js               # Navbar, Footer, WhatsApp, Cookie
      page.js                 # Homepage
      services/ about/ contact/ book-consultation/
      webinars/ join-us/ insights/
      privacy/ terms/
  components/
    home/                     # Hero, Work, FAQ, HomePageClient
    layout/                   # Navbar, Footer
    quote/QuoteCalculator.js
    ui/                       # Button, Section, Reveal, Cookie, CtaBand…
    contact/ join/ webinars/
  content/insights/*.mdx      # SEO blog drafts
  lib/
    content.js                # Edit copy / packages / FAQs / projects here
    site.js                   # Re-exports + agent team
    i18n.js                   # EN / SI / TA message stubs
public/images/                # Logo, founder, work shots, agents
DESIGN.md
CONTENT-CHECKLIST.md
netlify.toml
```
