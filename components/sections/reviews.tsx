'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { reviews } from '@/lib/site-data';

export function Reviews() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > active ? 1 : -1);
      setActive((next + reviews.length) % reviews.length);
    },
    [active]
  );

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setActive((i) => (i + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[active];

  return (
    <section id="reviews" className="relative overflow-hidden bg-muted/40 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,78,216,0.06),transparent_60%)]" />
      <div className="container-lux relative">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Stories From Happy Travelers"
          subtitle="Real experiences from real journeys — planned, managed and delivered by Flymigo."
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          <Quote className="mx-auto h-12 w-12 text-luxury/20" />

          <div className="relative mt-6 min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="flex justify-center gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-luxury text-luxury" />
                  ))}
                </div>
                <p className="mx-auto mt-5 max-w-3xl font-display text-lg font-medium leading-relaxed text-navy sm:text-xl text-balance">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display text-lg font-semibold text-white">
                    {r.initial}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-navy">{r.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {r.location} &middot; {r.trip}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-all hover:bg-navy hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-7 bg-luxury' : 'w-2 bg-navy/20 hover:bg-navy/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-all hover:bg-navy hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
