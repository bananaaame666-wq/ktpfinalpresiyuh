import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/mockData';
import { EventItem } from '../types';

interface EventsListProps {
  onSelectEvent: (eventId: string) => void;
}

export const EventsList: React.FC<EventsListProps> = ({ onSelectEvent }) => {
  const [filter, setFilter] = useState<'all' | 'commencement' | 'traditions' | 'football' | 'basketball'>('all');

  const filteredEvents = UPCOMING_EVENTS.filter((ev) => {
    if (filter === 'all') return true;
    return ev.category === filter;
  });

  return (
    <section id="events" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs sm:text-sm font-bold text-[#990000] uppercase tracking-wider mb-2">
              Indiana University Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
              Upcoming Events & Stand Locations
            </h2>
            <p className="mt-2 text-base text-stone-600 max-w-xl">
              We operate at every major IU event with strict clear-bag policies. Stands open 2 hours before start and close 1 hour after.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto no-scrollbar shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All ({UPCOMING_EVENTS.length})
            </button>
            <button
              onClick={() => setFilter('commencement')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'commencement'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Commencement
            </button>
            <button
              onClick={() => setFilter('traditions')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'traditions'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Little 500
            </button>
            <button
              onClick={() => setFilter('football')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'football'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Football
            </button>
            <button
              onClick={() => setFilter('basketball')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'basketball'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Basketball
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Event Category & Venue */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-stone-900">{item.venue}</span>
                  <span className="text-[#990000] font-medium uppercase tracking-wider text-[11px]">
                    {item.category === 'commencement' ? 'Graduation Week' : item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Details List */}
                <div className="space-y-2 text-xs sm:text-sm text-stone-600 mb-4 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900">{item.date}</span>
                      <span className="text-stone-500 block text-xs">{item.time}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-800">Stand Location: </span>
                      <span className="text-stone-600">{item.standLocation}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-800">Hours: </span>
                      <span className="text-stone-700">{item.standHours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1 text-xs text-stone-500">
                    <Users className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>Expected crowd: {item.expectedAttendance}</span>
                  </div>
                </div>

                {/* Helpful Note / Why Bags Get Turned Away */}
                <div className="text-xs text-amber-900 bg-amber-50/80 border border-amber-200/60 rounded-xl p-2.5 mb-5 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{item.notes}</span>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-stone-100">
                <span className="text-xs text-stone-500">
                  Guaranteed stand slot
                </span>

                <button
                  onClick={() => onSelectEvent(item.id)}
                  className="h-11 px-5 rounded-xl bg-[#990000] hover:bg-[#800000] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Reserve Swap</span>
                  <span className="opacity-90 font-mono">($9)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gate Walk Distance Callout */}
        <div className="mt-8 p-4 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs sm:text-sm text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-stone-800">
            <MapPin className="w-4 h-4 text-[#990000] shrink-0" />
            <span>
              <strong>All stands are located outside security check</strong> — you do not need a ticket scanned to drop or pick up your bag.
            </span>
          </div>
          <span className="text-xs text-[#990000] font-bold shrink-0">
            Avg. distance to gate: 40 steps
          </span>
        </div>

      </div>
    </section>
  );
};
