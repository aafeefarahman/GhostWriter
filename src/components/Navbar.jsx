import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-cream-100/95 backdrop-blur-md border-b border-cream-300/50 py-3.5 shadow-sm' 
          : 'bg-gradient-to-b from-charcoal-900/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Official Brand Logo + Wordmark */}
        <a 
          href="#" 
          className="flex items-center space-x-3 group"
        >
          <img
            src="/logo.jpg"
            alt="The Ghosted Writer Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-xs border border-cream-100/40 group-hover:scale-105 transition-transform duration-300 shrink-0"
          />
          <span
            className={`font-serif text-xl sm:text-2xl tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-charcoal-800' : 'text-cream-100'
            }`}
          >
            The Ghosted Writer
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {[
            { label: 'Makeovers', href: '#makeovers' },
            { label: 'Scope', href: '#scope' },
            { label: 'About', href: '#about' },
            { label: 'Process', href: '#process' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs uppercase tracking-widest transition-colors duration-300 font-medium ${
                scrolled 
                  ? 'text-charcoal-800/80 hover:text-forest' 
                  : 'text-cream-100/80 hover:text-cream-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <button
          onClick={onOpenBooking}
          className={`text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded transition-all duration-300 ${
            scrolled
              ? 'border border-forest text-forest hover:bg-forest hover:text-cream-100'
              : 'border border-cream-100/40 text-cream-100 hover:bg-cream-100 hover:text-charcoal-800'
          }`}
        >
          Free 3 Posts
        </button>
      </div>
    </header>
  );
}
