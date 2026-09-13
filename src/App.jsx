import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MakeoversSection from './components/MakeoversSection';
import WhatIWriteSection from './components/WhatIWriteSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import TryFreeSection from './components/TryFreeSection';
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';
import ScopeDrawer from './components/ScopeDrawer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedScopeItem, setSelectedScopeItem] = useState(null);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-800 font-sans selection:bg-forest selection:text-cream-100 antialiased">
      {/* Minimal Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* Hero Section */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Section 2 — Makeovers */}
        <MakeoversSection />

        {/* Scope — What I Write (Interactive 2x2 Grid) */}
        <WhatIWriteSection onSelectScopeItem={(item) => setSelectedScopeItem(item)} />

        {/* Section 4 — About */}
        <AboutSection />

        {/* Section 5 — Process (4 steps) */}
        <ProcessSection />

        {/* Section 6 — Try It Free */}
        <TryFreeSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Section 7 — Contact & Minimal Footer */}
      <ContactSection />

      {/* Calendly Live Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      {/* Right-side Slide-in Panel for Scope Writing Samples */}
      <ScopeDrawer
        item={selectedScopeItem}
        onClose={() => setSelectedScopeItem(null)}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
