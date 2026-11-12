import HomePageClient from '@/components/home/HomePageClient';
import { faqs, site } from '@/lib/content';

export const metadata = {
  title: 'Software for Sri Lankan shops, clinics & classes',
  description: site.description,
  alternates: { canonical: site.domain },
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
