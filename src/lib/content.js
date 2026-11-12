export {
  formatLkr,
  formatLkrFrom,
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
    'Katisa Technologies builds websites from LKR 35,000, stock & sales systems, custom business apps, and social media & video marketing for shops, salons, clinics, restaurants and tuition centres in Sri Lanka.',
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

export const proofPlaceholders = [
  {
    id: 'p1',
    label: '[PLACEHOLDER: Client or project name]',
    detail: '[PLACEHOLDER: One-line result you can verify — do not invent numbers]',
  },
  {
    id: 'p2',
    label: '[PLACEHOLDER: Client or project name]',
    detail: '[PLACEHOLDER: One-line result you can verify]',
  },
  {
    id: 'p3',
    label: '[PLACEHOLDER: Client or project name]',
    detail: '[PLACEHOLDER: One-line result you can verify]',
  },
];

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

export const testimonials = [];

export const caseStudies = [];

export const pains = [];

export const trustItems = [
  'Colombo-based',
  'Clear LKR pricing',
  'WhatsApp-friendly',
  'You own the work',
];

export const projects = [];

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
