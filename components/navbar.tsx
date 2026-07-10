'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { SITE } from '@/lib/site-data';
import { Logo } from '@/components/logo';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Villas', href: '#villas' },
  { label: 'Why Us', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-[0_8px_30px_-12px_rgba(11,31,58,0.2)]' : 'bg-transparent'
        }`}
      >
        <nav className="container-lux flex h-[68px] items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <Logo variant={scrolled ? 'dark' : 'light'} />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-navy/80 hover:bg-navy/5 hover:text-navy'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:inline-flex ${
                scrolled
                  ? 'bg-navy text-white hover:bg-navy-700'
                  : 'glass-dark text-white hover:bg-white/20'
              }`}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled ? 'text-navy hover:bg-navy/5' : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white p-6 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-navy">
                  Flymigo<span className="text-luxury"> Travels</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-navy/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3.5 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
