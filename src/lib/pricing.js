/**
 * SINGLE SOURCE OF TRUTH — prices, plans, bundles, offers, completion reward.
 * Edit foundingOffer.spotsTaken and completionReward fields here only.
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
    return `${this.spotsLeft} of ${this.totalSpots} spots left`;
  },
  get active() {
    return this.spotsLeft > 0;
  },
};

/**
 * Free InQRS NFC card on successful project completion.
 * Sister product: https://idora.click
 * Trigger: final delivery + client sign-off + final payment received.
 */
export const completionReward = {
  enabled: true,
  minProjectValueLKR: 0,
  cardsPerProject: 1,
  /** [CONFIRM] working days after sign-off + final payment */
  dispatchDays: '[CONFIRM: e.g. 5–7 working days]',
  badgeLabel: 'Free InQRS card on completion',
  bannerTitle: 'Finish a project with us — get a free InQRS card',
  bannerBody:
    'Every successfully completed project includes one free InQRS NFC smart card (our sister product). Tap to share your digital profile. No cash value. Not transferable.',
  terms: [
    'Personalised with your name or business using our standard design',
    'You supply the details we need to print the card',
    'Sent after final delivery, your sign-off, and final payment',
    `Dispatch: ${'[CONFIRM: e.g. 5–7 working days]'} after those steps`,
    'No cash value and not transferable',
    'InQRS is our sister product — learn more at idora.click',
  ],
  inqrsUrl: 'https://idora.click',
  inqrsLabel: 'our sister product',
};

export const paymentTerms = {
  summary: '50% upfront, 30% midpoint, 20% on launch',
  detail:
    'Projects: 50% to start, 30% at the agreed midpoint, 20% on launch. Monthly website care and marketing plans are billed monthly.',
};

export const sharedNotIncluded = [
  'Domain name purchase (you own it; we can help you register)',
  'Third-party fees (SMS, payment gateways, Google tools, and similar)',
  'Paid ads or stock photos unless we agree in writing',
];

/** Home “What do you need?” cards */
export const goalCards = [
  {
    id: 'website',
    title: 'I need a website',
    text: 'A clear site so customers can find you and message you.',
    href: '/software#website',
  },
  {
    id: 'stock',
    title: 'I want to track stock and sales',
    text: 'Know what you have, what sold, and what to reorder.',
    href: '/software#stock',
  },
  {
    id: 'custom',
    title: 'I need a custom app or system',
    text: 'One tool built around how your team already works.',
    href: '/software#custom',
  },
  {
    id: 'marketing',
    title: 'I want more customers',
    text: 'Social posts and short videos that help people find you.',
    href: '/marketing',
  },
];

export const homeHowItWorks = [
  { step: '1', title: 'Tell us what you need', text: 'A short call or form. Plain language, no jargon.' },
  { step: '2', title: 'We build or create it', text: 'Website, stock system, app, or marketing content.' },
  { step: '3', title: 'You grow', text: 'You go live. We support you. Optional care and marketing continue.' },
];

/** Software engineering plan — durations marked [CONFIRM] until you lock them */
export const softwareProcess = [
  {
    step: '1',
    title: 'Discovery',
    weDo: 'We learn your process and goals.',
    youReceive: 'A written scope summary.',
    weNeed: 'Honest answers about how you work today and what “done” means.',
    duration: '[CONFIRM: e.g. 3–5 days]',
  },
  {
    step: '2',
    title: 'Design',
    weDo: 'Layouts and workflow screens.',
    youReceive: 'Designs to review.',
    weNeed: 'Your approval before we build.',
    duration: '[CONFIRM: e.g. 3–7 days]',
  },
  {
    step: '3',
    title: 'Build',
    weDo: 'We develop in small steps with demos.',
    youReceive: 'Working demos you can click through.',
    weNeed: 'Feedback within agreed review windows.',
    duration: '[CONFIRM: depends on plan]',
  },
  {
    step: '4',
    title: 'Launch',
    weDo: 'Go live, train your team, hand over access.',
    youReceive: 'Live system + documentation.',
    weNeed: 'Someone available for training and final checks.',
    duration: '[CONFIRM: e.g. 1–3 days]',
  },
  {
    step: '5',
    title: 'Support',
    weDo: 'Fixes and improvements; care plans available.',
    youReceive: 'Optional monthly care or one-off help.',
    weNeed: 'Clear reports when something breaks.',
    duration: 'Ongoing if you choose a care plan',
  },
];

