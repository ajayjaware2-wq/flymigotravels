'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { Icon } from '@/components/icon';
import { whyChooseUs } from '@/lib/site-data';

const stats = [
  { value: '500+', label: 'Happy Travelers' },
  { value: '30+', label: 'Destinations' },
  { value: '5', label: 'Years of Trust' },
  { value: '24/7', label: 'Support' },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-background py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Why Choose Flymigo"
          title={
            <>
              The Difference Is in
              <br className="hidden sm:block" /> the Details
            </>
          }
          subtitle="Eight reasons travelers trust Flymigo to plan the journeys that matter most."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="card-lux group h-full p-6 hover:shadow-[0_20px_44px_-20px_rgba(11,31,58,0.25)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-luxury/10 text-luxury transition-colors duration-500 group-hover:bg-luxury group-hover:text-white">
                  <Icon name={w.icon} className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-navy">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {w.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl bg-navy p-8 text-center sm:grid-cols-4 lg:p-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/60 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
