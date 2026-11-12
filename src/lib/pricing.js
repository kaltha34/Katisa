/**
 * SINGLE SOURCE OF TRUTH for Katisa packages & prices (LKR).
 * Edit foundingOffer.spotsTaken to update “X of 5 spots” across the site.
 */

export function formatLkr(amount) {
  if (amount == null || Number.isNaN(amount)) return null;
  return `LKR ${Number(amount).toLocaleString('en-LK')}`;
}

export function formatLkrFrom(amount, { monthly = false } = {}) {
  const base = formatLkr(amount);
  if (!base) return null;
  return monthly ? `From ${base}/month` : `From ${base}`;
}

/** Edit spotsTaken when a founding client claims a spot (0–5). */
export const foundingOffer = {
  discountPercent: 20,
  totalSpots: 5,
  spotsTaken: 0,
  requirement: 'a short testimonial and permission to publish the project as a case study',
  get spotsLeft() {
    return Math.max(0, this.totalSpots - this.spotsTaken);
  },
  get label() {
    return `Limited: ${this.spotsLeft} of ${this.totalSpots} spots`;
  },
  get active() {
    return this.spotsLeft > 0;
  },
};

export const paymentTerms = {
  summary: '50% upfront, 30% at midpoint, 20% on launch',
  detail:
    'Projects are billed 50% to start, 30% when we hit the agreed midpoint, and 20% on launch. Monthly care and Pulse plans are billed monthly.',
};

export const notIncludedDefaults = [
  'Domain name purchase (you own it; we can help register)',
  'Third-party fees (SMS, payment gateways, Google Workspace, etc.)',
  'Stock photography or paid ad spend unless agreed in writing',
];

export const positioningLine =
  'We build the systems and the visibility Sri Lankan businesses need to grow.';

export const arms = {
  build: {
    id: 'build',
    name: 'Build',
    href: '/build',
    tagline: 'Websites, inventory, apps and custom software',
  },
  grow: {
    id: 'grow',
    name: 'Grow',
    href: '/grow',
    tagline: 'Pulse — content, video and marketing',
  },
};

export const journeySteps = [
  { id: 'build', label: 'Build', text: 'Website, stock system or app that fits how you work' },
  { id: 'launch', label: 'Launch', text: 'Go live with training and a clean handover' },
  { id: 'grow', label: 'Grow', text: 'Pulse content and video so customers find you' },
  { id: 'retain', label: 'Retain', text: 'Website Care + monthly reporting in one place' },
];

export const industries = [
  {
    id: 'shops',
    label: 'Shops',
    benefit: 'Know what is in stock and get found by nearby buyers',
    href: '/build#inventory',
  },
  {
    id: 'salons',
    label: 'Salons',
    benefit: 'Fewer missed bookings and a site that brings WhatsApp chats',
    href: '/build#apps',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    benefit: 'Menus online, orders or bookings, and content that fills tables',
    href: '/grow',
  },
  {
    id: 'vehicles',
    label: 'Vehicle sellers',
    benefit: 'Listing-ready videos and a simple site for inquiries',
    href: '/grow#one-offs',
  },
  {
    id: 'events',
    label: 'Events',
    benefit: 'Coverage that looks sharp on Instagram and Facebook',
    href: '/grow#one-offs',
  },
];

export const focusOptions = [
  { value: 'build', label: 'Build — website / software' },
  { value: 'grow', label: 'Grow — Pulse content & video' },
  { value: 'both', label: 'Both — Build + Grow' },
];

export const industryOptions = [
  { value: 'shop', label: 'Shop / retail' },
  { value: 'salon', label: 'Salon / beauty' },
  { value: 'clinic', label: 'Clinic / healthcare' },
  { value: 'restaurant', label: 'Restaurant / café' },
  { value: 'tuition', label: 'Tuition / education' },
  { value: 'vehicles', label: 'Vehicle sales' },
  { value: 'events', label: 'Events' },
  { value: 'other', label: 'Other' },
];

