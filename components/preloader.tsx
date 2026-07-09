'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-6 rounded-full border border-luxury/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-10 rounded-full border border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-luxury to-orange-600 shadow-[0_0_40px_-5px_rgba(255,122,0,0.6)]">
                <Plane className="h-7 w-7 text-white" />
              </div>
            </div>

            <div className="text-center">
              <p className="font-display text-2xl font-semibold tracking-wide text-white">
                Flymigo <span className="text-luxury">Travels</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/50">
                Customized Travel Experiences
              </p>
            </div>

            <div className="relative h-px w-44 overflow-hidden bg-white/15">
              <motion.div
                className="absolute inset-y-0 left-0 bg-luxury"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
