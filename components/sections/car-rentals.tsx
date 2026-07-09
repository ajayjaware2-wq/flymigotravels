'use client';

import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { vehicles, SITE } from '@/lib/site-data';

export function CarRentals() {
  return (
    <section id="car-rentals" className="relative bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_100%,rgba(255,122,0,0.18),transparent_50%)]" />
      <div className="container-lux relative">
        <SectionHeader
          dark
          eyebrow="Car & Vehicle Rentals"
          title="Travel in Comfort, Arrive in Style"
          subtitle="Luxury sedans, SUVs, tempo travellers and buses — with professional drivers for every journey."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {vehicles.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-2xl glass-dark p-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    src={v.image}
                    alt={`${v.name} - ${v.type}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-luxury px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {v.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {v.name}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/60">
                    <Users className="h-4 w-4" />
                    {v.seats}
                  </p>
                  <div className="mt-4 flex items-end justify-between border-t border-white/15 pt-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/50">
                        Starting from
                      </p>
                      <p className="font-display text-2xl font-semibold text-white">
                        {v.price}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                        `Hi Flymigo, I'd like to rent a ${v.name} (${v.seats}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-luxury px-4 py-2.5 text-sm font-semibold text-white transition-all hover:gap-2.5"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
