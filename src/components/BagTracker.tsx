import React, { useState, useEffect } from 'react';
import { Search, ShieldCheck, CheckCircle2, Clock, MapPin, Package, Camera, AlertCircle, RefreshCw, QrCode } from 'lucide-react';
import { SAMPLE_BAG_TRACKS } from '../data/mockData';
import { BagTrackingRecord } from '../types';

interface BagTrackerProps {
  initialTag?: string;
}

export const BagTracker: React.FC<BagTrackerProps> = ({ initialTag }) => {
  const [tagInput, setTagInput] = useState(initialTag || 'IU-4082');
  const [currentRecord, setCurrentRecord] = useState<BagTrackingRecord | null>(
    SAMPLE_BAG_TRACKS['IU-4082']
  );
  const [errorMsg, setErrorMsg] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (initialTag) {
      setTagInput(initialTag);
      handleLookup(initialTag);
    }
  }, [initialTag]);

  const handleLookup = (tagToSearch?: string) => {
    const query = (tagToSearch || tagInput).trim().toUpperCase();
    if (!query) {
      setErrorMsg('Please enter a tag number.');
      return;
    }

    setIsSearching(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsSearching(false);
      // Clean query (allow with or without #)
      const cleanTag = query.replace('#', '');
      
      if (SAMPLE_BAG_TRACKS[cleanTag]) {
        setCurrentRecord(SAMPLE_BAG_TRACKS[cleanTag]);
      } else {
        // Generate a plausible dynamic demo record if user entered their own tag number!
        const dynamicRecord: BagTrackingRecord = {
          tagNumber: cleanTag.startsWith('IU-') ? cleanTag : `IU-${cleanTag}`,
          ownerName: 'Guest Cardholder',
          eventTitle: 'IU Game Day / Campus Event',
          venue: 'Memorial Stadium & Assembly Hall Area',
          standLocation: 'Main Canopy Gate E',
          bagDescription: 'Personal bag with serial security lock',
          sealNumber: `ST-${Math.floor(10000 + Math.random() * 89999)}`,
          intakeTime: 'Recently logged',
          status: 'stored',
          statusHeadline: 'Your bag is safe & sealed in secure storage',
          statusDescription: 'Your bag is locked with a single-use serial zip tie inside our weather-tight storage canopy under active staff supervision.',
          rackLocation: 'Section A · Bin 08',
          staffAttendant: 'Taylor W. (IU Student Attendant)',
          photoUrl: '/src/assets/images/clear_tote_bag_1794267747585.jpg',
          itemsLent: '1x Regulation Clear Loaner Tote',
        };
        setCurrentRecord(dynamicRecord);
      }
    }, 250);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ready':
        return {
          label: 'Ready for Pickup',
          bgColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          dotColor: 'bg-emerald-500',
        };
      case 'stored':
        return {
          label: 'Safe in Storage',
          bgColor: 'bg-blue-50 text-blue-800 border-blue-200',
          dotColor: 'bg-blue-500',
        };
      case 'intake':
      default:
        return {
          label: 'Just Checked In',
          bgColor: 'bg-amber-50 text-amber-800 border-amber-200',
          dotColor: 'bg-amber-500',
        };
    }
  };

  return (
    <section id="tracker" className="py-16 sm:py-20 bg-white border-y border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs sm:text-sm font-bold text-[#990000] uppercase tracking-wider mb-2">
            Real-Time Peace of Mind
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Bag Status Tracker
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Check the live safety and storage location of your bag right from your phone during the event.
          </p>

          {/* Quick Demo Test Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-stone-500 font-medium">Try demo tags:</span>
            {Object.keys(SAMPLE_BAG_TRACKS).map((tagKey) => (
              <button
                key={tagKey}
                onClick={() => {
                  setTagInput(tagKey);
                  handleLookup(tagKey);
                }}
                className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                  currentRecord?.tagNumber === tagKey
                    ? 'bg-[#990000] text-white border-[#990000]'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-[#990000]'
                }`}
              >
                #{tagKey} ({SAMPLE_BAG_TRACKS[tagKey].status === 'ready' ? 'Ready' : 'Safe'})
              </button>
            ))}
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-lg mx-auto mb-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLookup();
            }}
            className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#FAF8F5] border-2 border-stone-200 focus-within:border-[#990000] transition-colors"
          >
            <div className="pl-3 text-stone-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Enter tag # (e.g. IU-4082)"
              className="flex-1 bg-transparent py-2 px-2 text-sm sm:text-base font-mono font-semibold text-stone-900 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="h-11 px-5 rounded-xl bg-[#990000] hover:bg-[#800000] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              {isSearching ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <span>Look Up</span>
              )}
            </button>
          </form>

          {errorMsg && (
            <p className="text-xs text-rose-600 mt-2 text-center font-medium">
              {errorMsg}
            </p>
          )}
        </div>

        {/* Live Status Card */}
        {currentRecord && (
          <div className="bg-[#FAF8F5] rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs text-left">
            
            {/* Top Bar: Tag # + Status Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">
                  Holding Claim Tag
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#990000]">
                  #{currentRecord.tagNumber}
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  Owner: <strong className="text-stone-900">{currentRecord.ownerName}</strong>
                </span>
              </div>

              {/* Status Badge */}
              <div className="self-start sm:self-auto">
                {(() => {
                  const badge = getStatusBadge(currentRecord.status);
                  return (
                    <div className={`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 ${badge.bgColor}`}>
                      <span className={`w-2 h-2 rounded-full ${badge.dotColor}`} />
                      <span>{badge.label}</span>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Headline Callout */}
            <div className="py-6 border-b border-stone-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#990000] shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                    {currentRecord.statusHeadline}
                  </h4>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                    {currentRecord.statusDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* 4-Step Visual Progress Stepper */}
            <div className="py-6 border-b border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-4">
                Custody Chain & Verification
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                {/* Step 1 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>1. Intake Photo</span>
                  </div>
                  <span className="text-stone-600 block text-[11px] font-mono">
                    Logged: {currentRecord.intakeTime}
                  </span>
                </div>

                {/* Step 2 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>2. Tamper Seal</span>
                  </div>
                  <span className="text-stone-900 font-mono font-bold block text-[11px]">
                    Serial #{currentRecord.sealNumber}
                  </span>
                </div>

                {/* Step 3 */}
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  <div className={`flex items-center gap-1.5 font-bold mb-1 ${
                    currentRecord.status === 'stored' || currentRecord.status === 'ready'
                      ? 'text-emerald-600'
                      : 'text-stone-400'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>3. Monitored Rack</span>
                  </div>
                  <span className="text-stone-600 block text-[11px]">
                    {currentRecord.rackLocation}
                  </span>
                </div>

                {/* Step 4 */}
                <div className={`p-3 rounded-xl border ${
                  currentRecord.status === 'ready'
                    ? 'bg-emerald-50/70 border-emerald-300'
                    : 'bg-white border-stone-200'
                }`}>
                  <div className={`flex items-center gap-1.5 font-bold mb-1 ${
                    currentRecord.status === 'ready' ? 'text-emerald-700' : 'text-stone-400'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>4. Pickup Staged</span>
                  </div>
                  <span className="text-stone-600 block text-[11px]">
                    {currentRecord.status === 'ready' ? 'At front counter' : 'Post-event'}
                  </span>
                </div>
              </div>
            </div>

            {/* Bag Specifics + Storage Stand Location */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-3">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Check Details
                </span>
                
                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div>
                    <span className="text-stone-400 text-xs block">Checked Belongings:</span>
                    <strong className="text-stone-900 font-medium block">{currentRecord.bagDescription}</strong>
                  </div>
                  <div className="pt-1 text-xs text-stone-600">
                    <span className="text-stone-400">Loaner bag provided: </span>
                    <span className="font-semibold text-stone-800">{currentRecord.itemsLent}</span>
                  </div>
                  <div className="pt-1 text-xs text-stone-500">
                    <span>Intake Attendant: </span>
                    <span className="font-medium text-stone-700">{currentRecord.staffAttendant}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Pickup Instructions
                </span>
                
                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block">{currentRecord.standLocation}</strong>
                      <span className="text-stone-500 text-xs">{currentRecord.eventTitle}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-50 text-xs text-stone-700">
                    <strong>To retrieve your bag:</strong> Show this screen and your driver's license or student ID to match the name <em>"{currentRecord.ownerName}"</em>. Return the loaner clear tote at the counter.
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
