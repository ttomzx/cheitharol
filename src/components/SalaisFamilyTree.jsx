import React, { useState } from 'react';
import { Users, Crown, GitCommit, Shield, Info, ArrowDown, ChevronRight } from 'lucide-react';
import { SALAIS, LINEAGE_TREE } from '../data/salais';
import { TRANSLATIONS } from '../data/translations';

export default function SalaisFamilyTree({ lang, onSelectKing }) {
  const t = TRANSLATIONS[lang];
  const [activeSalai, setActiveSalai] = useState(SALAIS[0]);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-200 to-amber-500">
          {t.salais.title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          {t.salais.subtitle}
        </p>
      </div>

      {/* SECTION 1: The 7 Autonomous Yek Salais */}
      <div className="space-y-6">
        <div className="border-b border-manipuri-borderGold pb-3 flex items-center justify-between">
          <h3 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-manipuri-gold" />
            <span>{t.salais.clansHeader}</span>
          </h3>
          <span className="text-xs text-amber-300 font-meitei font-semibold">
            ꯁꯂꯥꯏ ꯇꯔꯦꯠ (7 Clans of Kangleipak)
          </span>
        </div>

        {/* Salai Cards Selector */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SALAIS.map((salai) => {
            const isSelected = activeSalai.id === salai.id;
            return (
              <div
                key={salai.id}
                onClick={() => setActiveSalai(salai)}
                className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-manipuri-panelDark border-manipuri-gold shadow-gold-glow scale-[1.02]'
                    : 'glass-panel border-slate-800 hover:border-manipuri-borderGold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full border border-slate-900 shadow-sm shrink-0"
                    style={{ backgroundColor: salai.color }}
                  />
                  <div>
                    <h4 className="text-base font-serif font-bold text-slate-100">
                      {salai.name}
                    </h4>
                    <p className="text-xs text-amber-400 font-meitei">
                      {salai.meiteiName}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mt-3 line-clamp-2">
                  {salai.dynastyRole}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Salai Detailed Spotlight Card */}
        {activeSalai && (
          <div className="p-6 sm:p-8 rounded-3xl glass-panel gold-border-glow space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-full border-2 border-manipuri-gold shadow-gold-glow flex items-center justify-center font-bold text-slate-950 text-sm"
                  style={{ backgroundColor: activeSalai.color }}
                >
                  ⚜
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-100">
                    {activeSalai.name}
                  </h3>
                  <p className="text-sm text-amber-300 font-meitei font-semibold">
                    {activeSalai.meiteiName}
                  </p>
                </div>
              </div>

              <div className="text-xs bg-slate-950 p-3 rounded-xl border border-amber-500/30 text-right">
                <span className="text-slate-400 block">Divine Primordial Ancestor:</span>
                <span className="text-manipuri-gold font-bold text-sm">{activeSalai.ancestor}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-200">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-manipuri-gold mb-1">
                  Clan Role & Cultural Heritage:
                </h4>
                <p className="leading-relaxed">{activeSalai.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                  Notable Rulers & Figures:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeSalai.notableMonarchs.map((mon, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-amber-200">
                      👑 {mon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SECTION 2: Ningthouja Royal Lineage Node Flow */}
      <div className="space-y-6">
        <div className="border-b border-manipuri-borderGold pb-3 flex items-center justify-between">
          <h3 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-manipuri-gold" />
            <span>{t.salais.treeHeader}</span>
          </h3>
          <span className="text-xs text-slate-400">
            Chronological Dynastic Flow (33 CE – 1949 CE)
          </span>
        </div>

        {/* Vertical Node Lineage Representation */}
        <div className="relative max-w-3xl mx-auto space-y-6">
          {LINEAGE_TREE.map((node, index) => (
            <React.Fragment key={node.id}>
              
              {/* Lineage Node Box */}
              <div className="relative p-5 rounded-2xl glass-panel gold-border-glow hover:border-manipuri-gold transition-all text-center space-y-2 group">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-manipuri-ruby/60 border border-manipuri-gold/40 text-manipuri-gold text-xs font-bold font-serif">
                  <Crown className="w-3.5 h-3.5" />
                  <span>{node.name}</span>
                </div>
                <p className="text-xs text-amber-300 font-meitei font-medium">
                  {node.meiteiName}
                </p>
                <p className="text-xs text-slate-300">
                  {node.role}
                </p>
              </div>

              {/* Connecting Down Arrow */}
              {index < LINEAGE_TREE.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="p-1.5 rounded-full bg-slate-900 border border-manipuri-gold/40 text-manipuri-gold animate-bounce">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>
              )}

            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}
