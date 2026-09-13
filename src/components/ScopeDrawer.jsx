import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function ScopeDrawer({ item, onClose, onOpenBooking }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-xs"
          />

          {/* Right-side Slide-in Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl h-full bg-cream-100 shadow-2xl z-10 overflow-y-auto flex flex-col justify-between border-l border-cream-300"
          >
            <div>
              {/* Header */}
              <div className="sticky top-0 bg-cream-100/95 backdrop-blur-md px-6 sm:px-8 py-6 border-b border-cream-300/60 flex items-center justify-between z-20">
                <span className="text-xs uppercase tracking-widest text-forest font-medium">
                  {item.number} • {item.category}
                </span>
                <button
                  onClick={onClose}
                  className="p-1.5 text-charcoal-50 hover:text-charcoal-800 transition-colors rounded"
                  aria-label="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body Content */}
              <div className="p-6 sm:p-10 space-y-8">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-800 font-normal leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-ochre font-medium">
                    Writing Sample Excerpt
                  </p>
                </div>

                <div className="w-12 h-px bg-ochre/40" />

                {/* Sample Body Text */}
                <div className="font-sans text-charcoal-800 text-base leading-relaxed space-y-6 whitespace-pre-line font-light">
                  {item.body}
                </div>
              </div>
            </div>

            {/* Panel Footer Call To Action Container */}
            <div className="p-6 sm:p-8 bg-cream-200/50 border-t border-cream-300">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full bg-forest text-cream-100 px-6 py-3.5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-forest-light transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Claim 3 Free Posts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
