import {
  arms,
  bundles,
  buildPackages,
  catalog,
  formatLkr,
  formatLkrFrom,
  formatPriceHint,
  foundingOffer,
  focusOptions,
  growPackage,
  industries,
  industryOptions,
  journeySteps,
  notIncludedDefaults,
  packageInterestOptions,
  budgetRangeOptions,
  paymentTerms,
  positioningLine,
  pricingFaqs,
  pulseProcess,
  services,
  supportPlans,
} from '@/lib/pricing';

export {
  arms,
  bundles,
  buildPackages,
  catalog,
  formatLkr,
  formatLkrFrom,
  formatPriceHint,
  foundingOffer,
  focusOptions,
  growPackage,
  industries,
  industryOptions,
  journeySteps,
  notIncludedDefaults,
  packageInterestOptions,
  budgetRangeOptions,
  paymentTerms,
  positioningLine,
  pricingFaqs,
  pulseProcess,
  services,
  supportPlans,
};

export const site = {
  name: 'Katisa',
  legalName: 'Katisa Technologies',
  tagline: positioningLine,
  description:
    'Katisa Technologies builds the systems and the visibility Sri Lankan businesses need to grow — websites from LKR 35,000, inventory & POS, apps, and Pulse content for shops, salons, clinics, restaurants and vehicle sellers.',
  email: 'katisatechnologies@gmail.com',
  phone: '+94 72 595 0375',
  phoneHref: 'tel:+94725950375',
  whatsapp: '94725950375',
  whatsappMessage:
    'Hi Katisa, I run a business in Sri Lanka and want a free quote for a website / software.',
  location: 'Colombo, Sri Lanka',
  mapUrl: 'https://maps.app.goo.gl/5Pj3XuAYiydTurCA9',
  calendly: 'https://calendly.com/katisatechnologies/new-meeting',
  inqrsUrl: 'https://idora.click',
  domain: 'https://katisa.netlify.app',
  socials: {
    linkedin: 'https://www.linkedin.com/company/katisatech/',
    instagram: 'https://www.instagram.com/kali_x_sa/',
  },
};

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Build', href: '/build' },
  { name: 'Grow', href: '/grow' },
  { name: 'Bundles', href: '/bundles' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

/** Secondary links — footer / More menu */
export const moreLinks = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Join Us', href: '/join-us' },
];

/** Placeholder case studies — replace with real projects before publishing claims */
export const caseStudies = [
  {
    id: 'placeholder-build-1',
    arm: 'build',
    client: '[PLACEHOLDER: Client name]',
    industry: '[PLACEHOLDER: Industry]',
    whatWeDid: '[PLACEHOLDER: What we built — e.g. Rise Business website]',
    result: '[PLACEHOLDER: Outcome you can verify — do not invent numbers]',
  },
  {
    id: 'placeholder-build-2',
    arm: 'build',
    client: '[PLACEHOLDER: Client name]',
    industry: '[PLACEHOLDER: Industry]',
    whatWeDid: '[PLACEHOLDER: What we built — e.g. Empire inventory]',
    result: '[PLACEHOLDER: Outcome you can verify]',
  },
  {
    id: 'placeholder-grow-1',
    arm: 'grow',
    client: '[PLACEHOLDER: Client name]',
    industry: '[PLACEHOLDER: Industry]',
    whatWeDid: '[PLACEHOLDER: Pulse work — e.g. monthly reels / vehicle video]',
    result: '[PLACEHOLDER: Outcome you can verify]',
  },
  {
    id: 'placeholder-grow-2',
    arm: 'grow',
    client: '[PLACEHOLDER: Client name]',
    industry: '[PLACEHOLDER: Industry]',
    whatWeDid: '[PLACEHOLDER: Pulse work]',
    result: '[PLACEHOLDER: Outcome you can verify]',
  },
];

export const partners = [
  { id: 'salons', label: 'Salons' },
  { id: 'clinics', label: 'Clinics' },
  { id: 'tuition', label: 'Tuition' },
  { id: 'shops', label: 'Shops' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'vehicles', label: 'Vehicle sellers' },
  { id: 'cafes', label: 'Cafés' },
  { id: 'studios', label: 'Studios' },
];

