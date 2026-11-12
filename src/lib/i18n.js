export const locales = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'si', label: 'Sinhala', native: 'සිංහල' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
];

export const defaultLocale = 'en';

export const messages = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.pricing': 'Pricing',
    'nav.webinars': 'Webinars',
    'nav.join': 'Join Us',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.book': 'Book a Call',
    'hero.eyebrow': 'Colombo · Sri Lanka',
    'hero.title': 'Never lose a booking, a stock count, or a customer chat again.',
    'hero.sub':
      'Katisa builds websites, inventory systems and internal apps for salons, clinics, tuition classes and shops across Sri Lanka — clear LKR prices, WhatsApp-friendly delivery.',
    'hero.cta.primary': 'Book a free call',
    'hero.cta.secondary': 'See our work',
    'hero.note': 'Free discovery call · No jargon · You own the code',
    'theme.toLight': 'Switch to light mode',
    'theme.toDark': 'Switch to dark mode',
    'lang.label': 'Language',
  },
  si: {
    'nav.home': 'මුල් පිටුව',
    'nav.services': 'සේවා',
    'nav.work': 'වැඩ',
    'nav.pricing': 'මිල',
    'nav.webinars': 'වෙබිනාර්',
    'nav.join': 'එකතු වන්න',
    'nav.about': 'අප ගැන',
    'nav.contact': 'සම්බන්ධ වන්න',
    'nav.book': 'ඇමතුමක් වෙන්කරන්න',
    'hero.eyebrow': 'කොළඹ · ශ්‍රී ලංකාව',
    'hero.title': 'වෙන්කිරීමක්, තොගයක් හෝ පාරිභෝගික පණිවිඩයක් නැවතත් නොනැති කරගන්න.',
    'hero.sub':
      'කටිසා සැලූන්, සායන, පන්ති සහ කඩ සඳහා වෙබ් අඩවි, තොග පද්ධති සහ අභ්‍යන්තර යෙදුම් සාදයි — පැහැදිලි LKR මිල, WhatsApp මගින් පහසු සේවාව.',
    'hero.cta.primary': 'නොමිලේ ඇමතුමක්',
    'hero.cta.secondary': 'අපේ වැඩ බලන්න',
    'hero.note': 'නොමිලේ සොයාබැලීමේ ඇමතුම · සරල භාෂාව · කේතය ඔබේ',
    'theme.toLight': 'දීප්තිමත් ප්‍රකාරය',
    'theme.toDark': 'අඳුරු ප්‍රකාරය',
    'lang.label': 'භාෂාව',
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.services': 'சேவைகள்',
    'nav.work': 'பணிகள்',
    'nav.pricing': 'விலை',
    'nav.webinars': 'வெபினார்கள்',
    'nav.join': 'சேரவும்',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.contact': 'தொடர்பு',
    'nav.book': 'அழைப்பை பதிவு செய்',
    'hero.eyebrow': 'கொழும்பு · இலங்கை',
    'hero.title': 'முன்பதிவு, சரக்கு அல்லது வாடிக்கையாளர் அரட்டையை மீண்டும் இழக்காதீர்கள்.',
    'hero.sub':
      'கடிசா சலூன், கிளினிக், வகுப்புகள் மற்றும் கடைகளுக்கு இணையதளம், சரக்கு அமைப்புகள் மற்றும் உள் செயலிகளை உருவாக்குகிறது — தெளிவான LKR விலை, WhatsApp வசதி.',
    'hero.cta.primary': 'இலவச அழைப்பு',
    'hero.cta.secondary': 'எங்கள் பணிகள்',
    'hero.note': 'இலவச கண்டுபிடிப்பு அழைப்பு · எளிய மொழி · குறியீடு உங்களுடையது',
    'theme.toLight': 'ஒளி பயன்முறை',
    'theme.toDark': 'இருள் பயன்முறை',
    'lang.label': 'மொழி',
  },
};

export function t(locale, key) {
  return messages[locale]?.[key] || messages.en[key] || key;
}

export const navLinkKeys = [
  { href: '/', key: 'nav.home' },
  { href: '/services', key: 'nav.services' },
  { href: '/work', key: 'nav.work' },
  { href: '/pricing', key: 'nav.pricing' },
  { href: '/webinars', key: 'nav.webinars' },
  { href: '/join-us', key: 'nav.join' },
  { href: '/about', key: 'nav.about' },
  { href: '/contact', key: 'nav.contact' },
];
