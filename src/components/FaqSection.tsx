import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldQuestion, Mail } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-bold text-[#990000] uppercase tracking-wider mb-2">
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Everything you need to know about safety, prohibited items, weather, and bag returns.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF8F5] border-[#990000]/40'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#990000]"
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#990000]/10 text-[#990000]' : 'text-stone-500'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm text-stone-600 leading-relaxed border-t border-stone-200/50 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#990000] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Have a special circumstance or large group?</h4>
              <p className="text-xs text-stone-500">Contact our student management team at hello@holdmybag-iu.com</p>
            </div>
          </div>
          <a
            href="mailto:hello@holdmybag-iu.com?subject=Hold%20My%20Bag%20Inquiry"
            className="text-xs font-bold text-[#990000] hover:text-[#800000] bg-white border border-stone-200 px-4 py-2 rounded-xl transition-colors shrink-0"
          >
            Email Student Team
          </a>
        </div>

      </div>
    </section>
  );
};
