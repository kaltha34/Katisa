import { site } from '@/lib/content';

export default function sitemap() {
  const routes = [
    '',
    '/software',
    '/marketing',
    '/pricing',
    '/about',
    '/contact',
    '/book-consultation',
    '/webinars',
    '/join-us',
    '/privacy',
    '/terms',
  ];

  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
