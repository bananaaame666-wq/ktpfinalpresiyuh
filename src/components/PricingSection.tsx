import React from 'react';
import { Check, ShieldCheck, Umbrella, Users, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/mockData';

interface PricingSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#990000] uppercase tracking-wider mb-2">
            Simple, Honest Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Cheaper than walking back to your car
          </h2>
          <p className="mt-3 text-base text-stone-600">
            No subscription, no app download required, and no hidden fees. Just a safe place to hold your belongings while you cheer on the Hoosiers.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'bg-[#FAF8F5] border-2 border-[#990000] shadow-md'
                    : 'bg-white border border-stone-200 shadow-xs hover:border-stone-300'
                }`}
              >
                {/* Popular / Value Callout Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#990000] text-white text-xs font-bold py-1 px-3 rounded-full shadow-xs uppercase tracking-wider whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                      {tier.name}
                    </h3>
                    {tier.id === 'umbrella-hold' && <Umbrella className="w-5 h-5 text-stone-400" />}
                    {tier.id === 'family-pack' && <Users className="w-5 h-5 text-stone-400" />}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight font-mono">
                      ${tier.price}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-stone-500">
                      /{tier.unit}
                    </span>
                  </div>

                  <p className="text-sm text-stone-600 mb-6 min-h-[40px]">
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-stone-200/80 mb-8">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <Check className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-[#990000] hover:bg-[#800000] text-white shadow-sm'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <span>Choose {tier.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-stone-400 mt-2.5">
                    Pay at stand with Card, Apple Pay, or Venmo
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Souvenir Clear Bag Add-on Info */}
        <div className="mt-10 p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">
                Want to keep your clear tote as a souvenir?
              </h4>
              <p className="text-xs text-stone-600">
                The swap includes a free bag loan. If you'd like to take the heavy-duty clear stadium tote home for future games, you can buy it at pickup for just +$5.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold bg-white px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 shrink-0">
            +$5 at pickup
          </span>
        </div>

      </div>
    </section>
  );
};