export const qualityStandards = [
  'Tested on mobile and desktop',
  'Secure logins and backups where the project needs them',
  'Written handover notes',
  'A training session for your team',
  '[CONFIRM: free bug-fix period after launch — e.g. 14 or 30 days]',
];

/** Marketing plan phases */
export const marketingProcess = [
  {
    step: '1',
    title: 'Plan',
    weDo: 'Goals, audience, and a monthly content calendar.',
    youReceive: 'A simple plan you can follow.',
    weNeed: 'Your goals and any dates or offers coming up.',
    duration: 'At kickoff',
  },
  {
    step: '2',
    title: 'Create',
    weDo: 'Photos, videos, and designs.',
    youReceive: 'Draft content for review.',
    weNeed: 'Product or location access and timely approvals.',
    duration: 'Through the month',
  },
  {
    step: '3',
    title: 'Publish',
    weDo: 'Scheduled posts on your accounts.',
    youReceive: 'Posts going live as agreed.',
    weNeed: 'Login access (or posting rights) to your pages.',
    duration: 'Through the month',
  },
  {
    step: '4',
    title: 'Report',
    weDo: 'A simple monthly report in plain English.',
    youReceive: 'What we posted and what stood out.',
    weNeed: 'A few minutes to read and reply with questions.',
    duration: 'End of each month',
  },
];

export const marketingNeedsFromYou = [
  'Access to Instagram / Facebook (or posting permission)',
  'Access to products, premises, or vehicles for shoots when needed',
  'Approvals within the agreed time so posts stay on schedule',
  'Honest brand rules (what you will and will not say)',
];

export const marketingWeDoNotPromise = [
  'No guaranteed follower counts',
  'No guaranteed sales or bookings from posts alone',
  'No paid ad results unless we agree a separate ads plan in writing',
];

/**
 * SOFTWARE PLANS
 * ids are internal only — never show Origin/Rise/Empire/Uncharted to users.
 */
export const websitePlans = [
  {
    id: 'website-starter',
    name: 'Starter',
    price: 35000,
    priceLabel: formatLkr(35000),
    popular: false,
    bestFor: 'New businesses that need a simple online presence fast',
    delivery: '[CONFIRM: e.g. 1–2 weeks]',
    includes: ['1 to 3 pages', 'Works well on phones', 'Contact form', 'WhatsApp button'],
    excludes: ['Online booking or ordering', 'Payment checkout', ...sharedNotIncluded],
  },
  {
    id: 'website-business',
    name: 'Business',
    price: 65000,
    priceLabel: formatLkr(65000),
    popular: true,
    bestFor: 'Shops, clinics and salons that need more pages and to be found on Google',
    delivery: '[CONFIRM: e.g. 2–3 weeks]',
    includes: [
      'Up to 8 pages',
      'SEO setup (so search engines can find you)',
      'Contact forms',
      'Google Maps',
      'WhatsApp button',
    ],
    excludes: ['Booking or online ordering', 'Payment checkout', ...sharedNotIncluded],
  },
  {
    id: 'website-growth',
    name: 'Growth',
    price: 110000,
    priceLabel: formatLkr(110000),
    popular: false,
    bestFor: 'Businesses that need bookings, orders, or payments on the site',
    delivery: '[CONFIRM: e.g. 3–5 weeks]',
    includes: [
      'Booking or online ordering',
      'Payment integration',
      'Up to 15 pages',
      'SEO setup',
      'WhatsApp and forms',
    ],
    excludes: [...sharedNotIncluded],
  },
];

