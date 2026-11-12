'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from '@/lib/content';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-105"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
