'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { Icon } from '@/components/icon';
import { processSteps, SITE } from '@/lib/site-data';

export function TravelProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,122,0,0.15),transparent_45%)]" />
      <div className="container-lux relative">
        <SectionHeader
          dark
          eyebrow="Travel Process"
          title="From Dream to Departure in Four Steps"
          subtitle="A simple, transparent process that puts you in control while we do the heavy lifting."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="relative">
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[3.25rem] top-14 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-luxury/50 to-transparent lg:block" />
                )}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="relative h-full rounded-2xl glass-dark p-7"
                >
                  <span className="font-display text-5xl font-bold text-luxury/30">
                    {p.step}
                  </span>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-luxury text-white shadow-[0_10px_24px_-10px_rgba(255,122,0,0.7)]">
                    <Icon name={p.icon} className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {p.desc}
                  </p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a href="#contact" className="btn-lux-primary">
              Start Your Journey
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
