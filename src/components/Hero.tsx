import React from 'react';
import { ArrowRight, MapPin, Clock, Calendar, CheckCircle, ShieldAlert, Sparkles, QrCode } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/mockData';

interface HeroProps {
  onOpenReserve: () => void;
  onOpenTracker: (tag?: string) => void;
  onSelectEvent: (eventId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReserve, onOpenTracker, onSelectEvent }) => {
  const nextEvent = UPCOMING_EVENTS[0]; // IU Spring Commencement 2026 or Football

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#FAF8F5]">
      {/* Subtle Cream & Crimson Accents */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Pitch Quick Demo Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#990000] animate-pulse" />
            <p className="text-xs sm:text-sm text-stone-700">
              <span className="font-bold text-stone-900">Proposed Pilot Concept:</span> Pop-up stand near Memorial Stadium & Simon Skjodt Assembly Hall
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenTracker('IU-4082')}
              className="text-xs font-semibold text-[#990000] hover:text-[#800000] bg-[#990000]/10 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            >
              Demo Tag: #IU-4082
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Primary Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Context kicker without pills */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#990000] tracking-wide uppercase">
              <span>Indiana University Bloomington</span>
              <span aria-hidden="true">·</span>
              <span>Campus Bag Swap Stand</span>
            </div>

            {/* Short Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15] text-balance">
              Turned away at the gate? <br className="hidden sm:inline" />
              <span className="text-[#990000]">We hold your bag.</span>
            </h1>

            {/* One line explaining what we do */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              IU venues ban purses, backpacks, and umbrellas—with no lockers inside. Drop your bag at our tent, borrow a regulation clear tote for your phone and keys, and enjoy the event.
            </p>

            {/* Big Phone-Friendly Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenReserve}
                className="h-14 px-8 rounded-2xl bg-[#990000] hover:bg-[#800000] active:scale-[0.98] text-white font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
              >
                <span>Reserve a Swap</span>
                <span className="opacity-80 font-mono text-sm font-normal">($9)</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <button
                onClick={() => onOpenTracker()}
                className="h-14 px-6 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-base transition-colors flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
              >
                <QrCode className="w-5 h-5 text-stone-600" />
                <span>Track My Bag</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-500 pt-1">
              <span className="flex items-center gap-1.5 font-medium text-stone-700">
                <CheckCircle className="w-4 h-4 text-[#990000]" />
                Tamper-evident sealed zip ties
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5 font-medium text-stone-700">
                <CheckCircle className="w-4 h-4 text-[#990000]" />
                Photo logged at intake
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5 font-medium text-stone-700">
                <CheckCircle className="w-4 h-4 text-[#990000]" />
                ID-matched pickup
              </span>
            </div>
          </div>

          {/* Right Column: Visual Anchor + Real Stand Photo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200/90 bg-white shadow-sm">
              <img
                src="/src/assets/images/bag_swap_stand_1794267747782.jpg"
                alt="Hold My Bag student pop-up tent outside Indiana University stadium gates"
                className="w-full h-56 sm:h-64 object-cover"
                loading="eager"
              />
              
              {/* Stand Location Badge Overlay */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 flex items-center gap-1.5 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#990000]" />
                <span>Stand outside Gate E</span>
              </div>

              {/* Bottom Card Inside Hero Right */}
              <div className="p-4 bg-white border-t border-stone-100">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="font-semibold text-stone-900">How the Swap works</span>
                  <span className="text-[#990000] font-medium">Quick 60-second stop</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="block text-[11px] text-stone-500">You drop:</span>
                    <strong className="text-stone-900 font-semibold">Any purse or backpack</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="block text-[11px] text-stone-500">You carry in:</span>
                    <strong className="text-emerald-700 font-semibold">12"×6"×12" clear loaner</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Upcoming Event Highlight Card (User requirement) */}
            <div className="rounded-2xl bg-white border border-stone-200 p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#990000]">
                  Next Upcoming Event
                </span>
                <span className="text-xs font-medium text-stone-500">{nextEvent.category === 'commencement' ? 'Campus Event' : 'Game Day'}</span>
              </div>
              
              <h3 className="text-base font-bold text-stone-900 tracking-tight mb-2">
                {nextEvent.title}
              </h3>

              <div className="space-y-1.5 text-xs text-stone-600 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="font-medium text-stone-800">{nextEvent.date}</span>
                  <span className="text-stone-400">·</span>
                  <span>{nextEvent.time.split('(')[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="truncate">{nextEvent.standLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="text-stone-700 font-medium">Hours: {nextEvent.standHours}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => onSelectEvent(nextEvent.id)}
                  className="flex-1 py-2 px-3 text-xs font-bold text-white bg-[#990000] hover:bg-[#800000] rounded-xl transition-colors text-center cursor-pointer"
                >
                  Reserve For This Event ($9)
                </button>
                <a
                  href="#events"
                  className="py-2 px-3 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors text-center"
                >
                  View All
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
