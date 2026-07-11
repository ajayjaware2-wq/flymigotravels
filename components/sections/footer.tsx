'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site-data';
import { Logo } from '@/components/logo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Domestic Tours',
  'International Tours',
  'Honeymoon Packages',
  'Luxury Villas',
  'Car Rentals',
  'Corporate Tours',
  'Customized Holidays',
  'Visa Assistance',
];

const destLinks = [
  'Goa',
  'Manali',
  'Kashmir',
  'Kerala',
  'Rajasthan',
  'Dubai',
  'Thailand',
  'Bali',
  'Maldives',
  'Europe',
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-navy-800 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,122,0,0.12),transparent_50%)]" />

      {/* Newsletter */}
      <div className="container-lux relative">
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl glass-dark p-8 lg:grid-cols-2 lg:p-10">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Get Travel Inspiration
            </h3>
            <p className="mt-2 text-sm text-white/65">
              Subscribe for curated destination ideas, seasonal offers and travel
              tips — straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubscribed(true);
            }}
            className="flex w-full max-w-md gap-2 lg:ml-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white outline-none transition-all placeholder:text-white/40 focus:border-luxury focus:ring-2 focus:ring-luxury/20"
            />
            <button
              type="submit"
              className="flex h-12 shrink-0 items-center gap-2 rounded-full bg-luxury px-5 text-sm font-semibold text-white transition-all hover:bg-luxury/90"
            >
              {subscribed ? (
                'Subscribed!'
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-lux relative mt-16 grid grid-cols-2 gap-8 pb-12 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <a href="#home" className="flex items-center gap-2.5">
            <Logo variant="light" />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            {SITE.tagline} We create customized travel experiences — domestic &
            international holidays, honeymoons, luxury stays, car rentals and
            complete travel management.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2.5 text-white/65 transition-colors hover:text-white">
              <Phone className="h-4 w-4 text-luxury" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-white/65 transition-colors hover:text-white">
              <Mail className="h-4 w-4 text-luxury" />
              {SITE.email}
            </a>
            <p className="flex items-center gap-2.5 text-white/65">
              <MapPin className="h-4 w-4 text-luxury" />
              {SITE.location} &middot; Est. {SITE.established}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/55 transition-colors hover:text-luxury"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-white/55 transition-colors hover:text-luxury"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Destinations
          </h4>
          <ul className="mt-4 space-y-2.5">
            {destLinks.map((d) => (
              <li key={d}>
                <a
                  href="#destinations"
                  className="text-sm text-white/55 transition-colors hover:text-luxury"
                >
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-lux flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
            Crafted for travelers who dream beyond the ordinary.
          </p>
          <div className="flex items-center gap-3">
            <SocialBtn href={`https://wa.me/${SITE.whatsapp}`} label="WhatsApp">
              <Send className="h-4 w-4" />
            </SocialBtn>
            <SocialBtn href={SITE.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialBtn>
            <SocialBtn href={SITE.facebook} label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialBtn>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-luxury hover:text-white"
    >
      {children}
    </a>
  );
}
