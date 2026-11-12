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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-[color:var(--line)] bg-[color:var(--bg)]/90 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div
        className={`container-site flex items-center justify-between gap-4 transition-all ${
          scrolled ? 'h-[4.25rem]' : 'h-20 md:h-24'
        }`}
      >
        <Logo size={scrolled ? 'md' : 'lg'} />

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-[color:var(--brass)] ${
                pathname === link.href ? 'text-[color:var(--ink)]' : 'text-[color:var(--ink-muted)]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] p-2 text-[color:var(--ink)] transition hover:border-[color:var(--brass)] hover:text-[color:var(--brass)]"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <Link href="/book-consultation" className="btn-primary !py-2.5 !text-xs">
            Book a Call
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] p-2 text-[color:var(--ink)]"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            type="button"
            className="rounded-lg p-2"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--bg)] lg:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-[color:var(--ink)] hover:bg-[color:var(--surface)]"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/book-consultation" className="btn-primary mt-2 text-center">
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
