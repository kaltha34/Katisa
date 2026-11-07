import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-black px-4 pt-24 text-white">
        <div className="text-center">
          <div className="text-sm font-semibold tracking-[0.2em] text-gold">404</div>
          <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
          <p className="mt-3 text-white/70">The page you’re looking for doesn’t exist.</p>
          <Link href="/" className="btn-gold mt-8 inline-flex">
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
