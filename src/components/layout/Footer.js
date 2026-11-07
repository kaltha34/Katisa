import Link from 'next/link';
import { FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { navLinks, services, site } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" />
      <div className="container-site relative z-10 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 text-2xl font-bold tracking-tight">
              <span className="text-gold">{site.name}</span> Technologies
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/70">{site.tagline}</p>
            <div className="flex gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-white/10 p-2.5 hover:bg-gold hover:text-black"
              >
                <FiLinkedin />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-2.5 hover:bg-gold hover:text-black"
              >
                <FiInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">What We Build</h4>
            <ul className="space-y-3 text-sm text-white/75">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link href="/services" className="hover:text-gold">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <div>{site.location}</div>
                  <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-white/50 hover:text-gold">
                    View map
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-gold" />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-gold" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {year} {site.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
