import React from 'react';
import { ShoppingBag, ArrowRightLeft, ShieldCheck, Undo2, Camera, Lock, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Bring your bag to our stand',
      description: 'Find our pop-up tent outside the gate. Look for the crimson "Hold My Bag" banner and student attendants.',
      icon: ShoppingBag,
      highlight: 'Near the stadium gates',
    },
    {
      step: '02',
      title: 'Move essentials into a loaner clear bag',
      description: 'Transfer your phone, wallet, keys, and meds into a 12"×6"×12" regulation clear bag we lend you on the spot.',
      icon: ArrowRightLeft,
      highlight: 'Stadium-approved tote provided',
    },
    {
      step: '03',
      title: 'We seal, photo & tag your bag',
      description: 'We fasten your zippers with a heavy-duty numbered tamper zip tie, take an intake photo, and give you a numbered tag.',
      icon: ShieldCheck,
      highlight: 'Tamper-evident serial lock',
    },
    {
      step: '04',
      title: 'Return the clear bag & grab your bag',
      description: 'After the event, swing back by our tent. Show your tag and photo ID, return the loaner tote, and get your bag back.',
      icon: Undo2,
      highlight: 'Fast 30-second return',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#990000] uppercase tracking-wider mb-2">
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            How Hold My Bag Works
          </h2>
          <p className="mt-3 text-base text-stone-600">
            No long lines, no stressful walk back to your car or hotel. We get you through stadium security in under two minutes.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200/90 flex flex-col justify-between hover:border-[#990000]/40 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#990000]">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#990000] shadow-xs">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#990000] shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Security Guarantee Feature Box */}
        <div className="mt-12 rounded-3xl bg-[#FAF8F5] border border-stone-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual: Regulation Clear Tote */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xs">
                <img
                  src="/src/assets/images/clear_tote_bag_1794267747585.jpg"
                  alt="Official regulation 12x6x12 clear stadium tote loaned by Hold My Bag"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-white border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-900">What you carry in:</span>
                  <span className="text-[#990000] font-semibold">12"×6"×12" IU-approved loaner tote</span>
                </div>
              </div>
            </div>

            {/* Content: How We Guarantee Safety */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#990000] uppercase tracking-wider">
                Built-in Peace of Mind
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                How our proposed stand keeps every bag secure
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We know your bag holds personal items. Our system is engineered so no one—not even our staff—can open your bag without immediate detection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1">
                    <Lock className="w-4 h-4 text-[#990000]" />
                    <span>Serial Tamper Zip Tie</span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Your zippers are locked with a single-use serial tag that can only be removed with wire cutters at return.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1">
                    <Camera className="w-4 h-4 text-[#990000]" />
                    <span>Photo Intake Log</span>
                  </div>
                  <p className="text-xs text-stone-500">
                    We take front & back photos showing all zippers fully closed before tagging your bag into storage.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-stone-500">
                <span>Pickup requires matching photo ID</span>
                <span className="mx-2">·</span>
                <span>Continuously staffed secure storage tent</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
