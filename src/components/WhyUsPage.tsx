import React, { useState } from 'react';
import { 
  Building2, 
  ShoppingBag, 
  CheckCircle2, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Play, 
  XCircle,
  ShieldCheck,
  Check,
  MapPin,
  Clock
} from 'lucide-react';

interface WhyUsPageProps {
  onTryDemo: () => void;
  onNavigateHome: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onTryDemo }) => {
  // State for expandable reference/source drawers
  const [sourcesOpen, setSourcesOpen] = useState<{ [key: string]: boolean }>({
    sec1: false,
    sec3: false,
    sec4: false,
    sec6: false,
  });

  const toggleSource = (key: string) => {
    setSourcesOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-900 py-10 sm:py-16 selection:bg-[#990000] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 text-left">
        
        {/* =====================================================================
            SECTION 1: The gate says no. Where does your bag go?
            ===================================================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            The gate says no. Where does your bag go?
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mb-8">
            “Kickoff is in ten minutes. You got dropped off at Memorial Stadium with a backpack. Security says it can’t go in, and the stadium has no bag check.”
          </p>

          {/* MAIN VISUAL: Opaque backpack beside clear tote */}
          <div className="rounded-2xl bg-[#FAF8F5] border border-stone-200 p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Opaque Backpack Card */}
              <div className="p-6 rounded-2xl bg-white border-2 border-stone-300 text-center flex flex-col items-center justify-center min-h-[200px]">
                <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center mb-3">
                  <ShoppingBag className="w-9 h-9 stroke-[2]" />
                </div>
                <strong className="text-lg font-bold text-stone-900 block">
                  Standard Opaque Backpack / Purse
                </strong>
                <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider mt-1 block">
                  Prohibited at Stadium Gates
                </span>
              </div>

              {/* Clear Tote Card */}
              <div className="p-6 rounded-2xl bg-white border-2 border-[#990000] text-center flex flex-col items-center justify-center min-h-[200px]">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#990000] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-9 h-9 stroke-[2]" />
                </div>
                <strong className="text-lg font-bold text-stone-900 block">
                  12″ × 6″ × 12″ Clear Stadium Tote
                </strong>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-1 block">
                  Permitted Inside Gate
                </span>
              </div>

            </div>

            {/* Direct Line Under Visual */}
            <div className="mt-6 pt-5 border-t border-stone-200 text-center md:text-left">
              <p className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                “Buying a clear tote gives you something to carry inside. You still need somewhere to leave your backpack.”
              </p>
            </div>
          </div>

          {/* Expandable Sources */}
          <div className="mt-4 pt-2">
            <button
              onClick={() => toggleSource('sec1')}
              className="text-xs font-semibold text-stone-500 hover:text-stone-800 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{sourcesOpen.sec1 ? 'Hide policy sources' : 'View policy sources'}</span>
              {sourcesOpen.sec1 ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {sourcesOpen.sec1 && (
              <div className="mt-2.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href="https://iuhoosiers.com/sports/2017/8/14/bag-policies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#990000] hover:text-[#800000] font-semibold underline underline-offset-2 flex items-center gap-1"
                >
                  <span>IU’s bag policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://iuhoosiers.com/sports/2025/9/8/merchants-bank-field-at-memorial-stadium-policies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#990000] hover:text-[#800000] font-semibold underline underline-offset-2 flex items-center gap-1"
                >
                  <span>Memorial Stadium’s policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </section>


        {/* =====================================================================
            SECTION 2: Hold My Bag gets you to the game in one stop.
            ===================================================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            Hold My Bag gets you to the game in one stop.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mb-8">
            Hold My Bag is a proposed <strong className="text-stone-900 font-bold">$9 staffed bag check with a clear loaner tote near the gate</strong>.
          </p>

          {/* Three Big Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center sm:text-left">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#990000] uppercase tracking-wider block mb-1">
                Step 1
              </span>
              <strong className="text-lg font-black text-stone-900 block">
                Check your bag
              </strong>
              <p className="text-xs text-stone-600 mt-1">
                Staff securely seals your bag with a numbered tamper tie outside the gate.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#990000] uppercase tracking-wider block mb-1">
                Step 2
              </span>
              <strong className="text-lg font-black text-stone-900 block">
                Borrow a clear tote
              </strong>
              <p className="text-xs text-stone-600 mt-1">
                Carry your phone, wallet, keys, and medications straight inside.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#990000] uppercase tracking-wider block mb-1">
                Step 3
              </span>
              <strong className="text-lg font-black text-stone-900 block">
                Pick up with your tag and ID
              </strong>
              <p className="text-xs text-stone-600 mt-1">
                Return the loaner tote after the game and pick up your bag in 30 seconds.
              </p>
            </div>
          </div>

          {/* MAIN VISUAL: Digital Claim Tag + Try the Demo Button Beside It */}
          <div className="rounded-2xl bg-stone-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Visual Claim Tag Card */}
            <div className="w-full md:w-80 rounded-2xl bg-[#FAF8F5] text-stone-900 p-5 border-2 border-stone-300 shadow-md text-left">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2 mb-2">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                    Claim Tag
                  </span>
                  <span className="text-2xl font-black font-mono text-[#990000]">
                    #IU-4082
                  </span>
                </div>
                <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                  Safe in Storage
                </span>
              </div>

              <div className="space-y-1 text-xs text-stone-700">
                <div className="flex justify-between">
                  <span className="text-stone-400">Tamper Seal:</span>
                  <strong className="font-mono text-stone-900">#ST-99410</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Stand Location:</span>
                  <strong className="text-stone-900">Near Gate E</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Pickup Rule:</span>
                  <strong className="text-stone-900">Matching ID Required</strong>
                </div>
              </div>
            </div>

            {/* Try the Demo Callout & Button Beside the Tag */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Try the interactive prototype
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-md">
                Experience the working reservation form, digital barcode claim pass, and real-time bag tracker created for this demo.
              </p>
              <div>
                <button
                  onClick={onTryDemo}
                  className="h-12 px-6 rounded-xl bg-[#990000] hover:bg-[#800000] active:scale-[0.98] text-white font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer mx-auto md:mx-0"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Try the Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>


        {/* =====================================================================
            SECTION 3: Who needs it?
            ===================================================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            Who needs it?
          </h2>

          <p className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed max-w-3xl mb-8">
            “Fans who arrive with a noncompliant bag and can’t quickly get back to a car or hotel.”
          </p>

          {/* MAIN VISUAL: Two Large Numbers Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Number 1: 51,184 */}
            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-center md:text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#990000] block mb-2">
                  Local crowd size
                </span>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black font-mono text-stone-900 tracking-tight leading-none">
                  51,184
                </div>
              </div>
              <p className="text-sm text-stone-600 mt-4 font-medium">
                Average attendance at IU home football games in 2025.
              </p>
            </div>

            {/* Number 2: 400+ */}
            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-center md:text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#990000] block mb-2">
                  Storage use at another venue
                </span>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black font-mono text-stone-900 tracking-tight leading-none">
                  400+
                </div>
              </div>
              <p className="text-sm text-stone-600 mt-4 font-medium">
                Bags stored on one Chelsea matchday.
              </p>
            </div>

          </div>

          {/* Real Omaha concert example */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-stone-800 text-sm">
            <span className="font-bold text-amber-900 block mb-1">What happens without a staffed service:</span>
            <p className="leading-relaxed">
              “At a 2024 Omaha concert, two attendees reported their purses missing after leaving them near security.”
            </p>
          </div>

          {/* Expandable Sources */}
          <div className="mt-4 pt-2">
            <button
              onClick={() => toggleSource('sec3')}
              className="text-xs font-semibold text-stone-500 hover:text-stone-800 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{sourcesOpen.sec3 ? 'Hide attendance & news sources' : 'View attendance & news sources'}</span>
              {sourcesOpen.sec3 ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {sourcesOpen.sec3 && (
              <div className="mt-2.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-700">IU 2025 Average Attendance:</span>
                  <a
                    href="https://iuhoosiers.com/staff-directory/Scott-Dolson/2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#990000] hover:text-[#800000] underline underline-offset-2 flex items-center gap-1 font-medium"
                  >
                    <span>IU Athletics (Scott Dolson bio)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-700">Chelsea Matchday Storage:</span>
                  <a
                    href="https://chelseasupportersgroup.net/2022/12/fans-forum-minutes-21/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#990000] hover:text-[#800000] underline underline-offset-2 flex items-center gap-1 font-medium"
                  >
                    <span>Chelsea Fans’ Forum minutes</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-700">Omaha Concert Bag Incident:</span>
                  <a
                    href="https://www.wowt.com/2024/06/13/omaha-concert-goers-claim-chi-health-center-staff-wrongfully-threw-out-purses/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#990000] hover:text-[#800000] underline underline-offset-2 flex items-center gap-1 font-medium"
                  >
                    <span>WOWT Omaha report</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>


        {/* =====================================================================
            SECTION 4: 35 paid swaps cover modeled game-day costs.
            ===================================================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            35 paid swaps cover modeled game-day costs.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mb-8">
            A small stand breaks even quickly on game-day variable costs.
          </p>

          {/* MAIN VISUAL: Break-even Chart with Visible Zero Line */}
          <div className="rounded-2xl bg-[#FAF8F5] border border-stone-200 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                  “What’s left after modeled game-day costs?”
                </h3>
                <span className="text-xs text-stone-500 font-medium">
                  Direct net return across 4 swap volumes
                </span>
              </div>

              {/* Pilot Target Highlight Callout */}
              <div className="bg-emerald-50 border border-emerald-300 px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-900">
                <span>Proposed pilot target: <strong>50 swaps</strong> ($450 sales)</span>
              </div>
            </div>

            {/* The 4-Column Bar Visual with Explicit Visible Zero Line */}
            <div className="relative pt-8 pb-4 max-w-3xl mx-auto">
              
              {/* 4 Bars Grid */}
              <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center items-end h-64 relative z-10">
                
                {/* Bar 1: 25 swaps -> -$82 */}
                <div className="flex flex-col items-center justify-end h-full">
                  <div className="h-[135px] flex items-end justify-center pb-2">
                    <span className="text-xs font-bold text-stone-400 font-mono">$225 sales</span>
                  </div>
                  <div className="w-full h-0.5 bg-stone-500" />
                  <div className="w-14 sm:w-20 bg-rose-500 rounded-b-xl h-[55px] flex items-center justify-center text-white shadow-xs">
                    <span className="text-xs font-black font-mono">−$82</span>
                  </div>
                  <div className="mt-3">
                    <strong className="text-xs sm:text-sm font-black text-stone-900 block font-mono">
                      25 swaps → −$82
                    </strong>
                  </div>
                </div>

                {/* Bar 2: 35 swaps -> about $0 */}
                <div className="flex flex-col items-center justify-end h-full">
                  <div className="h-[135px] flex items-end justify-center pb-2">
                    <span className="text-xs font-bold text-stone-500 font-mono">$315 sales</span>
                  </div>
                  <div className="w-full h-0.5 bg-stone-500 relative">
                    <div className="w-3 h-3 rounded-full bg-stone-800 absolute left-1/2 -translate-x-1/2 -top-1.5" />
                  </div>
                  <div className="h-[55px] flex items-start justify-center pt-2">
                    <span className="text-[11px] font-bold text-stone-500 font-mono">Break-even</span>
                  </div>
                  <div className="mt-3">
                    <strong className="text-xs sm:text-sm font-black text-stone-900 block font-mono">
                      35 swaps → about $0
                    </strong>
                  </div>
                </div>

                {/* Bar 3: 50 swaps -> +$123 (Target Highlight) */}
                <div className="flex flex-col items-center justify-end h-full">
                  <div className="flex flex-col items-center justify-end h-[135px]">
                    <span className="text-xs font-bold text-emerald-800 font-mono mb-1">
                      $450 in sales
                    </span>
                    <div className="w-14 sm:w-20 bg-emerald-600 rounded-t-xl h-[70px] flex items-center justify-center text-white shadow-xs ring-4 ring-emerald-200">
                      <span className="text-xs font-black font-mono">+$123</span>
                    </div>
                  </div>
                  <div className="w-full h-0.5 bg-stone-500" />
                  <div className="h-[55px] flex items-start justify-center pt-2">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase bg-emerald-100 px-1.5 py-0.5 rounded">
                      Pilot Target
                    </span>
                  </div>
                  <div className="mt-3">
                    <strong className="text-xs sm:text-sm font-black text-emerald-900 block font-mono">
                      50 swaps → +$123
                    </strong>
                  </div>
                </div>

                {/* Bar 4: 75 swaps -> +$329 */}
                <div className="flex flex-col items-center justify-end h-full">
                  <div className="flex flex-col items-center justify-end h-[135px]">
                    <span className="text-xs font-bold text-stone-600 font-mono mb-1">$675 sales</span>
                    <div className="w-14 sm:w-20 bg-[#990000] rounded-t-xl h-[120px] flex items-center justify-center text-white shadow-xs">
                      <span className="text-xs font-black font-mono">+$329</span>
                    </div>
                  </div>
                  <div className="w-full h-0.5 bg-stone-500" />
                  <div className="h-[55px]" />
                  <div className="mt-3">
                    <strong className="text-xs sm:text-sm font-black text-stone-900 block font-mono">
                      75 swaps → +$329
                    </strong>
                  </div>
                </div>

              </div>

              {/* Direct Zero Line Label */}
              <div className="absolute top-[156px] left-0 right-0 border-t-2 border-stone-400 border-dashed pointer-events-none flex items-center justify-between px-1">
                <span className="text-[10px] font-mono font-bold text-stone-600 bg-[#FAF8F5] px-1">
                  $0 Baseline
                </span>
                <span className="text-[10px] font-mono font-bold text-stone-600 bg-[#FAF8F5] px-1">
                  Covers Event Costs
                </span>
              </div>
            </div>
          </div>

          {/* Expandable Notes for Detailed Model Assumptions */}
          <div className="mt-4 pt-2">
            <button
              onClick={() => toggleSource('sec4')}
              className="text-xs font-semibold text-stone-500 hover:text-stone-800 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{sourcesOpen.sec4 ? 'Hide modeled cost assumptions' : 'View modeled cost assumptions'}</span>
              {sourcesOpen.sec4 ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {sourcesOpen.sec4 && (
              <div className="mt-2.5 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2">
                <ul className="space-y-1.5 list-disc list-inside">
                  <li><strong>$9 per standard swap</strong>: Base price per bag hold with loaner clear tote included.</li>
                  <li><strong>$287 fixed per event</strong>: Modeled as $192 staffing (2 student attendants @ $16/hr × 6 hrs) + $95 estimated insurance rider.</li>
                  <li><strong>About $0.79 per swap</strong>: Estimated at $0.50 for supplies & loaner tote wear + $0.29 card processing fees (based on 2.7% + $0.05 in-person fee).</li>
                  <li><strong>Exclusions</strong>: Startup equipment, employer payroll taxes/costs, and any university venue fee are outside this estimate. (Family pack and umbrella add-ons are kept in the main Pricing section).</li>
                </ul>

                <div className="pt-2 border-t border-stone-200">
                  <a
                    href="https://stripe.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#990000] hover:text-[#800000] font-semibold underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>Stripe in-person card pricing</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>


        {/* =====================================================================
            SECTION 5: One Bloomington game. One staffed stand.
            ===================================================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            One Bloomington game. One staffed stand.
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mb-8">
            Proposed pilot at an approved location near Memorial Stadium.
          </p>

          {/* MAIN VISUAL: Three Large Labels */}
          <div className="rounded-2xl bg-stone-900 text-white p-6 sm:p-8 mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-4">
              Pilot Roadmap
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="p-5 rounded-xl bg-stone-800/90 border border-stone-700">
                <span className="text-stone-400 uppercase tracking-wider text-[11px] font-bold block mb-1">
                  Metric 1
                </span>
                <strong className="text-2xl sm:text-3xl font-black text-white block">
                  Paid swaps
                </strong>
                <span className="text-xs text-stone-400 block mt-1">
                  Validates real customer demand
                </span>
              </div>

              <div className="p-5 rounded-xl bg-stone-800/90 border border-stone-700">
                <span className="text-stone-400 uppercase tracking-wider text-[11px] font-bold block mb-1">
                  Metric 2
                </span>
                <strong className="text-2xl sm:text-3xl font-black text-white block">
                  Time fans save
                </strong>
                <span className="text-xs text-stone-400 block mt-1">
                  Compared to walking back to cars
                </span>
              </div>

              <div className="p-5 rounded-xl bg-stone-800/90 border border-stone-700">
                <span className="text-stone-400 uppercase tracking-wider text-[11px] font-bold block mb-1">
                  Metric 3
                </span>
                <strong className="text-2xl sm:text-3xl font-black text-white block">
                  Pickup wait
                </strong>
                <span className="text-xs text-stone-400 block mt-1">
                  Tests rapid post-game retrieval speed
                </span>
              </div>
            </div>
          </div>

          {/* NME and IU Connection Line */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <p className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
              “I built a reservation and claim-tag prototype. The pilot would test whether fans will pay and whether two attendants can return bags quickly.”
            </p>
          </div>
        </section>


        {/* =====================================================================
            SECTION 6: Why Hold My Bag over the alternatives?
            ===================================================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            Why Hold My Bag over the alternatives?
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mb-8">
            Comparing game-day choices fans face when turned away at the gate.
          </p>

          {/* MAIN VISUAL: Compact Comparison Table with Hold My Bag Row Highlighted */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-6">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-100/80 border-b border-stone-200 text-stone-700">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider w-1/4">Option</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider w-1/3">What the fan gets</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider">Trade-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                
                {/* Row 1: Return to the car */}
                <tr className="hover:bg-stone-50">
                  <td className="py-3.5 px-4 font-bold text-stone-900">
                    Return to the car
                  </td>
                  <td className="py-3.5 px-4 text-stone-700">
                    A place to leave the bag if they drove
                  </td>
                  <td className="py-3.5 px-4 text-stone-600">
                    A round trip before entering
                  </td>
                </tr>

                {/* Row 2: Buy an IU clear tote */}
                <tr className="hover:bg-stone-50">
                  <td className="py-3.5 px-4 font-bold text-stone-900">
                    Buy an IU clear tote
                  </td>
                  <td className="py-3.5 px-4 text-stone-700">
                    A compliant bag for essentials
                  </td>
                  <td className="py-3.5 px-4 text-stone-600">
                    Still needs somewhere to leave the original bag
                  </td>
                </tr>

                {/* Row 3: Stadium locker (other cities) */}
                <tr className="hover:bg-stone-50">
                  <td className="py-3.5 px-4 font-bold text-stone-900">
                    Stadium locker
                    <span className="block text-[11px] font-normal text-stone-400">Comparison from other cities</span>
                  </td>
                  <td className="py-3.5 px-4 text-stone-700">
                    <strong>$10</strong> game-day storage at Soldier Field or Q2 Stadium
                  </td>
                  <td className="py-3.5 px-4 text-stone-600">
                    A separate clear bag if the fan wants to carry essentials
                  </td>
                </tr>

                {/* Row 4: Bounce (other cities) */}
                <tr className="hover:bg-stone-50">
                  <td className="py-3.5 px-4 font-bold text-stone-900">
                    Bounce
                    <span className="block text-[11px] font-normal text-stone-400">Comparison from other cities</span>
                  </td>
                  <td className="py-3.5 px-4 text-stone-700">
                    Partner-location storage <strong>from $4.95/day in Indianapolis</strong>
                  </td>
                  <td className="py-3.5 px-4 text-stone-600">
                    The fan needs a convenient drop-off location and a separate clear bag if needed
                  </td>
                </tr>

                {/* Row 5: Hold My Bag (Highlighted) */}
                <tr className="bg-[#990000]/10 border-2 border-[#990000]">
                  <td className="py-4 px-4 font-black text-[#990000] text-sm sm:text-base">
                    Hold My Bag
                  </td>
                  <td className="py-4 px-4 font-bold text-stone-900">
                    Proposed $9 for staffed storage and a clear loaner tote in one stop near the gate
                  </td>
                  <td className="py-4 px-4 font-bold text-[#990000]">
                    Return to the same stand with your tag and ID
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Sources and city comparison links below table */}
          <div className="pt-2 pb-6 border-b border-stone-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-500">
            <span className="font-semibold text-stone-700">Other city benchmarks:</span>
            <a
              href="https://www.chicagobears.com/game-day/az-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#990000] hover:text-[#800000] font-semibold underline underline-offset-2 flex items-center gap-1"
            >
              <span>Soldier Field</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.austinfc.com/stadium/bag-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#990000] hover:text-[#800000] font-semibold underline underline-offset-2 flex items-center gap-1"
            >
              <span>Q2 Stadium</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://bounce.com/luggage-storage/indianapolis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#990000] hover:text-[#800000] font-semibold underline underline-offset-2 flex items-center gap-1"
            >
              <span>Bounce Indianapolis</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Ending Pitch Sentence */}
          <div className="mt-8 p-6 rounded-2xl bg-[#990000] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                “Help me find a partner to test one stand at one Bloomington game.”
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 mt-1">
                Prototype is ready for pilot testing with IU Athletics or a campus venue sponsor.
              </p>
            </div>

            <a
              href="mailto:hello@holdmybag-iu.com?subject=Hold%20My%20Bag%20Pilot%20Partnership"
              className="h-11 px-5 rounded-xl bg-white hover:bg-stone-100 text-[#990000] font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
            >
              <span>Contact to Partner</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