export const websiteCarePlans = [
  {
    id: 'care-basic',
    name: 'Basic',
    price: 4500,
    priceLabel: `${formatLkr(4500)}/month`,
    popular: false,
    bestFor: 'Owners who want the site hosted and kept safe',
    delivery: 'Ongoing monthly',
    includes: ['Hosting', 'Backups', 'Security updates'],
    excludes: ['Content rewrites', 'New features', 'Ad management'],
  },
  {
    id: 'care-plus',
    name: 'Plus',
    price: 9000,
    priceLabel: `${formatLkr(9000)}/month`,
    popular: false,
    bestFor: 'Owners who change hours, photos or offers often',
    delivery: 'Ongoing monthly',
    includes: ['Everything in Basic', 'Monthly edits', 'Monthly report'],
    excludes: ['Major redesigns', 'New custom features', 'Ad spend'],
  },
];

export const stockPlans = [
  {
    id: 'stock-starter',
    name: 'Starter',
    price: 40000,
    monthly: 4500,
    priceLabel: `${formatLkr(40000)} setup + ${formatLkr(4500)}/month`,
    popular: false,
    bestFor: 'Single-counter shops starting with live stock numbers',
    delivery: '[CONFIRM: e.g. 3–4 weeks]',
    includes: ['Stock tracking', 'Sales recording', 'Low-stock alerts', 'Simple reports'],
    excludes: ['Multi-user roles', 'Barcode scanning', 'SMS alerts', ...sharedNotIncluded],
  },
  {
    id: 'stock-pro',
    name: 'Pro',
    price: 75000,
    monthly: 8500,
    priceLabel: `${formatLkr(75000)} setup + ${formatLkr(8500)}/month`,
    popular: true,
    bestFor: 'Busy shops that need more staff logins and faster checkout',
    delivery: '[CONFIRM: e.g. 4–5 weeks]',
    includes: [
      'Everything in Starter',
      'Multi-user access',
      'Barcode support',
      'SMS alerts',
      'Advanced reports',
    ],
    excludes: [...sharedNotIncluded],
  },
];

export const customAppPlan = {
  id: 'custom-app',
  name: 'Custom Business App',
  price: 85000,
  priceLabel: formatLkrFrom(85000),
  popular: false,
  bestFor: 'Teams stuck in WhatsApp notes and spreadsheets who need one clear workflow',
  delivery: '[CONFIRM: e.g. 3–6 weeks]',
  includes: [
    'One workflow (for example bookings or records)',
    'Up to 3 users',
    'Phone-friendly screens',
    'Staff walkthrough',
    'Handover notes',
  ],
  excludes: [
    'Unlimited users or multi-branch setups (see Custom Project)',
    ...sharedNotIncluded,
  ],
};

export const customProjectPlan = {
  id: 'custom-project',
  name: 'Custom Project',
  price: 150000,
  discoveryFee: 10000,
  priceLabel: `Discovery ${formatLkr(10000)} · projects ${formatLkrFrom(150000)}`,
  popular: false,
  bestFor: 'When the standard plans do not fit your process',
  delivery: 'Agreed after discovery',
  includes: [
    'Paid discovery (credited if you proceed)',
    'Written scope and timeline',
    'Build to your process',
    'Optional care after launch',
  ],
  excludes: ['Open-ended work without a written scope', ...sharedNotIncluded],
};

/** Marketing monthly + one-offs */
export const marketingPlans = [
  {
    id: 'marketing-starter',
    name: 'Starter',
    price: 25000,
    priceLabel: `${formatLkr(25000)}/month`,
    popular: false,
    bestFor: 'Businesses starting steady social content',
    delivery: 'Monthly',
    includes: [
      'Monthly content plan (details confirmed at kickoff)',
      'Short videos / posts as agreed',
    ],
    excludes: ['Paid ad management', 'Full brand redesign', ...marketingWeDoNotPromise],
  },
  {
    id: 'marketing-growth',
    name: 'Growth',
    price: 45000,
    priceLabel: `${formatLkr(45000)}/month`,
    popular: true,
    bestFor: 'Shops and salons that post often and need a steadier pipeline',
    delivery: 'Monthly',
    includes: ['Higher monthly volume than Starter', 'Planning and delivery as agreed at kickoff'],
    excludes: ['Paid ad management unless quoted separately', ...marketingWeDoNotPromise],
  },
  {
    id: 'marketing-pro',
    name: 'Pro',
    price: 75000,
    priceLabel: `${formatLkr(75000)}/month`,
    popular: false,
    bestFor: 'Brands that need a fuller monthly content engine',
    delivery: 'Monthly',
    includes: ['Highest monthly volume', 'Priority scheduling'],
    excludes: ['Media buying unless quoted separately', ...marketingWeDoNotPromise],
  },
];