export const inqrs = {
  id: 'inqrs',
  title: 'InQRS NFC Smart Cards',
  description:
    'A product we maintain separately — tap once to share a digital profile. No app download for the person you meet.',
  url: 'https://idora.click',
  features: [
    'Works on iPhone and Android',
    'Update your details anytime online',
    'Great for sales teams and events',
  ],
};

export const pains = [
  {
    id: 'stock',
    before: 'Stock living in notebooks and memory',
    after: 'Live stock levels and reorder alerts',
    detail: 'You find out something is finished only when a customer asks.',
  },
  {
    id: 'bookings',
    before: 'Missed calls and messy appointment chats',
    after: 'Clear booking flows and follow-ups',
    detail: 'WhatsApp threads bury times. Clients no-show. Staff argue over the schedule.',
  },
  {
    id: 'sheets',
    before: 'Spreadsheets nobody trusts',
    after: 'One system your team can open on a phone',
    detail: 'Files break, versions multiply, and the “real” numbers live on one laptop.',
  },
];

export const process = [
  { step: '01', title: 'Discovery', text: 'We listen, map your process, and define what “done” means in plain language.' },
  { step: '02', title: 'Design', text: 'You review screens and scope before heavy building starts.' },
  { step: '03', title: 'Build', text: 'We ship in short loops so you see progress early — not after months of silence.' },
  { step: '04', title: 'Launch', text: 'We go live, train your staff, and hand over access cleanly.' },
  { step: '05', title: 'Support', text: 'Optional Website Care or monthly Pulse so things stay useful after launch.' },
];

export const faqs = [
  ...pricingFaqs,
  {
    q: 'Who owns the code and accounts?',
    a: 'You do. We hand over the codebase, hosting access, and documentation. No hostage situations.',
  },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Nipuni Mallika Arachchi',
    business: 'Nipuni Studio · Artist',
    quote:
      'Katisa built a calm gallery site that feels like the studio — artwork first, clear paths to buy, workshops and the story behind the work.',
    photo: null,
  },
];

export const trustItems = [
  'Colombo-based',
  'Clear LKR pricing',
  'WhatsApp-friendly delivery',
  'You own the code',
];

export const projects = [
  {
    id: 'nipuni-studio',
    title: 'Nipuni Studio',
    client: 'Nipuni Mallika Arachchi',
    url: 'https://www.nipunimallikaarachchi.com/',
    category: 'Artist brand website',
    industry: 'Creative / Artist',
    summary:
      'A calm, gallery-first website for a Sri Lankan artist based in New Zealand — originals, prints, workshops, and studio storytelling.',
    tags: ['Website', 'E-commerce', 'Brand', 'Gallery'],
    problem:
      'Needed a calm online gallery that sells originals and prints without looking like a generic shop template.',
    solution:
      'A brand-first website with immersive artwork viewing, clear checkout paths, workshops, and studio storytelling.',
    result:
      'Live at nipunimallikaarachchi.com — gallery shop, workshops, and studio storytelling in one calm brand site.',
    quote:
      'Katisa built a calm gallery site that feels like the studio — artwork first, clear paths to buy.',
    shots: [
      {
        id: 'home',
        label: 'Home',
        src: '/images/work/nipuni/home.jpg',
        url: 'https://www.nipunimallikaarachchi.com/',
        caption: 'Brand hero with featured artwork and clear CTAs',
      },
      {
        id: 'gallery',
        label: 'Gallery',
        src: '/images/work/nipuni/gallery.png',
        url: 'https://www.nipunimallikaarachchi.com/gallery',
        caption: 'Artwork shop with series filters and pricing',
      },
      {
        id: 'about',
        label: 'About',
        src: '/images/work/nipuni/about.jpg',
        url: 'https://www.nipunimallikaarachchi.com/about',
        caption: 'Artist story page with portrait and studio voice',
      },
    ],
  },
];

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
