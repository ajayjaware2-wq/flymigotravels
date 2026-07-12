'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Check, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { packages, SITE } from '@/lib/site-data';

export function Packages() {
  return (
    <section id="packages" className="relative bg-background py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Featured Tour Packages"
          title={
            <>
              Curated Journeys,
              <br className="hidden sm:block" /> Ready to Be Personalized
            </>
          }
          subtitle="Start from a guest-favorite itinerary — then we tailor every detail to fit you perfectly."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="card-lux group h-full overflow-hidden hover:shadow-[0_28px_60px_-24px_rgba(11,31,58,0.3)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} - ${p.destination}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  {p.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-luxury px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg">
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-xs font-semibold text-navy">
                    <Star className="h-3.5 w-3.5 fill-luxury text-luxury" />
                    {p.rating}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-luxury">
                    {p.destination}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-navy">
                    {p.title}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Moon className="h-4 w-4" />
                    {p.nights} Nights / {p.nights + 1} Days
                  </div>

                  <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
                    {p.inclusions.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-luxury" />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Starting from
                      </p>
                      <p className="font-display text-2xl font-semibold text-navy">
                        {p.price}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                        `Hi Flymigo, I'm interested in "${p.title}" (${p.price}). Please share details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-luxury hover:gap-2.5"
                    >
                      Book
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
