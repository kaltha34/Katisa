'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
          ? 'border-white/10 bg-black/90 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-black/70 backdrop-blur-md'
      }`}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between md:h-20">
        <Link href="/" className="flex items-center" aria-label="Katisa Technologies">
          <Image
            src="/images/katisa-mark.jpg"
            alt="Katisa Technologies"
            width={72}
            height={72}
            priority
            unoptimized
            className="h-14 w-14 rounded-xl object-cover md:h-16 md:w-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-gold ${
                pathname === link.href ? 'text-white' : 'text-white/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book-consultation" className="btn-gold !py-2.5 !text-xs">
            Book a Call
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-gold"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/book-consultation" className="btn-gold mt-2 text-center">
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