/** Package options for booking / contact dropdowns */
export const packageInterestOptions = [
  { value: 'rise-launch', label: 'Rise Launch — Website', arm: 'build' },
  { value: 'rise-business', label: 'Rise Business — Website (Most Popular)', arm: 'build' },
  { value: 'rise-growth', label: 'Rise Growth — Website', arm: 'build' },
  { value: 'website-care', label: 'Website Care (monthly)', arm: 'build' },
  { value: 'empire-starter', label: 'Empire Starter — Inventory & POS', arm: 'build' },
  { value: 'empire-pro', label: 'Empire Pro — Inventory & POS (Most Popular)', arm: 'build' },
  { value: 'origin', label: 'Origin — Internal App', arm: 'build' },
  { value: 'uncharted', label: 'Uncharted — Custom Solution', arm: 'build' },
  { value: 'pulse-monthly', label: 'Pulse — Content & Video (monthly)', arm: 'grow' },
  { value: 'pulse-oneoff', label: 'Pulse — One-off video', arm: 'grow' },
  { value: 'bundle-presence', label: 'Bundle: Presence', arm: 'both' },
  { value: 'bundle-shop', label: 'Bundle: Shop', arm: 'both' },
  { value: 'bundle-growth', label: 'Bundle: Growth', arm: 'both' },
  { value: 'free-audit', label: 'Free Business Audit', arm: 'both' },
  { value: 'not-sure', label: 'Not sure yet — need advice', arm: 'both' },
];

export const budgetRangeOptions = [
  { value: 'under-40k', label: 'Under LKR 40,000' },
  { value: '40k-80k', label: 'LKR 40,000 – 80,000' },
  { value: '80k-150k', label: 'LKR 80,000 – 150,000' },
  { value: '150k-plus', label: 'LKR 150,000+' },
  { value: 'monthly-care', label: 'Looking at monthly care / content' },
  { value: 'discuss', label: 'Prefer to discuss on the call' },
];

export const pulseProcess = [
  { step: '01', title: 'Plan', text: 'We agree topics, platforms and a simple monthly calendar.' },
  { step: '02', title: 'Film', text: 'Short shoots at your shop, salon, lot or event.' },
  { step: '03', title: 'Edit', text: 'Clean cuts, captions and formats ready for Instagram / Facebook.' },
  { step: '04', title: 'Post & Report', text: 'We publish as agreed and send a plain-language monthly note.' },
];

/**
 * Full catalog — Services & Pricing pages read this.
 * Delivery times are estimates; confirm on discovery.
 */
