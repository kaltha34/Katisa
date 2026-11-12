import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CtaBand from '@/components/ui/CtaBand';
import OurWorkClient from '@/components/work/OurWorkClient';

export const metadata = {
  title: 'Our Work',
  description:
    'Build and Grow case studies from Katisa Technologies — websites, systems and Pulse content for Sri Lankan businesses. Real projects only; placeholders until you supply them.',
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Build and Grow,"
        accent="shown clearly"
        description="Filter by Build (software) or Grow (Pulse). We only publish projects you approve — placeholders stay marked until then."
        actions={
          <>
            <Button href="/book-consultation" variant="primary">
              Book a Free Call
            </Button>
            <Button href="/bundles" variant="ghost">
              See Bundles
            </Button>
          </>
        }
      />

      <Section>
        <OurWorkClient />
      </Section>

      <CtaBand title="Want your project here as a founding case study?" />
    </>
  );
}
