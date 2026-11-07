import { Plus_Jakarta_Sans } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${site.legalName} | Software Company`,
    template: `%s | ${site.legalName}`,
  },
  description: site.tagline,
  metadataBase: new URL('https://katisatech.com'),
  openGraph: {
    title: site.legalName,
    description: site.tagline,
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