export const catalog = {
  rise: {
    id: 'websites',
    series: 'Rise',
    title: 'Websites',
    plainLabel: 'A site that brings calls and WhatsApp chats',
    audience:
      'Shops, clinics, salons, restaurants, tuition centres and vehicle sellers who need to look credible online and get inquiries',
    outcome: 'A fast, mobile-friendly website customers can find and contact in one tap',
    description:
      'Clear websites for Sri Lankan businesses — phone-first, WhatsApp-ready, and priced in LKR with no surprise packages.',
    priceFrom: 35000,
    priceLabel: formatLkrFrom(35000),
    delivery: '1–4 weeks depending on plan',
    priceNote: 'Choose Launch, Business or Growth',
    plans: [
      {
        id: 'rise-launch',
        name: 'Launch',
        price: 35000,
        priceLabel: formatLkr(35000),
        popular: false,
        delivery: '1–2 weeks',
        forWho: 'New businesses that need a simple online presence fast',
        includes: [
          '1–3 pages',
          'Mobile-friendly design',
          'Contact form',
          'WhatsApp button',
        ],
        excludes: [
          'Online booking or ordering',
          'Payment integration',
          'Ongoing content / SEO campaigns',
          ...notIncludedDefaults,
        ],
      },
      {
        id: 'rise-business',
        name: 'Business',
        price: 65000,
        priceLabel: formatLkr(65000),
        popular: true,
        delivery: '2–3 weeks',
        forWho: 'Growing shops, clinics and salons that need more pages and search visibility',
        includes: [
          'Up to 8 pages',
          'SEO setup',
          'Contact / inquiry forms',
          'Google Maps',
          'WhatsApp button',
        ],
        excludes: [
          'Booking or online ordering flows',
          'Payment gateway setup',
          ...notIncludedDefaults,
        ],
      },
      {
        id: 'rise-growth',
        name: 'Growth',
        price: 110000,
        priceLabel: formatLkr(110000),
        popular: false,
        delivery: '3–5 weeks',
        forWho: 'Restaurants, clinics and sellers who need bookings, orders or payments online',
        includes: [
          'Booking or online ordering',
          'Payment integration',
          'Up to 15 pages',
          'SEO setup',
          'WhatsApp + forms',
        ],
        excludes: notIncludedDefaults,
      },
    ],
  },

  care: {
    id: 'website-care',
    series: 'Care',
    title: 'Website Care',
    plainLabel: 'Keep your site online, safe and up to date',
    audience: 'Anyone with a live website who wants hosting handled and small updates without drama',
    outcome: 'Hosting, backups and optional monthly edits — billed clearly each month',
    description:
      'Monthly plans so your site stays live, backed up and secure. Plus adds edits and a short monthly report.',
    priceFrom: 4500,
    priceLabel: formatLkrFrom(4500, { monthly: true }),
    delivery: 'Starts after your site launches (or when you hand hosting to us)',
    priceNote: 'Billed monthly',
    plans: [
      {
        id: 'care-basic',
        name: 'Basic',
        price: 4500,
        priceLabel: `${formatLkr(4500)}/month`,
        popular: false,
        delivery: 'Ongoing',
        forWho: 'Owners who want hosting and peace of mind',
        includes: ['Hosting', 'Backups', 'Security updates'],
        excludes: ['Content rewrites or redesigns', 'New feature builds', 'Ad management'],
      },
      {
        id: 'care-plus',
        name: 'Plus',
        price: 9000,
        priceLabel: `${formatLkr(9000)}/month`,
        popular: false,
        delivery: 'Ongoing',
        forWho: 'Owners who change offers, hours or photos often',
        includes: [
          'Everything in Basic',
          'Monthly edits',
          'Monthly report',
        ],
        excludes: ['Major redesigns', 'New custom features', 'Ad spend'],
      },
    ],
  },

  empire: {
    id: 'inventory',
    series: 'Empire',
    title: 'Inventory & POS',
    plainLabel: 'Know what you have, what sold, and what to reorder',
    audience: 'Shops, pharmacies, spare-parts stores and cafés that lose money to missing stock',
    outcome: 'Stock tracking, sales and alerts — plus a clear monthly fee for upkeep',
    description:
      'Inventory and point-of-sale without enterprise complexity. Setup fee + monthly support so the system stays useful.',
    priceFrom: 40000,
    priceLabel: formatLkrFrom(40000),
    delivery: '3–5 weeks',
    priceNote: 'Setup + monthly fee',
    plans: [
      {
        id: 'empire-starter',
        name: 'Starter',
        price: 40000,
        monthly: 4500,
        priceLabel: `${formatLkr(40000)} setup + ${formatLkr(4500)}/month`,
        popular: false,
        delivery: '3–4 weeks',
        forWho: 'Single-counter shops starting with live stock numbers',
        includes: [
          'Stock tracking',
          'Sales recording',
          'Low-stock alerts',
          'Simple reports',
        ],
        excludes: [
          'Multi-user roles',
          'Barcode scanning',
          'SMS alerts',
          ...notIncludedDefaults,
        ],
      },
      {
        id: 'empire-pro',
        name: 'Pro',
        price: 75000,
        monthly: 8500,
        priceLabel: `${formatLkr(75000)} setup + ${formatLkr(8500)}/month`,
        popular: true,
        delivery: '4–5 weeks',
        forWho: 'Busy shops that need more staff accounts and faster checkout',
        includes: [
          'Everything in Starter',
          'Multi-user access',
          'Barcode support',
          'SMS alerts',
          'Advanced reports',
        ],
        excludes: notIncludedDefaults,
      },
    ],
  },

  origin: {
    id: 'apps',
    series: 'Origin',
    title: 'Internal Apps',
    plainLabel: 'One workflow your staff actually opens every day',
    audience: 'Clinics, salons, tuition centres and teams drowning in WhatsApp notes and Excel',
    outcome: 'A focused app for one workflow — bookings, records or daily ops — for up to 3 users',
    description:
      'Custom tools for one clear workflow. Built around how your team already works, not a generic template.',
    priceFrom: 85000,
    priceLabel: formatLkrFrom(85000),
    delivery: '3–6 weeks',
    priceNote: 'One workflow, up to 3 users. Larger scope moves to Uncharted.',
    plans: [
      {
        id: 'origin',
        name: 'Origin',
        price: 85000,
        priceLabel: formatLkrFrom(85000),
        popular: false,
        delivery: '3–6 weeks',
        forWho: 'Teams that need one simple system instead of chat chaos',
        includes: [
          'One workflow (e.g. bookings or records)',
          'Up to 3 users',
          'Phone-friendly screens',
          'Staff walkthrough',
          'Handover + plain-language guide',
        ],
        excludes: [
          'Unlimited users or multi-branch setups',
          'Complex multi-module systems (see Uncharted)',
          ...notIncludedDefaults,
        ],
      },
    ],
  },

  uncharted: {
    id: 'custom',
    series: 'Uncharted',
    title: 'Custom Solutions',
    plainLabel: 'Software that fits your process — not the other way around',
    audience: 'Businesses with a unique workflow that packages do not cover',
    outcome: 'A scoped build after discovery — discovery fee credited to the project',
    description:
      'When Rise, Empire or Origin do not fit, we map the problem, propose a clear scope, and build only what you need.',
    priceFrom: 150000,
    priceLabel: formatLkrFrom(150000),
    delivery: 'Scoped after discovery',
    priceNote: `${formatLkr(10000)} discovery fee (credited to the project)`,
    discoveryFee: 10000,
    plans: [
      {
        id: 'uncharted',
        name: 'Custom',
        price: 150000,
        priceLabel: `Discovery ${formatLkr(10000)} · projects ${formatLkrFrom(150000)}`,
        popular: false,
        delivery: 'Agreed after discovery',
        forWho: 'Owners with a process no off-the-shelf tool handles well',
        includes: [
          'Paid discovery (credited if you proceed)',
          'Written scope & timeline',
          'Build to your process',
          'Optional care after launch',
        ],
        excludes: [
          'Open-ended “build everything” without a written scope',
          ...notIncludedDefaults,
        ],
      },
    ],
  },

  pulse: {
    id: 'pulse',
    series: 'Pulse',
    title: 'Content & Video',
    plainLabel: 'Reels and videos that help shops and sellers get noticed',
    audience: 'Shops, salons, restaurants, vehicle sellers and event hosts who need regular content',
    outcome: 'Monthly content plans or one-off videos — clear LKR packages',
    description:
      'Short-form video and content for Sri Lankan businesses. Monthly retainers for steady posting, or one-off shoots for vehicles and events.',
    priceFrom: 15000,
    priceLabel: formatLkrFrom(15000),
    delivery: 'Monthly plans start after kickoff · one-offs by shoot date',
    priceNote: 'Monthly or one-off',
    plans: [
      {
        id: 'pulse-starter',
        name: 'Starter',
        price: 25000,
        priceLabel: `${formatLkr(25000)}/month`,
        popular: false,
        delivery: 'Monthly',
        forWho: 'Businesses starting consistent social content',
        includes: ['Monthly content plan (scope confirmed on kickoff)', 'Reels / short videos as agreed'],
        excludes: ['Paid ad management', 'Full brand redesign'],
        kind: 'monthly',
      },
      {
        id: 'pulse-growth',
        name: 'Growth',
        price: 45000,
        priceLabel: `${formatLkr(45000)}/month`,
        popular: true,
        delivery: 'Monthly',
        forWho: 'Shops and salons that post weekly and need a steadier pipeline',
        includes: ['Higher monthly volume than Starter', 'Planning + delivery as agreed in kickoff'],
        excludes: ['Paid ad management unless quoted separately'],
        kind: 'monthly',
      },
      {
        id: 'pulse-pro',
        name: 'Pro',
        price: 75000,
        priceLabel: `${formatLkr(75000)}/month`,
        popular: false,
        delivery: 'Monthly',
        forWho: 'Brands that need a fuller monthly content engine',
        includes: ['Highest monthly volume', 'Priority scheduling'],
        excludes: ['Media buying unless quoted separately'],
        kind: 'monthly',
      },
    ],
    oneOffs: [
      {
        id: 'pulse-reel',
        name: 'Reel',
        price: 15000,
        priceLabel: formatLkrFrom(15000),
        forWho: 'Single short video for socials',
      },
      {
        id: 'pulse-vehicle',
        name: 'Vehicle showcase video',
        price: 15000,
        priceLabel: formatLkrFrom(15000),
        forWho: 'Vehicle sellers who need a clean listing video',
      },
      {
        id: 'pulse-event',
        name: 'Event coverage',
        price: 30000,
        priceLabel: formatLkrFrom(30000),
        forWho: 'Openings, workshops and local events',
      },
    ],
  },

};

