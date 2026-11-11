'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { services, site } from '@/lib/site';

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

          <div className="relative z-10 mb-5">
            <div className="text-xs uppercase tracking-[0.16em] text-gold">Packages</div>
            <div className="mt-1 text-lg font-semibold text-white">What you can hire us for</div>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Four clear software packages. Prices start from the amount shown — final cost depends on
              the features you need.
            </p>
          </div>

          <div className="relative z-10 space-y-2.5">
            {previewServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.07 }}
                whileHover={{ x: 3 }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="block rounded-xl border border-white/10 bg-black/30 px-4 py-3 transition hover:border-gold/40 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">{service.title}</div>
                      <div className="mt-1 text-[12px] leading-snug text-white/55 line-clamp-2">
                        {service.description}
                      </div>
                    </div>
                    <FiArrowRight className="mt-1 shrink-0 text-gold/80" size={16} />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-semibold text-gold">
                      {service.priceLabel}
                    </span>
                    <span className="text-[11px] text-white/40">
                      Package name: {service.series}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 mt-5 flex items-center justify-between gap-3">
            <p className="text-[11px] text-white/45">Tap a package to see full details.</p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:text-white"
            >
              All packages
              <FiArrowRight size={14} />
            </Link>
          </div>
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
              Separate product we maintain
            </div>
            <div className="truncate text-sm font-semibold text-white">
              {inqrs?.title || 'InQRS NFC Smart Cards'}
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
