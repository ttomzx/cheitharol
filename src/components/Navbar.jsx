import React from 'react';
import { Shield, BookOpen, Crown, MapPin, Users, HelpCircle, Bot, Globe, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

// Custom Kangla Sha Emblem SVG Icon
export const KanglaShaIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L65 25 L85 20 L75 40 L95 55 L75 65 L80 85 L50 75 L20 85 L25 65 L5 55 L25 40 L15 20 L35 25 Z" fill="#D4AF37" stroke="#7A0016" strokeWidth="3" />
    <circle cx="50" cy="45" r="12" fill="#7A0016" stroke="#D4AF37" strokeWidth="2" />
    <path d="M50 33 L53 41 L61 41 L55 46 L57 54 L50 49 L43 54 L45 46 L39 41 L47 41 Z" fill="#D4AF37" />
  </svg>
);

export default function Navbar({ activeTab, setActiveTab, lang, setLang }) {
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'timeline', label: t.nav.timeline, icon: BookOpen },
    { id: 'kings', label: t.nav.kings, icon: Crown },
    { id: 'salais', label: t.nav.salais, icon: Users },
    { id: 'map', label: t.nav.map, icon: MapPin },
    { id: 'sources', label: t.nav.sources, icon: Shield },
    { id: 'quiz', label: t.nav.quiz, icon: HelpCircle },
    { id: 'ai', label: t.nav.aiAssistant, icon: Bot },
  ];

  return (
    <header className="sticky top-0 z-50 bg-manipuri-slateDark/90 backdrop-blur-md border-b border-manipuri-borderGold transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('timeline')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2 rounded-xl bg-manipuri-ruby/30 border border-manipuri-gold/40 group-hover:scale-105 transition-transform">
              <KanglaShaIcon className="w-8 h-8 text-manipuri-gold animate-pulse-glow" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-200 to-amber-500 tracking-wider">
                {t.siteTitle}
              </h1>
              <p className="text-xs text-manipuri-gold/80 font-meitei font-medium">
                {lang === 'meetei' ? 'ꯆꯩꯊꯥꯔꯣꯜ ꯀꯨꯝꯕꯥꯕ (꯳꯳–꯱꯹꯴꯹)' : 'Manipuri History (33 CE – 1949)'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-manipuri-panelDark/80 p-1.5 rounded-full border border-manipuri-borderGold/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-manipuri-ruby to-manipuri-crimson text-manipuri-gold shadow-gold-glow border border-manipuri-gold/50'
                      : 'text-slate-300 hover:text-manipuri-gold hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-manipuri-gold' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Switcher Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'meetei' : 'en')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-manipuri-gold/40 text-manipuri-gold hover:bg-manipuri-ruby/30 transition-all text-xs font-semibold shadow-sm"
              title="Toggle English / Meitei Mayek"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{lang === 'en' ? 'ꯃꯩꯇꯩ ꯃꯌꯦꯛ' : 'English'}</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden overflow-x-auto pb-3 gap-2 scrollbar-none border-t border-slate-800/60 pt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-manipuri-ruby text-manipuri-gold border border-manipuri-gold/50'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-amber-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