/**
 * Build + Grow bundles — single source for Home, /bundles, booking.
 * Separate prices are calculated from catalog plans for savings copy.
 */
export const bundles = [
  {
    id: 'presence',
    name: 'Presence',
    plainLabel: 'A credible site plus your first month of content',
    forWho: 'Shops, salons and clinics launching online who also need help posting in month one',
    price: 85000,
    priceLabel: formatLkr(85000),
    monthly: null,
    monthlyLabel: null,
    delivery: '2–3 weeks for the site · content in month one',
    includes: ['Rise Business website', '1 month Pulse Starter'],
    separateTotal: 65000 + 25000,
    get savingsLabel() {
      return `Normally ${formatLkr(this.separateTotal)} separately — bundle ${this.priceLabel}`;
    },
    href: '/bundles#presence',
  },
  {
    id: 'shop',
    name: 'Shop',
    plainLabel: 'Stock control plus a simple site customers can find',
    forWho: 'Retail shops that need live inventory and a basic online presence',
    price: 70000,
    priceLabel: `${formatLkr(70000)} setup`,
    monthly: 4500,
    monthlyLabel: `${formatLkr(4500)}/month`,
    delivery: 'About 3–4 weeks · monthly Empire Starter care included',
    includes: ['Empire Starter (inventory & POS)', 'Rise Launch website'],
    separateTotal: 40000 + 35000,
    get savingsLabel() {
      return `Setup normally ${formatLkr(this.separateTotal)} separately — bundle ${formatLkr(this.price)} setup + ${formatLkr(this.monthly)}/month`;
    },
    href: '/bundles#shop',
  },
  {
    id: 'growth',
    name: 'Growth',
    plainLabel: 'Business website plus three months of steady content',
    forWho: 'Owners ready to launch a stronger site and stay visible for a full quarter',
    price: 185000,
    priceLabel: formatLkr(185000),
    monthly: null,
    monthlyLabel: null,
    delivery: '2–3 weeks for the site · Pulse Growth across 3 months',
    includes: ['Rise Business website', '3 months Pulse Growth'],
    separateTotal: 65000 + 45000 * 3,
    get savingsLabel() {
      return `Normally ${formatLkr(this.separateTotal)} separately — bundle ${this.priceLabel}`;
    },
    href: '/bundles#growth',
  },
];

