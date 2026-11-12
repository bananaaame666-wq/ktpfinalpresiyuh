import React from 'react';
import { 
  Building2, 
  AlertTriangle, 
  Users, 
  Layers, 
  DollarSign, 
  ShieldCheck, 
  TrendingUp, 
  Printer, 
  ArrowRight, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Play, 
  Scale, 
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';

interface WhyUsPageProps {
  onTryDemo: () => void;
  onNavigateHome: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onTryDemo, onNavigateHome }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* =========================================================================
          SCREEN-ONLY VIEW: 5-Minute KTP Pitch Deck & Visual Reference Guide
          ========================================================================= */}
      <div className="print:hidden">
        {/* Top Pitch Deck Toolbar */}
        <div className="bg-stone-900 text-stone-200 border-b border-stone-800 py-3 px-4 sticky top-16 z-30 shadow-md">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                KTP Pitch Reference
              </span>
              <span className="text-stone-400 hidden sm:inline">·</span>
              <span className="text-stone-300 font-medium">5-Minute Executive Presentation Guide</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={onTryDemo}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#990000] hover:bg-[#800000] text-white font-bold transition-colors cursor-pointer shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Try the Demo</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-semibold transition-colors cursor-pointer border border-stone-700"
                title="Print 1-page typed executive summary"
              >
                <Printer className="w-3.5 h-3.5 text-stone-300" />
                <span>Print 1-Page Summary</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pitch Hero Header */}
        <section className="pt-8 pb-6 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#990000] uppercase tracking-wider mb-1.5">
                <span>Hold My Bag</span>
                <span>·</span>
                <span>Why Us · Pitch Deck Outline</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Why Hold My Bag?
              </h1>
              <p className="text-base text-stone-600 mt-2 max-w-2xl">
                A 5-minute executive briefing on solving Indiana University's stadium clear-bag dilemma with high-margin student logistics.
              </p>
            </div>

            {/* Presentation Pacing Guide */}
            <div className="bg-white p-3.5 rounded-2xl border border-stone-200 text-xs shadow-xs shrink-0 max-w-xs">
              <div className="flex items-center justify-between text-stone-500 font-semibold mb-1">
                <span className="flex items-center gap-1 text-[#990000]">
                  <Clock className="w-3.5 h-3.5" />
                  Target: 5 Minutes
                </span>
                <span className="font-mono text-stone-700">7 Core Points</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-tight">
                Quick-scan headings and quantitative evidence structured in logical investor order.
              </p>
            </div>
          </div>
        </section>

        {/* Main 7 Sections Content */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 space-y-8">
          
          {/* =====================================================================
              1. BUSINESS NAME AND CONCEPT
              ===================================================================== */}
          <section id="why-1" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs relative">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#990000] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Business Name & Concept
                </h2>
              </div>
              <span className="text-xs font-semibold text-stone-400 hidden sm:inline">0:00 – 0:40</span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 mb-5 text-stone-800">
              <p className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                <strong className="text-[#990000]">Hold My Bag</strong> is a mobile, pop-up stadium-gate bag check and loaner clear-bag service that rescues visitors, students, and families turned away by strict security policies outside Indiana University Bloomington athletic and commencement venues.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-stone-400 uppercase tracking-wider text-[10px] font-bold block mb-1">
                  What It Does
                </span>
                <p className="font-semibold text-stone-800">
                  Instant bag swap & secure holding: we hold non-compliant bags and lend a regulation 12"×6"×12" clear tote.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-stone-400 uppercase tracking-wider text-[10px] font-bold block mb-1">
                  Who It Serves
                </span>
                <p className="font-semibold text-stone-800">
                  Visiting parents, alumni, families with diaper bags, and students carrying backpacks or umbrellas.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-stone-400 uppercase tracking-wider text-[10px] font-bold block mb-1">
                  Where It Starts
                </span>
                <p className="font-semibold text-stone-800">
                  Memorial Stadium (Gate E) and Simon Skjodt Assembly Hall (South Plaza) in Bloomington, Indiana.
                </p>
              </div>
            </div>
          </section>

          {/* =====================================================================
              2. PROBLEM AND OPPORTUNITY
              ===================================================================== */}
          <section id="why-2" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs relative">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#990000] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Problem & Opportunity
                </h2>
              </div>
              <span className="text-xs font-semibold text-stone-400 hidden sm:inline">0:40 – 1:30</span>
            </div>

            {/* Bloomington Scenario Story */}
            <div className="space-y-4 text-sm text-stone-700">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-xs font-bold text-[#990000] uppercase tracking-wider block mb-1">
                  Specific Bloomington Scenario
                </span>
                <p className="leading-relaxed">
                  It's Saturday morning in Bloomington. A grandmother and mother travel four hours to see their daughter graduate at Simon Skjodt Assembly Hall (or attend a sellout IU vs. Michigan game at Memorial Stadium). At the gate turnstiles, event security points to the mother’s leather shoulder purse and diaper bag: <em>"Bags larger than 4.5"×6.5" and all backpacks are prohibited. You cannot enter."</em>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                  <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    What Makes This Difficult Today
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700 leading-relaxed">
                    <li>• <strong>Zero venue storage:</strong> IU Athletics and Assembly Hall have zero on-site public lockers or bag checks due to security liability and staffing constraints.</li>
                    <li>• <strong>Brutal walk:</strong> Campus event parking lots (Tenth & Fee or Highway 45/46 bypass grass) are a 20-30 minute walk away. Walking back means missing kickoff or their graduate walking across the stage.</li>
                    <li>• <strong>Desperation hacks:</strong> Guests hide purses under parked cars, in bushes, or discard expensive bags and umbrellas into venue trash bins.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    The High-Value Opportunity Created
                  </h4>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    A dedicated, low-cost pop-up stand positioned <strong>40 steps outside the gate</strong> captures customers at their moment of peak frustration and urgency. We convert an immediate gate crisis into a seamless 60-second transaction with instant customer gratitude and near-zero price sensitivity.
                  </p>
                  <div className="mt-3 pt-2 border-t border-emerald-200/80 text-[11px] font-mono font-bold text-emerald-900">
                    Estimated 300 to 900+ rejected bags per sellout IU game day.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================================
              3. TARGET CUSTOMER AND MARKET
              ===================================================================== */}
          <section id="why-3" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs relative">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#990000] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Target Customer & Market
                </h2>
              </div>
              <span className="text-xs font-semibold text-stone-400 hidden sm:inline">1:30 – 2:15</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                <span className="text-[10px] font-bold text-[#990000] uppercase tracking-wider block mb-1">
                  1st Customer Group
                </span>
                <h4 className="font-bold text-stone-900 mb-1">Visiting Families & Parents</h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Out-of-town visitors attending Commencement, Family Weekend, and non-student alumni carrying daily purses, camera cases, and diaper bags.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                <span className="text-[10px] font-bold text-[#990000] uppercase tracking-wider block mb-1">
                  When They Use It
                </span>
                <h4 className="font-bold text-stone-900 mb-1">Gate Arrival Window</h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Between 90 minutes and 15 minutes before event start time, right when security turnstile screeners enforce bag size restrictions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                <span className="text-[10px] font-bold text-[#990000] uppercase tracking-wider block mb-1">
                  Why Bloomington First
                </span>
                <h4 className="font-bold text-stone-900 mb-1">Concentrated Event Footprint</h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Memorial Stadium (52,000+), Assembly Hall (17,222), Commencement (17,000+), and Little 500 (25,000+) create predictable massive crowds with zero locker alternatives.
                </p>
              </div>
            </div>

            {/* Evidence & Hypotheses Tagging */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <span className="bg-stone-200 text-stone-800 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase shrink-0 mt-0.5">
                  Demand Evidence
                </span>
                <span className="text-stone-700">
                  IU Athletics bag policy enforcement data logs hundreds of gate rejections per home football and basketball game; gate staff report frequent guest conflict and abandoned bags outside turnstiles.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="bg-amber-100 text-amber-900 border border-amber-300 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase shrink-0 mt-0.5">
                  To Be Tested in Pilot
                </span>
                <span className="text-stone-700">
                  1) Walk-up spontaneous capture rate vs. advance online QR reservation rate; 2) Customer price elasticity ($9 vs. $12); 3) Post-event pickup queue throughput bottleneck.
                </span>
              </div>
            </div>
          </section>

          {/* =====================================================================
              4. CORE PRODUCT OR SERVICE
              ===================================================================== */}
          <section id="why-4" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs relative">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#990000] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Core Product or Service
                </h2>
              </div>
              <span className="text-xs font-semibold text-stone-400 hidden sm:inline">2:15 – 3:00</span>
            </div>

            <p className="text-sm text-stone-600 mb-4">
              Hold My Bag provides an end-to-end bag rescue service with full physical and digital chain-of-custody tracking:
            </p>

            {/* 4 Steps Visual Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-xs">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <span className="font-mono font-bold text-[#990000] block text-sm mb-1">Step 1: Locate Stand</span>
                <strong className="text-stone-900 block mb-1">Pop-Up Outside Gate</strong>
                <p className="text-stone-600 text-[11px]">Walk 40 steps from gate turnstiles to our branded crimson canopy tent.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <span className="font-mono font-bold text-[#990000] block text-sm mb-1">Step 2: Transfer</span>
                <strong className="text-stone-900 block mb-1">Loaner Clear Bag</strong>
                <p className="text-stone-600 text-[11px]">Move phone, wallet, keys & meds into our provided 12"×6"×12" regulation tote.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <span className="font-mono font-bold text-[#990000] block text-sm mb-1">Step 3: Secure & Tag</span>
                <strong className="text-stone-900 block mb-1">Tamper Seal & Intake</strong>
                <p className="text-stone-600 text-[11px]">Bag is locked with a serial zip tie, photographed, and customer gets SMS claim tag.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <span className="font-mono font-bold text-[#990000] block text-sm mb-1">Step 4: Rapid Retrieval</span>
                <strong className="text-stone-900 block mb-1">ID-Matched Return</strong>
                <p className="text-stone-600 text-[11px]">Return loaner tote post-game, show ID, staff cuts tamper seal, receive bag.</p>
              </div>
            </div>

            {/* Interactive Callout Button */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-600">
                <strong className="text-stone-900 block text-sm">Experience the complete customer flow</strong>
                <span>Try the live reservation flow, pass generation, and bag tracker simulator built for this pitch.</span>
              </div>
              <button
                onClick={onTryDemo}
                className="h-11 px-5 rounded-xl bg-[#990000] hover:bg-[#800000] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Try the Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* =====================================================================
              5. BUSINESS MODEL
              ===================================================================== */}
          <section id="why-5" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs relative">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#990000] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Business Model & Unit Economics
                </h2>
              </div>
              <span className="text-xs font-semibold text-stone-400 hidden sm:inline">3:00 – 3:45</span>
            </div>

            {/* Revenue Streams Table */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Revenue Streams <span className="text-[#990000]">[PROPOSED PRICING]</span>
                </h4>
                <span className="text-[11px] text-stone-500">Pay via Card, Apple Pay, or Venmo</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-stone-500 block text-[11px]">Single Swap</span>
                  <strong className="text-base font-bold text-stone-900 font-mono">$9 / bag</strong>
                  <span className="text-[10px] text-stone-500 block mt-0.5">Loaner clear bag + hold</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-stone-500 block text-[11px]">Family Pack</span>
                  <strong className="text-base font-bold text-stone-900 font-mono">$35 / 5 bags</strong>
                  <span className="text-[10px] text-stone-500 block mt-0.5">Express family intake</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-stone-500 block text-[11px]">Umbrella Hold</span>
                  <strong className="text-base font-bold text-stone-900 font-mono">$3 / item</strong>
                  <span className="text-[10px] text-stone-500 block mt-0.5">Dry covered umbrella rack</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-stone-500 block text-[11px]">Bag Keeper Add-on</span>
                  <strong className="text-base font-bold text-stone-900 font-mono">+$5 / tote</strong>
                  <span className="text-[10px] text-stone-500 block mt-0.5">Keep clear tote as souvenir</span>
                </div>
              </div>
            </div>

            {/* Event Economics Model */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-center justify-between text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                <span>Single Game Day Financial Simulation (6 Hours)</span>
                <span className="text-emerald-700 font-mono font-bold">[PROJECTED RESULT]</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-stone-500 block text-[11px]">Assumed Volume per Game</span>
                  <span className="font-bold text-stone-900 text-sm">150 Bags + 30 Umbrellas</span>
                  <p className="text-stone-500 text-[11px] mt-1">Based on 0.3% capture rate of 50,000 stadium attendees.</p>
                </div>

                <div>
                  <span className="text-stone-500 block text-[11px]">Gross Revenue</span>
                  <span className="font-bold text-stone-900 text-sm font-mono">$1,480 / event</span>
                  <p className="text-stone-500 text-[11px] mt-1">(120 single @ $9) + (6 family @ $35) + (30 umbrellas @ $3) + (20 keepers @ $5).</p>
                </div>

                <div>
                  <span className="text-stone-500 block text-[11px]">Operating Costs per Event</span>
                  <span className="font-bold text-rose-700 text-sm font-mono">$342 / event</span>
                  <p className="text-stone-500 text-[11px] mt-1">2 student staff ($192) + consumables ($55) + event insurance rider ($95).</p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-stone-200 flex items-center justify-between text-xs sm:text-sm font-bold">
                <span className="text-stone-800">Net Event Contribution Margin:</span>
                <span className="text-emerald-700 font-mono text-base">+$1,138 / game (~77% Gross Margin)</span>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 mt-2">
              Startup Capex is minimal: ~$1,200 for commercial canopy, wire racks, 200 regulation totes, and branding signage.
            </p>
          </section>

          {/* =====================================================================
              6. UNIQUE VALUE PROPOSITION
              ===================================================================== */}
          <section id="why-6" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs relative">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#990000] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Unique Value Proposition (UVP)
                </h2>
              </div>
              <span className="text-xs font-semibold text-stone-400 hidden sm:inline">3:45 – 4:20</span>
            </div>

            {/* Core UVP Hero Statement */}
            <div className="p-4 rounded-2xl bg-stone-900 text-white mb-5">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                The Strongest Reason to Choose Hold My Bag
              </span>
              <p className="text-base sm:text-lg font-bold leading-snug">
                "A guaranteed 60-second gate rescue that saves your game day or graduation without losing 45 minutes or surrendering your belongings."
              </p>
            </div>

            {/* Alternatives Comparison Matrix */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-500">
                    <th className="py-2 pr-3 font-bold uppercase">Customer Option</th>
                    <th className="py-2 px-3 font-bold uppercase">Time Lost</th>
                    <th className="py-2 px-3 font-bold uppercase">Security & Risk</th>
                    <th className="py-2 pl-3 font-bold uppercase">Total Cost / Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 pr-3 font-semibold text-stone-900">Walk Back to Car</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">40–50 mins lost</td>
                    <td className="py-2.5 px-3">Vehicle locked</td>
                    <td className="py-2.5 pl-3">Misses kickoff or graduation stage walk</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 pr-3 font-semibold text-stone-900">Stash in Campus Bushes</td>
                    <td className="py-2.5 px-3">10 mins</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">High theft & weather risk</td>
                    <td className="py-2.5 pl-3">Stolen purse or ruined electronics</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 pr-3 font-semibold text-stone-900">Throw in Gate Trash</td>
                    <td className="py-2.5 px-3">1 min</td>
                    <td className="py-2.5 px-3">Total loss</td>
                    <td className="py-2.5 pl-3 text-rose-700 font-bold">Loses $50–$250 purse or umbrella</td>
                  </tr>
                  <tr className="bg-[#990000]/5 font-semibold text-stone-900 border-l-2 border-[#990000]">
                    <td className="py-2.5 pr-3 pl-2 text-[#990000] font-bold">Hold My Bag Stand</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">Under 90 seconds</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">Tamper seal + photo custody</td>
                    <td className="py-2.5 pl-3 text-emerald-700 font-bold">$9 · Seamless entry with clear bag</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-stone-600 mt-3">
              <strong>Why the difference matters:</strong> Visitors don't just buy bag storage—they buy peace of mind and reclaim their once-in-a-lifetime family memory.
            </p>
          </section>

          {/* =====================================================================
              7. PROJECTED IMPACT ON BLOOMINGTON
              ===================================================================== */}
          <section id="why-7" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs relative">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#990000] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Projected Impact on Bloomington
                </h2>
              </div>
              <span className="text-xs font-semibold text-stone-400 hidden sm:inline">4:20 – 5:00</span>
            </div>

            {/* Stakeholder Impact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                <span className="text-[10px] font-bold text-[#990000] uppercase tracking-wider block mb-1">
                  1. Students
                </span>
                <h4 className="font-bold text-stone-900 text-sm mb-1.5">Flexible High-Wage Work</h4>
                <p className="text-stone-600 leading-relaxed">
                  Provides flexible game-day employment at $16/hr for IU undergraduates, while offering real entrepreneurial leadership experience for Kelley / KTP students.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                <span className="text-[10px] font-bold text-[#990000] uppercase tracking-wider block mb-1">
                  2. Visitors & Families
                </span>
                <h4 className="font-bold text-stone-900 text-sm mb-1.5">Zero-Stress Hospitality</h4>
                <p className="text-stone-600 leading-relaxed">
                  Eliminates gate hostility and family panic, ensuring elderly relatives and parents with young children enjoy Bloomington events seamlessly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                <span className="text-[10px] font-bold text-[#990000] uppercase tracking-wider block mb-1">
                  3. IU Athletics & Venues
                </span>
                <h4 className="font-bold text-stone-900 text-sm mb-1.5">Turnstile Throughput</h4>
                <p className="text-stone-600 leading-relaxed">
                  Provides gate security staff with an immediate, constructive solution to redirect rejected guests, speeding up overall stadium entry queues.
                </p>
              </div>
            </div>

            {/* Pilot Measurement Plan */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-center justify-between text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                <span>Pilot Measurement Plan (3-Game Initial Test)</span>
                <span className="text-[#990000] font-bold">[PROPOSED PARTNERSHIP]</span>
              </div>
              <p className="text-xs text-stone-600 mb-3">
                Proposed guest services referral partnership with IU Athletics Event Operations and Commencement Steering Committee.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">Volume Metric</span>
                  <strong className="text-stone-900 font-bold block text-sm">100+ Bags</strong>
                  <span className="text-stone-500 text-[10px]">Per pilot game</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">Time Saved Metric</span>
                  <strong className="text-stone-900 font-bold block text-sm">35 Mins / Fan</strong>
                  <span className="text-stone-500 text-[10px]">Vs. parking walk</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">Speed of Service</span>
                  <strong className="text-stone-900 font-bold block text-sm">&lt;60 Seconds</strong>
                  <span className="text-stone-500 text-[10px]">Intake & return time</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">Satisfaction</span>
                  <strong className="text-stone-900 font-bold block text-sm">95%+ CSAT</strong>
                  <span className="text-stone-500 text-[10px]">Net Promoter Score &gt; 80</span>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-[#990000] text-white shadow-md">
            <div>
              <h3 className="text-xl font-bold tracking-tight">Ready to see Hold My Bag in action?</h3>
              <p className="text-xs sm:text-sm text-amber-100 mt-1">
                Explore our live booking flow, digital claim barcode generator, and real-time bag tracker.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrint}
                className="h-11 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer border border-white/20 flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Print Pitch Brief</span>
              </button>
              <button
                onClick={onTryDemo}
                className="h-11 px-6 rounded-xl bg-white hover:bg-stone-100 text-[#990000] font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </main>
      </div>

      {/* =========================================================================
          PRINT-ONLY VIEW: Strict 1-Page Typed Executive Summary for Pitch Briefing
          ========================================================================= */}
      <div className="hidden print:block p-6 max-w-[8.5in] mx-auto text-black bg-white font-sans text-[10.5pt] leading-tight">
        {/* Print Header */}
        <div className="border-b-2 border-[#990000] pb-2 mb-3 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black tracking-tight text-[#990000]">
                HOLD MY BAG
              </h1>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                · Executive Pitch Summary (KTP Venture Pitch)
              </span>
            </div>
            <p className="text-[9pt] text-stone-700 mt-0.5">
              Indiana University Bloomington Campus Bag Swap & Secure Gate-Check Initiative
            </p>
          </div>
          <div className="text-right text-[8.5pt] text-stone-600">
            <span className="font-bold text-stone-900 block">Student-Run Business</span>
            <span>hello@holdmybag-iu.com</span>
          </div>
        </div>

        {/* 7 Numbered Points in Exact Required Order in Compact Executive Grid */}
        <div className="space-y-2.5">
          
          {/* 1. Name and Concept */}
          <div className="border border-stone-300 p-2 rounded bg-stone-50">
            <div className="flex items-baseline justify-between">
              <strong className="text-[10pt] font-black text-[#990000]">1. BUSINESS NAME AND CONCEPT</strong>
              <span className="text-[8pt] text-stone-500 uppercase font-semibold">Initiative Concept</span>
            </div>
            <p className="mt-0.5 text-[9.5pt]">
              <strong>Hold My Bag</strong> is a mobile stadium-gate bag check and loaner clear-bag service that rescues visitors, students, and families turned away by strict security policies outside Indiana University Bloomington athletic and commencement venues.
            </p>
          </div>

          {/* 2. Problem and Opportunity */}
          <div className="border border-stone-300 p-2 rounded">
            <strong className="text-[10pt] font-black text-[#990000] block">2. PROBLEM AND OPPORTUNITY</strong>
            <p className="text-[9pt] mt-0.5 text-stone-800">
              <strong>Specific Bloomington Scenario:</strong> During Memorial Stadium game days (52,000+ fans) or Assembly Hall Commencement (17,000+ guests), out-of-town families arrive at gates with leather purses or diaper bags. IU strictly enforces a 12"×6"×12" clear-bag limit, but provides <em>zero</em> stadium lockers or storage due to liability. Guests face a punishing 20-30 minute walk back to distant Highway 45/46 or Tenth & Fee parking lots—missing kickoff or diploma walks. <strong>Opportunity:</strong> A pop-up stand 40 steps from turnstiles rescues guests at their moment of peak urgency.
            </p>
          </div>

          {/* 3. Target Customer and Market */}
          <div className="border border-stone-300 p-2 rounded">
            <div className="flex items-baseline justify-between">
              <strong className="text-[10pt] font-black text-[#990000]">3. TARGET CUSTOMER AND MARKET</strong>
              <span className="text-[8pt] text-amber-800 font-bold bg-amber-100 px-1 rounded">[TO TEST IN PILOT]</span>
            </div>
            <p className="text-[9pt] mt-0.5 text-stone-800">
              <strong>First Group:</strong> Visiting parents, alumni, and families attending Commencement and game days carrying standard bags, followed by students carrying backpacks. <strong>Why Bloomington:</strong> Highly concentrated sellout crowds (50,000+) paired with extreme parking distances create predictable captive demand. <strong>Pilot Hypotheses to Test:</strong> Walk-up conversion rate vs. advance web reservations; price elasticity between $7, $9, and $12; and return queue throughput.
            </p>
          </div>

          {/* 4. Core Product / Service */}
          <div className="border border-stone-300 p-2 rounded">
            <strong className="text-[10pt] font-black text-[#990000] block">4. CORE PRODUCT OR SERVICE (4-STEP JOURNEY)</strong>
            <div className="grid grid-cols-4 gap-2 mt-1 text-[8.5pt]">
              <div className="bg-stone-50 p-1.5 rounded border border-stone-200">
                <strong>1. Locate Stand:</strong> Walk up to branded canopy 40 steps outside gate turnstiles.
              </div>
              <div className="bg-stone-50 p-1.5 rounded border border-stone-200">
                <strong>2. Swap & Loan:</strong> Move phone, wallet, keys & meds into our loaned 12"×6"×12" clear tote.
              </div>
              <div className="bg-stone-50 p-1.5 rounded border border-stone-200">
                <strong>3. Seal & Hold:</strong> Bag is secured with a serial tamper zip tie, photo-logged, and given claim tag.
              </div>
              <div className="bg-stone-50 p-1.5 rounded border border-stone-200">
                <strong>4. Post-Event Return:</strong> Show ID and claim tag; staff snips seal and returns personal bag in 30s.
              </div>
            </div>
          </div>

          {/* 5. Business Model */}
          <div className="border border-stone-300 p-2 rounded">
            <div className="flex items-baseline justify-between">
              <strong className="text-[10pt] font-black text-[#990000]">5. BUSINESS MODEL & REVENUE ASSUMPTIONS</strong>
              <span className="text-[8pt] text-stone-700 font-bold font-mono">[PROPOSED PRICING & RESULTS]</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-1 text-[8.5pt]">
              <div className="bg-stone-50 p-1.5 rounded">
                <strong>Pricing Structure:</strong>
                <div>• Single Swap & Hold: $9 / bag</div>
                <div>• Family Pack: $35 (up to 5 bags)</div>
                <div>• Umbrella Hold: $3 / umbrella</div>
                <div>• Keep Clear Tote: +$5 add-on</div>
              </div>
              <div className="bg-stone-50 p-1.5 rounded">
                <strong>Event Revenue (150 Bags):</strong>
                <div>• 120 singles: $1,080</div>
                <div>• 6 family packs: $210</div>
                <div>• 30 umbrellas: $90</div>
                <div>• 20 tote keepers: $100</div>
                <div className="font-bold text-[#990000]">Gross: $1,480 / event</div>
              </div>
              <div className="bg-stone-50 p-1.5 rounded">
                <strong>Event Costs & Margins:</strong>
                <div>• 2 students (6h @ $16/h): $192</div>
                <div>• Consumables & seals: $55</div>
                <div>• Insurance rider: $95</div>
                <div className="font-bold text-emerald-700">Net Profit: $1,138 (~77% margin)</div>
              </div>
            </div>
          </div>

          {/* 6. Unique Value Proposition */}
          <div className="border border-stone-300 p-2 rounded">
            <strong className="text-[10pt] font-black text-[#990000] block">6. UNIQUE VALUE PROPOSITION (UVP)</strong>
            <p className="text-[9pt] mt-0.5 text-stone-800">
              <strong>Strongest Reason:</strong> <em>"A guaranteed 60-second gate rescue saving your event without losing 45 minutes walking back or throwing away personal belongings."</em> Compared to alternatives—walking back to distant lots (losing 45 mins), hiding bags in bushes (high theft risk), or abandoning bags at turnstiles—Hold My Bag provides instant relief with tamper-seal insurance for only $9.
            </p>
          </div>

          {/* 7. Projected Impact on Bloomington */}
          <div className="border border-stone-300 p-2 rounded">
            <div className="flex items-baseline justify-between">
              <strong className="text-[10pt] font-black text-[#990000]">7. PROJECTED IMPACT ON BLOOMINGTON & PILOT METRICS</strong>
              <span className="text-[8pt] text-[#990000] font-bold">[PROPOSED PARTNERSHIP]</span>
            </div>
            <p className="text-[9pt] mt-0.5 text-stone-800">
              <strong>Community Benefits:</strong> Provides flexible game-day student employment ($16/hr); enhances visitor hospitality for Commencement families; speeds gate turnstile throughput for IU Athletics by eliminating guest conflict. <strong>Pilot Metrics:</strong> 1) Volume (100+ bags/game); 2) Time saved (35 mins/fan); 3) Speed (&lt;60s intake); 4) CSAT (&gt;95% satisfaction).
            </p>
          </div>

        </div>

        {/* Print Footer */}
        <div className="mt-3 pt-2 border-t border-stone-300 flex items-center justify-between text-[8pt] text-stone-500">
          <span>Prepared for KTP Pitch Presentation · Indiana University Bloomington</span>
          <span>Interactive Demo Live at https://holdmybag-iu.com</span>
        </div>
      </div>
    </div>
  );
};
