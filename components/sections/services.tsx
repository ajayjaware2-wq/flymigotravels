'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { Icon } from '@/components/icon';
import { services, SITE } from '@/lib/site-data';

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeader
          eyebrow="What We Offer"
          title={
            <>
              Every Travel Service,
              <br className="hidden sm:block" /> Under One Roof
            </>
          }
          subtitle="From your first flight to your final transfer, Flymigo manages every detail of your journey with craftsmanship and care."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="card-lux group relative h-full overflow-hidden p-7 hover:shadow-[0_24px_50px_-20px_rgba(11,31,58,0.25)]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-luxury/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_10px_24px_-10px_rgba(11,31,58,0.5)] transition-all duration-500 group-hover:bg-luxury group-hover:shadow-[0_10px_24px_-8px_rgba(255,122,0,0.6)]">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  {s.tag && (
                    <span className="mt-5 inline-block rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                      {s.tag}
                    </span>
                  )}
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                      `Hi Flymigo, I'm interested in ${s.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-luxury transition-all hover:gap-2.5"
                  >
                    Enquire
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