/** @deprecated use bundles — kept for older references */
export const catalogBundleLegacy = bundles[0];

/** Build-arm packages (no Pulse mixed into Build pricing cards) */
export const buildPackages = [catalog.rise, catalog.empire, catalog.origin, catalog.uncharted, catalog.care];

/** Grow-arm = Pulse */
export const growPackage = catalog.pulse;

/** Ordered list used on Home, Footer, Build nav cards */
export const services = [
  catalog.rise,
  catalog.empire,
  catalog.origin,
  catalog.uncharted,
].map((pkg) => ({
  id: pkg.id,
  series: pkg.series,
  title: pkg.title,
  plainLabel: pkg.plainLabel,
  audience: pkg.audience,
  outcome: pkg.outcome,
  description: pkg.description,
  priceFrom: pkg.priceFrom,
  priceLabel: pkg.priceLabel,
  delivery: pkg.delivery,
  priceNote: pkg.priceNote,
  pulseCrossSell: 'Add Pulse to get customers to your new site.',
  features: (pkg.plans?.[0]?.includes || []).map((item) => ({
    title: item,
    detail: '',
  })),
  plans: pkg.plans,
  oneOffs: pkg.oneOffs,
  discoveryFee: pkg.discoveryFee,
}));

export const supportPlans = catalog.care.plans.map((plan) => ({
  name: `Website Care ${plan.name}`,
  price: plan.priceLabel,
  items: plan.includes,
  id: plan.id,
}));

export const pricingFaqs = [
  {
    q: 'What affects the final cost?',
    a: 'Page count, booking/ordering/payments, number of users, integrations (SMS, barcodes, maps), and how much content you already have. We confirm a written scope before heavy build starts.',
  },
  {
    q: 'How do payments work?',
    a: `${paymentTerms.detail}`,
  },
  {
    q: 'What is not included in package prices?',
    a: 'Domain purchase, third-party fees (SMS, payment gateways, etc.), and paid ads unless we agree in writing. See each package’s “Not included” list on the Build and Grow pages.',
  },
  {
    q: 'How do Website Care plans work?',
    a: 'Care Basic covers hosting, backups and security updates for LKR 4,500/month. Care Plus adds monthly edits and a monthly report for LKR 9,000/month. You can start Care when the site launches.',
  },
  {
    q: 'What is the Founding Client offer?',
    a: `The first ${foundingOffer.totalSpots} clients get ${foundingOffer.discountPercent}% off in exchange for ${foundingOffer.requirement}. ${foundingOffer.label}.`,
  },
  {
    q: 'How long does delivery take?',
    a: 'Rise Launch about 1–2 weeks, Business 2–3 weeks, Growth 3–5 weeks. Empire about 3–5 weeks. Origin about 3–6 weeks. Uncharted and Pulse timelines are agreed after we scope the work.',
  },
];

export function formatPriceHint(service) {
  if (!service?.priceLabel) return null;
  if (service.priceFrom == null) return service.priceLabel;
  const thousands = Math.round(service.priceFrom / 1000);
  return `from ${thousands}k`;
}
