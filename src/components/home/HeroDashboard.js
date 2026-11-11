'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { formatPriceHint, services, site } from '@/lib/site';

const previewServices = services.filter((s) => s.series).slice(0, 4);
const inqrs = services.find((s) => s.id === 'inqrs');

export default function HeroDashboard() {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = (event) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  };

  const glow = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(209,170,107,0.18), transparent 55%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="animate-float space-y-3">
        <div
          ref={ref}
          onMouseMove={onMouseMove}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-xl"
        >
          <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />

          <div className="relative z-10 mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-gold">Our Services</div>
              <div className="mt-1 text-lg font-semibold text-white">What we build for you</div>
            </div>
            <Link href="/services" className="text-xs font-semibold text-white/70 transition hover:text-gold">
              View all
            </Link>
          </div>

          <div className="relative z-10 space-y-2.5">
            {previewServices.map((service, index) => (
              <motion.div key={service.id} whileHover={{ x: 4 }}>
                <Link
                  href={`/services#${service.id}`}
                  className="flex items-start gap-3 rounded-xl border border-transparent bg-white/[0.04] px-3 py-3 transition hover:border-gold/35 hover:bg-white/[0.08]"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.07 }}
                    className="flex w-full items-start gap-3"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0 text-gold" size={16} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold text-white">{service.series}</div>
                        <div className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-gold/90">
                          {formatPriceHint(service)}
                        </div>
                      </div>
                      <div className="mt-0.5 text-[12px] leading-snug text-white/55 line-clamp-1">
                        {service.title}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="relative z-10 mt-4 text-[11px] text-white/45">
            Final price varies with features and scope.
          </p>
        </div>

        <motion.a
          href={site.inqrsUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur transition hover:border-gold/40 hover:bg-white/[0.06]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black">
            <Image
              src="/images/inqrs-logo.png"
              alt="InQRS"
              width={40}
              height={40}
              unoptimized
              className="h-10 w-10 object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] uppercase tracking-[0.14em] text-white/45">
              Product by Katisa
            </div>
            <div className="truncate text-sm font-semibold text-white">
              {inqrs?.title || 'InQRS'}
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold">
            Visit
            <FiArrowUpRight size={14} />
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}
