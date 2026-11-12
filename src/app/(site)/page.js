import HomePageClient from '@/components/home/HomePageClient';
import { faqs, site } from '@/lib/content';

export const metadata = {
  title: 'Websites, software and marketing for Sri Lankan businesses',
  description: site.description,
  alternates: { canonical: site.domain },
  openGraph: {
    title: `${site.legalName} | Websites, software and marketing`,
    description: site.description,
    url: site.domain,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.legalName }],
  },
};

export default function HomePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
