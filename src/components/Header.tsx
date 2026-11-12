import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ShieldCheck, QrCode } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenReserve: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenReserve }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'events', label: 'Events' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'tracker', label: 'Bag Tracker' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (id !== 'why-us') {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner: Authentic Student Venture Pitch Flag */}
      <div className="print:hidden bg-[#800000] text-amber-100 text-xs py-1.5 px-4 font-medium tracking-tight">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 truncate">
            <span className="font-bold text-white uppercase tracking-wider text-[10px] bg-[#660000] px-1.5 py-0.5 rounded">Pitch Demo</span>
            <span className="hidden sm:inline text-amber-200">·</span>
            <span className="truncate">IU Bloomington Student Business · KTP Pitch Reference</span>
          </div>
          <button
            onClick={() => handleNavClick('why-us')}
            className="shrink-0 text-amber-200 hover:text-white underline underline-offset-2 font-semibold cursor-pointer ml-2"
          >
            {activeTab === 'why-us' ? 'Viewing: Why Us Pitch Brief' : 'Why Us (5-Min Pitch Reference) →'}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar complying with 3-zone contract */}
      <header className="print:hidden sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with clean bag icon */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group shrink-0 focus-visible:outline-2 focus-visible:outline-[#990000]"
          >
            <div className="w-9 h-9 rounded-xl bg-[#990000] flex items-center justify-center text-white shadow-xs group-hover:bg-[#800000] transition-colors">
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-stone-900 group-hover:text-[#990000] transition-colors leading-tight">
                Hold My Bag
              </span>
              <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider">
                IU Bloomington
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 single-line clean navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer hover:text-[#990000] ${
                  activeTab === link.id
                    ? 'text-[#990000] font-semibold border-b-2 border-[#990000]'
                    : 'text-stone-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => handleNavClick('tracker')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5 text-[#990000]" />
              <span className="whitespace-nowrap">Track Tag</span>
            </button>

            <button
              onClick={onOpenReserve}
              className="h-10 px-4 text-xs sm:text-sm font-bold text-white bg-[#990000] hover:bg-[#800000] active:scale-[0.98] rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Reserve a Swap</span>
              <span className="opacity-90 font-mono font-medium">· $9</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 py-4 space-y-1 shadow-md">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-[#990000]/10 text-[#990000]'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <span>{link.label}</span>
                {link.id === 'tracker' && (
                  <span className="text-[11px] font-mono bg-stone-200 text-stone-700 px-1.5 py-0.5 rounded">
                    Lookup Tag
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-stone-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="w-full h-11 bg-[#990000] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Reserve a Swap ($9)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
