import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Voice Audit Call',
    description: 'A 30-minute deep dive where I listen to your natural phrasing, pet peeves, industry hot takes, and underlying philosophies.'
  },
  {
    number: '02',
    title: 'Content Pillars',
    description: 'We establish 3 core narrative angles that reflect your true authority—so every post reinforces your positioning without sounding repetitive.'
  },
  {
    number: '03',
    title: 'Weekly Drafts',
    description: 'Every Monday morning, you receive 3 polished, ready-to-publish LinkedIn posts in a clean Google Doc or Notion dashboard.'
  },
  {
    number: '04',
    title: 'Async Revisions',
    description: 'Leave quick voice notes or line comments. We iterate asynchronously until the tone sounds 100% like you wrote it yourself.'
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-cream-100 border-t border-cream-300/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <header className="max-w-2xl mb-12 sm:mb-14">
          <p className="text-xs uppercase tracking-mega text-forest font-medium mb-3">
            Section 04 — Process
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-800 font-normal leading-tight">
            How We Work Together
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 font-light mt-3 leading-relaxed">
            One call, four steps, and a process that respects your calendar.
          </p>
        </header>

        {/* 4 Steps Semantic Ordered List */}
        <ol className="space-y-10 sm:space-y-12">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pb-8 sm:pb-9 border-b border-cream-300/60"
            >
              {/* Step Number */}
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl text-ochre/80 font-light">
                  {step.number}
                </span>
              </div>

              {/* Step Title */}
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-800 font-normal">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-charcoal-800/80 font-sans leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

      </div>
    </section>
  );
}
