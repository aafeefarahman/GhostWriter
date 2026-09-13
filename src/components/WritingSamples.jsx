import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SampleModal from './SampleModal';

const samples = [
  {
    id: 'sample-1',
    category: 'Executive Positioning',
    title: 'The Art of Being Invisible in Public',
    description: 'Why true authority on LinkedIn is built by removing self-congratulatory noise and leading with pure observation.',
    fullContent: `Most executive posts fail because they read like internal press releases.

"Humbled to speak at X conference..."
"Honored to win Y industry award..."

Notice the pattern? Every sentence starts with how the writer feels about themselves.

Here is the secret to ghostwriting for top 1% leaders:

When you write about a victory, turn the lens outward. 
Don't describe how great your company is. Describe the problem your client was facing at 2 AM on a Tuesday, the exact decision tree you worked through together, and the single unexpected lesson that resulted.

Your readers don't want to celebrate you. 
They want to solve their own problems using your experience.

When you step out of the spotlight and let the work shine, authority takes care of itself.`
  },
  {
    id: 'sample-2',
    category: 'Tech & Founder Voice',
    title: 'Why Technical Founders Struggle to Tell Stories',
    description: 'Translating complex architectural breakthroughs into high-stakes human narratives without losing technical precision.',
    fullContent: `Technical founders are conditioned to speak in specifications.

They want to explain the API latency reduction, the microservices architecture, or the database migration protocol. 

The market, however, listens in stakes.

When I interview a CTO for a weekly LinkedIn draft, I never ask "What did you build?" 
I ask: "What was breaking right before you decided to build this?"

The narrative isn't the code. The narrative is the risk.

Once you connect technical architecture to business survival, non-technical buyers start re-sharing your posts to their own executive teams.`
  },
  {
    id: 'sample-3',
    category: 'Workflow & Craft',
    title: 'The 10-Minute Daily Voice Capture Method',
    description: 'How busy executives generate a month of original thought-leadership without spending hours sitting at a blank screen.',
    fullContent: `The biggest myth about LinkedIn thought leadership is that founders need to sit down for two hours every Sunday and "write content."

Great executives don't write. They react.

Every single day, you are having 5–10 high-stakes conversations:
- Answering a candidate who asked why your team handles feedback differently.
- Explaining to a customer why a competitor's pricing model is a trap.
- Debriefing a product manager on why a feature spec missed the mark.

Those raw voice notes and slack replies ARE your content.

As a ghostwriter, my job isn't to invent your thoughts. My job is to catch your raw reactions, strip away the filler, polish the cadence, and return them as sharp, memorable LinkedIn essays.`
  }
];

export default function WritingSamples({ onOpenBooking }) {
  const [activeSample, setActiveSample] = useState(null);

  return (
    <section id="writing" className="py-24 sm:py-32 bg-cream-100 border-t border-cream-300/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-mega text-forest font-medium mb-3">
            Section 02 — Index
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-800 font-normal leading-tight">
            Selected Writing Samples
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 font-light mt-3 leading-relaxed">
            Minimal editorial excerpts demonstrating cadence, tone, and strategic positioning.
          </p>
        </div>

        {/* Minimal Editorial Index List (no flashy cards, just clean rules and typography) */}
        <div className="border-t border-b border-cream-300/80 divide-y divide-cream-300/60">
          {samples.map((sample, index) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveSample(sample)}
              className="group py-8 sm:py-10 cursor-pointer transition-colors hover:bg-cream-200/30 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs uppercase tracking-widest text-ochre font-medium">
                  {sample.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-800 font-normal group-hover:text-forest transition-colors">
                  {sample.title}
                </h3>
                <p className="text-sm text-charcoal-100 font-light leading-relaxed">
                  {sample.description}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-charcoal-800 group-hover:text-forest font-semibold shrink-0">
                <span>Read Essay</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Drawer Modal */}
      <SampleModal
        sample={activeSample}
        onClose={() => setActiveSample(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}
