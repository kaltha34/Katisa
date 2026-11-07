import HomePageClient from '@/components/home/HomePageClient';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Home',
  description: site.tagline,
};

export default function HomePage() {
  return <HomePageClient />;
}
