import React from 'react';
import { motion } from 'framer-motion';

export default function TryFreeSection({ onOpenBooking }) {
  return (
    <section className="py-24 sm:py-32 bg-cream-200/50 border-t border-cream-300/40 text-center">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-xs uppercase tracking-mega text-forest font-medium">
            Section 05 — Trial
          </p>

          {/* Exact Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal-800 font-normal leading-tight">
            Your first 3 LinkedIn posts, free
          </h2>

          {/* Exact One-liner */}
          <p className="text-base sm:text-lg text-charcoal-100 font-light max-w-xl mx-auto leading-relaxed">
            No commitment — see what your voice sounds like in my hands, then decide if you want to keep going.
          </p>

          {/* Simple CTA */}
          <div className="pt-4">
            <button
              onClick={onOpenBooking}
              className="bg-forest text-cream-100 border border-forest hover:bg-forest-light transition-all duration-300 px-8 py-4 rounded-sm text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-md hover:shadow-lg"
            >
              Claim Your 3 Free Posts
            </button>
          </div>

          <p className="text-xs text-charcoal-50 italic">
            Takes 30 seconds to pick an IST time slot that works for you.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
