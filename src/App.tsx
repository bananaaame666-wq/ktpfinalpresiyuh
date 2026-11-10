/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { BagPolicyGuide } from './components/BagPolicyGuide';
import { EventsList } from './components/EventsList';
import { PricingSection } from './components/PricingSection';
import { ReservationSection } from './components/ReservationSection';
import { BagTracker } from './components/BagTracker';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedEventId, setSelectedEventId] = useState<string>('commencement-2026');
  const [selectedTierId, setSelectedTierId] = useState<string>('single-swap');
  const [activeTrackerTag, setActiveTrackerTag] = useState<string>('IU-4082');

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenReserve = (tierId?: string) => {
    if (tierId) setSelectedTierId(tierId);
    scrollToSection('reserve');
  };

  const handleSelectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    scrollToSection('reserve');
  };

  const handleOpenTracker = (tag?: string) => {
    if (tag) setActiveTrackerTag(tag);
    scrollToSection('tracker');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#990000] selection:text-white">
      {/* Top Bar Contract compliant Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={scrollToSection}
        onOpenReserve={() => handleOpenReserve()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <div id="home">
          <Hero
            onOpenReserve={() => handleOpenReserve()}
            onOpenTracker={handleOpenTracker}
            onSelectEvent={handleSelectEvent}
          />
        </div>

        {/* How It Works (4 Steps) */}
        <HowItWorks />

        {/* IU Bag Policy Checker (Explains the gate pain point) */}
        <BagPolicyGuide
          onOpenReserve={() => handleOpenReserve()}
        />

        {/* Upcoming Events, Stand Locations & Hours */}
        <EventsList
          onSelectEvent={handleSelectEvent}
        />

        {/* Pricing Section ($9 Swap, $35 Family, $3 Umbrella) */}
        <PricingSection
          onSelectTier={handleOpenReserve}
        />

        {/* Reservation Section with Fake Confirmation & Pass */}
        <ReservationSection
          initialEventId={selectedEventId}
          initialTierId={selectedTierId}
          onViewInTracker={handleOpenTracker}
        />

        {/* Live Bag Tracker Demo */}
        <BagTracker
          initialTag={activeTrackerTag}
        />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer with Student Business & Kelley School pitch credentials */}
      <Footer
        onNavClick={scrollToSection}
        onOpenReserve={() => handleOpenReserve()}
      />

      {/* Mobile Bottom Thumb Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        onNavClick={scrollToSection}
        onOpenReserve={() => handleOpenReserve()}
      />
    </div>
  );
}
