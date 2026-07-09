'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { gallery, SITE } from '@/lib/site-data';

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Instagram Gallery"
          title="Moments Worth Traveling For"
          subtitle="A glimpse of the journeys we&rsquo;ve crafted — follow along for daily travel inspiration."
        />

        <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden rounded-2xl"
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 ${
                    g.span === 'tall'
                      ? 'aspect-[3/4]'
                      : g.span === 'wide'
                        ? 'aspect-[4/3]'
                        : 'aspect-square'
                  }`}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4">
                    <Instagram className="h-5 w-5 text-white" />
                    <p className="mt-1 font-display text-sm font-semibold text-white">
                      {g.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lux-navy"
            >
              <Instagram className="h-4 w-4" />
              Follow @flymigotravels
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
