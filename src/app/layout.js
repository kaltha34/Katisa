import { IBM_Plex_Sans, Syne } from 'next/font/google';
import { site } from '@/lib/content';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LocaleProvider } from '@/components/providers/LocaleProvider';
import './globals.css';

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.legalName} | Websites, software and marketing`,
    template: `%s | ${site.legalName}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.legalName} | Websites, software and marketing`,
    description: site.description,
    url: site.domain,
    siteName: site.legalName,
    locale: 'en_LK',
    type: 'website',
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.legalName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.legalName} | Websites, software and marketing`,
    description: site.description,
    images: [site.ogImage],
  },
  alternates: {
    canonical: site.domain,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: site.legalName,
    url: site.domain,
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colombo',
      addressCountry: 'LK',
    },
    sameAs: [site.socials.linkedin, site.socials.instagram],
  };

  return (
    <html lang="en" className={`dark ${display.variable} ${body.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
