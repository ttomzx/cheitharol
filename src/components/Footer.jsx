import React from 'react';
import { Shield, BookOpen, Crown, Heart } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { KanglaShaIcon } from './Navbar';

export default function Footer({ setActiveTab, lang }) {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="mt-20 border-t border-manipuri-borderGold/40 bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Crest */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-manipuri-ruby/30 border border-manipuri-gold/40">
              <KanglaShaIcon className="w-6 h-6 text-manipuri-gold" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-manipuri-gold">
                {t.siteTitle}
              </h2>
              <p className="text-xs text-amber-200/80 font-meitei">
                ꯀꯪꯂꯩꯄꯥꯛꯀꯤ ꯄꯨꯋꯥꯔꯤ ꯑꯃꯁꯨꯡ ꯆꯩꯊꯥꯔꯣꯜ ꯀꯨꯝꯕꯥꯕ (꯳꯳ CE – ꯱꯹꯴꯹)
              </p>
            </div>
          </div>

          {/* Sitemap Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <button onClick={() => setActiveTab('timeline')} className="hover:text-manipuri-gold transition-colors">
              Timeline
            </button>
            <button onClick={() => setActiveTab('kings')} className="hover:text-manipuri-gold transition-colors">
              Rulers
            </button>
            <button onClick={() => setActiveTab('salais')} className="hover:text-manipuri-gold transition-colors">
              7 Salais
            </button>
            <button onClick={() => setActiveTab('map')} className="hover:text-manipuri-gold transition-colors">
              Historical Map
            </button>
            <button onClick={() => setActiveTab('sources')} className="hover:text-manipuri-gold transition-colors">
              Sources
            </button>
            <button onClick={() => setActiveTab('quiz')} className="hover:text-manipuri-gold transition-colors">
              Quiz
            </button>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Cheitharol Digital History Archive. Preserving Manipuri Heritage & Monarchy Chronicles (33 CE – 1949 CE).
          </p>
          <p className="flex items-center gap-1 text-slate-300">
            <span>Compiled from *Cheitharol Kumbaba* & academic literature</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
