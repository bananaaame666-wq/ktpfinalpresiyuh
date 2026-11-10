import React, { useState } from 'react';
import { Calendar, Users, Phone, User, CheckCircle2, QrCode, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/mockData';
import { Reservation } from '../types';

interface ReservationSectionProps {
  initialEventId?: string;
  initialTierId?: string;
  onViewInTracker: (tagNumber: string) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialEventId,
  initialTierId,
  onViewInTracker,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventId, setEventId] = useState(initialEventId || UPCOMING_EVENTS[0].id);
  const [peopleCount, setPeopleCount] = useState<number>(initialTierId === 'family-pack' ? 4 : 1);
  const [umbrellaCount, setUmbrellaCount] = useState<number>(initialTierId === 'umbrella-hold' ? 1 : 0);
  const [keepClearBag, setKeepClearBag] = useState(false);
  const [arrivalWindow, setArrivalWindow] = useState('1 hour before event');

  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);
  const [copied, setCopied] = useState(false);

  // Quick Demo Presets for Pitch Presentation
  const handleQuickFill = (type: 'student' | 'family') => {
    if (type === 'student') {
      setFullName('Jordan Miller');
      setPhone('(812) 555-0192');
      setEventId('football-michigan');
      setPeopleCount(1);
      setUmbrellaCount(0);
      setKeepClearBag(false);
    } else {
      setFullName('The Thompson Family');
      setPhone('(317) 555-8831');
      setEventId('commencement-2026');
      setPeopleCount(4);
      setUmbrellaCount(2);
      setKeepClearBag(true);
    }
  };

  // Calculate simulated price
  const calculateTotal = () => {
    let base = 0;
    if (peopleCount >= 4 && peopleCount <= 5) {
      base = 35; // Family pack discount
    } else {
      base = peopleCount * 9;
    }
    const umbrellaTotal = umbrellaCount * 3;
    const bagKeepTotal = keepClearBag ? (peopleCount * 5) : 0;
    return base + umbrellaTotal + bagKeepTotal;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const selectedEv = UPCOMING_EVENTS.find((ev) => ev.id === eventId) || UPCOMING_EVENTS[0];
    const randomCode = `IU-${Math.floor(1000 + Math.random() * 9000)}`;

    const newRes: Reservation = {
      id: `RES-${Date.now()}`,
      confirmationCode: randomCode,
      fullName,
      phone,
      eventId: selectedEv.id,
      eventTitle: selectedEv.title,
      venue: selectedEv.venue,
      standLocation: selectedEv.standLocation,
      peopleCount,
      umbrellaCount,
      keepClearBag,
      estimatedArrival: arrivalWindow,
      totalAmount: calculateTotal(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'confirmed',
    };

    setConfirmedReservation(newRes);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedEvent = UPCOMING_EVENTS.find((ev) => ev.id === eventId) || UPCOMING_EVENTS[0];

  return (
    <section id="reserve" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs sm:text-sm font-bold text-[#990000] uppercase tracking-wider mb-2">
            No Account Needed · Fast Spot Hold
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Reserve Your Bag Swap
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Skip the walk back to your car. Reserve a slot at our stand and your regulation clear bag will be waiting when you arrive.
          </p>

          {/* Quick Demo Fill Buttons */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs text-stone-500 font-medium">Pitch demo quick-fill:</span>
            <button
              type="button"
              onClick={() => handleQuickFill('student')}
              className="text-xs font-semibold px-2.5 py-1 bg-white border border-stone-200 text-stone-700 rounded-lg hover:border-[#990000] hover:text-[#990000] transition-colors cursor-pointer"
            >
              Game Day Fan
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill('family')}
              className="text-xs font-semibold px-2.5 py-1 bg-white border border-stone-200 text-stone-700 rounded-lg hover:border-[#990000] hover:text-[#990000] transition-colors cursor-pointer"
            >
              Commencement Family
            </button>
          </div>
        </div>

        {/* Form or Fake Confirmation Screen */}
        {confirmedReservation ? (
          /* Confirmation Screen */
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm text-left">
            <div className="text-center pb-6 border-b border-stone-100">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Reservation Confirmed (Demo)
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                You're all set, {confirmedReservation.fullName}!
              </h3>
              <p className="text-sm text-stone-600 mt-1 max-w-md mx-auto">
                Show this digital confirmation or your phone number when you walk up to our stand.
              </p>
            </div>

            {/* Realistic Digital Claim Pass Card */}
            <div className="my-6 rounded-2xl bg-[#FAF8F5] border-2 border-dashed border-[#990000]/40 p-5 sm:p-6 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs text-stone-500 block uppercase tracking-wider font-semibold">
                    Reservation Tag Number
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-3xl font-mono font-black text-[#990000] tracking-tight">
                      #{confirmedReservation.confirmationCode}
                    </span>
                    <button
                      onClick={() => handleCopyCode(confirmedReservation.confirmationCode)}
                      className="p-1.5 rounded-lg hover:bg-stone-200 text-stone-500 transition-colors"
                      title="Copy code"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs text-stone-500 block font-medium">Estimated Total Due At Stand</span>
                  <span className="text-2xl font-mono font-bold text-stone-900">
                    ${confirmedReservation.totalAmount}
                  </span>
                  <span className="text-[11px] text-stone-400 block">Pay with Card, Apple Pay, or Venmo</span>
                </div>
              </div>

              {/* Event & Location details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
                <div>
                  <span className="text-stone-400 block text-xs">Event:</span>
                  <strong className="text-stone-900 font-bold block">{confirmedReservation.eventTitle}</strong>
                  <span className="text-stone-600 block">{confirmedReservation.venue}</span>
                </div>

                <div>
                  <span className="text-stone-400 block text-xs">Stand Location:</span>
                  <strong className="text-stone-900 font-semibold block">{confirmedReservation.standLocation}</strong>
                </div>

                <div>
                  <span className="text-stone-400 block text-xs">Package Reserved:</span>
                  <span className="text-stone-800 font-medium">
                    {confirmedReservation.peopleCount} Bag Swap{confirmedReservation.peopleCount > 1 ? 's' : ''} (Loaner Clear Totes Included)
                  </span>
                  {confirmedReservation.umbrellaCount > 0 && (
                    <span className="text-stone-600 block text-xs">+ {confirmedReservation.umbrellaCount} Umbrella Hold(s)</span>
                  )}
                </div>

                <div>
                  <span className="text-stone-400 block text-xs">Intake Instructions:</span>
                  <span className="text-stone-700 font-medium">
                    Arrive ~{confirmedReservation.estimatedArrival}. We will lock your bag with tamper seal and hand you physical claim token.
                  </span>
                </div>
              </div>

              {/* Simulated QR barcode */}
              <div className="mt-5 pt-4 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg p-1 border border-stone-200 flex items-center justify-center">
                    <QrCode className="w-10 h-10 text-stone-900" />
                  </div>
                  <div className="text-xs">
                    <span className="font-mono font-bold text-stone-800">SCAN AT TENT</span>
                    <span className="block text-[11px] text-stone-500">ID verification required at pickup</span>
                  </div>
                </div>

                <div className="text-[11px] text-stone-400 uppercase tracking-widest font-mono hidden sm:block">
                  IU-HMB-PASS
                </div>
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onViewInTracker(confirmedReservation.confirmationCode)}
                className="h-12 px-6 rounded-xl bg-[#990000] hover:bg-[#800000] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>View in Bag Tracker Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setConfirmedReservation(null)}
                className="h-12 px-5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 text-left"
          >
            {/* Event Selection */}
            <div>
              <label htmlFor="reserve-event" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                1. Select IU Event
              </label>
              <div className="relative">
                <select
                  id="reserve-event"
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-sm font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#990000]/40 focus:border-[#990000]"
                >
                  {UPCOMING_EVENTS.map((ev) => (
                    <option key={ev.id} value={ev.id}>
                      {ev.title} ({ev.date})
                    </option>
                  ))}
                </select>
              </div>

              {/* Event Stand summary helper */}
              <div className="mt-2.5 p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">{selectedEvent.standLocation}</span>
                  <span className="block text-stone-500">Stand Hours: {selectedEvent.standHours}</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="full-name" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  2. Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-4" />
                  <input
                    id="full-name"
                    type="text"
                    required
                    placeholder="e.g. Jordan Miller"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#990000]/40 focus:border-[#990000]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone-number" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  3. Cell Phone (for pickup text)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-4" />
                  <input
                    id="phone-number"
                    type="tel"
                    required
                    placeholder="(812) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#990000]/40 focus:border-[#990000]"
                  />
                </div>
              </div>
            </div>

            {/* Number of People / Bags */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                4. Number of Bags to Hold
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPeopleCount(num)}
                    className={`h-11 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                      peopleCount === num
                        ? 'bg-[#990000] text-white shadow-xs'
                        : 'bg-[#FAF8F5] border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {num} {num === 1 ? 'Bag' : 'Bags'}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-stone-500 mt-2">
                <span>$9 per bag loan & hold</span>
                {peopleCount >= 4 && (
                  <span className="font-semibold text-emerald-700">
                    Family Pack active ($35 for {peopleCount} bags)!
                  </span>
                )}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                5. Add-ons
              </label>

              {/* Umbrella Hold Option */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="umbrella-check"
                    checked={umbrellaCount > 0}
                    onChange={(e) => setUmbrellaCount(e.target.checked ? 1 : 0)}
                    className="w-4 h-4 accent-[#990000] rounded cursor-pointer"
                  />
                  <label htmlFor="umbrella-check" className="text-xs sm:text-sm text-stone-800 cursor-pointer">
                    <span className="font-bold">Hold an umbrella (+$3)</span>
                    <span className="block text-xs text-stone-500">IU prohibits all umbrellas inside the gates</span>
                  </label>
                </div>
                {umbrellaCount > 0 && (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setUmbrellaCount(Math.max(1, umbrellaCount - 1))}
                      className="w-7 h-7 rounded bg-white border border-stone-300 text-xs font-bold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-mono text-xs font-bold px-1">{umbrellaCount}</span>
                    <button
                      type="button"
                      onClick={() => setUmbrellaCount(umbrellaCount + 1)}
                      className="w-7 h-7 rounded bg-white border border-stone-300 text-xs font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

              {/* Keep Clear Bag Option */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="keep-bag-check"
                    checked={keepClearBag}
                    onChange={(e) => setKeepClearBag(e.target.checked)}
                    className="w-4 h-4 accent-[#990000] rounded cursor-pointer"
                  />
                  <label htmlFor="keep-bag-check" className="text-xs sm:text-sm text-stone-800 cursor-pointer">
                    <span className="font-bold">Keep clear tote bag souvenir (+$5 each)</span>
                    <span className="block text-xs text-stone-500">Otherwise return it at pickup for no extra cost</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Estimated Total Bar & Submit */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-500 block font-medium">Estimated Total (Pay at Stand)</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-stone-900 font-mono tracking-tight">
                    ${calculateTotal()}
                  </span>
                  <span className="text-xs text-stone-500">no advance deposit required</span>
                </div>
              </div>

              <button
                type="submit"
                className="h-13 px-8 rounded-xl bg-[#990000] hover:bg-[#800000] active:scale-[0.98] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Demo Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
