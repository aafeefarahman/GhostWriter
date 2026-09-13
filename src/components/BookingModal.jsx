import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const CALENDLY_EVENT_URL = 'https://calendly.com/theghostedwriter-27/30min';
const EMBED_SRC = `${CALENDLY_EVENT_URL}?timezone=Asia%2FKolkata&hide_landing_page_details=0&hide_gdpr_banner=1&primary_color=3c4a3e`;

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-900/75 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl h-[90vh] max-h-[740px] bg-cream-100 rounded-sm shadow-2xl border border-cream-300 z-10 overflow-hidden flex flex-col"
          >
            {/* Modal Header — Clean Visitor View */}
            <div className="bg-cream-100 px-6 py-4 border-b border-cream-300/60 flex items-center justify-between shrink-0">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-forest font-medium">
                  Voice Audit Call • IST Timezone (UTC+5:30)
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-800 font-normal">
                  Claim Your 3 Free Posts
                </h3>
              </div>
              
              <button
                onClick={onClose}
                className="p-1.5 text-charcoal-50 hover:text-charcoal-800 transition-colors rounded"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Real Live Calendly Booking Calendar */}
            <div className="flex-1 w-full bg-cream-50 relative overflow-hidden">
              <iframe
                src={EMBED_SRC}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Select a Date & Time - Calendly"
                className="w-full h-full border-0"
              />

              {/* Minimal new tab option */}
              <div className="absolute bottom-2 right-4 z-10 bg-cream-100/90 backdrop-blur-xs px-3 py-1 rounded border border-cream-300/80 shadow-xs flex items-center space-x-1.5 text-[11px] text-charcoal-800">
                <a
                  href={EMBED_SRC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest hover:underline font-semibold flex items-center space-x-1 text-xs"
                >
                  <span>Open in Calendly window</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
