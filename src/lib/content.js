export {
  formatLkr,
  formatLkrFrom,
  formatLkrPlan,
  formatPriceHint,
  foundingOffer,
  completionReward,
  paymentTerms,
  sharedNotIncluded,
  goalCards,
  homeHowItWorks,
  softwareProcess,
  qualityStandards,
  marketingProcess,
  marketingNeedsFromYou,
  marketingWeDoNotPromise,
  websitePlans,
  websiteCarePlans,
  stockPlans,
  customAppPlan,
  customProjectPlan,
  marketingPlans,
  marketingOneOffs,
  bundles,
  softwareSections,
  pricingSoftwareBlocks,
  pricingMarketingBlock,
  pricingPreview,
  packageInterestOptions,
  businessTypeOptions,
  budgetRangeOptions,
  pricingFaqs,
  services,
  supportPlans,
} from '@/lib/pricing';

import { pricingFaqs } from '@/lib/pricing';

export const site = {
  name: 'Katisa',
  legalName: 'Katisa Technologies',
  tagline: 'Websites, software and marketing for Sri Lankan businesses.',
  description:
    'Katisa Technologies builds websites from LKR 35,000 and upwards, stock & sales systems, custom business apps, and social media & video marketing for shops, salons, clinics, restaurants and tuition centres in Sri Lanka.',
  email: 'katisatechnologies@gmail.com',
  phone: '+94 72 595 0375',
  phoneHref: 'tel:+94725950375',
  whatsapp: '94725950375',
  whatsappMessage:
    'Hi Katisa, I run a business in Sri Lanka and want to book a free call.',
  location: 'Colombo, Sri Lanka',
  mapUrl: 'https://maps.app.goo.gl/5Pj3XuAYiydTurCA9',
  calendly: 'https://calendly.com/katisatechnologies/new-meeting',
  inqrsUrl: 'https://idora.click',
  domain: 'https://katisa.netlify.app',
  /** Absolute OG image on the live Netlify domain — never katisatech.com */
  ogImage: 'https://katisa.netlify.app/images/katisa-logo.png',
  socials: {
    linkedin: 'https://www.linkedin.com/company/katisatech/',
    instagram: 'https://www.instagram.com/kali_x_sa/',
  },
};

/** Main menu — logo is Home */
export const navLinks = [
  { name: 'Software', href: '/software' },
  { name: 'Marketing', href: '/marketing' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

/** Footer-only links */
export const footerExtraLinks = [
  { name: 'Webinars', href: '/webinars' },
  { name: 'Join Us', href: '/join-us' },
  { name: 'InQRS', href: 'https://idora.click', external: true },
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
];

export const faqs = [
  ...pricingFaqs,
  {
    q: 'Who owns the work when we finish?',
    a: 'You do. We hand over access and written notes. No hostage situations.',
  },
];

/** Featured work — only real projects we can show */
export const featuredWork = [
  {
    id: 'nipuni',
    label: 'Nipuni Studio',
    industry: 'Artist brand website',
    detail:
      'A gallery-first website for originals, prints and workshops — live at nipunimallikaarachchi.com.',
    href: 'https://www.nipunimallikaarachchi.com/',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Art gallery wall with framed works',
  },
  {
    id: 'shops',
    label: 'Shops & retailers',
    industry: 'Stock & sales',
    detail: 'Stock tracking, low-stock alerts and simple sales reports so the counter stays honest.',
    href: '/software#stock',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Retail shop interior with clothing racks',
  },
  {
    id: 'salons',
    label: 'Salons & clinics',
    industry: 'Websites & bookings',
    detail: 'Phone-friendly sites and booking-style apps so fewer chats get lost in WhatsApp.',
    href: '/software#website',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Salon interior with styling chairs',
  },
];

export const proofPlaceholders = featuredWork;

export const inqrs = {
  id: 'inqrs',
  title: 'InQRS NFC Smart Cards',
  description:
    'Our sister product — tap once to share a digital profile. Free card on successful project completion (see Pricing terms).',
  url: 'https://idora.click',
};

export const partners = [
  { id: 'salons', label: 'Salons' },
  { id: 'clinics', label: 'Clinics' },
  { id: 'tuition', label: 'Tuition' },
  { id: 'shops', label: 'Shops' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'vehicles', label: 'Vehicle sellers' },
];

export const process = [
  { step: '01', title: 'Discovery', text: 'We listen and write a clear scope.' },
  { step: '02', title: 'Design', text: 'You approve layouts before we build.' },
  { step: '03', title: 'Build', text: 'Small steps with demos you can try.' },
  { step: '04', title: 'Launch', text: 'Go live, train your team, hand over notes.' },
  { step: '05', title: 'Support', text: 'Optional care plans after launch.' },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Nipuni Mallika Arachchi',
    business: 'Nipuni Studio · Artist',
    quote:
      'Katisa built a calm gallery site that feels like the studio — artwork first, clear paths to buy, workshops and the story behind the work.',
  },
];

export const caseStudies = [
  {
    id: 'nipuni-studio',
    arm: 'build',
    client: 'Nipuni Studio',
    industry: 'Creative / Artist',
    whatWeDid: 'Business website with gallery shop, workshops and studio story',
    result: 'Live brand site at nipunimallikaarachchi.com',
  },
];

export const pains = [
  {
    id: 'stock',
    before: 'Stock living in notebooks and memory',
    after: 'Live stock levels and reorder alerts',
  },
  {
    id: 'bookings',
    before: 'Missed calls and messy appointment chats',
    after: 'Clear booking flows and follow-ups',
  },
  {
    id: 'sheets',
    before: 'Spreadsheets nobody trusts',
    after: 'One system your team can open on a phone',
  },
];

export const trustItems = [
  'Colombo-based',
  'Clear LKR pricing',
  'WhatsApp-friendly',
  'You own the work',
];

export const projects = [
  {
    id: 'nipuni-studio',
    title: 'Nipuni Studio',
    client: 'Nipuni Mallika Arachchi',
    url: 'https://www.nipunimallikaarachchi.com/',
    category: 'Artist brand website',
    summary:
      'A calm, gallery-first website for a Sri Lankan artist — originals, prints, workshops, and studio storytelling.',
  },
];

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
