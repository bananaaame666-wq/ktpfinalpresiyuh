import React, { useState } from 'react';
import { Check, X, ShieldAlert, Info, ArrowRight } from 'lucide-react';
import { IU_BAG_POLICY_RULES } from '../data/mockData';

interface BagPolicyGuideProps {
  onOpenReserve: () => void;
}

export const BagPolicyGuide: React.FC<BagPolicyGuideProps> = ({ onOpenReserve }) => {
  const [selectedBag, setSelectedBag] = useState<string>('Standard Purses & Handbags');

  const selectedRule = IU_BAG_POLICY_RULES.find((r) => r.name === selectedBag) || IU_BAG_POLICY_RULES[3];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-bold text-[#990000] uppercase tracking-wider mb-2">
            The Problem We Solve
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            IU's Clear Bag Rule vs. Your Bag
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Memorial Stadium and Assembly Hall have strict security rules with zero storage on-site. Check your bag below before arriving at the gates.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {IU_BAG_POLICY_RULES.map((rule) => {
            const isAllowed = rule.allowed;
            const isSelected = selectedBag === rule.name;

            return (
              <button
                key={rule.name}
                type="button"
                onClick={() => setSelectedBag(rule.name)}
                className={`p-5 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? isAllowed
                      ? 'bg-emerald-50/60 border-emerald-500 ring-2 ring-emerald-500/20'
                      : 'bg-rose-50/60 border-rose-500 ring-2 ring-rose-500/20'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                    isAllowed
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    {isAllowed ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <X className="w-3.5 h-3.5 stroke-[3]" />}
                    <span>{isAllowed ? 'PERMITTED' : 'PROHIBITED'}</span>
                  </span>

                  <span className="text-xs font-mono text-stone-500 font-semibold">
                    {rule.size}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-1">
                  {rule.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {rule.description}
                </p>

                <div className={`text-xs font-semibold ${isAllowed ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {rule.highlight}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Bag Context Callout */}
        <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-[#990000] uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Gate Decision for: {selectedRule.name}</span>
            </div>
            
            <h4 className="text-xl font-bold text-stone-900">
              {selectedRule.allowed
                ? 'You can bring this inside Memorial Stadium and Assembly Hall.'
                : 'Turned away! Security officers will instruct you to take it back to your car.'}
            </h4>

            <p className="text-sm text-stone-600 max-w-2xl">
              {selectedRule.allowed
                ? 'Make sure it contains no prohibited items like umbrellas, cans, or oversized items.'
                : 'Campus parking is often a 20-30 minute walk from the stadium gates. With Hold My Bag, you can drop it at our tent outside Gate E, borrow an approved clear bag, and walk right in.'}
            </p>
          </div>

          {!selectedRule.allowed && (
            <button
              onClick={onOpenReserve}
              className="h-12 px-6 rounded-xl bg-[#990000] hover:bg-[#800000] text-white font-bold text-sm whitespace-nowrap shadow-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Hold This Bag ($9)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
