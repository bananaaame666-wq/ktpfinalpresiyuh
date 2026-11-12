import React from 'react';
import { ShoppingBag, Mail, Heart, Shield, GraduationCap, MapPin } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenReserve: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenReserve }) => {
  return (
    <footer className="print:hidden bg-stone-900 text-stone-300 pt-16 pb-24 lg:pb-16 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Pitch Concept Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#990000] flex items-center justify-center text-white">
                <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Hold My Bag
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              A student-run business at Indiana University Bloomington. Solving the clear-bag policy dilemma for visiting families, students, and Hoosier fans.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-stone-400">
              <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Created for IU Venture & Entrepreneurship Pitch Demo</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#990000] shrink-0" />
              <span>Bloomington, IN · Memorial Stadium & Assembly Hall</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('why-us')}
                  className="hover:text-amber-300 font-semibold text-amber-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Why Us (KTP Pitch Brief)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('events')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Upcoming Events & Hours
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('pricing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pricing ($9 Swap / $35 Family)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('tracker')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bag Tracker Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Safety & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Demo Credentials */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Student Contact & Inquiries
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Have questions regarding our business proposal, stand logistics, or partnership with IU Athletics?
            </p>

            <a
              href="mailto:hello@holdmybag-iu.com"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold transition-colors"
            >
              <Mail className="w-4 h-4 text-[#990000]" />
              <span>hello@holdmybag-iu.com</span>
            </a>

            <div className="pt-2 text-[11px] text-stone-500">
              Response time: Under 24 hours during academic terms.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Hold My Bag. A student-run business at Indiana University Bloomington.</span>
          </div>

          <div className="flex items-center gap-3 text-stone-400">
            <span>Demo presentation version</span>
            <span aria-hidden="true">·</span>
            <span>Go Hoosiers!</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
