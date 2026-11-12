import Link from 'next/link';
import { FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Logo from '@/components/ui/Logo';
import { footerExtraLinks, navLinks, site, whatsappUrl } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--bg-elevated)]">
      <div className="grain-overlay" />
      <div className="container-site relative z-10 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="lg" href="/" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--ink-muted)]">
              {site.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="border border-[color:var(--line)] p-2.5 transition hover:border-[color:var(--brass)] hover:bg-[color:var(--brass)] hover:text-[#0c0b0a]"
              >
                <FiLinkedin />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="border border-[color:var(--line)] p-2.5 transition hover:border-[color:var(--brass)] hover:bg-[color:var(--brass)] hover:text-[#0c0b0a]"
              >
                <FiInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-[color:var(--ink-muted)]">
              <li>
                <Link href="/" className="hover:text-[color:var(--brass)]">
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[color:var(--brass)]">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book-consultation" className="hover:text-[color:var(--brass)]">
                  Book a Free Call
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
              More
            </h4>
            <ul className="space-y-3 text-sm text-[color:var(--ink-muted)]">
              {footerExtraLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[color:var(--brass)]"
                    >
                      {link.name}
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-[color:var(--brass)]">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brass)]">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-[color:var(--ink-muted)]">
              <li className="flex gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-[color:var(--brass)]" aria-hidden />
                <div>
                  <div>{site.location}</div>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[color:var(--ink-faint)] hover:text-[color:var(--brass)]"
                  >
                    View map
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[color:var(--brass)]" aria-hidden />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[color:var(--brass)]" aria-hidden />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 !text-xs"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[color:var(--line)] pt-6 text-center text-sm text-[color:var(--ink-faint)]">
          © {year} {site.legalName}. Colombo, Sri Lanka.
        </div>
      </div>
    </footer>
  );
}
