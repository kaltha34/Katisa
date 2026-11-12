export const site = {
  name: 'Katisa',
  legalName: 'Katisa Technologies',
  tagline: 'Software that keeps Sri Lankan shops, clinics and classes running smoothly.',
  description:
    'Katisa Technologies builds websites, inventory systems and internal apps for small and medium businesses in Colombo and across Sri Lanka — clear LKR pricing, WhatsApp-friendly delivery, and support that stays after launch.',
  email: 'katisatechnologies@gmail.com',
  phone: '+94 72 595 0375',
  phoneHref: 'tel:+94725950375',
  whatsapp: '94725950375',
  whatsappMessage:
    'Hi Katisa, I run a business in Sri Lanka and want to talk about software / a website.',
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
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Pricing', href: '/pricing' },
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
    delivery: '2–4 weeks',
    audience: 'Teams drowning in WhatsApp notes and Excel sheets',
    outcome: 'One simple app your staff actually opens every day',
    priceNote: 'Final price depends on features',
    description:
      'Custom tools for bookings, records, dashboards and daily ops — built around how your team already works.',
    features: [
      {
        title: 'Designed around your process',
        detail: 'We map how your team already works — then build screens that match, not the other way around.',
      },
      {
        title: 'Phone-friendly screens',
        detail: 'Staff can update bookings, records and status from a phone on the shop floor.',
      },
      {
        title: 'Training for your staff',
        detail: 'Short walkthrough so people know what to click on day one — no long manuals.',
      },
      {
        title: 'Handover + documentation',
        detail: 'You get access, a plain-language guide, and ownership of the product.',
      },
    ],
  },
  {
    id: 'websites',
    title: 'Business Websites',
    series: 'Rise',
    priceFrom: 58000,
    priceLabel: 'From LKR 58,000',
    delivery: '2–3 weeks',
    audience: 'Owners who need to look credible online and get inquiries',
    outcome: 'A fast site that brings calls, WhatsApp chats and bookings',
    priceNote: 'Final price depends on features',
    description:
      'Clear, mobile-first websites for shops, clinics, tuition classes and service brands across Sri Lanka.',
    features: [
      {
        title: 'Mobile-first design',
        detail: 'Most visitors are on phones — the site is built for that first, not squeezed later.',
      },
      {
        title: 'Contact / WhatsApp CTAs',
        detail: 'Clear buttons so customers can call or message you in one tap.',
      },
      {
        title: 'SEO-ready structure',
        detail: 'Clean pages and metadata so Colombo / Sri Lanka searches can find you.',
      },
      {
        title: 'Hosting help available',
        detail: 'We can help you go live and keep the site online after launch.',
      },
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory Systems',
    series: 'Empire',
    priceFrom: 62000,
    priceLabel: 'From LKR 62,000',
    delivery: '3–5 weeks',
    audience: 'Shops and stores that lose money to missing stock',
    outcome: 'Know what you have, what sold, and what to reorder',
    priceNote: 'Final price depends on features',
    description:
      'Stock tracking without enterprise complexity — alerts, sales/purchase history, and reports your team can read.',
    features: [
      {
        title: 'Live stock levels',
        detail: 'See what is in store right now — not what last week’s spreadsheet guessed.',
      },
      {
        title: 'Low-stock alerts',
        detail: 'Get warned before a popular item runs out and you lose a sale.',
      },
      {
        title: 'Purchase & sales tracking',
        detail: 'Record what came in and what went out so numbers stay honest.',
      },
      {
        title: 'Simple reports',
        detail: 'Fast summaries your team can read without a finance degree.',
      },
    ],
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    series: 'Uncharted',
    priceFrom: null,
    priceLabel: 'Custom quote',
    delivery: 'Scoped after discovery',
    audience: 'Businesses with a unique workflow off-the-shelf tools ignore',
    outcome: 'Software that fits your process — not the other way around',
    priceNote: 'Quoted after a free discovery call',
    description:
      'When packages don’t fit, we map the problem, propose a clear scope, and build only what you need.',
    features: [
      {
        title: 'Free discovery call',
        detail: 'We listen first — problem, constraints, and what “done” means for you.',
      },
      {
        title: 'Written scope & timeline',
        detail: 'No mystery months. You get a clear plan before heavy build starts.',
      },
      {
        title: 'Built to your process',
        detail: 'Features map to your real workflow — we don’t force a generic template.',
      },
      {
        title: 'Ongoing support available',
        detail: 'Optional Care plans for fixes and small changes after launch.',
      },
    ],
  },
];

export const partners = [
  { id: 'salons', label: 'Salons' },
  { id: 'clinics', label: 'Clinics' },
  { id: 'tuition', label: 'Tuition' },
  { id: 'shops', label: 'Shops' },
  { id: 'artists', label: 'Artists' },
  { id: 'cafes', label: 'Cafés' },
  { id: 'services', label: 'Service brands' },
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
  { step: '05', title: 'Support', text: 'Optional monthly care for fixes, small changes, and peace of mind.' },
];

export const supportPlans = [
  {
    name: 'Care Lite',
    price: 'From LKR 8,000 / month',
    items: ['Bug fixes', 'Small copy/UI updates', 'Priority WhatsApp reply'],
  },
  {
    name: 'Care Plus',
    price: 'From LKR 15,000 / month',
    items: ['Everything in Lite', 'Feature tweaks', 'Monthly health check'],
  },
];

export const faqs = [
  {
    q: 'How much will my project cost?',
    a: 'Packages start at LKR 29,000 for internal apps, LKR 58,000 for business websites, and LKR 62,000 for inventory systems. Custom work is quoted after discovery. Final price depends on the features you choose.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Most websites ship in 2–3 weeks. Internal apps usually take 2–4 weeks. Inventory systems take about 3–5 weeks. Custom timelines are agreed after we scope the work.',
  },
  {
    q: 'How do payments work?',
    a: 'We typically take a start payment to begin, then the balance on launch. We’ll confirm the split on the discovery call and put it in writing.',
  },
  {
    q: 'Do you support the system after launch?',
    a: 'Yes. You can buy one-off help or a monthly Care plan for fixes and small updates. You’re never locked out of your own product.',
  },
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


export function formatPriceHint(service) {
  if (!service.priceLabel) return null;
  if (service.priceFrom == null) return service.priceLabel;
  const thousands = Math.round(service.priceFrom / 1000);
  return `from ${thousands}k`;
}

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
