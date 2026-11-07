import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 md:pt-24">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
