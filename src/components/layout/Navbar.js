'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import Logo from '@/components/ui/Logo';
import { navLinks } from '@/lib/content';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? 'border-[color:var(--line)] bg-[color:var(--bg)]/95 backdrop-blur-md'
          : 'border-transparent bg-[color:var(--bg)]/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Logo size="md" />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide transition hover:text-[color:var(--brass)] ${
                pathname === link.href ? 'text-[color:var(--ink)]' : 'text-[color:var(--ink-muted)]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="border border-[color:var(--line)] p-2 text-[color:var(--ink)] transition hover:border-[color:var(--brass)] hover:text-[color:var(--brass)]"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>

          <Link href="/book-consultation" className="btn-primary !px-4 !py-2.5 !text-[11px]">
            Book a Call
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="border border-[color:var(--line)] p-2 text-[color:var(--ink)]"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
          <button
            type="button"
            className="p-2"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--bg)] lg:hidden">
          <div className="container-site flex flex-col gap-0 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-[color:var(--line)] px-1 py-3.5 text-sm font-medium text-[color:var(--ink)] last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/book-consultation" className="btn-primary mt-3 mb-2 text-center">
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
