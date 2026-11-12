import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center px-4 pt-24">
        <div className="text-center">
          <div className="text-sm font-semibold tracking-[0.2em] text-[color:var(--brass)]">404</div>
          <h1 className="mt-3 font-display text-4xl font-semibold">Page not found</h1>
          <p className="mt-3 text-[color:var(--ink-muted)]">
            That URL doesn’t exist. Let’s get you back to something useful.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back home
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
