import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with warm soft lighting */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=85')`
        }}
        aria-hidden="true"
      />

      {/* Subtle warm dark gradient overlay for optimal legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/75 via-charcoal-900/65 to-charcoal-900/85 backdrop-blur-[1px]" aria-hidden="true" />

      {/* Hero Content */}
      <header className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Overline */}
          <p className="text-xs sm:text-sm uppercase tracking-mega text-cream-200/80 mb-6 font-medium">
            Ghostwriting
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-cream-100 leading-[1.15] tracking-tight max-w-3xl mx-auto mb-6">
            Your ideas, in the voice that gets remembered.
          </h1>

          {/* Small Italic Subline */}
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-cream-200/90 font-light mb-10 max-w-xl mx-auto">
            You'll never see me. Just the words.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={onOpenBooking}
              className="bg-forest text-cream-100 border border-forest/80 hover:bg-forest-light transition-all duration-300 px-8 py-4 rounded-sm text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Claim Your 3 Free Posts
            </button>
          </div>
        </motion.div>
      </header>

      {/* Scroll indicator bottom right */}
      <div className="absolute bottom-8 right-8 z-10 hidden sm:flex items-center space-x-2 text-cream-200/60 text-xs uppercase tracking-widest font-medium">
        <span>Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
