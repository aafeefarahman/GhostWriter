import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream-100 border-t border-cream-300/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Warm editorial photograph */}
          <motion.figure 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-cream-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85"
                alt="Quiet writing desk scene with journal, coffee cup, and open book in warm natural sunlight"
                className="w-full h-full object-cover grayscale-[15%] contrast-[95%] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.figure>

          {/* Story Copy */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <header>
              <p className="text-xs uppercase tracking-mega text-forest font-medium mb-3">
                Section 04 — About
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800 font-normal leading-tight">
                Behind the Words
              </h2>
            </header>

            {/* Exact Copy verbatim */}
            <div className="space-y-6 text-charcoal-800 font-sans text-base sm:text-lg leading-relaxed font-light">
              <p>
                I've been writing for years — quietly, mostly for myself, never quite ready to put it out into the world. This year, I finally started sharing it — not because I felt ready, but because I was tired of waiting to feel ready. That's when writing stopped being something I just did privately and started becoming something I wanted to actually turn into a passion — and now, into a way to help someone else say what they've been meaning to say.
              </p>
              <p>
                That's what this is. Not a formula, not a template — just someone who spent years finding the courage to write, now learning how to lend that same craft to people who need it.
              </p>
            </div>

            <footer className="pt-4 border-t border-cream-300/60">
              <span className="font-serif italic text-charcoal-800 text-xl">The Ghosted Writer</span>
            </footer>
          </motion.article>

        </div>

      </div>
    </section>
  );
}
