import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const scopeItems = [
  {
    id: 'scope-1',
    number: '01',
    category: 'LinkedIn posts for tech founders and CEOs',
    title: 'We Just Turned Away Our Biggest Deal Ever',
    body: `A logo everyone in this space would recognize offered us a six-figure contract last week.

I said no. My co-founder thought I'd lost it.

Their ask meant rebuilding our core product around one client's workflow instead of the 400 people who already trust it to work the way it does.

Here's the part I didn't expect: I've spent three days waiting for the regret to show up. It hasn't come.

I think I used to believe growth meant saying yes faster. Turns out it sometimes means saying no on purpose — and actually meaning it.`
  },
  {
    id: 'scope-2',
    number: '02',
    category: 'Technical blogs and articles',
    title: 'What Nobody Tells You About Model Drift',
    body: `Your model isn't getting dumber. Your data is getting different — and most teams don't notice until the accuracy graph does the noticing for them.

We spent six weeks chasing a 12% accuracy drop, convinced it was a training bug. It wasn't. A new user cohort had shifted our input distribution in ways the original training set never saw — different phrasing, different intent, different edge cases entirely.

Retraining didn't fix it. Retraining on the right window did.

This is where the "AI is replacing engineers" conversation misses something important: the model didn't fail because it lacked intelligence. It failed because nobody was watching the assumptions it was quietly making about the world staying still. That's not a prompt problem or a parameter problem — it's a judgment problem, and judgment is still very much a human job. The engineers who'll matter most over the next five years aren't the ones who can out-code a model. They're the ones who notice when a model's confident answer is quietly wrong.

Three checks we now run before touching a single hyperparameter:
— Has the input distribution shifted since the last training run?
— Are our labels stale relative to current user behavior?
— Is "accuracy" even still the metric that matters for this cohort?

Skip these and you'll keep "fixing" a model that was never actually broken.`
  },
  {
    id: 'scope-3',
    number: '03',
    category: 'Newsletters for tech personalities',
    title: 'Will Astra Take the Place of Engineers?',
    body: `Astra launched last week, and I've already been asked this question at every dinner party since — usually by someone who just watched a demo and is either terrified or thrilled, rarely anything in between.

Here's my honest answer: Astra won't replace engineers. It'll replace the parts of the job we always complained about.

A few days after launch, I watched a senior engineer on our team spend eleven minutes writing boilerplate CRUD endpoints she'd written two hundred times before. Astra did it in forty seconds. She didn't get replaced that day. She got forty free minutes to think about why the database schema was wrong in the first place — which, it turned out, it was.

That's the actual shift happening. Not fewer engineers. Fewer engineers doing the boring 40% of the job, and a much higher bar for the remaining 60% — the part that requires judgment, taste, and the ability to notice when Astra's confident-sounding answer is quietly wrong.

The engineers I'd worry about aren't the senior ones. They're the ones who never learned what "good" looks like without Astra telling them, because they started their careers with the shortcut already built in.

So no, Astra isn't coming for your job. But a week in, it's already coming for anyone whose job was mostly typing.`
  },
  {
    id: 'scope-4',
    number: '04',
    category: 'Founder/CEO thought-leadership content',
    title: 'I Don\'t Actually Know If This Was the Right Call',
    body: `Six months ago I delayed our product launch by a full quarter to redo our compliance architecture from scratch. Our board wasn't thrilled. Our competitors weren't waiting.

I still don't know if it was right. I know it felt necessary — a hospital administrator had quietly told me she'd rejected three faster competitors because none of them could answer basic questions about where patient data actually lived.

What I've stopped doing is pretending founders always know. Most of the confident-sounding updates I write are really just documenting the moment I decided to commit to something I couldn't fully verify yet.

Maybe that's the actual job: not having certainty, but being willing to own the bet out loud.`
  }
];

export default function WhatIWriteSection({ onSelectScopeItem }) {
  return (
    <section id="scope" className="py-20 sm:py-28 bg-cream-100 border-t border-cream-300/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <header className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-mega text-forest font-medium mb-3">
            Scope of Craft
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800 font-normal leading-tight">
            Here's what I write for clients
          </h2>
          <p className="text-xs text-charcoal-50 font-light mt-2 italic">
            Click any item below to read a sample essay in that format.
          </p>
        </header>

        {/* 2-Column x 2-Row Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-0 border-t border-cream-300/80">
          {scopeItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => onSelectScopeItem(item)}
              className="py-6 border-b border-cream-300/60 flex items-start justify-between space-x-4 group cursor-pointer hover:bg-cream-200/30 px-3 -mx-3 rounded-sm transition-colors"
            >
              <div className="flex items-baseline space-x-4">
                <span className="font-serif text-sm sm:text-base text-ochre font-medium tracking-widest shrink-0 w-7">
                  {item.number}
                </span>
                <span className="font-sans text-base sm:text-lg text-charcoal-800 font-light group-hover:text-forest transition-colors leading-relaxed">
                  {item.category}
                </span>
              </div>

              <div className="flex items-center space-x-1 text-xs text-charcoal-50 group-hover:text-forest transition-colors shrink-0 pt-1">
                <span className="hidden sm:inline text-[11px] uppercase tracking-widest font-medium">Read</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
