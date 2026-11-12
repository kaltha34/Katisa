import PageHero from '@/components/ui/PageHero';
import WorkShowcase from '@/components/home/WorkShowcase';
import CtaBand from '@/components/ui/CtaBand';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Work',
  description:
    'Selected Katisa Technologies projects — including Nipuni Studio, a brand-first artist website.',
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects that look like the brand,"
        accent="not a template"
        description="Full-page views of real launches. Start with Nipuni Studio — more case studies as we ship."
        actions={
          <>
            <Button href="/book-consultation" variant="primary">
              Book a free call
            </Button>
            <Button href="/services" variant="ghost">
              View services
            </Button>
          </>
        }
      />
      <WorkShowcase showIntro={false} />
      <CtaBand title="Want a site or system that fits your brand?" />
    </>
  );
}