export const marketingOneOffs = [
  {
    id: 'reel',
    name: 'Reel',
    price: 15000,
    priceLabel: formatLkrFrom(15000),
    bestFor: 'One short video for social media',
    includes: ['Single short video', 'Basic edit and captions as agreed'],
    excludes: ['Monthly posting plan', 'Paid promotion'],
  },
  {
    id: 'vehicle',
    name: 'Vehicle showcase video',
    price: 15000,
    priceLabel: formatLkrFrom(15000),
    bestFor: 'Vehicle sellers who need a clean listing video',
    includes: ['One showcase video', 'Basic edit'],
    excludes: ['Monthly posting plan', 'Paid promotion'],
  },
  {
    id: 'event',
    name: 'Event coverage',
    price: 30000,
    priceLabel: formatLkrFrom(30000),
    bestFor: 'Openings, workshops and local events',
    includes: ['Coverage of the agreed event window', 'Edited highlights as agreed'],
    excludes: ['Full-day multi-camera production unless quoted'],
  },
];

export const bundles = [
  {
    id: 'presence',
    name: 'Presence',
    price: 85000,
    priceLabel: formatLkr(85000),
    monthly: null,
    monthlyLabel: null,
    forWho: 'Launch a strong website and start posting in month one',
    includes: ['Business Website (Business plan)', '1 month Marketing Starter'],
    separateTotal: 65000 + 25000,
    get savingsLabel() {
      return `Normally ${formatLkr(this.separateTotal)} separately — bundle ${this.priceLabel}`;
    },
  },
  {
    id: 'shop',
    name: 'Shop',
    price: 70000,
    priceLabel: `${formatLkr(70000)} setup`,
    monthly: 4500,
    monthlyLabel: `${formatLkr(4500)}/month`,
    forWho: 'Retail shops that need stock tracking plus a simple site',
    includes: ['Stock & Sales Starter', 'Business Website Starter'],
    separateTotal: 40000 + 35000,
    get savingsLabel() {
      return `Setup normally ${formatLkr(this.separateTotal)} separately — bundle ${formatLkr(this.price)} setup + ${formatLkr(this.monthly)}/month`;
    },
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 185000,
    priceLabel: formatLkr(185000),
    monthly: null,
    monthlyLabel: null,
    forWho: 'A business website plus three months of steady marketing',
    includes: ['Business Website (Business plan)', '3 months Marketing Growth'],
    separateTotal: 65000 + 45000 * 3,
    get savingsLabel() {
      return `Normally ${formatLkr(this.separateTotal)} separately — bundle ${this.priceLabel}`;
    },
  },
];

/** Software page sections */
export const softwareSections = [
  {
    id: 'website',
    title: 'Business Website',
    bestFor: 'Shops, clinics, salons, restaurants and tuition centres that need to look credible online',
    startingPriceLabel: formatLkrFrom(35000),
    plans: websitePlans,
  },
  {
    id: 'stock',
    title: 'Stock & Sales System',
    bestFor: 'Shops that lose money to missing stock or messy sales notes',
    startingPriceLabel: formatLkrFrom(40000),
    plans: stockPlans,
  },
  {
    id: 'custom',
    title: 'Custom Business App',
    bestFor: 'One workflow your staff will actually open every day',
    startingPriceLabel: formatLkrFrom(85000),
    plans: [customAppPlan],
  },
  {
    id: 'custom-project',
    title: 'Custom Project',
    bestFor: 'Unique processes that standard plans cannot cover',
    startingPriceLabel: formatLkrFrom(150000),
    plans: [customProjectPlan],
  },
];

