import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import CookieNotice from '@/components/ui/CookieNotice';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-[4.25rem]">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <CookieNotice />
    </>
  );
}
