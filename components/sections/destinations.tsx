'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { destinations, SITE } from '@/lib/site-data';

export function Destinations() {
  return (
    <section
      id="destinations"
      className="relative bg-navy py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(30,78,216,0.25),transparent_55%)]" />
      <div className="container-lux relative">
        <SectionHeader
          dark
          eyebrow="Popular Destinations"
          title={
            <>
              Where Will Your Story
              <br className="hidden sm:block" /> Begin Next?
            </>
          }
          subtitle="Handpicked destinations loved by our travelers — each customizable to your pace, taste and budget."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {destinations.map((d, i) => {
            const featured = i === 0 || i === 5;
            return (
              <Reveal
                key={d.name}
                delay={(i % 4) * 0.06}
                className={featured ? 'lg:col-span-2 lg:row-span-2' : ''}
              >
                <motion.a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                    `Hi Flymigo, I'd like to plan a trip to ${d.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="group relative block h-full overflow-hidden rounded-2xl"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      featured ? 'aspect-[4/5] lg:aspect-[16/13]' : 'aspect-[4/5]'
                    }`}
                  >
                    <img
                      src={d.image}
                      alt={`${d.name} - ${d.tag}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-luxury/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                      {d.tag}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                      {d.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-white/70">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {d.country}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {d.days}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-white/50">
                          From
                        </p>
                        <p className="font-display text-lg font-semibold text-white">
                          {d.from}
                        </p>
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-luxury group-hover:scale-110">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
