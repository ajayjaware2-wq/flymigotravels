'use client';

import { motion } from 'framer-motion';
import { BedDouble, Users, MapPin, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { villas, SITE } from '@/lib/site-data';

export function Villas() {
  return (
    <section id="villas" className="relative bg-muted/40 py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Luxury Villas & Stays"
          title="Private Villas, Farmhouses & Estate Stays"
          subtitle="Escape to exclusive private retreats with pools, gardens and space that belongs only to you."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {villas.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="card-lux group h-full overflow-hidden hover:shadow-[0_28px_60px_-24px_rgba(11,31,58,0.3)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={v.image}
                    alt={`${v.name} - ${v.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {v.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {v.name}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-luxury" />
                    {v.location}
                  </p>
                  <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4" />
                      {v.beds} Beds
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      {v.guests} Guests
                    </span>
                  </div>
                  <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        From
                      </p>
                      <p className="font-display text-2xl font-semibold text-navy">
                        {v.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          {' '}/ night
                        </span>
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                        `Hi Flymigo, I'd like to book "${v.name}" in ${v.location}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-luxury hover:gap-2.5"
                    >
                      Enquire
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
