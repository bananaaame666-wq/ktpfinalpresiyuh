import React from 'react';
import { Home, HelpCircle, Calendar, QrCode, PlusCircle, CheckCircle } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  onNavClick: (id: string) => void;
  onOpenReserve: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onNavClick,
  onOpenReserve,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 lg:hidden safe-area-bottom shadow-lg">
      <div className="grid grid-cols-5 items-center h-15 px-2">
        {/* Home */}
        <button
          onClick={() => onNavClick('home')}
          className={`flex flex-col items-center justify-center min-h-[44px] cursor-pointer transition-colors ${
            activeTab === 'home' ? 'text-[#990000]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Home</span>
        </button>

        {/* Steps */}
        <button
          onClick={() => onNavClick('how-it-works')}
          className={`flex flex-col items-center justify-center min-h-[44px] cursor-pointer transition-colors ${
            activeTab === 'how-it-works' ? 'text-[#990000]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <CheckCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Steps</span>
        </button>

        {/* Events */}
        <button
          onClick={() => onNavClick('events')}
          className={`flex flex-col items-center justify-center min-h-[44px] cursor-pointer transition-colors ${
            activeTab === 'events' ? 'text-[#990000]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Events</span>
        </button>

        {/* Tracker */}
        <button
          onClick={() => onNavClick('tracker')}
          className={`flex flex-col items-center justify-center min-h-[44px] cursor-pointer transition-colors ${
            activeTab === 'tracker' ? 'text-[#990000]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <QrCode className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Tracker</span>
        </button>

        {/* Reserve CTA */}
        <button
          onClick={onOpenReserve}
          className="flex flex-col items-center justify-center min-h-[44px] text-[#990000] cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#990000] text-white flex items-center justify-center shadow-xs">
            <PlusCircle className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-[#990000] mt-0.5 tracking-tight">Reserve</span>
        </button>
      </div>
    </div>
  );
};
