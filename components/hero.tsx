'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Compass, MessageCircle, Phone, ChevronDown, Star } from 'lucide-react';
import { heroSlides, SITE } from '@/lib/site-data';

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {heroSlides.map((src, i) =>
            i === index ? (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              >
                <img
                  src={src}
                  alt="Travel destination"
                  className="h-full w-full object-cover motion-safe:animate-ken-burns"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-lux relative z-10 flex h-full flex-col justify-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-luxury text-luxury" />
              ))}
            </span>
            Trusted Since {SITE.established}
          </span>

          <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
            Explore the World,
            <br />
            <span className="text-gradient-gold">Your Way.</span>
          </h1>

          <p className="mt-5 font-display text-xl font-medium text-white/90 sm:text-2xl">
            Travel Your Way, We&rsquo;ll Plan the Rest.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Flymigo Travels creates customized travel experiences &mdash; domestic &
            international holidays, honeymoon packages, luxury stays, car rentals,
            group tours and complete travel management.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn-lux-primary">
              <Compass className="h-4 w-4" />
              Plan My Trip
            </a>
            <a href="#packages" className="btn-lux-navy">
              <Plane className="h-4 w-4" />
              Explore Packages
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                "Hi Flymigo Travels, I'd like to plan a trip."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lux-outline"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-lux-outline">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-luxury' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        aria-label="Scroll down"
        className="absolute bottom-8 right-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full glass-dark text-white sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
