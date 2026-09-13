import React from 'react';
import { motion } from 'framer-motion';

const makeovers = [
  {
    id: 1,
    role: 'Startup Founder',
    topic: 'Data-Backed Industry Insight',
    before: `73% of startups fail in year one — crazy stat I came across today. Really makes you appreciate how hard this journey is. Grateful for my team and investors who believe in us. Onward! 🚀`,
    after: `73% of B2B SaaS free trials never convert. I spent last week pulling data from four companies to figure out why — and it wasn't pricing, and it wasn't the product. It was day 3. Users who hadn't taken a single 'activating' action by day 3 churned regardless of what happened after. Not day 1. Not day 7. Day 3. Most teams optimize onboarding for day 1 and check-in calls for day 7. Almost nobody watches the 48 hours in between — which is exactly where the trial is won or lost.`
  },
  {
    id: 2,
    role: 'Product Manager',
    topic: 'Behind-the-Scenes Process',
    before: `Excited to share that we shipped a major roadmap update this quarter! So proud of the team's hard work and collaboration to get this over the line. More to come!`,
    after: `We almost shipped the wrong feature. Two weeks before release, our biggest account asked for a custom reporting dashboard. Sales wanted it in the roadmap by Friday. Engineering had already scoped it. Then one PM asked a question that stopped the room: 'How many of our other 4,000 accounts have asked for this?' The answer was three. We pulled it from the sprint, sat in on five customer calls instead, and found the real pattern — people didn't want more reporting, they wanted fewer clicks to the report they already had. That became the release. The enterprise account got a Loom video and a workaround — not a permanent fork in our roadmap.`
  },
  {
    id: 3,
    role: 'First-Time Founder',
    topic: 'Direct Advice / Playbook',
    before: `Hiring is hard! We just made our first 3 hires and I've learned SO much along the way. When you're building something from scratch, every single person you bring on shapes the culture and direction of the company in ways you can't fully predict. I made mistakes early on — hired too fast for one role, too slow for another, and definitely underestimated how much culture fit matters compared to just raw skills on paper. But I'm so grateful for the process because it taught me what actually matters when you're building a team from zero. Huge shoutout to everyone who gave me advice along the way, and to my incredible first hires for taking a leap of faith on an early-stage startup. Building something is never a solo journey, and I'm just getting started. Wishing every first-time founder out there good luck on this crazy, rewarding journey. It's not easy, but it's worth it. 🙌 #startuplife #founder #hiring #buildinpublic`,
    after: `If you're a first-time founder about to hire your first 3 employees, save this post. Hire for these three things: → Someone who can operate with zero process, because you don't have any yet → Someone who asks 'why' before 'how,' because your priorities will shift weekly → Someone comfortable being wrong in front of you, because you need signal, not agreement. Skip these three mistakes: → Hiring a 'senior' person to bring structure before product-market fit — they'll build systems for a company that doesn't exist yet → Hiring your friend because it's comfortable — the first hard conversation costs you the friendship or the company → Hiring for a title instead of a problem — your first 3 hires should map to your 3 biggest bottlenecks, not an org chart you copied off LinkedIn`
  }
];

export default function MakeoversSection() {
  return (
    <section id="makeovers" className="py-24 sm:py-32 bg-cream-100 border-t border-cream-300/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <header className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-mega text-forest font-medium mb-3">
            Section 01 — Makeovers
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-800 font-normal leading-tight">
            Before & After
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 font-light mt-3 leading-relaxed">
            The difference between corporate noise and content that gets remembered isn't louder claims—it's clarity, structure, and a reason to keep reading.
          </p>
        </header>

        {/* Makeovers List */}
        <div className="space-y-24">
          {makeovers.map((item, index) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              {/* Before Block (Plain & Muted) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-cream-300/60">
                  <span className="text-xs uppercase tracking-widest text-charcoal-50 font-medium">
                    Before
                  </span>
                  <span className="text-xs text-charcoal-50 italic">
                    {item.role}
                  </span>
                </div>
                <div className="p-6 bg-cream-200/40 rounded-sm text-charcoal-100 text-sm leading-relaxed font-sans italic opacity-85">
                  "{item.before}"
                </div>
              </div>

              {/* After Block (Subtle forest border / underline, crisp editorial emphasis) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-forest/40">
                  <span className="text-xs uppercase tracking-widest text-forest font-semibold">
                    After — Ghostwritten
                  </span>
                  <span className="text-xs text-ochre font-serif italic">
                    {item.topic}
                  </span>
                </div>
                <div className="p-6 bg-cream-50 border-l-2 border-forest text-charcoal-800 text-sm leading-relaxed font-sans whitespace-pre-line shadow-xs">
                  {item.after}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
