export const site = {
  name: 'Katisa',
  legalName: 'Katisa Technologies',
  tagline: 'A Sri Lankan software company building practical tools for growing businesses',
  email: 'katisatechnologies@gmail.com',
  phone: '+94 72 595 0375',
  phoneHref: 'tel:+94725950375',
  location: 'Colombo, Sri Lanka',
  mapUrl: 'https://maps.app.goo.gl/5Pj3XuAYiydTurCA9',
  calendly: 'https://calendly.com/katisatechnologies/new-meeting',
  inqrsUrl: 'https://idora.click',
  socials: {
    linkedin: 'https://www.linkedin.com/company/katisatech/',
    instagram: 'https://www.instagram.com/kali_x_sa/',
  },
};

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Join Us', href: '/join-us' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const services = [
  {
    id: 'apps',
    title: 'Internal Apps',
    series: 'Origin',
    priceFrom: 29000,
    priceLabel: 'From LKR 29,000',
    priceNote: 'Varies with features',
    description:
      'Local and cloud tools tailored to your workflow — from data entry to operations dashboards.',
    features: [
      'Designed around your process',
      'Can run on local network or cloud',
      'Private and secure by default',
      'Documentation and handover',
    ],
  },
  {
    id: 'websites',
    title: 'Business Websites',
    series: 'Rise',
    priceFrom: 58000,
    priceLabel: 'From LKR 58,000',
    priceNote: 'Varies with features',
    description:
      'Fast, conversion-focused websites that make your business look credible and easy to find online.',
    features: [
      'Responsive design for every device',
      'SEO-ready structure and fast loads',
      'Contact forms and booking flows',
      'Hosting and maintenance support',
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory Systems',
    series: 'Empire',
    priceFrom: 62000,
    priceLabel: 'From LKR 62,000',
    priceNote: 'Varies with features',
    description:
      'Simple stock tracking for shops and operations that need clarity without enterprise complexity.',
    features: [
      'Live stock levels and alerts',
      'Purchase and sales tracking',
      'Reports your team can actually use',
      'Training included',
    ],
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    series: 'Uncharted',
    priceFrom: null,
    priceLabel: 'Custom quote',
    priceNote: 'Scoped after discovery',
    description:
      'Have a unique requirement? We scope, design, and build software that fits exactly.',
    features: [
      'Free discovery call',
      'Clear timeline and pricing',
      'Built to your specifications',
      'Ongoing support available',
    ],
  },
  {
    id: 'inqrs',
    title: 'InQRS NFC Smart Cards',
    series: null,
    priceFrom: null,
    priceLabel: null,
    priceNote: null,
    description:
      'A product maintained by Katisa — tap once to share your digital profile. No app required.',
    features: [
      'Instant contact sharing on iPhone and Android',
      'Customizable digital profile page',
      'Update details anytime online',
      'Built for networking and sales teams',
    ],
    external: 'https://idora.click',
  },
];

export function formatPriceHint(service) {
  if (!service.priceLabel) return null;
  if (service.priceFrom == null) return service.priceLabel;
  const thousands = Math.round(service.priceFrom / 1000);
  return `from ${thousands}k`;
}

export const team = [
  {
    id: 'pm',
    name: 'Compass',
    role: 'Product Manager Agent',
    image: '/images/agents/compass.jpg',
    focus: 'Discovery, scope, and delivery plans that stay honest to the client’s goals.',
  },
  {
    id: 'senior-se',
    name: 'Architect',
    role: 'Senior Software Engineer Agent',
    image: '/images/agents/architect.jpg',
    focus: 'Architecture, complex features, and keeping systems clean as they grow.',
  },
  {
    id: 'associate-se',
    name: 'Builder',
    role: 'Associate Software Engineer Agent',
    image: '/images/agents/builder.jpg',
    focus: 'Screens, APIs, and day-to-day product work — shipping alongside the senior agent.',
  },
  {
    id: 'qa',
    name: 'Sentinel',
    role: 'QA Agent',
    image: '/images/agents/sentinel.jpg',
    focus: 'Test plans, edge cases, and release confidence before anything goes live.',
  },
  {
    id: 'marketing',
    name: 'Signal',
    role: 'Marketing Agent',
    image: '/images/agents/signal.jpg',
    focus: 'Positioning, campaigns, and making Katisa’s services easy to understand.',
  },
];