/** Pricing page anchor sections — max 3 plans highlighted in main grids */
export const pricingSoftwareBlocks = [
  {
    id: 'pricing-websites',
    title: 'Business Website',
    intro: 'Clear sites for Sri Lankan businesses. Starter, Business, or Growth.',
    plans: websitePlans,
  },
  {
    id: 'pricing-stock',
    title: 'Stock & Sales System',
    intro: 'Setup fee plus a clear monthly fee so the system stays useful.',
    plans: stockPlans,
  },
];

export const pricingMarketingBlock = {
  id: 'pricing-marketing',
  title: 'Social Media & Video Marketing',
  intro: 'Monthly plans. No guaranteed followers or sales — honest work and clear reporting.',
  plans: marketingPlans,
};

export const pricingPreview = [
  { label: 'Business Website', priceLabel: formatLkrFrom(35000), href: '/pricing#pricing-websites' },
  { label: 'Stock & Sales System', priceLabel: formatLkrFrom(40000), href: '/pricing#pricing-stock' },
  { label: 'Custom Business App', priceLabel: formatLkrFrom(85000), href: '/software#custom' },
  {
    label: 'Social Media & Video Marketing',
    priceLabel: formatLkrFrom(25000, { monthly: true }),
    href: '/pricing#pricing-marketing',
  },
];

export const packageInterestOptions = [
  { value: 'website', label: 'Website' },
  { value: 'stock', label: 'Stock & Sales' },
  { value: 'custom', label: 'Custom App' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'not-sure', label: 'Not sure' },
];

export const businessTypeOptions = [
  { value: 'shop', label: 'Shop / retail' },
  { value: 'salon', label: 'Salon / beauty' },
  { value: 'clinic', label: 'Clinic / healthcare' },
  { value: 'restaurant', label: 'Restaurant / café' },
  { value: 'tuition', label: 'Tuition / education' },
  { value: 'vehicles', label: 'Vehicle sales' },
  { value: 'events', label: 'Events' },
  { value: 'other', label: 'Other' },
];

export const budgetRangeOptions = [
  { value: '', label: 'Prefer not to say' },
  { value: 'under-40k', label: 'Under LKR 40,000' },
  { value: '40k-80k', label: 'LKR 40,000 – 80,000' },
  { value: '80k-150k', label: 'LKR 80,000 – 150,000' },
  { value: '150k-plus', label: 'LKR 150,000+' },
  { value: 'monthly', label: 'Looking at monthly plans' },
];

export const pricingFaqs = [
  {
    q: 'What changes the final price?',
    a: 'Page count, booking or payments, number of users, and extras like SMS. We confirm a written scope before heavy work starts.',
  },
  {
    q: 'How do payments work?',
    a: paymentTerms.detail,
  },
  {
    q: 'What is not included?',
    a: 'Domain purchase, third-party fees, and paid ads unless we agree in writing. Each plan lists “Not included”.',
  },
  {
    q: 'What is the free InQRS card?',
    a: `On successful completion (delivery, your sign-off, and final payment), you get ${completionReward.cardsPerProject} free InQRS NFC card(s) — ${completionReward.inqrsLabel}. See terms on the Pricing page.`,
  },
  {
    q: 'What is the Founding Client Offer?',
    a: `The first ${foundingOffer.totalSpots} clients get ${foundingOffer.discountPercent}% off in exchange for ${foundingOffer.requirement}. ${foundingOffer.label}.`,
  },
];

/** Compat aliases used by older imports — plain-English only */
export const services = softwareSections.map((s) => ({
  id: s.id,
  title: s.title,
  priceLabel: s.startingPriceLabel,
  outcome: s.bestFor,
}));

export const supportPlans = websiteCarePlans.map((p) => ({
  id: p.id,
  name: `Website Care ${p.name}`,
  price: p.priceLabel,
  items: p.includes,
}));

export function formatPriceHint(item) {
  return item?.priceLabel || null;
}
