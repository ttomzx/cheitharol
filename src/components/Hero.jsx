import React from 'react';
import { Sparkles, Calendar, Crown, ShieldAlert, ArrowRight, BookOpen } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { KanglaShaIcon } from './Navbar';

export default function Hero({ setActiveTab, lang }) {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-manipuri-borderGold/40 bg-royal-gradient">
      
      {/* Background Glow Overlay & Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-manipuri-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-manipuri-ruby/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-manipuri-ruby/40 border border-manipuri-gold/50 text-manipuri-gold text-xs font-semibold uppercase tracking-widest shadow-crimson-glow">
              <KanglaShaIcon className="w-4 h-4 text-manipuri-gold" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-100 leading-tight">
              {lang === 'meetei' ? (
                <span className="font-meitei text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-manipuri-gold to-amber-500">
                  {t.hero.title}
                </span>
              ) : (
                <>
                  Journey Through <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-300 to-amber-500">
                    2,000 Years
                  </span> of Manipuri Royal History
                </>
              )}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setActiveTab('timeline')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-manipuri-gold via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-gold-glow hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-manipuri-panelDark border border-manipuri-gold/50 text-manipuri-gold hover:bg-manipuri-ruby/30 font-semibold text-sm transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-manipuri-gold" />
                <span>{t.hero.quizBtn}</span>
              </button>
            </div>

            {/* Quick Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-manipuri-borderGold/30">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-manipuri-borderGold/40 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-manipuri-gold">2,000+</p>
                <p className="text-xs text-slate-400 font-medium">{t.hero.statYears}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-manipuri-borderGold/40 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">25+</p>
                <p className="text-xs text-slate-400 font-medium">{t.hero.statKings}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-manipuri-borderGold/40 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-rose-400">7</p>
                <p className="text-xs text-slate-400 font-medium">{t.hero.statSalais}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-manipuri-borderGold/40 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">4</p>
                <p className="text-xs text-slate-400 font-medium">{t.hero.statEras}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Cultural Emblem Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 rounded-3xl glass-panel gold-border-glow text-center space-y-6">
              
              {/* Kangla Sha Crest Header */}
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-b from-manipuri-ruby to-slate-950 p-1 border-2 border-manipuri-gold flex items-center justify-center shadow-gold-glow">
                <KanglaShaIcon className="w-16 h-16 text-manipuri-gold animate-pulse-glow" />
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-manipuri-gold">
                  {lang === 'meetei' ? 'ꯀꯪꯂꯥ ꯁꯥ & ꯄꯥꯈꯪꯕ ꯄꯥꯐꯜ' : 'Kangla Sha & Pakhangba Paphal'}
                </h3>
                <p className="text-xs text-amber-200/80 font-meitei mt-1">
                  ꯀꯪꯂꯩꯄꯥꯛꯀꯤ ꯑꯔꯣꯏꯕ ꯃꯇꯤꯛ ꯑꯃꯁꯨꯡ ꯅꯤꯡꯊꯧ ꯂꯥꯏꯅꯤꯡ
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 text-left text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-manipuri-gold font-semibold">
                  <span>Foundational Epoch:</span>
                  <span>33 CE</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>First Ruler:</span>
                  <span className="text-slate-200">Nongda Lairen Pakhangba</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Primary Chronicle:</span>
                  <span className="text-amber-300 font-meitei">ꯆꯩꯊꯥꯔꯣꯜ ꯀꯨꯝꯕꯥꯕ</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Final Sovereign Year:</span>
                  <span className="text-rose-400">1949 CE (Merger)</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-2">
                <button
                  onClick={() => setActiveTab('kings')}
                  className="w-full py-2.5 rounded-lg bg-manipuri-ruby/50 hover:bg-manipuri-ruby text-manipuri-gold text-xs font-semibold border border-manipuri-gold/40 transition-all"
                >
                  {lang === 'meetei' ? 'ꯅꯤꯡꯊꯧꯁꯤꯡ ꯌꯦꯡꯕ' : 'Explore Monarch Catalog'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
