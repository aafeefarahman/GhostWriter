import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function SampleModal({ sample, onClose, onOpenBooking }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (sample) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sample, onClose]);

  return (
    <AnimatePresence>
      {sample && (
        <div className="fixed inset-0 z-50 flex items-center justify-end sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl h-full bg-cream-100 shadow-2xl z-10 overflow-y-auto flex flex-col justify-between border-l border-cream-300"
          >
            <div>
              {/* Header */}
              <div className="sticky top-0 bg-cream-100/95 backdrop-blur-md px-8 py-6 border-b border-cream-300/60 flex items-center justify-between z-20">
                <span className="text-xs uppercase tracking-widest text-forest font-medium">
                  {sample.category} • Editorial Sample
                </span>
                <button
                  onClick={onClose}
                  className="p-1 text-charcoal-50 hover:text-charcoal-800 transition-colors rounded"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sample Content */}
              <div className="p-8 sm:p-12 space-y-8">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-800 font-normal leading-tight mb-3">
                    {sample.title}
                  </h3>
                  <p className="text-sm text-charcoal-50 italic">
                    {sample.description}
                  </p>
                </div>

                <div className="w-12 h-px bg-ochre/40" />

                {/* Main Post Draft Body */}
                <div className="font-sans text-charcoal-800 text-base leading-relaxed space-y-6 whitespace-pre-line">
                  {sample.fullContent}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-8 bg-cream-200/50 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-serif text-charcoal-800 font-medium">
                  Want your voice written with this level of clarity?
                </p>
                <p className="text-xs text-charcoal-50">
                  Claim your first 3 posts free of charge.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto bg-forest text-cream-100 px-6 py-3 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-forest-light transition-all flex items-center justify-center space-x-2 shrink-0"
              >
                <span>Claim Free Posts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
