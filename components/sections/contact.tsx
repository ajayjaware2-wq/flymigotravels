'use client';

import { Phone, Mail, MessageCircle, MapPin, Instagram, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { InquiryForm } from '@/components/sections/inquiry-form';
import { SITE } from '@/lib/site-data';

const contactItems = [
  {
    icon: Phone,
    label: 'Call Us',
    value: SITE.phone,
    href: `tel:${SITE.phoneRaw}`,
    accent: 'bg-navy',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: `https://wa.me/${SITE.whatsapp}`,
    accent: 'bg-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    accent: 'bg-luxury',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: `${SITE.location}, Maharashtra`,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`,
    accent: 'bg-royal',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(30,78,216,0.22),transparent_50%)]" />
      <div className="container-lux relative">
        <SectionHeader
          dark
          eyebrow="Plan My Trip"
          title={
            <>
              Let&rsquo;s Craft Your
              <br className="hidden sm:block" /> Perfect Journey
            </>
          }
          subtitle="Tell us your dream destination and we&rsquo;ll build a personalized itinerary around your budget — no obligation, just inspiration."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: contact info + map */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contactItems.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl glass-dark p-4 transition-all hover:bg-white/15"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.accent} text-white`}
                    >
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-white/50">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-white">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-2xl glass-dark p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-luxury text-white">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/50">
                    Response Time
                  </p>
                  <p className="text-sm font-semibold text-white">
                    We reply within a few hours
                  </p>
                </div>
              </div>

              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl glass-dark p-4 transition-all hover:bg-white/15"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-luxury via-pink-500 to-purple-600 text-white">
                  <Instagram className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/50">
                    Instagram
                  </p>
                  <p className="text-sm font-semibold text-white">
                    @flymigotravels
                  </p>
                </div>
              </a>

              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <iframe
                  title="Flymigo Travels location map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    SITE.mapsQuery
                  )}&output=embed`}
                  className="h-full min-h-[220px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: inquiry form */}
          <Reveal delay={0.1}>
            <InquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
